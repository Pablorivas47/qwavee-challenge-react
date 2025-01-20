'use client';
import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import NatureCard from './components/NatureCard';
import VideoPlayer from './components/ReactPlayer';
import Section from './components/Section';
import Footer from './components/Footer';
import TextWithCircle from './components/TextWithCircle';
import CardVariations from './components/CardVariations';
import CardPricing from './components/CardPricing';
import fetchNatureData from '../apis/NatureApi';
import Image from 'next/image';

const cardsData = [
  { image: '/assets/images/variations.jpg', title: 'Essentially Unchange' },
  { image: '/assets/images/variations.jpg', title: 'Essentially Unchange' },
  { image: '/assets/images/variations.jpg', title: 'Essentially Unchange' },
  { image: '/assets/images/variations.jpg', title: 'Essentially Unchange' }
];

const HomePage = () => {

  // Estado para manejar el tamaño de la pantalla en el cliente
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // Este código solo se ejecutará en el cliente
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1340);
    };

    handleResize(); // Llama a la función de inmediato para configurar el valor inicial
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  interface NatureData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }

  const [natureData, setNatureData] = useState<NatureData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchNatureData();
      setNatureData(data);
    };
    loadData();
  }, []);
  
  return (
    <div className="w-full max-w-screen-pc h-full mx-auto bg-white">
      <main>
        <div
          className=""
          style={{
            backgroundImage: "url('/assets/images/background-pattern.png')",
            backgroundSize: '1366px 900px',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="ml-[91px] pt-12 hidden sm:block">
          <Image
            src="/assets/images/ui-unicorn-logo.png"
            alt="Logo"
            width={100} 
            height={50}
            priority 
          />
          </div>

          {/* Seccion welcome */}
          <section className="flex flex-wrap items-center justify-between mb-[180px]">
            <div className=" mx-auto text-center xl:text-left">
              <h2 className="s:text-[50px] s:mt-[120px] sm:text-[58px] xl:text-[58px] lg:text-[48px] text-[#072a52] font-bold">
                Welcome Alex
              </h2>
              <div className="w-[100px] h-[2px] bg-[#072a52] mt-[103px] mx-auto xl:mx-0"></div>
              <p className=" max-w-[597px] text-[17px] xl:text-[17px] lg:text-[15px] text-[#4e4e4e] font-normal leading-relaxed mt-10 mb-12 mx-8 xl:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries.
              </p>
              <Button
                label="READABLE ENGLISH"
                onClick={() => console.log('READABLE ENGLISH clicked')}
              />
            </div>

            <Image
              src="/assets/images/the-island1.jpg"
              alt="Welcome"
              width={500}
              height={500}
              className="rounded-full mr-[70px] hidden xl:block"
              style={{ objectFit: 'cover' }}
            />
          </section>

        </div>

        {/*Seccion the island  */}
        <section
          className="flex flex-wrap items-center gap-10 px-4 xlmax:px-16"
          style={{
            background: isWideScreen
              ? `linear-gradient(to bottom, white 50%, #002F5F 50%), linear-gradient(to right, transparent 20%, white 20%)`
              : 'none',
            backgroundSize: isWideScreen ? '100% 100%' : undefined,
            backgroundBlendMode: isWideScreen ? 'overlay' : undefined,
          }}
          
        >
          {/* Contenido de texto */}
          <div className="max-w-[600px] mx-auto text-center xlmax:text-left">
            <h2 className="text-[50px] font-bold text-[#072a52]">The Island</h2>
            <div className="w-[100px] h-[2px] bg-[#072a52] mt-[21px] mx-auto xlmax:mx-0"></div>
            <p className="text-[17px] font-normal text-[#4e4e4e] leading-relaxed mt-[30px] mb-[60px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="flex justify-center xlmax:justify-start">
              <Button label="LEARN MORE" onClick={() => console.log('Learn More clicked')} />
            </div>
          </div>

          {/* Video */}
          <div className="w-full flex justify-center xlmax:w-auto order-last xlmax:order-first">
            <VideoPlayer />
          </div>
      </section>

        {/* Seccion nature */}
      <section className="relative bg-[#002F5F] text-white p-[76px]">
        <h2 className="text-[50px] font-bold text-center">The Nature</h2>
        <div className="w-[100px] h-[2px] bg-[#FFFFFF] mx-auto mt-[21px] mb-[64px]"></div>
        <div className="flex flex-wrap justify-center gap-[64px]">
          {natureData.map((item) => (
            <NatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </section>

        {/* Seccion variations */}
        <Section title="There Are Many Variations" className='gap-8 text-center'>
          <div className="w-[100px] h-[2px] bg-[#072a52] mx-auto "></div>
          <div className="flex flex-wrap  justify-center gap-8 mt-[66px] mx-auto">
            {cardsData.map((card, index) => (
              <div
              key={index}
              className="w-full md:w-1/3 xl:w-1/5 flex justify-center"
            >
              <CardVariations
                key={index}
                image={card.image}
                title={card.title}
              />
              </div>
            ))}
          </div>
        </Section>

        {/* Seccion info */}
        <Section title="It has survived thru time and also the onslaught of nature" className="text-center max-w-[756] mx-auto">
          <div className="text-center">
            <Button label="PRAESENTIUM VOL" onClick={() => console.log('Button clicked')} />
          </div>
        </Section>

        {/* Seccion nature, animals */}
        <Section title="Nature, animals" titleColor='white' className="text-left  phone:px-[90px] bg-[#072a52] lg:bg-gradient-to-r from-[#072a52] via-[#365e8d] to-gray-200 ">
          <TextWithCircle
            title="Lorem Is"
            paragraph="Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry  standard dummy text  ever since the ."
          />
          <TextWithCircle
            title="Lorem Ipsum Orem"
            paragraph="Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry  standard dummy text  ever since the ."
          />
          <TextWithCircle
            title="Randomised"
            paragraph="Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry  standard dummy text  ever since the ."
          />
          <TextWithCircle
            title="Not Simply"
            paragraph="Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry  standard dummy text  ever since."
          /><TextWithCircle
          title="Contrary"
          paragraph="Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry  standard dummy text."
        />
        <div className="text-center sm:text-left">
            <Button label="PRAESENTIUM VOL" backgroundColor='white' color='#072a52' onClick={() => console.log('Button clicked')} />
        </div> 
        </Section>

        {/* Seccion pricing */}
        <Section title="Pricing" className='text-center mx-auto'>
          <div className="w-[100px] h-[2px] bg-[#072a52] mt-[35px] mb-[100px] mx-auto"></div>
          <div className="flex flex-wrap justify-center gap-8 md:grid-cols-2 xl:grid-cols-3">
              <CardPricing
                imageUrl="/assets/images/pricing.jpg"
                imageAlt="Colorful lighthouse"
                subtitle="Lorem Ipsum is simply dummy text"
                title="There Are Many Variations Of Passages Of Lorem Ipsum Is"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy."
                linkText="From a Lorem"
              />
              <CardPricing
                imageUrl="/assets/images/pricing.jpg"
                imageAlt="Colorful lighthouse"
                subtitle="Lorem Ipsum is simply dummy text"
                title="There Are Many Variations Of Passages Of Lorem Ipsum Is"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy."
                linkText="From a Lorem"
              />
              <CardPricing
                imageUrl="/assets/images/pricing.jpg"
                imageAlt="Colorful lighthouse"
                subtitle="Lorem Ipsum is simply dummy text"
                title="There Are Many Variations Of Passages Of Lorem Ipsum Is"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy."
                linkText="From a Lorem"
              />
          </div>
        </Section>
        <div className="text-center mb-[180px]">
            <Button label="FIND MORE" onClick={() => console.log('Button clicked')} />
        </div> 

        {/*Seccion footer */}
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
