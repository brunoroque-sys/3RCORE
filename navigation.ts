import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // Lista de todos los idiomas soportados
  locales: ['en', 'es'],
  
  // Idioma por defecto si no hay prefijo en la URL
  defaultLocale: 'es'
});

// Exportamos los hooks generados automáticamente
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);