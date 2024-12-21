import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { coursesItem } from '../../Data/coursesItem'

const Education = () => {
    const { courseUrl } = useParams()


    const [profession, setProfession] = useState(1)

    const goProfession = (id) => {
        setProfession(id);
    }

    return (
        <div className='education'>
            <h1>Təhsil</h1>
            <p>
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
                    if (e.nameOfItem.split(" ").join("-").toLowerCase() == courseUrl) {
                        return <div key={e.id} className='education-main-part'>
                            <h1>
                                {
                                    e.nameOfItem
                                }
                            </h1>
                            <p>
                                {
                                    e.textOfItem
                                }
                            </p>
                            <div className='education-defined' >
                                {
                                    e.courses.map((f) => {
                                        return <button key={f.id} onClick={() => goProfession(f.id)}>
                                            {f.coursesName}
                                        </button>
                                    })
                                }
                            </div>
                            <div className='education-view' >
                                {
                                    e.courses.map((f) => {
                                        if (f.id === profession) {
                                            return <div key={f.id + f.coursesName} >
                                                <img src={`${f.coursesImages.slice(0, 8)}raw.githubusercontent.com${f.coursesImages.slice(18, f.coursesImages.indexOf("blob"))}${f.coursesImages.slice(f.coursesImages.indexOf("blob") + 4, f.coursesImages.length)}`} alt="" />
                                                <div>

                                                </div>
                                            </div>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    }
                })
            }



        </div>
    )
}

export default Education