"use client"; // Usamos Client Component para poder ver el console.log en el navegador
import { useEffect, useState } from "react";

interface Post {
  title: { rendered: string };
  date: string;
  link: string;
  yoast_head_json?: {
    og_image?: Array<{ url: string }>;
  };
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Pedimos per_page=6 y los campos específicos incluyendo yoast_head_json
      const url = "https://3rcore.com/wp-json/wp/v2/posts?per_page=6&_fields=title,date,link,yoast_head_json";
      
      try {
        const res = await fetch(url);
        const data = await res.json();
        
        // ESTO MOSTRARÁ LOS DATOS EN LA CONSOLA DEL NAVEGADOR
        console.log("Mis 6 posts filtrados:", data);
        
        setPosts(data);
      } catch (error) {
        console.error("Error cargando posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', padding: '20px' }}>
      {posts.map((post, index) => {
        // Extraemos la imagen de Yoast
        const imageUrl = post.yoast_head_json?.og_image?.[0]?.url || "https://via.placeholder.com/400";

        return (
          <article key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            <img 
              src={imageUrl} 
              alt={post.title.rendered} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '15px' }}>
              <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <p style={{ fontSize: '0.8rem', color: '#666' }}>
                {new Date(post.date).toLocaleDateString()}
              </p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                Leer más
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}