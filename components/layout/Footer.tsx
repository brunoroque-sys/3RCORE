import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0518] text-white py-16 px-4 border-t border-white/5 font-sans">
      {/* AQUÍ ESTÁ EL CAMBIO: lg:grid-cols-5 para que quepan las 5 columnas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        
        {/* COLUMNA 1: Logo y Redes */}
        <div className="flex flex-col items-center md:items-start">
          {/* Logo */}
          <div className="relative w-48 h-24 mb-4"> 
            <Image 
              src="/icons/LogoLetrasBlanco.webp" 
              alt="3R Core Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-4">
            <SocialIcon href="#" icon={<FaFacebookF />} />
            <SocialIcon href="#" icon={<FaInstagram />} />
            <SocialIcon href="#" icon={<FaLinkedinIn />} />
            <SocialIcon href="#" icon={<FaYoutube />} />
          </div>
        </div>

        {/* COLUMNA 2: Ubicación y Horario */}
        <div>
          <h3 className="text-[#ff2e63] font-bold text-lg mb-4">Ubicación</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Calle las caobas 170 Ofic 400 – 401 Urb
            <br />
            El remanso La Molina
            <br />
            Lima
          </p>

          <h3 className="text-[#ff2e63] font-bold text-lg mb-4">Horario</h3>
          <p className="text-gray-300 text-sm">
            Lunes a Viernes de 9 a.m a 6 p.m
          </p>
        </div>

        {/* COLUMNA 3: Menú General (Inicio, Nosotros...) */}
        <div>
          <h3 className="text-[#ff2e63] font-bold text-lg mb-4">Menú</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4: Servicios Específicos */}
        <div>
          <h3 className="text-[#ff2e63] font-bold text-lg mb-4">Servicios</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/servicios/branding" className="hover:text-white transition-colors">Branding</Link></li>
            <li><Link href="/servicios/social-media" className="hover:text-white transition-colors">Social Media</Link></li>
            <li><Link href="/servicios/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
            <li><Link href="/servicios/google-ads" className="hover:text-white transition-colors">Google ADS</Link></li>
          </ul>
        </div>

        {/* COLUMNA 5: Información y Libro */}
        <div>
          <h3 className="text-[#ff2e63] font-bold text-lg mb-4">Información</h3>
          <ul className="space-y-3 text-sm text-gray-300 mb-6">
            <li><Link href="/faq" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
            <li><Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
            <li><Link href="/privacidad" className="hover:text-white transition-colors">Política y Privacidad</Link></li>
          </ul>

          {/* Libro de Reclamaciones */}
          <div className="relative w-30 h-30">
             <Link href="/reclamaciones" className="hover:opacity-80 transition-opacity block w-full h-full relative">
                <Image 
                  src="/icons/libroRecla.webp" 
                  alt="Libro de Reclamaciones" 
                  fill 
                  className="object-contain object-left"
                />
             </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Componente auxiliar para los botones sociales
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:bg-[#ff2e63] hover:border-[#ff2e63] transition-all duration-300 text-sm"
    >
      {icon}
    </a>
  );
};

export default Footer;