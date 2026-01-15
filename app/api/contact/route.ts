import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const logoUrl = 'https://3-rcore.vercel.app/icons/LOGO3R.png';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { nombre, apellido, email, telefono, mensaje } = await request.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    // Estilos comunes para hacer el diseño responsive
    const responsiveStyles = `
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; padding: 20px !important; }
          .inner-padding { padding: 20px !important; }
          .mobile-hide { display: none !important; }
          h1 { font-size: 24px !important; }
        }
      </style>
    `;

    const result = await resend.batch.send([
      // Email 1: Para el negocio (3RCORE)
      {
        from: 'Sistema 3RCORE <contacto@3rcore.com>',
        to: 'bruno.roque@3rcore.com',
        subject: `Nuevo contacto: ${nombre} quiere hablar con 3RCORE`,
        html: `
          <html>
            <head>${responsiveStyles}</head>
            <body style="margin: 0; padding: 0; background-color: #3f194b;">
              <div class="container" style="max-width: 600px; margin: 0 auto; padding: 40px; font-family: 'Montserrat', Helvetica, Arial, sans-serif;">
                <div style="background-color: #391946; border-radius: 24px; padding: 40px; border: 1px solid #ffffff10; color: white;">
                  <img src="${logoUrl}" alt="3RCORE" style="width: 120px; margin-bottom: 30px;">
                  <h2 style="font-size: 24px; color: #E91E63; margin-bottom: 10px;">¡Bruno, tienes un nuevo lead!</h2>
                  <p style="color: white; font-size: 16px;">Alguien se ha interesado en lo que hacemos:</p>
                  
                  <div style="background: rgba(255,255,255,0.05); border-radius: 16px; padding: 25px; margin: 25px 0;">
                    <p style="margin: 10px 0;"><strong>Persona:</strong> ${nombre}</p>
                    <p style="margin: 10px 0;"><strong>Empresa:</strong> ${apellido}</p>
                    <p style="margin: 10px 0;"><strong>Correo:</strong> <a href="mailto:${email}" style="color: #E91E63; text-decoration: none;">${email}</a></p>
                    <p style="margin: 10px 0;"><strong>WhatsApp/Tel:</strong> ${telefono}</p>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ffffff10;">
                      <p style="color: #E91E63; font-weight: bold; margin-bottom: 8px;">Lo que nos cuenta:</p>
                      <p style="line-height: 1.6; color: #e0e0e0;">${mensaje}</p>
                    </div>
                  </div>
                  <p style="font-size: 12px; color: #666; text-align: center;">Enviado desde https://3-rcore.vercel.app/</p>
                </div>
              </div>
            </body>
          </html>
        `,
      },
      // Email 2: Para el cliente
      {
        from: 'Sistema 3RCORE <contacto@3rcore.com>',
        to: email,
        subject: `¡Hola ${nombre}! Qué bueno saludarte`,
        html: `
          <html>
            <head>${responsiveStyles}</head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f7;">
              <div class="container" style="max-width: 600px; margin: 0 auto; padding: 40px; font-family: 'Montserrat', Helvetica, Arial, sans-serif;">
                <div style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.05);">
                  
                  <div style="background-color: #130218; padding: 40px; text-align: center;">
                    <img src="${logoUrl}" alt="3RCORE" style="width: 100px;">
                  </div>
                  
                  <div class="inner-padding" style="padding: 45px;">
                    <h1 style="font-size: 28px; margin-bottom: 20px; color: #130218;">¡Recibido, ${nombre}!</h1>
                    <p style="font-size: 17px; line-height: 1.6; color: #4a4a4a;">
                      Muchas gracias por escribirnos y por el interés en lo que estamos creando en <strong>3RCORE</strong>. 
                    </p>
                    <p style="font-size: 17px; line-height: 1.6; color: #4a4a4a;">
                      Ya tengo tu mensaje en mi bandeja de entrada. Voy a leerlo con calma y te daré una respuesta en menos de 24 horas.
                    </p>
                    
                    <div style="margin: 35px 0; padding: 25px; background: linear-gradient(135deg, #fdf4f7 0%, #f9f5ff 100%); border-radius: 16px; border-left: 4px solid #E91E63;">
                      <p style="margin: 0; color: #130218; font-weight: 500;">
                        "Estamos convencidos de que podemos aportar valor a tu proyecto. Hablamos muy pronto."
                      </p>
                    </div>

                    <p style="font-size: 15px; color: #888; margin-top: 30px;">
                      Un saludo,<br/>
                      <strong>Bruno de 3RCORE</strong>
                    </p>
                  </div>
                  
                  <div style="background: #130218; padding: 25px; text-align: center; color: white; font-size: 12px;">
                    © 2026 3RCORE. Hecho con pasión por la tecnología.
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      }
    ]);

    if (result.error) throw new Error(result.error.message);

    return NextResponse.json({ success: true, data: result.data });

  } catch (error) {
    console.error('Error en /api/contact:', error);
    return NextResponse.json({ error: 'Error al procesar el envío' }, { status: 500 });
  }
}