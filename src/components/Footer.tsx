import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
      }}
    >
      <div className="bg-[#171717]/80 backdrop-brightness-50 w-full h-full py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img src="/favicon.png" alt="Logo Desa" className="w-12 h-12" />
              <img src="/logo-ugm.png" alt="Logo Universitas" className="w-12 h-12" />
            </div>
            <span className="text-xs text-gray-400 mt-2 block mb-4">Program KKN-PPM Universitas Gadjah Mada</span>
            <h3 className="text-xl font-semibold mb-2">Desa Keban Agung</h3>
            <p className="text-sm text-gray-300">
              Website resmi Desa Keban Agung, Kecamatan Lawang Kidul, Kabupaten Muara Enim.
              Dikembangkan sebagai bagian dari Program KKN Universitas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Jelajahi Menu</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-white">Beranda</Link></li>
              <li><Link to="/profil" className="hover:text-white">Profil Desa</Link></li>
              <li><Link to="/infografis" className="hover:text-white">Infografis</Link></li>
              <li><Link to="/berita" className="hover:text-white">Berita Desa</Link></li>
              <li><Link to="/galeri" className="hover:text-white">Galeri</Link></li>
              <li><Link to="/kontak" className="hover:text-white">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Penting</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                {
                  name: 'Kepala Desa',
                  phone: '081234567891',
                  email: 'kepala@kebanagung.id'
                },
                {
                  name: 'Sekretaris Desa',
                  phone: '081234567892',
                  email: 'sekretaris@kebanagung.id'
                },
              ].map((contact) => (
                <li key={contact.name} className="space-y-1">
                  <p className="font-semibold text-white">{contact.name}</p>
                  <div className="flex items-center space-x-2">
                    <PhoneCall size={16} className="text-green-400" />
                    <a href={`tel:${contact.phone}`} className="hover:text-white">{contact.phone}</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle size={16} className="text-green-400" />
                    <a
                      href={`https://wa.me/${contact.phone.replace(/^0/, '62')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-green-400" />
                    <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Desa</h4>
            <p className="text-sm text-gray-300">Kantor Desa Keban Agung</p>
            <p className="text-sm text-gray-300">
              Jl. Raya Keban Agung No. 123, Kec. Lawang Kidul, Kab. Muara Enim, Sumatera Selatan 31300
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Email: <a href="mailto:desa.kebanagung@gmail.com" className="hover:text-white">desa.kebanagung@gmail.com</a>
            </p>
            <p className="text-sm text-gray-300">Telp: <a href="tel:081234567890" className="hover:text-white">0812-3456-7890</a></p>
          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Pemerintah Desa Keban Agung — KKN Universitas Gadjah Mada. Seluruh hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
