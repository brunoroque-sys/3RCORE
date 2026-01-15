import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#130218] text-white pt-16 pb-8 px-10 font-sans">
      <div className="max-w-8lg mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex justify-start items-start">
            <div className="relative w-56 h-20"> 
              <Image 
                src="/icons/LogoLetrasBlanco.webp" 
                alt="3R Core Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Nuestra Agencia</h3>
            <div className="text-gray-200 text-xs leading-relaxed space-y-4">
              <p>
                Calle Las Caobas 170, Ofic. 400, Urb El Remanso,
                <br />
                La Molina. Lima - Perú
              </p>
              <p>
                Atención: Lunes a Viernes <span className="mx-2">|</span> 9am a 6pm
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Servicios</h3>
            <ul className="space-y-3 text-xs text-gray-200">
              <li><Link href="/servicios/branding" className="hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="/servicios/social-media" className="hover:text-white transition-colors">Social Media</Link></li>
              <li><Link href="/servicios/web-development" className="hover:text-white transition-colors">Web Development Design</Link></li>
              <li><Link href="/servicios/google-ads" className="hover:text-white transition-colors">Google Ads</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Redes Sociales</h3>
            <div className="flex gap-4">
              <SocialIcon href="#" icon={<FaFacebookF />} />
              <SocialIcon href="#" icon={<FaInstagram />} />
              <SocialIcon href="#" icon={<FaLinkedinIn />} />
              <SocialIcon href="#" icon={<FaYoutube />} />
            </div>
          </div>
        </div>

        <div className="border-t border-white/90 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] tracking-widest text-white">
            <Link href="/politicas" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos y condiciones</Link>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest text-white">
            © 2026 3R CORE. Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente para los iconos sociales (Versión minimalista de la imagen)
const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative text-white text-lg p-2 rounded-md
        border border-white/20
        transition-all duration-500 ease-out
        hover:border-transparent
        hover:-translate-y-0.5
        flex items-center justify-center
        overflow-hidden
      "
    >
      <div className="
        absolute inset-0 
        bg-gradient-to-br from-[#E91E63] to-[#9C27B0] 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 ease-out
      " />

      <span className="
        relative z-10 
        transition-transform duration-300 
        group-hover:scale-110
      ">
        {icon}
      </span>
    </a>
  );
};
export default Footer;