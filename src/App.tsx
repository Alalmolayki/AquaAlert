import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, ArrowRight, Mail, Phone, Menu, X, GraduationCap } from 'lucide-react';
import EventDetail from './components/EventDetail';
import sch_2 from "/public/images/School_logos/logo7.png";
import logo2 from "/public/images/School_logos/logo6.png";
import sch_1 from "/public/images/School_logos/logo1.png";
import e1_1 from "/public/images/Events/e1_1.jpg"; import e1_2 from "/public/images/Events/e1_2.jpg"; import e1_3 from "/public/images/Events/e1_3.jpg"; import e1_4 from "/public/images/Events/e1_4.jpg"; import e1_5 from "/public/images/Events/e1_5.jpg";
import e2_1 from "/public/images/Events/e2_1.jpg"; import e2_2 from "/public/images/Events/e2_2.jpg"; import e2_3 from "/public/images/Events/e2_3.jpg"; import e2_4 from "/public/images/Events/e2_4.jpg"; import e2_5 from "/public/images/Events/e2_5.jpg";
import e3_1 from "/public/images/Events/e3_1.jpg"; import e3_2 from "/public/images/Events/e3_2.jpg"; import e3_3 from "/public/images/Events/e3_3.jpg"; import e3_4 from "/public/images/Events/e3_4.jpg"; import e3_5 from "/public/images/Events/e3_5.jpg";
import e4_1 from "/public/images/Events/e4_1.jpg"; import e4_2 from "/public/images/Events/e4_2.jpg"; import e4_3 from "/public/images/Events/e4_3.jpg"; import e4_4 from "/public/images/Events/e4_4.jpg"; import e4_5 from "/public/images/Events/e4_5.jpg";
import e5_1 from "/public/images/Events/e5_1.jpg"; import e5_2 from "/public/images/Events/e5_2.jpg"; import e5_3 from "/public/images/Events/e5_3.jpg"; import e5_4 from "/public/images/Events/e5_4.jpg"; import e5_5 from "/public/images/Events/e5_5.jpg";
import e6_1 from "/public/images/Events/e6_1.jpg"; import e6_2 from "/public/images/Events/e6_2.jpg"; import e6_3 from "/public/images/Events/e6_3.jpg"; import e6_4 from "/public/images/Events/e6_4.jpg"; import e6_5 from "/public/images/Events/e6_5.jpg";
import img1 from "/public/images/SHORE/img1.jpg"; import shore_logo1 from "/public/images/SHORE/logo1.jpg";
import spon_logo1 from "/public/images/Logos/ytu.png"; import spon_logo2 from "/public/images/Logos/gop_bilsem.png"; import spon_logo3 from "/public/images/Logos/istac.png"; import spon_logo4 from "/public/images/Logos/bahcelievler.png";
import video from "/public/images/SHORE/video.mp4";

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
      id: 'okuryazarlik',
      title: 'Deniz Okuryazarlığını Bir Belgeselle Tanıttık.',
      date: '16 Ekim 2024',
      image: e6_1,
      description: "Yeni etkinliğimizle projemizi okulumuzun sınırları dışına taşıyoruz. Fatih Sultan Mehmet İlkokulu'nu davet ettiğimiz etkinliğimizde deniz kirliliğine yapay zeka ile savaş açtık. Öğrencilerimiz, Fatih Sultan Mehmet İlkokulu öğrencilerine, deniz canlılarını, kirletici maddelerden nasıl ayıracağını eğlenceli bir oyunla yapay zeka kullanarak öğretti.",
      logo: logo2,
      images: [
        {
          src: e6_1, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 1'
        },
        {
          src: e6_2, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 2'
        },
        {
          src: e6_3, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 3'
        },
        {
          src: e6_4, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 4'
        },
        {
          src: e6_5, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 5'
        }
      ]
    },
    {
      id: 'yapay-zeka-etkinligi',
      title: 'Yapay Zeka ile Deniz Kirliliğine Mücadele: Eğlenceli Etkinlik',
      date: '27 Kasım 2024',
      image: e4_1,
      description: "Yeni etkinliğimizle projemizi okulumuzun sınırları dışına taşıyoruz. Fatih Sultan Mehmet İlkokulu'nu davet ettiğimiz etkinliğimizde deniz kirliliğine yapay zeka ile savaş açtık. Öğrencilerimiz, Fatih Sultan Mehmet İlkokulu öğrencilerine, deniz canlılarını, kirletici maddelerden nasıl ayıracağını eğlenceli bir oyunla yapay zeka kullanarak öğretti.",
      logo: logo2,
      images: [
        {
          src: e4_1, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 1'
        },
        {
          src: e4_2, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 2'
        },
        {
          src: e4_3, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 3'
        },
        {
          src: e4_4, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 4'
        },
        {
          src: e4_5, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 5'
        }
      ]
    },
    {
      id: 'sifir-atik-akademisi',
      title: "Sıfır Atık Akademisi'nde Eğitim",
      date: '11 Aralık 2024',
      image: e2_1,
      description: 'Bahçelievler Belediyesi tarafından Bahçelievler Kongre Merkezi’nde oluşturulan  Sıfır Atık Akademisi’nde öğrencilerimiz sıfır atık konusunda akademide görevli çevre mühendisi ve makine mühendisleri tarafından okyanus kirliliği ve yenilenebilir enerji konusunda bilgilendirildi.',
      logo: logo2,
      images: [
        {
          src: e2_1, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 1'
        },
        {
          src: e2_2, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 2'
        },
        {
          src: e2_3, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 3'
        },
        {
          src: e2_4, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 4'
        },
        {
          src: e2_5, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 5'
        }
      ]   
    },
    {
      id: 'halic-temizligi',
      title: 'Haliç Temizliği ve Deniz Atıklarıyla Mücadele',
      date: '08 Ocak 2025',
      image: e3_1,
      description: "Yeni etkinliğimizde İstanbul Büyükşehir Belediyesi İSTAÇ Sütlüce Deniz Hizmetlerine bağlı Haliç tesisinde Haliç'in temizlenmesinde kullanılan makine ve cihazları görüp yetkililerden bilgi aldık. 13 temizlik  teknesinin görev yaptığı birimde günlük ortalama 20-30 m3 ( 2,5 – 3 ton ) atık denizden çıkarıldığını öğrendik. Çoğunlukla plastik atıkların toplandığını belirten görevliler vatandaşlarımızın denizlerimizi koruma adına daha duyarlı olması gerektiğini belirtti.",
      logo: sch_2,
      images: [
        {
          src: e3_1, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 1'
        },
        {
          src: e3_2, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 2'
        },
        {
          src: e3_3, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 3'
        },
        {
          src: e3_4, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 4'
        },
        {
          src: e3_5, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 5'
        }
      ]
    },
    {
      id: 'fotograf-sergisi',
      title: 'AquaAlert Fotoğraf Sergisi',
      date: '24 Şubat 2025',
      image: e5_1,
      description: "Yeni etkinliğimizde İstanbul Büyükşehir Belediyesi İSTAÇ Sütlüce Deniz Hizmetlerine bağlı Haliç tesisinde Haliç'in temizlenmesinde kullanılan makine ve cihazları görüp yetkililerden bilgi aldık. 13 temizlik  teknesinin görev yaptığı birimde günlük ortalama 20-30 m3 ( 2,5 – 3 ton ) atık denizden çıkarıldığını öğrendik. Çoğunlukla plastik atıkların toplandığını belirten görevliler vatandaşlarımızın denizlerimizi koruma adına daha duyarlı olması gerektiğini belirtti.",
      logo: sch_2,
      images: [
        {
          src: e5_1, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 1'
        },
        {
          src: e5_2, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 2'
        },
        {
          src: e5_3, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 3'
        },
        {
          src: e5_4, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 4'
        },
        {
          src: e5_5, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 5'
        }
      ]
    },
    {
      id: 'mikroorganizmalara-baktik',
      title: 'Deniz Sularındaki Mikroorganizmalara Baktık',
      date: '26 Şubat 2025',
      image: e1_1,
      description: 'Yeni etkinliğimizi Yıldız Teknik Üniversitesi Çevre Mühendisliği bölümünden araştırma  görevlisi Dr. Umut METİN ile yaptık. Deniz sularının içinde yaşayan mikroorganizmaları mikroskop ile görmeye çalıştık. Ayrıca Dr. Umut METİN bizlere denizlerdeki kirliliklerin nasıl meydana geldiğini anlattı.',
      logo: sch_2,
      images: [
        {
          src: e1_1, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 1'
        },
        {
          src: e1_2, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 2'
        },
        {
          src: e1_3, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 3'
        },
        {
          src: e1_4, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 4'
        },
        {
          src: e1_5, 
          width: 800,
          height: 600,
          title: 'Fotoğraf 5'
        }
      ]      
    },
    
    
    
  ];

  const partners = [
    { name: 'Yıldız Teknik Üniversitesi', logo: spon_logo1 },
    { name: 'Gazi Osmanpaşa Bilim ve Sanat Merkezi', logo: spon_logo2 },
    { name: 'İSTAÇ Sütlüce Deniz Hizmetleri Şefliği', logo: spon_logo3 },
    { name: 'Bahçelievler Sıfır Atık Merkezi', logo: spon_logo4 }
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
                className="flex items-center space-x-2 focus:outline-none hover:opacity-80 transition-opacity"
                aria-label="Go to homepage"
              >
                <Droplets className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-blue-600">AquaAlert</span>
              </button>
            </div>
            
            {/* School Logo */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-600"><img src={sch_1} alt="" /></span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'events', 'shore', 'partners', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:text-blue-600"
                >
                  {section === 'about' && 'Hakkımızda'}
                  {section === 'events' && 'Etkinlikler'}
                  {section === 'shore' && 'SHORE Projesi'}
                  {section === 'partners' && 'Paydaşlarımız'}
                  {section === 'contact' && 'İletişim'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
                aria-expanded={isMenuOpen}
                aria-label="Main menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-gray-200"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {/* School Logo for Mobile */}
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-600"><img src={sch_1} alt="" /></span>
                  </div>
                  
                  {['about', 'events', 'shore', 'partners', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {section === 'about' && 'Hakkımızda'}
                      {section === 'events' && 'Etkinlikler'}
                      {section === 'shore' && 'SHORE Projesi'}
                      {section === 'partners' && 'Paydaşlarımız'}
                      {section === 'contact' && 'İletişim'}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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

            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Etkinlikler</h2>
            </div>
            <div className="w-full max-w-2xl mx-auto mb-12">
              <video
                className="w-full rounded-lg shadow-lg"
                controls
                preload="metadata" 
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -5 }}
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
                    <p className="text-sm text-gray-500 mt-2">Detaylar için tıklayın</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SHORE Project Section */}
      <section id="shore" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex' }}>
            
              <img src={shore_logo1} style={{ marginBottom: "20px", marginRight: "10px" }} height="5px" width="250px" alt="" />
              <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ marginTop: "13px" , fontSize: "45px"}}>Projesi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={img1}
                  alt="SHORE Project"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Sürdürülebilir Habitat ve Okyanus Restorasyonu</h3>
                <p className="text-gray-600 mb-6">
                Su okuryazarlığı kavramı, bireylerin su kaynaklarını sürdürülebilir bir şekilde yönetme, koruma ve kullanma becerisini kapsar; suyun önemi konusunda farkındalık yaratmayı, etkili su kaynakları yönetimini sağlamayı ve kirliliği önleme çabalarını içermektedir. Bu bağlamda, öğrencilerimizin yanı sıra ailelerini de kapsayacak şekilde atölyeler, konferanslar, tanıtımlar, kısa filmler, çevrimiçi kampanyalar, sergiler ve sürdürülebilir su kullanımı ve yönetimi konusundaki farkındalık seviyelerinin proje öncesi ve sonrası değerlendirmelerini içeren bir dizi etkinlik düzenlemeyi amaçlıyoruz. Hedefimiz, bireylerin ve toplulukların deniz kirliliğinin nedenleri ve bu konudaki sorunlar hakkında bilgi düzeylerini artırmak, bu soruna çözüm bulma istekliliğini teşvik etmek ve devam eden girişimleri eleştirel bir şekilde değerlendirmelerini sağlamaktır.
                </p>
                
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
                  <div className="w-32 h-32 rounded-lg flex items-center justify-center">
                    <img src={partner.logo} alt="" className="w-48 h-48 object-contain transform scale-150" />
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
                  { name: 'Cenkay Özen', email: 'cenkayozen@gmail.com', phone: '+90 553 646 8314' },
                  { name: 'Mahmut Sami Başarıcı', email: 'msbasarici@gmail.com', phone: '+90 532 580 0802' },
                  { name: 'Kamil Karakurt', email: 'kamilkarakurt@gmail.com', phone: '+90 534 525 8041' },
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
              className="flex items-center space-x-2 mb-4 md:mb-0 focus:outline-none hover:opacity-80 transition-opacity"
              aria-label="Go to homepage"
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