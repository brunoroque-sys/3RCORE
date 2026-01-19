// pages/api/create-event.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  let meeting_date, meeting_time, meeting_topic;

  if (req.method === 'POST') {
    ({ meeting_date, meeting_time, meeting_topic } = req.body);
  } else if (req.method === 'GET') {
    ({ meeting_date, meeting_time, meeting_topic } = req.query);
  } else {
    return res.status(405).json({ message: 'Método no soportado' });
  }


  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  const calendar = google.calendar({ version: 'v3', auth });

  try {
    if (!meeting_date || !meeting_time) {
        throw new Error("Faltan datos de fecha u hora");
    }

    const startDateTime = `${meeting_date}T${meeting_time}:00`; 
    
    const endDateTime = new Date(new Date(startDateTime).getTime() + 60 * 60 * 1000);

    const event = {
      summary: meeting_topic || "Reunión de Chatbot",
      start: { dateTime: startDateTime, timeZone: 'America/Lima' },
      end: { dateTime: endDateTime.toISOString(), timeZone: 'America/Lima' },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    res.status(200).json({ success: true, eventId: response.data.id });
  } catch (error) {
    console.error("Error en Calendar:", error.message);
    res.status(500).json({ error: error.message });
  }
}