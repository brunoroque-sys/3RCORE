import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Configuración de estilo común
const brandColor = '#9C27B0';
const logoUrl = 'https://3-rcore.vercel.app/icons/LogoLetrasBlanco.webp'; // CAMBIA ESTO cuando publiques tu web

export async function POST(request: Request) {
  try {
    const { nombre, apellido, email, telefono, mensaje } = await request.json();

    // 1. Correo para TI (Diseño interno)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bruno.roque@3rcore.com',
      subject: `Nuevo Mensaje: ${nombre} ${apellido}`,
      html: `
        <div style="font-family: sans-serif; background-color: #130218; padding: 40px; color: white;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #1a0522; border: 1px solid #ffffff20; padding: 30px; border-radius: 20px;">
            <img src="${logoUrl}" alt="Logo" style="width: 150px; margin-bottom: 20px;">
            <h2 style="color: #E91E63; border-bottom: 2px solid #9C27B0; padding-bottom: 10px;">Nuevo Lead de Contacto</h2>
            <p style="font-size: 16px;">Has recibido un nuevo mensaje a través de la web:</p>
            <div style="background: #ffffff0a; padding: 20px; border-radius: 10px; margin-top: 20px;">
              <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${telefono}</p>
              <p style="margin-top: 15px; border-top: 1px solid #ffffff20; padding-top: 15px;">
                <strong>Mensaje:</strong><br/> ${mensaje}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Correo para el CLIENTE (Diseño de marca)
    // NOTA: Recuerda envolver en try/catch o verificar dominio para que no de error
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'bruno.roque@3rcore.com',
        subject: `¡Hola ${nombre}! Recibimos tu mensaje`,
        html: `
          <div style="font-family: sans-serif; background-color: #f9f9f9; padding: 40px; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
              <div style="background-color:#130218; padding: 40px; text-align: center;">
                <img src="${logoUrl}" alt="Logo" style="width: 140px;">
              </div>
              
              <div style="padding: 40px;">
                <h1 style="color: #130218; font-size: 24px;">¡Gracias por contactarnos, ${nombre}!</h1>
                <p style="font-size: 16px; line-height: 1.6; color: #666;">
                  Hemos recibido tu mensaje correctamente. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo a la brevedad posible.
                </p>
                
                <div style="margin: 30px 0; padding: 20px; border-left: 4px solid #E91E63; background: #f3f3f3;">
                  <p style="margin: 0; font-style: italic; color: #444;">"Tu mensaje está siendo procesado por nuestro equipo."</p>
                </div>

                <p style="font-size: 14px; color: #999;">
                  Si tienes alguna urgencia, puedes responder directamente a este correo.
                </p>
              </div>
              
              <div style="background: #130218; padding: 20px; text-align: center; color: white; font-size: 12px; letter-spacing: 2px;">
                © 2025 3RCORE - TODOS LOS DERECHOS RESERVADOS
              </div>
            </div>
          </div>
        `,
      });
    } catch (e) {
      console.log("Error enviando al cliente (Sandbox mode)");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}