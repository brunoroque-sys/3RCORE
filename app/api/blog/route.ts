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
        'Content-Type': 'application/json',
        // ESTO ES CLAVE: Simula un navegador real
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: 60 } 
    });

    // Si WordPress sigue dando 403, capturamos el error para saber qué pasa
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Error de WordPress (${res.status}):`, errorText);
      return NextResponse.json({ error: `WP responded with ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error en el servidor de Next.js:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}