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
              Bahçelievler 15 Temmuz Şehitleri İmam Hatip Ortaokulu, sınavla öğrenci alan proje ortaokuludur. İlk senesinde yabancı hocaların desteğiyle Yoğunlaştırılmış İngilizce eğitimi vermektedir. 15 Temmuz Şehitleri AİHL ile aynı kampüs içerisinde olup ortak çalışmalar yürütmektedir. SHORE projesiyle öğrencilerine su okur yazarlığı öğretmeyi ve suyun önemini aşılamaya çalışmış olan okulumuz bu kapsamda 11 etkinlik yürütmüştür.
            </p>
            {/* Content will be added in the next iteration */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;