

interface TextWithCircleProps {
  title: string; // Título que se mostrará
  paragraph: string; // Párrafo que se mostrará debajo del título
  titleSize?: string; // Tamaño del título (opcional)
  paragraphSize?: string; // Tamaño del párrafo (opcional)
}

const TextWithCircle = ({
  title,
  paragraph,
  titleSize = 'text-[17px]', // Tamaño predeterminado del título
  paragraphSize = 'text-[15px]', // Tamaño predeterminado del párrafo
}: TextWithCircleProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center mb-2 ">
        <div className="w-[6px] h-[6px] rounded-full bg-white mr-3"></div> {/* Círculo pequeño */}
        <h3 className={`font-bold ${titleSize} text-white`}>{title}</h3> {/* Título */}
      </div>
      <p className={`text-white max-w-[580px] mb-7 ${paragraphSize}`}>{paragraph}</p> {/* Párrafo */}
    </div>
  );
};

export default TextWithCircle;
