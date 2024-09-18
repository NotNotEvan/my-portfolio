import React from 'react';
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiVite, SiMui } from 'react-icons/si';

const techStack = [
  {
    name: 'TypeScript',
    icon: (
      <SiTypescript
        size={50}
        color='#d8c6b8'
      />
    )
  },
  {
    name: 'React',
    icon: (
      <FaReact
        size={50}
        color='#d8c6b8'
      />
    )
  },
  {
    name: 'MUI',
    icon: (
      <SiMui
        size={50}
        color='#d8c6b8'
      />
    )
  },
  {
    name: 'Vite',
    icon: (
      <SiVite
        size={50}
        color='#d8c6b8'
      />
    )
  },
  {
    name: 'Docker',
    icon: (
      <FaDocker
        size={50}
        color='#d8c6b8'
      />
    )
  }
];

const Technologies: React.FC = () => {
  return (
    <section
      id='technologies'
      className='py-20 bg-secondary'
    >
      <div className='container mx-auto px-6 text-primary'>
        <h2 className='text-4xl font-bold mb-10'>Technologies I Use</h2>
        <div className='flex justify-center items-center'>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className='flex flex-wrap flex-col justify-center items-center w-1/2 sm:w-1/5 p-4 text-center '
              aria-label={tech.name}
            >
              {tech.icon}
              <p
                className='mt-2 text-lg'
                aria-label={tech.name}
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
