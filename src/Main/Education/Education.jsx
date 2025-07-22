import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { coursesItem } from '../../Data/coursesItem';
import './Education.css';
import { FaArrowCircleUp } from 'react-icons/fa'; // 👈 Import scroll-to-top icon

const Education = () => {
    const { courseUrl } = useParams();
    const [display, setDisplay] = useState('inline-block');
    const [profession, setProfession] = useState(1);
    const [showScrollButton, setShowScrollButton] = useState(false); // 👈 Yeni state

    const goProfession = (id) => {
        setProfession(id);
        setDisplay('none');
    };

    // 👇 Scroll düyməsini göstərmək üçün effekt
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='education'>
            <h1 style={{ display: display }}>Təhsil</h1>
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
            {
                coursesItem.map((e) => {
                    if (e.nameOfItem.split(" ").join("-").toLowerCase() === courseUrl) {
                        return <div key={e.id} className='education-main-part'>
                            <div className='education-defined'>
                                {
                                    e.courses.map((f) => (
                                        <button key={f.id} onClick={() => goProfession(f.id)}>
                                            {f.coursesName}
                                        </button>
                                     
                                    ))
                                }
                            </div>

                            <h1 style={{ display: display }}>{e.nameOfItem}</h1>
                            <p style={{ display: display }}>{e.textOfItem}</p>

                            <div className='education-view'>
                                {
                                    e.courses.map((f) => {
                                        if (f.id === profession) {
                                            return (
                                                <div key={f.id + f.coursesName} className='item'>
                                                    <div className='item-first-part'>
                                                        <img
                                                            src={`${f.coursesImages.slice(0, 8)}raw.githubusercontent.com${f.coursesImages.slice(18, f.coursesImages.indexOf("blob"))}${f.coursesImages.slice(f.coursesImages.indexOf("blob") + 4)}`}
                                                            alt=""
                                                        />
                                                        <div className='item-inform'>
                                                            <h1>{f.coursesName}: <span>{f.coursesImage}</span></h1>
                                                            <p>{f.coursesInform}</p>
                                                        </div>
                                                    </div>
                                                    <div className='item-second-part'>
                                                        <div>
                                                            <h1>Nələri Öyrənəcəksiniz?</h1>
                                                            <ol>
                                                                {f.coursesLearning.map((g) => (
                                                                    <li key={f.id + g.id}>
                                                                        <span>{g.span}</span>
                                                                        <p>{g.p}</p>
                                                                    </li>
                                                                ))}
                                                            </ol>
                                                        </div>
                                                        <div>
                                                            <h1>Təlimlər Kimlər Üçündür?</h1>
                                                            <ul style={{ listStyleType: 'disc' }}>
                                                                {f.coursesWho.map((g) => (
                                                                    <li key={f.id + g.id}>
                                                                        <p>{g.inform}</p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h1>Üstünlüklərimiz:</h1>
                                                            <ol>
                                                                {f.coursesWhyUs.map((g) => (
                                                                    <li key={f.id + g.id}>
                                                                        <span>{g.span}</span>
                                                                        <p>{g.p}</p>
                                                                    </li>
                                                                ))}
                                                            </ol>
                                                        </div>
                                                    </div>
                                                    <p>{f.lastPhrase}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })
                                }
                            </div>
                        </div>
                    }
                    return null;
                })
            }

            {/* 👇 Scroll to Top düyməsi */}
            {showScrollButton && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowCircleUp className="scroll-icon" />
                </div>
            )}
        </div>
    );
};

export default Education;
