import React, { useState } from 'react';
// useParams və coursesItem bu komponentdə istifadə olunmadığı üçün onları sildim.
// Əgər gələcəkdə lazım olsa, yenidən əlavə edə bilərsiniz.
// import { useParams } from 'react-router-dom';
// import { coursesItem } from '../../Data/coursesItem';
import './bcc.css'; // Stil faylı hələ də eyni qalır

// React Icons-dan lazımi ikonları import edin
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Yapimci = () => { // Komponent adını Yapimci olaraq dəyişdirdim (böyük hərf)
    const [display, setDisplay] = useState('inline-block');

    return (
        <div className='education'>
            <h1 style={{ display: display }}>Yapıncı Tekstil</h1>
            <p style={{ display: display }}>
                Artcenter Azerbaijan təhsil proqramları ilə sənətkarların bilik və bacarıqlarını artırmağı hədəfləyir.
                Təhsil bölümü üç əsas istiqaməti əhatə edir: qısa müddətli kurslar, master klasslar və inklüziv kurslar.
                Qısa müddətli kurslar fərdi bacarıqları inkişaf etdirmək və yeni texnikalar öyrənmək istəyənlər
                üçün nəzərdə tutulub. Master klasslar isə tanınmış sənətkarların iştirakı ilə peşəkar təcrübə mübadiləsini
                təmin edir. İnklüziv kurslar xüsusi ehtiyacı olan şəxslər üçün yaradılıb və cəmiyyətin hər bir üzvünə
                sənətlə ifadə imkanı yaradır. Bu proqramlar həm ənənəvi, həm də müasir sənət formalarını əhatə edir.
                Məqsədimiz, sənətin gücü ilə yaradıcı inkişafı dəstəkləmək və Azərbaycanın zəngin sənət irsini qorumaqdır.
                Təhsil bölməsi hər kəs üçün yeni imkanlar və ilham mənbəyidir.
            </p>

            <div className="social-links">
            <span>Daha Ətraflı Məlumat Üçün:</span> 
                <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={25} />
                </a>
                <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook size={25}/>
                </a>
                <a href="https://www.youtube.com/your_youtube_channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube size={25} />
                </a>
                <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp size={25}/>
                </a>
            </div>
        </div>
    );
};

export default Yapimci;