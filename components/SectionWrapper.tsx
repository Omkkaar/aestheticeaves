import React from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  className = '', 
  containerClassName = '',
  children, 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 ${dark ? 'bg-dark text-white' : 'bg-base text-dark'} ${className}`}
    >
      <div className={`container mx-auto px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;