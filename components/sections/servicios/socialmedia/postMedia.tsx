import Image from 'next/image';

export default function PostMedia() {
  const posts = [
    {
      id: 1,
      image: '/images/social/postIg/img1.webp', 
      username: 'rest.asdeoros',
      caption: 'En As de Oros, nuestra pasión por la gastronomía y la hospitalidad... más'
    },
    {
      id: 2,
      image: '/images/social/postIg/img2.webp', 
      username: 'rest.asdeoros',
      caption: '¿Te atreves a probar algo diferente?... más'
    },
    {
      id: 3,
      image: '/images/social/postIg/img3.webp', 
      username: 'rest.asdeoros',
      caption: 'Celebramos a quienes cultivan nuestra historia... más'
    },
    {
      id: 4,
      image: '/images/social/postIg/img4.webp', 
      username: 'rest.asdeoros',
      caption: 'Un final dulce para cada comida. Descubre nuestra selección... más'
    }
  ];

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/social/fondoas.webp"
          alt="Fondo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-10 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-[14px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 p-3 bg-white">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/images/social/postIg/log.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-black font-semibold text-sm">{post.username}</span>
              </div>

              <div className="relative aspect-square w-full bg-gray-100">
                <Image
                  src={post.image}
                  alt={`Post ${post.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-3 bg-white">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{post.username}</span>{' '}
                  {post.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}