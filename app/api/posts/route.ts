import { NextResponse } from 'next/server';

export const runtime = 'edge'; 
export const revalidate = 300; 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'es';
  
  try {
    const prefix = lang === 'en' ? '/en' : '';
    const wpUrl = `https://3rcore.com${prefix}/wp-json/wp/v2/posts?per_page=6&_fields=title,date,link,yoast_head_json`;
    
    
    const res = await fetch(wpUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'Referer': 'https://3rcore.com/',
        'Origin': 'https://3rcore.com',
      },
      cache: 'no-store', 
    });


    if (!res.ok) {
      const errorText = await res.text();
      console.error('WordPress error:', errorText);
      return NextResponse.json(
        { error: 'WordPress API error', status: res.status, details: errorText },
        { status: res.status }
      );
    }

    const data = await res.json();
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
    
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch posts', 
        message: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}