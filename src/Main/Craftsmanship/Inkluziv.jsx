import React from 'react'
import './Inkluziv.css'

const Inkluziv = () => {
  return (
    <div className='inkluziv'>
      <div className='first-part'>
        <h1>
          İnkluziv Təhsil
        </h1>
        <p>
          İnklüziv sənətkarlıq mövzusu çox vacib bir sosial və mədəni konsepsiyadır.
          İncəsənətin və sənətkarlığın inklüziv yanaşması, cəmiyyətin hər bir üzvünün,
          xüsusilə də xüsusi ehtiyacı olan insanların yaradıcılıq fəaliyyətlərinə qoşulmasını,
          bərabər imkanlara malik olmalarını təmin edir. Bu yanaşma, həm sosial ədalətin,
          həm də müxtəlif mədəniyyətlərin qorunmasının təməlini təşkil edir.
          Sənətkarlıq və inklüziv yanaşma, əl işləri, zərgərlik, toxuculuq, xalçaçılıq, rəssamlıq və digər sənət sahələrində
          fəaliyyət göstərən fərqli bacarıqlara malik şəxslərin cəmiyyətə daxil edilməsini və yaradıcılıqla məşğul olmalarını təşviq edir.
        </p>
      </div>

      <div className='second-part'>
        <h1>
          İnklüziv sənətkarlığın əsas məqsədi:
        </h1>
        <ol>
          <li>
            <span>Xüsusi ehtiyacı olan şəxslərə dəstək: </span>
            <p>
              Fiziki və ya psixoloji əngəlləri olan şəxslərin sənət vasitəsi ilə özlərini ifadə etmələrini təmin etmək.
            </p>
          </li>
          <li>
            <span>Təhsil imkanları yaratmaq: </span>
            <p>
              Sənət vasitəsi ilə insanların bilik və bacarıqlarını artırmaq üçün inklüziv təhsil proqramları təşkil etmək.
            </p>
          </li>
          <li>
            <span>Bazar imkanları yaratmaq: </span>
            <p>
              Sənətkarların işlərini beynəlxalq və yerli bazarlarda təqdim edərək onların iqtisadi vəziyyətlərini yaxşılaşdırmaq.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Inkluziv