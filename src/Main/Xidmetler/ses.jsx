import React from 'react';
import './xidmetler.css'; // Assuming your CSS file is named xidmetler.css
import ses1 from './img/ses1.jpg';
import ses2 from './img/ses2.jpg';
import ses3 from './img/ses3.jpg';

// Import icons (you'll need to install react-icons or similar library)
// Example using react-icons:
// npm install react-icons
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Studia = () => {
  return (
    <div className='main'>
      <div className='span-div'>
        <h1>Peşəkar Səs Yazma Studiyası – Səsin Ruhunu Bizimlə Danışdır!</h1>
      </div>
      <div className='studia-div'>
        <div className='studia-child-main'>
          <div className='studia-child'>
            <img src={ses1} alt="Studia Şəkli 1" />
          </div>
          <div className='studia-child'>
            <img src={ses2} alt="Studia Şəkli 2" />
          </div>
          <div className='studia-child'>
            <img src={ses3} alt="Studia Şəkli 2" />
          </div>
        </div>

        <div className='alet-span-div'>
          <span> Studiyamızda Aşağıdakı Xidmətləri Təqdim Edirik </span>
        </div>
        <div className='studia-alet'>
          <div className='studia-alet-child'>
            <span>1.  Səs yazısı</span>
            <span> Yüksək səviyyəli texnika ilə peşəkar keyfiyyətdə vokal və instrumental səs yazısı.</span>
          </div>
          <div className='studia-alet-child'>
            <span>2.  Mahnı sözlərinin yazılması </span>
            <span> Orijinal, emosional və yadda qalan sözlər – hisslərinizə dil veririk!</span>
          </div>
          <div className='studia-alet-child'>
            <span>3. Minisovka (demo versiya)</span>
            <span> Musiqi ideyanızı ilkin mərhələdə formalaşdırırıq və sizə təqdim edirik.</span>
          </div>
          <div className='studia-alet-child'>
            <span>4.Tam mahnı hazırlanması</span>
            <span>Söz, musiqi və səs yazısından mastering-ə qədər bütün mərhələləri biz edirik.</span>
          </div>
        </div>
        <span className='end-span'>Biz yalnız səsi yazmırıq – ideyanı musiqiyə çeviririk. Sizə öz tərzinizi tapmaqda və onu peşəkar səviyyədə təqdim etməkdə kömək edirik.</span>

        {/* New Contact Section */}
        <div className="contact-section">
          <h2>Bizimlə Əlaqə</h2>
          <div className="contact-icons">
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="contact-icon whatsapp">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME" target="_blank" rel="noopener noreferrer" className="contact-icon instagram">
              <FaInstagram />
              <span>Instagram</span>
            </a>
            {/* You can add more contact options here */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Studia;