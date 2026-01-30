import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang');
  
  const prefix = lang === "en" ? "/en" : "";
  const wpUrl = `https://3rcore.com${prefix}/wp-json/wp/v2/posts?per_page=6&_fields=title,date,link,yoast_head_json`;

  try {
    const res = await fetch(wpUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9,es;q=0.8',
        // Intentamos engañar al Firewall simulando que la petición viene del mismo sitio
        'Referer': 'https://3rcore.com/',
        'Origin': 'https://3rcore.com',
      },
      // Forzamos a que no use caché de errores anteriores en Vercel
      cache: 'no-store',
    });

    if (!res.ok) {
      // Intentamos leer el cuerpo del error para darte más pistas
      const errorBody = await res.text().catch(() => "No error body");
      console.error(`WP Error ${res.status}:`, errorBody);
      
      return NextResponse.json({ 
        error: `WP responded with ${res.status}`,
        details: errorBody.substring(0, 100) // Solo los primeros 100 caracteres
      }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (error: any) {
    return NextResponse.json({ error: 'Server Error', message: error.message }, { status: 500 });
  }
}