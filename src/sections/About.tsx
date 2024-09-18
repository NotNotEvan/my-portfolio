import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id='about'
      className='py-20 bg-primary text-secondary'
    >
      <div className='container mx-auto px-6 '>
        <h2 className='text-4xl font-bold mb-6'>About Me</h2>
        <p className='text-lg leading-7'>Background info here</p>
      </div>
    </section>
  );
};

export default About;
