// import React, { useEffect, useState } from 'react'
// import './SalePage.css'
// import { carosel } from '../../Data/Carosel'
// import SaleElements from './SaleElements'
// import { FiMinus, FiPlus } from "react-icons/fi";
// import { useNavigate, useParams } from 'react-router-dom';

// const SalePage = () => {

//     const navigate = useNavigate();

//     const { itemName } = useParams();

//     const [saleId, setSaleId] = useState('');
//     const [iconList, setIconList] = useState([])

//     const changeSaleId = (id, index, nameOfElement) => {
//         let iconDefault = [];
//         carosel.forEach(() => iconDefault.push(false))
//         iconDefault.splice(index, 1, true);
//         setIconList(iconDefault);
//         setSaleId(id)
//         navigate(`/sale/${nameOfElement}`)
//     }


//     useEffect(() => {
//         let booleanArray = [], showenElement = 0;
//         carosel.forEach(() => booleanArray.push(false))
//         if (typeof (itemName) == 'undefined') {
//             booleanArray.splice(0, 1, true)
//         }
//         else if (typeof (itemName) == 'string') {
//             carosel.forEach((e, index) => {
//                 if (e.nameCarosel.split(" ").join("-").toLowerCase() == itemName) {
//                     booleanArray.splice(index, 1, true);
//                     showenElement = index;
//                 }
//             })
//         }
//         setIconList(booleanArray);
//         setSaleId(carosel[showenElement].id)
//     }, [itemName])

//     // Burada yalnız "Satış" olan elementləri filtrləyirik:
//     const salesOnly = carosel.filter(e => e.nameCarosel === "Satış");

//     return (
//         <div className='sale-page'>
//             <div className='sale-body'>
//                 <ul>
//                     <h1>
//                         Məhsul<span style={{ color: 'var(--color2)' }}>larımız</span>
//                     </h1>
//                     {
//                         salesOnly.map((e, index) => (
//                             <li key={e.id} onClick={() => changeSaleId(e.id, index, e.nameCarosel)}>
//                                 {
//                                     iconList[index] ?
//                                         <FiMinus className='plus-icon' /> :
//                                         <FiPlus className='plus-icon' />
//                                 }
//                                 <span>{e.nameCarosel}</span>
//                             </li>
//                         ))
//                     }
//                 </ul>

//                 <SaleElements saleId={saleId} />
//             </div>
//         </div>
//     )
// }

// export default SalePage

// Kohne Kod 



import React, { useEffect, useState } from 'react'
import './SalePage.css'
import { sell } from '../../Data/Carosel'
import SaleElements from './SaleElements'
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';


const SalePage = () => {

    const navigate = useNavigate();

    const { itemName } = useParams();

    const [saleId, setSaleId] = useState('');
    const [iconList, setIconList] = useState([])

    const changeSaleId = (id, index, nameOfElement) => {
        let iconDefault = [];
        sell.forEach((e) => iconDefault.push(false))
        iconDefault.splice(index, 1, true);
        setIconList(iconDefault);
        setSaleId(id)
        navigate(`/sale/${nameOfElement}`)
    }


    useEffect(() => {
        let booleanArray = [], showenElement = 0;
        sell.forEach((e) => booleanArray.push(false))
        if (typeof (itemName) == 'undefined') {
            booleanArray.splice(0, 1, true)
        }
        else if (typeof (itemName) == 'string') {
            sell.forEach((e, index) => {
                if (e.nameCarosel.split(" ").join("-").toLowerCase() == itemName) {
                    booleanArray.splice(index, 1, true);
                    showenElement = index;
                }
            })
        }
        setIconList(booleanArray);
        setSaleId(sell[showenElement].id)
    }, []);

    return (
        <div className='sale-page'>

            <div className='sale-body'>
                <ul>
                    <h1>
                    Əl<span style={{ color: 'var(--color2)' }}>İşləri</span>
                    </h1>
                    {
                        sell.map((e, index) => {
                            return <li key={e.id} onClick={() => changeSaleId(e.id, index, e.nameCarosel)}>
                                {
                                    iconList[index] ?
                                        <FiMinus className='plus-icon' /> :
                                        <FiPlus className='plus-icon' />
                                }
                                <span>{e.nameCarosel}</span>
                            </li>
                        })
                    }
                </ul>

                <SaleElements saleId={saleId} />
            </div>
        </div>
    )
}

export default SalePage