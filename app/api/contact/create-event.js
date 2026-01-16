// pages/api/create-event.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  // 1. Extraer los datos de la URL
  const { meeting_date, meeting_time, meeting_topic } = req.query;

  // 2. Configurar Auth (Ejemplo simplificado con variables de entorno)
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  // Importante: Aquí deberías tener el 'token' del usuario ya guardado
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

  const calendar = google.calendar({ version: 'v3', auth });

  try {
    // 3. Formatear fecha y hora para Google (ISO string)
    const startDateTime = `${meeting_date}T${meeting_time}:00`;
    const endDateTime = new Date(new Date(startDateTime).getTime() + 60 * 60 * 1000); // +1 hora

    const event = {
      summary: meeting_topic,
      start: { dateTime: startDateTime, timeZone: 'America/Lima' },
      end: { dateTime: endDateTime.toISOString(), timeZone: 'America/Lima' },
    };

    // 4. Crear el evento
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    res.status(200).json({ success: true, eventId: response.data.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el evento' });
  }
}