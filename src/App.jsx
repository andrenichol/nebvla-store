import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaBars, FaTimes, FaShieldAlt, FaBolt, FaUserNinja, FaHeadset, FaChartLine, FaGamepad, FaUsers, FaMedal, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import logoImg from './assets/logo.png';
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  // Daftar gambar background (Silakan ganti URL/path di bawah ini dengan gambar Mobile Legends Anda)
  const heroImages = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Foto 1
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Foto 2
    "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"  // Foto 3
  ];

  // Phone number placeholder, user will provide the actual one
  const waNumber = "628212372200";
  const waText = "Halo%20min,%20saya%20mau%20order%20joki%20Nebvla";
  const waLink = `https://api.whatsapp.com/send?phone=${waNumber}&text=${waText}`;

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false, // allows animation to run every time you scroll up/down
      offset: 50,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Slideshow interval
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(bgInterval);
    };
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo" data-aos="fade-right">
            <img src={logoImg} alt="Nebvla Store Logo" className="logo-img" />
            NEBVLA STORE
          </div>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Keunggulan</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Layanan</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimoni</a></li>
            <li data-aos="fade-left" data-aos-delay="200">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>
                <FaWhatsapp /> Order
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero Background ${index + 1}`}
            className={`hero-bg ${index === currentBg ? 'active' : ''}`}
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title" data-aos="fade-up" data-aos-duration="1000">
            JASA JOKI GAME <span className="text-gradient">MURAH, CEPAT & TERPERCAYA</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
            Proses aman tanpa antri, 100% garansi naik rank. Tingkatkan tier Mobile Legends kamu hingga Immortal bersama pro player Nebvla!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} data-aos="zoom-in" data-aos-delay="400">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FaWhatsapp /> JOKI SEKARANG
            </a>
            <a href="#services" className="btn-outline">
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section glass" style={{ margin: '2rem 0' }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">Kenapa Pilih <span className="text-gradient">Nebvla Store?</span></h2>
          <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">Alasan mengapa ribuan player mempercayakan akunnya kepada kami.</p>

          <div className="features-grid">
            <div className="feature-card glass" data-aos="fade-up" data-aos-delay="100">
              <FaShieldAlt className="feature-icon" />
              <h3 className="feature-title">Aman 100%</h3>
              <p className="text-muted">Akun kamu dijamin aman. Tanpa cheat, tanpa script, pengerjaan murni dari skill pro player.</p>
            </div>
            <div className="feature-card glass" data-aos="fade-up" data-aos-delay="200">
              <FaBolt className="feature-icon" />
              <h3 className="feature-title">Proses Cepat</h3>
              <p className="text-muted">Order langsung diproses tanpa antri. Cocok untuk push rank dadakan.</p>
            </div>
            <div className="feature-card glass" data-aos="fade-up" data-aos-delay="300">
              <FaUserNinja className="feature-icon" />
              <h3 className="feature-title">Worker Pro Player</h3>
              <p className="text-muted">Dikerjakan langsung oleh Top Global dan eks-pro player berpengalaman.</p>
            </div>
            <div className="feature-card glass" data-aos="fade-up" data-aos-delay="400">
              <FaHeadset className="feature-icon" />
              <h3 className="feature-title">Layanan 24 Jam</h3>
              <p className="text-muted">Admin standby 24 jam untuk update progress dan menerima pesanan kapan saja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="zoom-in" style={{ textTransform: 'uppercase', fontStyle: 'italic' }}>Layanan Kami</h2>
          <p className="section-subtitle" data-aos="zoom-in" data-aos-delay="100">Pilih paket joki yang sesuai dengan kebutuhan push rank kamu.</p>

          <div className="services-grid new-layout">
            <div className="service-card-new glass" data-aos="fade-up">
              <FaChartLine className="service-icon-new" />
              <h3 className="service-title-new">Joki Rank</h3>
              <p className="service-desc-new">Naikkan rank kamu dari tier apa pun hingga Immortal dengan player berpengalaman.</p>
            </div>
            <div className="service-card-new glass" data-aos="fade-up" data-aos-delay="100">
              <FaGamepad className="service-icon-new" />
              <h3 className="service-title-new">Joki Classic</h3>
              <p className="service-desc-new">Selesaikan match Classic dengan cepat dan efisien. Cocok untuk kamu yang ingin push quest atau bermain fleksibel tanpa repot.</p>
            </div>
            <div className="service-card-new glass" data-aos="fade-up" data-aos-delay="200">
              <FaUsers className="service-icon-new" />
              <h3 className="service-title-new">Joki Gendong</h3>
              <p className="service-desc-new">Main bareng worker dari Nebvla Store. Belajar gameplay, rotasi, dan meta sambil naik rank dengan aman.</p>
            </div>
            <div className="service-card-new glass" data-aos="fade-up" data-aos-delay="300">
              <FaMedal className="service-icon-new" />
              <h3 className="service-title-new">Joki MMR</h3>
              <p className="service-desc-new">Tingkatkan poin MMR hero andalan kamu hingga mencapai Supreme / Top Global dengan winrate tinggi.</p>
            </div>
            <div className="service-card-new glass" data-aos="fade-up" data-aos-delay="400">
              <FaStar className="service-icon-new" />
              <h3 className="service-title-new">Joki Rising Star</h3>
              <p className="service-desc-new">Layanan fast progress untuk menaikkan bintang dengan cepat dan stabil. Dikerjakan oleh player high-rank berpengalaman.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section glass" style={{ margin: '2rem 0' }}>
        <div className="container">
          <h2 className="section-title" data-aos="flip-down">Testimoni <span className="text-gradient">Pelanggan</span></h2>
          <p className="section-subtitle" data-aos="flip-down" data-aos-delay="100">Bukti nyata dari ribuan klien Nebvla Store yang puas.</p>

          <div className="testi-grid">
            <div className="testi-card glass" data-aos="flip-left" data-aos-delay="200">
              <div className="testi-quote">"</div>
              <div style={{ height: '200px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>
                [Screenshot Chat 1]
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Gila cepet banget naiknya, baru ditinggal tidur bentar udah Mythic aja. Thanks Nebvla!"</p>
              <p className="testi-name">- @user_mlbb123</p>
            </div>

            <div className="testi-card glass" data-aos="flip-right" data-aos-delay="400">
              <div className="testi-quote">"</div>
              <div style={{ height: '200px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>
                [Screenshot Chat 2]
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Admin fast respon, workernya juga jago parah pas joki gendong. Recommended abis."</p>
              <p className="testi-name">- Budi Santoso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
              <div className="logo" style={{ marginBottom: '1rem' }}>
                <img src={logoImg} alt="Nebvla Store Logo" className="logo-img" />
                NEBVLA STORE
              </div>
              <p className="text-muted" style={{ maxWidth: '300px' }}>
                Layanan joki game profesional, cepat, murah, dan 100% aman. Solusi terbaik untuk kebutuhan push rank kamu.
              </p>
            </div>

            <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
              <h3>Tautan Cepat</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Keunggulan</a></li>
                <li><a href="#services">Layanan</a></li>
                <li><a href="#testimonials">Testimoni</a></li>
              </ul>
            </div>

            <div className="footer-col" data-aos="fade-up" data-aos-delay="300">
              <h3>Hubungi Kami</h3>
              <ul className="footer-links">
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaWhatsapp style={{ color: '#25D366' }} /> WhatsApp: 0821-2372-200
                </li>
                <li>Jam Operasional: 24 Jam</li>
              </ul>
              <div className="social-links" style={{ marginTop: '1.5rem' }}>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><FaTiktok /></a>
                <a href={waLink} className="social-link"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom" data-aos="fade-in" data-aos-delay="400">
            <p>&copy; {new Date().getFullYear()} Nebvla Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
