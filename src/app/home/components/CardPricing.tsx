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
    <div className="max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden bg-white ">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl} 
          alt={imageAlt} 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className="p-6 text-center">
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
        <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div>
          <a
            href="#"
            className="text-[#072A52] text-sm font-medium hover:underline"
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
