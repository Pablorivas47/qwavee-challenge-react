import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
  titleColor?: string;
}

export default function Section({
  children,
  title,
  className,
  titleColor = '#072a52',
}: SectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      {title && (
        <h2 className="px-8 lg:text-[50px] md:text-[40px] sm:text-[40px] phone:text-[25px] font-bold mb-6" style={{ color: titleColor }}>
          {title}
        </h2>
      )}
      <div className=" container mx-auto ">{children}</div>
    </section>
  );
}

