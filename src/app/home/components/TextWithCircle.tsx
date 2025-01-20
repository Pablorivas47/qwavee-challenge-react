
interface TextWithCircleProps {
  title: string; 
  paragraph: string; 
  titleSize?: string; 
  paragraphSize?: string; 
}

const TextWithCircle = ({
  title,
  paragraph,
  titleSize = 'text-[17px]', 
  paragraphSize = 'text-[15px]', 
}: TextWithCircleProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center mb-2 ">
        <div className="w-[6px] h-[6px] rounded-full bg-white mr-3"></div> 
        <h3 className={`font-bold ${titleSize} text-white`}>{title}</h3>
      </div>
      <p className={`text-white max-w-[580px] mb-7 ${paragraphSize}`}>{paragraph}</p>
    </div>
  );
};

export default TextWithCircle;
