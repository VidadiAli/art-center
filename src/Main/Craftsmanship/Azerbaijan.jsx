import React, { useState, useEffect, useRef } from 'react';
import './Azerbaijan.css';
import image1 from '../../Images/aze.jpg';
import { FaArrowCircleUp } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Azerbaijan = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const firstPartHeadingRef = useRef(null);
  const firstPartParagraphRef = useRef(null);
  const listItemRefs = useRef([]);
  listItemRefs.current = [];
  const finalHeadingRef = useRef(null);
  const finalParagraphRef = useRef(null);

  const addToListRef = (el) => {
    if (el && !listItemRefs.current.includes(el)) {
      listItemRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // --- GSAP Animasiyaları Qurulumu ---

    // 1. İlkin Yüklənmə Animasiyası (Bu, səhifə yüklənəndə bir dəfə işləyir, təkrar etmək lazım deyil)
    gsap.fromTo(
      [firstPartHeadingRef.current, firstPartParagraphRef.current],
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.out' }
    );

    // 2. Siyahı Elementləri üçün Təkrarlanan Üçlü Animasiya
    listItemRefs.current.forEach((item, index) => {
      let fromProps = {};
      let toProps = {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          // --- ƏSAS DƏYİŞİKLİK BURADADIR ---
          // Animasiya daxil olanda oynayır, çıxanda tərsinə,
          // yenidən daxil olanda oynayır, yenidən çıxanda tərsinə.
          toggleActions: 'play reverse play reverse',
          // markers: true, // Debugging üçün aktivləşdirə bilərsiniz
        },
      };

      if (index % 3 === 0) {
        fromProps = { x: -100, opacity: 0 };
        toProps.x = 0;
      } else if (index % 3 === 1) {
        fromProps = { opacity: 0 };
        toProps.x = 0;
      } else { // index % 3 === 2
        fromProps = { x: 100, opacity: 0 };
        toProps.x = 0;
      }

      gsap.fromTo(
        item,
        fromProps,
        toProps
      );
    });

    // 3. Sonuncu hissənin animasiyası
    gsap.fromTo(
      [finalHeadingRef.current, finalParagraphRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: finalHeadingRef.current,
          start: 'top 85%',
          // --- ƏSAS DƏYİŞİKLİK BURADADIR ---
          // Eyni davranış burada da tətbiq olunur.
          toggleActions: 'play reverse play reverse',
          // markers: true, // Debugging üçün
        },
      }
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: 'power2.inOut',
    });
  };

  return (
    <div className='azerbaijan'>
      <div className='first-part'>
        {/* <img src={image1} alt="Azərbaycan Sənətkarlığı" /> */}
        <h1 ref={firstPartHeadingRef}>Azərbaycan Sənətkarlığı</h1>
        <p ref={firstPartParagraphRef}>
          Azərbaycan zəngin mədəni irsi və sənətkarlıq ənənələri ilə tanınan qədim bir diyardır. Coğrafi mövqeyi, tarixi və mədəni müxtəlifliyi ölkənin sənətkarlıq sahəsində özünəməxsus izlər qoymasına səbəb olmuşdur. Əsrlər boyu formalaşmış sənətkarlıq sahələri yalnız gündəlik tələbatı ödəməklə kifayətlənməyib, həm də estetik zövqün göstəricisinə çevrilmişdir. Bu sənət sahələri nəinki ölkə daxilində, həm də beynəlxalq səviyyədə Azərbaycan mədəniyyətini tanıtmaqda mühüm rol oynamışdır.
          Azərbaycan sənətkarlığı zəngin motivlər, təbii materiallardan istifadə və yüksək ustalıqla seçilir. Ənənəvi sənət nümunələri həm tarixi, həm də mənəvi dəyərləri özündə əks etdirərək bir növ xalqın yaddaşı funksiyasını yerinə yetirir.
        </p>
      </div>

      <div className='second-part'>
        <h1>Azərbaycan Sənətkarlıq Nümunələri</h1>
        <ol>
          <li ref={el => addToListRef(el)}>
            <span>Xalçaçılıq</span>
            <p>
              Azərbaycan xalçaçılığı UNESCO tərəfindən qeyri-maddi mədəni irs kimi tanınmışdır. Xalçalar müxtəlif bölgələrə məxsus özünəməxsus ornamentlər və rəng palitraları ilə fərqlənir. Qarabağ, Şirvan, Qazax və Təbriz xalçaçılıq məktəbləri dünyada tanınır. Xalçalar təkcə məişət əşyası deyil, həm də milli sənət nümunəsi kimi yüksək qiymətləndirilir.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Zərgərlik</span>
            <p>
              Azərbaycan zərgərləri əsrlərdir ki, qızıl, gümüş və digər qiymətli metallar üzərində incə oyma işləri ilə məşğuldur. Bu sənət həm zinət əşyaları, həm də məişət əşyalarının bəzədilməsində özünü göstərir. Ənənəvi zərgərlik nümunələrində həndəsi və təbiət motivləri üstünlük təşkil edir.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Misgərlik</span>
            <p>
              Mis və tunc məmulatlarının hazırlanması qədim dövrlərdən Azərbaycanın sənətkarlıq ənənələrindən biri olmuşdur. Bu sahədə süfrə əşyaları, qazanlar, qab-qacaqlar və bəzək elementləri xüsusi yer tutur. Həm funksional, həm də estetik əhəmiyyət daşıyan mis məmulatları hər zaman xalq arasında dəyərləndirilib.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Dulusçuluq</span>
            <p>
              Azərbaycan dulusçuluğu qədim tarixə malikdir. Gil məmulatlar, o cümlədən küplər, saxsı qablar və bəzək əşyaları ölkənin müxtəlif bölgələrində fərqli üslublarda hazırlanır. Gəncə, Şəki və Naxçıvanda bu sahə xüsusilə inkişaf etmişdir.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Toxuculuq və Parça Sənəti</span>
            <p>
              Əllə toxunan ipək və pambıq parçalar Azərbaycanda xüsusi əhəmiyyət daşıyır. Şəki və Basqal ipəkləri bu sahənin ən tanınmış nümunələrindəndir. Parçalar ənənəvi geyimlərdə və bəzək əşyalarında geniş istifadə olunur.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Taxta Oyma</span>
            <p>
              Taxta üzərində oyma sənəti Azərbaycanda ənənəvi sənətkarlıq sahələrindən biridir. Qapılar, şəbəkələr (taxta və şüşənin birləşməsindən ibarət pəncərə forması) və mebellər üzərindəki oyma işləri estetik və funksional keyfiyyətləri ilə diqqət çəkir.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Milli Musiqi Alətləri İstehsalı</span>
            <p>
              Azərbaycanda tar, kamança, saz, balaban kimi musiqi alətləri ustaların əl işləridir. Bu sənət sahəsi milli musiqinin qorunması və təbliğində mühüm rol oynayır.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Kaşılçılıq və Divar Bəzəkləri</span>
            <p>
              Azərbaycanın memarlıq abidələrində kaşı işləmələr xüsusi yer tutur. Şirvanşahlar Sarayı və Göy məscid kimi tarixi tikililər bu sənətin möhtəşəm nümunələrini nümayiş etdirir.
            </p>
          </li>
          <li ref={el => addToListRef(el)}>
            <span>Papakçılıq və Dəri İşləri</span>
            <p>
              Həm estetik, həm də praktiki baxımdan əhəmiyyətli olan papakçılıq ənənəvi sənət sahələrindən biridir. Keçə papakları, çarıqlar və digər dəridən hazırlanmış əşyalar milli geyim dəstinin ayrılmaz hissəsi sayılır.
            </p>
          </li>
        </ol>

        <h1 ref={finalHeadingRef}>Azərbaycan Sənətkarlığının Əhəmiyyəti</h1>
        <p ref={finalParagraphRef}>
          Azərbaycan sənətkarlığı sadəcə keçmişin bir izi deyil, həm də gələcək nəsillərə ötürüləcək bir mirasdır. Bu sahə iqtisadiyyatın bir hissəsi olmaqla yanaşı, mədəniyyətin təbliği və milli kimliyin qorunması baxımından xüsusi əhəmiyyət daşıyır. Unudulmuş sənətlərin yaşadılması və müasir dövrdə yenidən təqdim edilməsi bu mədəni irsin canlı saxlanılmasına xidmət edir.
        </p>
      </div>

      {showScrollButton && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowCircleUp className="scroll-icon" />
        </div>
      )}
    </div>
  );
};

export default Azerbaijan;