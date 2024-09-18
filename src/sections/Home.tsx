import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-primary text-secondary"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center  px-4"
      >
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Evan!</h1>
        <p className="text-xl">
          {`<FrontendDeveloper/> | <UXEnthusiast/> | <NavyVeteran/>`}
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
