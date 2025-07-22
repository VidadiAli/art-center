import React from 'react';
import './xidmetler.css'; // Assuming your CSS file is named xidmetler.css
import studiaVideo from './img/studiavideo.mp4';
import studiaImage1 from './img/studia1.jpg';
import studiaImage2 from './img/studia2.jpg';
import studiaImage3 from './img/studia3.jpg';

// Import icons (you'll need to install react-icons or similar library)
// Example using react-icons:
// npm install react-icons
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Studia = () => {
  return (
    <div className='main'>
      <div className='span-div'>
        <h1>Tədbirlər üçün Peşəkar Studiyamız Kirayə Verilir!</h1>
      </div>
      <div className='video-div'>
        <video autoPlay loop muted playsInline disableRemotePlayback disablePictureInPicture>
          <source src={studiaVideo} type="video/mp4" />
          Brauzeriniz video teqini dəstəkləmir.
        </video>
      </div>
      <div className='studia-div'>
        <div className='studia-child-main'>
          <div className='studia-child'>
            <img src={studiaImage1} alt="Studia Şəkli 1" />
          </div>
          <div className='studia-child'>
            <img src={studiaImage2} alt="Studia Şəkli 2" />
          </div>
          <div className='studia-child'>
            <img src={studiaImage3} alt="Studia Şəkli 2" />
          </div>
        </div>

        <div className='alet-span-div'>
          <span> Studiyamızda Təqdim Olunan Xidmətlər və Avadanlıqlar </span>
        </div>
        <div className='studia-alet'>
          <div className='studia-alet-child'>
            <span>1. Səs avadanlığı</span>
            <span> Mikşer, kalonkalar, mikrofonlar — yüksək keyfiyyətli səs üçün hər şey mövcuddur.</span>
          </div>
          <div className='studia-alet-child'>
            <span>2. Foto və video çəkiliş</span>
            <span> Peşəkar texnika ilə hər anınızı əbədiləşdiririk.</span>
          </div>
          <div className='studia-alet-child'>
            <span>3. Tədbir təşkilatçılığı</span>
            <span> Tədbirin bütün detalları – planlama, bəzək, idarəetmə – bizim komandamız tərəfindən həyata keçirilir.</span>
          </div>
          <div className='studia-alet-child'>
            <span>4. Proyektor və ekran</span>
            <span>Təqdimatlar, slayd şoular və videolar üçün ideal imkan.</span>
          </div>
        </div>
        <div className='alet-span-div'>
          <span> Uyğun tədbir növləri</span>
        </div>
        <div className='studia-alet'>
          <div className='studia-alet-child'>
            <span>1. Seminar və təlimlər</span>
          </div>
          <div className='studia-alet-child'>
            <span>2. Fotosessiyalar və videolar</span>
          </div>
          <div className='studia-alet-child'>
            <span>3. Mini konsertlər və təqdimatlar</span>
          </div>
          <div className='studia-alet-child'>
            <span>4. Workshop-lar və yaradıcılıq görüşləri</span>
          </div>
          <div className='studia-alet-child'>
            <span>5. Ad günü və özəl tədbirlər</span>
          </div>
        </div>
        <span className='end-span'>Studiyamız həm texniki baxımdan tam təchiz olunub, həm də rahat və zövqlü mühit təklif edir. Siz yalnız iştirak etmək, biz isə hər şeyi sizin üçün hazırlamaq üçün buradayıq!</span>

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