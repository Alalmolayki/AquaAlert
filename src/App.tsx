import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplets, ArrowRight, Mail, Phone, Menu, X } from 'lucide-react';
import EventDetail from './components/EventDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToHome = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const events = [
    {
      id: 'sahil-temizlik',
      title: 'Sahil Temizlik Günü',
      date: '15 Nisan 2024',
      image: 'https://images.unsplash.com/photo-1618477462146-817b6e4d4a8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Yerel toplulukla birlikte sahil temizliği etkinliği.',
      images: Array(20).fill(null).map((_, index) => ({
        src: `https://images.unsplash.com/photo-${1618477462146 + index}-817b6e4d4a8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`,
        width: 800,
        height: 600,
        title: `Sahil Temizlik Günü - Fotoğraf ${index + 1}`
      }))
    },
    {
      id: 'deniz-yasami',
      title: 'Deniz Yaşamı Semineri',
      date: '22 Nisan 2024',
      image: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Deniz ekosistemi ve koruma yöntemleri hakkında bilgilendirme semineri.',
      images: Array(20).fill(null).map((_, index) => ({
        src: `https://images.unsplash.com/photo-${1544552866 + index}-d3ed42536cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`,
        width: 800,
        height: 600,
        title: `Deniz Yaşamı Semineri - Fotoğraf ${index + 1}`
      }))
    },
    {
      id: 'plastik-atik',
      title: 'Plastik Atık Çalıştayı',
      date: '29 Nisan 2024',
      image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Plastik kirliliğini azaltma stratejileri üzerine çalıştay.',
      images: Array(20).fill(null).map((_, index) => ({
        src: `https://images.unsplash.com/photo-${1621451537084 + index}-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`,
        width: 800,
        height: 600,
        title: `Plastik Atık Çalıştayı - Fotoğraf ${index + 1}`
      }))
    }
  ];

  const partners = [
    { name: 'Deniz Koruma Derneği', logo: 'Partner 1' },
    { name: 'Mavi Dünya Vakfı', logo: 'Partner 2' },
    { name: 'Temiz Denizler İnisiyatifi', logo: 'Partner 3' },
    { name: 'Okyanus Araştırmaları Merkezi', logo: 'Partner 4' }
  ];

  if (location.pathname.startsWith('/event/')) {
    return <Routes>
      <Route path="/event/:eventId" element={<EventDetail events={events} />} />
    </Routes>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={goToHome}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <Droplets className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">AquaAlert</span>
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'events', 'shor', 'partners', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {section === 'about' && 'Hakkımızda'}
                  {section === 'events' && 'Etkinlikler'}
                  {section === 'shor' && 'SHOR Projesi'}
                  {section === 'partners' && 'Paydaşlarımız'}
                  {section === 'contact' && 'İletişim'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['about', 'events', 'shor', 'partners', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    {section === 'about' && 'Hakkımızda'}
                    {section === 'events' && 'Etkinlikler'}
                    {section === 'shor' && 'SHOR Projesi'}
                    {section === 'partners' && 'Paydaşlarımız'}
                    {section === 'contact' && 'İletişim'}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

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
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              Daha Fazla Bilgi
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hakkımızda</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-xl mb-6">
                AquaAlert, denizlerimizi korumak ve deniz kirliliğine karşı farkındalık yaratmak amacıyla kurulmuş bir girişimdir.
                Projemiz, okyanus kirliliğini azaltmak ve deniz yaşamını korumak için çalışmaktadır.
              </p>
              <p className="text-lg mb-6">
                Denizlerimizin karşı karşıya olduğu tehditler her geçen gün artmaktadır. Küresel ısınma, aşırı avlanma,
                plastik kirliliği ve endüstriyel atıklar, deniz ekosistemlerini ciddi şekilde tehdit etmektedir.
                Bu sorunlara karşı harekete geçmek ve çözüm üretmek için çalışıyoruz.
              </p>
              <p className="text-lg">
                Bilimsel araştırmalar, eğitim programları ve topluluk katılımı yoluyla deniz kirliliğini azaltmak ve
                deniz yaşamını korumak için sürdürülebilir çözümler geliştiriyoruz. Yerel topluluklar, sivil toplum
                kuruluşları ve kamu kurumlarıyla işbirliği yaparak, denizlerimizin korunması için ortak çaba gösteriyoruz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Etkinlikler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.location.href = `/event/${event.id}`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-blue-600 mb-2">{event.date}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SHOR Project Section */}
      <section id="shor" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SHOR Projesi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="SHOR Project"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Sürdürülebilir Habitat ve Okyanus Restorasyonu</h3>
                <p className="text-gray-600 mb-6">
                  SHOR Projesi, deniz ekosistemlerinin korunması ve restorasyonu için kapsamlı bir yaklaşım sunmaktadır.
                  Projemiz, bilimsel araştırmalar ve topluluk katılımı yoluyla sürdürülebilir çözümler geliştirmeyi
                  hedeflemektedir.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                        1
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Deniz habitatlarının haritalandırılması</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                        2
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Kirlilik kaynaklarının belirlenmesi</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                        3
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Restorasyon planlarının geliştirilmesi</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Paydaşlarımız</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4"
                >
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">{partner.logo}</span>
                  </div>
                  <h3 className="text-center font-semibold text-gray-800">{partner.name}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Proje Sorumluları</h3>
              <div className="space-y-6">
                {[
                  { name: 'Ahmet Yılmaz', email: 'ahmet@aquaalert.org', phone: '+90 555 123 4567' },
                  { name: 'Ayşe Demir', email: 'ayse@aquaalert.org', phone: '+90 555 234 5678' },
                  { name: 'Mehmet Kaya', email: 'mehmet@aquaalert.org', phone: '+90 555 345 6789' },
                ].map((contact, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-5 w-5 mr-2" />
                        <a
                          href={`mailto:${contact.email}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-2" />
                        <a
                          href={`tel:${contact.phone}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <button
              onClick={goToHome}
              className="flex items-center space-x-2 mb-4 md:mb-0 focus:outline-none"
            >
              <Droplets className="h-8 w-8" />
              <span className="text-xl font-bold">AquaAlert</span>
            </button>
            <div className="text-center md:text-right">
              <p className="text-blue-200 text-sm">
                &copy; {new Date().getFullYear()} AquaAlert. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;