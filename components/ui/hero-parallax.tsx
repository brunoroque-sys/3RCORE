"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"; 

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(6, 12);
  const thirdRow = products.slice(12, 18);
  const fourthRow = products.slice(18, 24);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.thumbnail} />
          ))}
        </motion.div>
        
        <motion.div className="flex flex-row space-x-10 mb-10">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.thumbnail} />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.thumbnail} />
          ))}
        </motion.div>

        <motion.div className="flex flex-row space-x-10">
          {fourthRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.thumbnail} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-6xl font-bold dark:text-white">
        Nuestros Clientes <br /> y Aliados
      </h1>
      <p className="max-w-2xl text-base md:text-lg mt-4 dark:text-neutral-200">
        Empresas que confían en nuestra experiencia para llevar sus proyectos al siguiente nivel.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -10 }}
      className="group/product h-32 w-[18rem] relative shrink-0  dark:bg-neutral-900 rounded-xl overflow-hidden dark:border-neutral-800 shadow-sm"
    >
      <a href={product.link} className="block h-full w-full p-6">
        <img
          src={product.thumbnail}
          className="object-contain h-full w-full transition-transform duration-300 "
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-10 bg-black pointer-events-none transition-opacity"></div>
    </motion.div>
  );
};