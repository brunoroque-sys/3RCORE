"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const montserrat = Montserrat({ subsets: ["latin"] });

interface WPPost {
  title: { rendered: string };
  date: string;
  link: string;
  yoast_head_json?: {
    og_image?: Array<{ url: string }>;
  };
}

const NewsSection = () => {

  const t = useTranslations("NewsSection");

  const [posts, setPosts] = useState<WPPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const tValue = t("t");
        const prefix = tValue === "en" ? "/en" : "";
        const wpUrl = `https://3rcore.com${prefix}/wp-json/wp/v2/posts?per_page=6&_fields=title,date,link,yoast_head_json`;

        const proxyUrl = "https://corsproxy.io/?";
        const finalUrl = proxyUrl + encodeURIComponent(wpUrl);

        console.log("Conectando a través de proxy a:", wpUrl);

        const res = await fetch(finalUrl);

        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error al obtener posts:", error);
      }
    };

    fetchPosts();
  }, [t]);

  const nextSlide = () => {
    if (currentIndex + 3 < posts.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.max(0, posts.length - 3));
    }
  };

  if (posts.length === 0) return null;

  return (
    <section
      className={`${montserrat.className} py-24 bg-transparent text-white px-6 overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center mb-20 w-full group">
        <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
          <h2 className="text-white text-s md:text-m tracking-[0.1em] uppercase font-medium whitespace-nowrap">
            {t("title")}
          </h2>
          <div className="h-[1px] bg-white/90 w-full md:w-[70%] lg:w-[100%] mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative flex items-center">
        <button
          onClick={prevSlide}
          className="absolute -left-20 z-20 hidden xl:block text-white/50 hover:text-white transition-all hover:scale-110 active:scale-90 cursor-pointer"
        >
          <ChevronLeft size={60} strokeWidth={1} />
        </button>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / 2.9)}%)` }}
          >
            {posts.map((item, index) => {
              const imageUrl =
                item.yoast_head_json?.og_image?.[0]?.url ||
                "/images/placeholder.png";

              const formattedDate = new Date(item.date)
                .toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })
                .toUpperCase();

              return (
                <div
                  key={index}
                  className="group min-w-full md:min-w-[calc(33.333%-22px)] bg-[#2F0729] backdrop-blur-xl rounded-[20px] overflow-hidden flex flex-col min-h-[620px] border border-white/5 transition-all duration-500"
                >
                  <div className="relative h-80 w-full">
                    <div className="relative w-full h-full overflow-hidden rounded-t-[20px]">
                      <Image
                        src={imageUrl}
                        alt={item.title.rendered}
                        fill
                        className="object-cover transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="p-10 pt-4 flex flex-col flex-grow">
                    <span className="text-[11px] text-white font-medium tracking-widest mb-6">
                      {formattedDate}
                    </span>
                    <h3
                      className="text-2xl font-semibold leading-[1.4] mb-8 text-white/90 group-hover:text-white transition-colors"
                      dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                    />

                    <div className="mt-auto">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center justify-center px-10 py-3.5 overflow-hidden font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 border border-white/20 rounded-[15px] cursor-pointer text-white"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0"></span>
                        <span className="relative z-10 transition-colors duration-300">
                          {t("readMore")}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute -right-20 z-20 hidden xl:block text-white/50 hover:text-white transition-all hover:scale-110 active:scale-90 cursor-pointer"
        >
          <ChevronRight size={60} strokeWidth={1} />
        </button>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://3rcore.com/blog/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-10 py-3.5 overflow-hidden font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 border border-white/20 rounded-[15px] cursor-pointer text-white"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0" />
          <div className="relative z-10 transition-colors duration-300">
            {t("viewAllBlogs")}
          </div>
        </a>
      </div>
    </section>
  );
};

export default NewsSection;
