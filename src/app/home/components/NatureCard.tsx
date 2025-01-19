import React from 'react';

interface NatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const NatureCard: React.FC<NatureCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={{ textAlign: 'left', width: '308px' }}>
      <div style={{ width: '308px', height: '263px', overflow: 'hidden' }}>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h3 style={{ fontSize: '35px', fontWeight: 'bold', marginTop: '15px' }}>{title}</h3>
      <p
        style={{
          fontSize: '23px',
          fontWeight: 'bold',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default NatureCard;


