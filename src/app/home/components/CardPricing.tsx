// components/CardPricing.tsx
import Image from 'next/image';

interface CardPricingProps {
  imageUrl: string; // Ruta de la imagen
  imageAlt?: string; // Texto alternativo (opcional)
  subtitle: string; // Texto pequeño superior
  title: string; // Título principal
  description: string; // Descripción
  linkText: string; // Texto clickeable
}

export default function CardPricing({
  imageUrl,
  imageAlt = 'Card image', // Valor por defecto para texto alternativo
  subtitle,
  title,
  description,
  linkText,
}: CardPricingProps) {
  return (
    <div className="max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden bg-white ">
      {/* Image Section */}
      <div className="relative w-[271px] h-[412px]">
        <Image
          src={imageUrl} // Ruta de la imagen desde props
          alt={imageAlt} // Texto alternativo
          fill // La imagen ocupará todo el contenedor
          style={{ objectFit: 'cover' }} // Ajuste de la imagen para que cubra el área sin distorsión
          sizes="(max-width: 768px) 100vw, 50vw" // Ajusta el tamaño en pantallas pequeñas
          priority // Opcional: activa la carga prioritaria si es una imagen clave
        />
      </div>
      {/* Content Section */}
      <div className="p-6 text-center">
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
        <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        {/* Clickable text and decorative line */}
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
