import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Droplets className="h-8 w-8" />
              <span className="text-xl font-bold">AquaAlert</span>
            </Link>
            <p className="text-blue-200">
              Denizlerimizi korumak için farkındalık yaratıyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-blue-200 hover:text-white transition-colors">
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link to="/shor-project" className="text-blue-200 hover:text-white transition-colors">
                  SHOR Projesi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-blue-200">info@aquaalert.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-blue-200">+90 (555) 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="text-blue-200">İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Bülten</h3>
            <p className="text-blue-200 mb-4">
              Güncel haberler ve etkinliklerden haberdar olmak için bültenimize abone olun.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-2 rounded bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} AquaAlert. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;