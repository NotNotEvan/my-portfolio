import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center bg-primary text-secondary'>
      <div className='relative w-full max-w-screen-lg'>
        <div className='absolute  -left-12 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob' />
        <div className='absolute  right-36 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000' />
        <div className='absolute  bottom-0 left-44 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000' />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className='text-center  px-4'
        >
          <h1 className='text-5xl font-bold mb-4'>Hey, I'm Evan!</h1>
          <p className='text-xl'>{`<FrontendDeveloper/> | <UXEnthusiast/> | <NavyVeteran/>`}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
