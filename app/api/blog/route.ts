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
      },
      // Esto ayuda a que WordPress no bloquee la petición
      next: { revalidate: 60 } 
    });

    if (!res.ok) return NextResponse.json({ error: 'WP Error' }, { status: res.status });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}