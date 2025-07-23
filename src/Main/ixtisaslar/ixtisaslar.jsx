import "./Ixtisaslar.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const specialties = [
    "Media və audiovisual texnologiyaların istismarı",
    "Kompüter şəbəkələri və inzibatçılığı",
    "Veb-dizayn və proqram təminatı",
    "Moda dizaynı",
    "İnteryer dizayn",
    "İşıq operatoru",
    "Satış və marketinq",
    "Tədbirlərin təşkili və idarəedilməsi",
    "Zərgər",
    "Qrafik dizayner",
    "Video çəkiliş üzrə operator",
    "Səs operatoru",
    "Qrimçi-pastijor",
    "Səhnə kostyumları üzrə dərzi",
    "Bərbər",
    "Kompüter sistem inzibatçısı",
    "Florist",
    "Tədbirlərin təşkilatçısı",
    "Kinomontajçı",
    "Video çəkiliş üzrə operator (Dual)",
    "Rəqəmsal məzmun idarəçiliyi",
    "Aşpaz (Dual)",
    "Aşpaz",
    "Xalçaçı",
    "Veb-dizayner və proqram təminatçısı",
    "Geyim üzrə dizayner",
    "Dərzi",
    "Qida və qeyri-qida məhsulları satıcısı, nəzarətçi-kassir",
    "Plastik boru qaynaqçısı",
    "Qənnadçı, şirniyyatçı (Dual)",
    "Dərzi (Dual)",
    "Əməliyyatçı-mühasib",
    "Bərbər-vizajist-manikürçü",
];

const Ixtisaslar = () => {
    return (
        <div className="programs-container-modern">
            <div className="header">
                <h1>
                    MƏDƏNİYYƏT VƏ SƏNƏTKARLIQ ÜZRƏ BAKI DÖVLƏT PEŞƏ TƏHSİL MƏRKƏZİ
                    2025–2026-CI TƏDRİS İLİ ÜZRƏ TƏLƏBƏ QƏBULU ELAN EDİR.
                </h1>
            </div>

            <div className="section specialties-section">
                <h2>✅ İxtisaslar</h2>
                <div className="specialties-grid">
                    {specialties.map((item, index) => (
                        <div key={index} className="specialty-card">
                            <span>{index + 1}.</span> {item}
                        </div>
                    ))}
                </div>
                <p className="date">
                    ⏰ Son Müraciət Tarixi: <strong>11 avqust, 18:00</strong>
                </p>
            </div>

            <div className="social-links">
                <a
                    href="https://www.instagram.com/artcenter.az/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://m.facebook.com/bakucultureandcrafts/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://wa.me/994703100911"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    );
};

export default Ixtisaslar;
