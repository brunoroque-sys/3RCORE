import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'es';
  
  try {
    const prefix = lang === 'en' ? '/en' : '';
    const wpUrl = `https://3rcore.com${prefix}/wp-json/wp/v2/posts?per_page=6&_fields=title,date,link,yoast_head_json`;
    
    const res = await fetch(wpUrl, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 300 }
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'WordPress API error' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}