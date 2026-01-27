import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SeoSemCall() {
  const t = useTranslations('SEOSEM');
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="w-full mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white space-y-6 pl-40">
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              <span className="italic">{t('title.part1')}</span>
              <br />
              <span className="text-pink-600 font-normal">{t('title.part2')}</span>
              <br />
              <span className="text-pink-600 font-normal">{t('title.part3')}</span>
            </h2>

            <div className="space-y-4 text-base lg:text-xl">
              <p className="leading-relaxed">
                {t('description.paragraph1')}
              </p>

              <p className="leading-relaxed">
                {t('description.paragraph2')}
              </p>
              
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full lg:max-w-[650px] 2xl:max-w-[750px]">
              <Image
                src="/images/seosem/laptopInici.png"
                alt="Laptop showing Google search results"
                width={600}
                height={450}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}