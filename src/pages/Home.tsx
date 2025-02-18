import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Waves, Fish, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1583842761824-701a8034c1c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Denizlerimizi Korumak İçin Harekete Geçin
            </h1>
            <p className="text-xl mb-8">
              AquaAlert, deniz kirliliğine karşı farkındalık yaratmak ve çözüm üretmek için çalışan
              bir girişimdir.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              Daha Fazla Bilgi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Denizlerimizi Neden Korumalıyız?
            </h2>
            <p className="text-xl text-gray-600">
              Deniz ekosisteminin korunması, gezegenimizin geleceği için hayati önem taşır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-blue-50 rounded-lg"
            >
              <Waves className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Temiz Okyanuslar</h3>
              <p className="text-gray-600">
                Okyanus kirliliğini azaltarak deniz yaşamını koruyoruz.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-blue-50 rounded-lg"
            >
              <Fish className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deniz Yaşamı</h3>
              <p className="text-gray-600">
                Deniz canlılarının yaşam alanlarını korumak için çalışıyoruz.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-blue-50 rounded-lg"
            >
              <Trash2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Plastik Kirliliği</h3>
              <p className="text-gray-600">
                Plastik atıkların denizlere karışmasını önlemek için projeler geliştiriyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Bize Katılın</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Denizlerimizi korumak için yapabileceğiniz çok şey var. Etkinliklerimize katılın,
            gönüllü olun veya projelerimize destek verin.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
          >
            İletişime Geçin
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;