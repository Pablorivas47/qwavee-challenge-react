import Image from 'next/image';

interface CardPricingProps {
  imageUrl: string; 
  imageAlt?: string; 
  subtitle: string; 
  title: string; 
  description: string; 
  linkText: string; 
}

export default function CardPricing({
  imageUrl,
  imageAlt = 'Card image',
  subtitle,
  title,
  description,
  linkText,
}: CardPricingProps) {
  return (
    <div className=" max-w-[350px] mx-auto border rounded-lg shadow-lg bg-white ">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl} 
          alt={imageAlt} 
          fill 
          sizes="(max-width: 384px)"
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className="p-6 text-center">
        <p className="text-xs phone:text-sm text-gray-500 mb-2">{subtitle}</p>
        <h2 className="text-sm phone:text-lg font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-xs phone:text-sm text-gray-700 mb-4">{description}</p>
        <div>
          <a
            href="#"
            className="text-[#072A52] text-xs phone:text-sm font-medium hover:underline"
          >
            {linkText}
          </a>
          <div
            className="mx-auto mt-2"
            style={{ height: '3px', width: '100px', backgroundColor: '#ededf1' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
