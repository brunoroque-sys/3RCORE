import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const logoUrl = 'https://3-rcore.vercel.app/icons/LOGO3R.png';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { nombre, apellido, email, telefono, tipoDocumento, numeroDocumento, tipoReclamacion, detalle, pedido } = await request.json();

    if (!nombre || !apellido || !email || !tipoDocumento || !numeroDocumento || !tipoReclamacion || !detalle || !pedido) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    const responsiveStyles = `
      <style>
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; padding: 20px !important; }
          .inner-padding { padding: 20px !important; }
          .mobile-hide { display: none !important; }
          h1 { font-size: 24px !important; }
        }
        @media (prefers-color-scheme: dark) {
          .dark-mode-bg { background-color: #1a1a2e !important; }
          .dark-mode-card { background-color: #16213e !important; }
          .dark-mode-text { color: #e4e4e7 !important; }
          .dark-mode-border { border-color: #374151 !important; }
        }
      </style>
    `;

    const result = await resend.batch.send([
      {
        from: 'Sistema 3RCORE <contacto@3rcore.com>',
        to: 'bruno.roque@3rcore.com',
        subject: `Nueva Reclamación: ${tipoReclamacion} de ${nombre} ${apellido}`,
        html: `
          <html>
            <head>${responsiveStyles}</head>
            <body style="margin: 0; padding: 0; background-color: #f8fafc;" class="dark-mode-bg">
              <div class="container" style="max-width: 600px; margin: 0 auto; padding: 40px; font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
                <div style="background-color: #ffffff; border-radius: 20px; padding: 0; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03); overflow: hidden;" class="dark-mode-card dark-mode-border">
                  
                  <!-- Header -->
                  <div style="background: linear-gradient(135deg, #E91E63 0%, #9C27B0 100%); padding: 40px; text-align: center;">
                    <img src="${logoUrl}" alt="3RCORE" style="width: 100px; margin-bottom: 15px; filter: brightness(0) invert(1);">
                    <h2 style="font-size: 22px; color: #ffffff; margin: 0; font-weight: 600; letter-spacing: -0.5px;">Nueva Reclamación Recibida</h2>
                  </div>
                  
                  <!-- Body -->
                  <div style="padding: 45px;" class="inner-padding">
                    <!-- Alert Badge -->
                    <div style="background: linear-gradient(135deg, #fff1f2 0%, #fce7f3 100%); border-left: 4px solid #E91E63; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
                      <p style="margin: 0; font-weight: 600; color: #E91E63; font-size: 15px; letter-spacing: 0.3px;">
                        TIPO: ${tipoReclamacion.toUpperCase()}
                      </p>
                    </div>
                    
                    <!-- Client Data Card -->
                    <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 16px; padding: 30px; margin: 30px 0;" class="dark-mode-card dark-mode-border">
                      <h3 style="color: #111827; margin-top: 0; margin-bottom: 20px; font-size: 18px; font-weight: 600;" class="dark-mode-text">Datos del Reclamante</h3>
                      
                      <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;" class="dark-mode-border">Nombre Completo:</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500; text-align: right; font-size: 14px;" class="dark-mode-border dark-mode-text">${nombre} ${apellido}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;" class="dark-mode-border">Correo:</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; text-align: right; font-size: 14px;" class="dark-mode-border">
                            <a href="mailto:${email}" style="color: #E91E63; text-decoration: none; font-weight: 500;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;" class="dark-mode-border">Teléfono:</td>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500; text-align: right; font-size: 14px;" class="dark-mode-border dark-mode-text">${telefono}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Documento:</td>
                          <td style="padding: 12px 0; color: #111827; font-weight: 500; text-align: right; font-size: 14px;" class="dark-mode-text">${tipoDocumento} - ${numeroDocumento}</td>
                        </tr>
                      </table>
                    </div>

                    <!-- Complaint Details -->
                    <div style="margin: 30px 0;">
                      <div style="background: linear-gradient(to right, #E91E63, #9C27B0); height: 3px; border-radius: 10px; margin-bottom: 15px;"></div>
                      <h4 style="color: #E91E63; margin: 0 0 12px 0; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Detalle de la Reclamación</h4>
                      <p style="line-height: 1.8; color: #374151; margin: 0; font-size: 15px; background: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb;" class="dark-mode-text dark-mode-card dark-mode-border">${detalle}</p>
                    </div>

                    <!-- Client Request -->
                    <div style="margin: 30px 0;">
                      <div style="background: linear-gradient(to right, #E91E63, #9C27B0); height: 3px; border-radius: 10px; margin-bottom: 15px;"></div>
                      <h4 style="color: #E91E63; margin: 0 0 12px 0; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Pedido del Cliente</h4>
                      <p style="line-height: 1.8; color: #374151; margin: 0; font-size: 15px; background: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb;" class="dark-mode-text dark-mode-card dark-mode-border">${pedido}</p>
                    </div>

                    <!-- Legal Notice -->
                    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 14px; padding: 20px; margin-top: 35px; border: 1px solid #fbbf24;">
                      <p style="margin: 0; font-size: 14px; color: #92400e; line-height: 1.6;">
                        <strong>Recordatorio Legal:</strong> Según el Código de Protección al Consumidor, tienes <strong>30 días calendario</strong> para dar respuesta a esta reclamación.
                      </p>
                    </div>
                  </div>
                  
                  <!-- Footer -->
                  <div style="background-color: #f9fafb; padding: 25px; text-align: center; border-top: 1px solid #e5e7eb;" class="dark-mode-card dark-mode-border">
                    <p style="font-size: 12px; color: #9ca3af; margin: 0;">Enviado desde 3RCORE System</p>
                    <p style="font-size: 11px; color: #d1d5db; margin: 8px 0 0 0;">https://3-rcore.vercel.app/</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      },
      {
        from: 'Sistema 3RCORE <contacto@3rcore.com>',
        to: email,
        subject: `Recibimos tu ${tipoReclamacion} - 3RCORE`,
        html: `
          <html>
            <head>${responsiveStyles}</head>
            <body style="margin: 0; padding: 0; background-color: #f8fafc;" class="dark-mode-bg">
              <div class="container" style="max-width: 600px; margin: 0 auto; padding: 40px; font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
                <div style="background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03); border: 1px solid #e5e7eb;" class="dark-mode-card dark-mode-border">
                  
                  <!-- Header -->
                  <div style="background: linear-gradient(135deg, #E91E63 0%, #9C27B0 100%); padding: 45px; text-align: center;">
                    <img src="${logoUrl}" alt="3RCORE" style="width: 90px; filter: brightness(0) invert(1);">
                  </div>
                  
                  <!-- Body -->
                  <div class="inner-padding" style="padding: 50px 45px;">
                    <h1 style="font-size: 26px; margin-bottom: 20px; color: #111827; font-weight: 700; letter-spacing: -0.5px;" class="dark-mode-text">Hola ${nombre},</h1>
                    
                    <p style="font-size: 16px; line-height: 1.7; color: #4b5563; margin-bottom: 15px;" class="dark-mode-text">
                      Hemos recibido tu <strong style="color: #E91E63;">${tipoReclamacion.toLowerCase()}</strong> y queremos agradecerte por tomarte el tiempo de contactarnos.
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.7; color: #4b5563;" class="dark-mode-text">
                      Tu opinión es muy importante para nosotros y nos ayuda a mejorar nuestros servicios.
                    </p>
                    
                    <!-- Summary Card -->
                    <div style="margin: 35px 0; padding: 25px; background: linear-gradient(135deg, #fef2f2 0%, #fce7f3 100%); border-radius: 16px; border: 1px solid #fecaca;">
                      <h3 style="color: #E91E63; margin-top: 0; font-size: 16px; font-weight: 600; margin-bottom: 15px;">Resumen de tu ${tipoReclamacion}</h3>
                      <div style="background: rgba(255,255,255,0.6); padding: 15px; border-radius: 10px;">
                        <p style="margin: 8px 0; color: #6b7280; font-size: 14px;"><strong style="color: #374151;">Documento:</strong> ${tipoDocumento} - ${numeroDocumento}</p>
                        <p style="margin: 8px 0; color: #6b7280; font-size: 14px;"><strong style="color: #374151;">Fecha de registro:</strong> ${new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                    </div>

                    <!-- Next Steps -->
                    <div style="background-color: #f9fafb; padding: 25px; border-radius: 14px; margin: 30px 0; border: 1px solid #e5e7eb;" class="dark-mode-card dark-mode-border">
                      <h4 style="margin-top: 0; color: #111827; font-size: 17px; font-weight: 600; margin-bottom: 15px;" class="dark-mode-text">¿Qué sigue ahora?</h4>
                      <div style="color: #4b5563; line-height: 1.8; font-size: 15px;" class="dark-mode-text">
                        <div style="display: flex; align-items: start; margin-bottom: 12px;">
                          <span style="color: #E91E63; margin-right: 10px; font-weight: bold;">✓</span>
                          <span>Revisaremos tu caso con atención</span>
                        </div>
                        <div style="display: flex; align-items: start; margin-bottom: 12px;">
                          <span style="color: #E91E63; margin-right: 10px; font-weight: bold;">✓</span>
                          <span>Te daremos una respuesta en un plazo máximo de <strong style="color: #111827;" class="dark-mode-text">30 días calendario</strong></span>
                        </div>
                        <div style="display: flex; align-items: start;">
                          <span style="color: #E91E63; margin-right: 10px; font-weight: bold;">✓</span>
                          <span>Nos pondremos en contacto contigo a través del correo o teléfono que nos proporcionaste</span>
                        </div>
                      </div>
                    </div>

                    <p style="font-size: 15px; color: #6b7280; margin-top: 35px; line-height: 1.6;">
                      Agradecemos tu paciencia,<br/>
                      <strong style="color: #111827;" class="dark-mode-text">El equipo de 3RCORE</strong>
                    </p>
                  </div>
                  
                  <!-- Footer -->
                  <div style="background: linear-gradient(135deg, #111827 0%, #1f2937 100%); padding: 30px; text-align: center; color: white;">
                    <p style="margin: 0 0 15px 0; font-size: 14px; color: #e5e7eb;">Si tienes alguna consulta adicional, no dudes en contactarnos:</p>
                    <div style="margin: 15px 0;">
                      <p style="margin: 8px 0; font-size: 14px; color: #d1d5db;"> contacto@3rcore.com</p>
                      <p style="margin: 8px 0; font-size: 14px; color: #d1d5db;"> +51 986 889 147</p>
                    </div>
                    <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                      <p style="margin: 0; opacity: 0.6; font-size: 12px; color: #9ca3af;">© 2026 3RCORE. Todos los derechos reservados.</p>
                    </div>
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
    console.error('Error en /api/complaints:', error);
    return NextResponse.json({ error: 'Error al procesar el envío' }, { status: 500 });
  }
}