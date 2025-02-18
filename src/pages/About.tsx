import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Hakkımızda</h1>
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              AquaAlert, denizlerimizi korumak ve deniz kirliliğine karşı farkındalık yaratmak amacıyla kurulmuş bir girişimdir.
            </p>
            {/* Content will be added in the next iteration */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;