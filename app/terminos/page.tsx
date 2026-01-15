import React from 'react';

export default function Terminos() {
  return (
    <section className="relative z-10 pt-40 pb-20 px-6 text-justify">
      <div className="max-w-4xl mx-auto">
        {/* Título Principal */}
        <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className={`
              leading-tight
              font-bold
              italic
              text-3xl md:text-6xl 
              bg-gradient-to-r from-[#9C27B0] to-[#E91E63] 
              bg-clip-text text-transparent font-m
            `}>
              Términos y condiciones
            </h1>
          <p className="text-whitetext-lg uppercase tracking-widest font-light">
           TÉRMINOS GENERALES
          </p>
        </header>

        {/* Contenido */}
        <div className="space-y-12 text-gray-300 leading-relaxed font-light">
          
          <article>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">01.</span> Introducción
            </h2>
            <p>
              En 3R Core Agencia de Marketing nos preocupa brindar a los titulares de datos personales el más alto nivel de seguridad y proteger la confidencialidad de su información. Por lo tanto, las relaciones comerciales se llevan a cabo en un entorno de servidor seguro bajo protocolo SSL (Secure Socket Layer), que mantiene la información encriptada y segura. Este protocolo es utilizado actualmente por las empresas más importantes del mundo para realizar transacciones electrónicas seguras. Este sitio web ha sido creado y diseñado para proporcionar toda la información que consideramos relevante y para establecer un espacio de comunicación con los titulares de los datos personales.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">02.</span> Objetivo y finalidad
            </h2>
            <p className="mb-4">
              En 3R Core Agencia de Marketing nos preocupa brindar a los titulares de datos personales el más alto nivel de seguridad y proteger la confidencialidad de su información.
            </p>
            <div className="bg-gradient-to-br from-white/10 to-transparent border-l-2 border-[#E91E63] p-6 rounded-r-2xl">
              <p className="italic text-gray-200">
                Las relaciones comerciales se llevan a cabo en un entorno de servidor seguro bajo protocolo <strong className="text-white">SSL (Secure Socket Layer)</strong>, que mantiene la información encriptada y segura.
              </p>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">03.</span> Legislación
            </h2>
            <p className="mb-4">Esta política está regulada por la legislación peruana y en particular por:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E91E63] mt-2 shrink-0" />
                <span>Ley N° 29733 - Ley de Protección de Datos Personales.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9C27B0] mt-2 shrink-0" />
                <span>Decreto Supremo N° 003-2013-JUS, Reglamento de la Ley N° 29733.</span>
              </li>
            </ul>
            <p className="mt-4">De acuerdo con la Ley N° 29733 - Ley de Protección de Datos Personales y su Reglamento aprobado por el Decreto Supremo N° 003-2013-JUS, los datos personales son cualquier información numérica, alfabética, gráfica, fotográfica, acústica, sobre hábitos personales o de cualquier otro tipo que se refiere a una persona natural que la identifica o la hace identificable a través de medios que pueden ser razonablemente utilizados. Asimismo, el tratamiento de datos personales se refiere a cualquier operación o procedimiento técnico, automatizado o no, que permite la recopilación, registro, organización, almacenamiento, conservación, elaboración, modificación, extracción, consulta, utilización, bloqueo, supresión, comunicación por transferencia o por difusión o cualquier otra forma de procesamiento que facilite el acceso, correlación o interconexión de los datos personales.</p>

          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">04.</span> Almacenamiento de información
            </h2>
            <p>
Los datos personales proporcionados a través de nuestra página https://www.3rcore.com/ serán almacenados en los bancos de datos llamados «Clientes» y «Prospectos», por el período de tiempo indicado en cada aviso de privacidad o consentimiento. Es importante destacar que nuestros bancos de datos están debidamente registrados ante la Dirección General de Protección de Datos Personales, de acuerdo con la legislación actual vigente. Únicamente el personal de 3R Core Agencia de Marketing que necesite conocer dicha información para poder enviar información o responder a las solicitudes de los titulares de los datos personales podrá acceder y gestionar los datos personales proporcionados por los titulares. Estos datos personales serán tratados de forma justa y legal y no serán utilizados para fines incompatibles con los especificados.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">05.</span> Ejercicio de Derechos
            </h2>
            <p className="mb-6">
              Puedes ejercer tus derechos de información, acceso, actualización, rectificación y supresión de datos personales mediante:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative p-0.5 rounded-2xl overflow-hidden tracking-wide transition-all hover:shadow-[0 0 20px rgba(156,39,176,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#9C27B0]" />
                <div className="relative bg-[#130218] p-6 rounded-[14px]">
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Vía Presencial</h4>
                  <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">info@3rcore.com</p>
                  <p className="text-sm text-gray-300">Av. Las Caobas 170, La Molina, Lima.</p>
                </div>
              </div>
              
              <div className="group relative p-0.5 rounded-2xl overflow-hidden tracking-wide transition-all hover:shadow-[0 0 20px rgba(156,39,176,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#9C27B0]" />
                <div className="relative bg-[#130218] p-6 rounded-[14px]">
                  <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Vía Digital</h4>
                  <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">info@3rcore.com</p>
                  <p className="text-[10px] text-gray-300 mt-1 uppercase">Asunto: Protección de Datos Personales</p>
                </div>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-[#E91E63] font-mono text-sm border-b border-[#9C27B0]">06.</span> Calidad de los Datos Personales
            </h2>
            <p>
              La información requerida a los titulares de datos personales consiste en datos básicos de contacto, y son pertinentes, adecuados y proporcionados en relación con la finalidad para la cual se recopilan. Los datos personales a los que tendrá acceso 3R Core Agencia de Marketing serán los que los titulares proporcionen voluntariamente en los formularios correspondientes. Para que los titulares de los datos personales tengan conocimiento de la presente Política de Privacidad, 3R Core Agencia de Marketing brinda los recursos técnicos necesarios. Es importante que los datos personales proporcionados sean veraces y estén actualizados, de lo contrario, serán cancelados. Los datos personales serán eliminados cuando ya no sean necesarios para la finalidad para la cual fueron recopilados, pero se mantendrán por un período indefinido.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}