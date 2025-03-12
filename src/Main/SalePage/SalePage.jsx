import React, { useEffect, useState } from 'react'
import './SalePage.css'
import { carosel } from '../../Data/Carosel'
import SaleElements from './SaleElements'
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';

// Satış Bölməsinə daxil olduqdan sonra Solda gələn Məhsullarımız Yazısı

const SalePage = () => {

    const navigate = useNavigate();

    const { itemName } = useParams();

    const [saleId, setSaleId] = useState('');
    const [iconList, setIconList] = useState([])

    const changeSaleId = (id, index, nameOfElement) => {
        let iconDefault = [];
        carosel.forEach((e) => iconDefault.push(false))
        iconDefault.splice(index, 1, true);
        setIconList(iconDefault);
        setSaleId(id)
        navigate(`/sale/${nameOfElement}`)
    }


    useEffect(() => {
        let booleanArray = [], showenElement = 0;
        carosel.forEach((e) => booleanArray.push(false))
        if (typeof (itemName) == 'undefined') {
            booleanArray.splice(0, 1, true)
        }
        else if (typeof (itemName) == 'string') {
            carosel.forEach((e, index) => {
                if (e.nameCarosel.split(" ").join("-").toLowerCase() == itemName) {
                    booleanArray.splice(index, 1, true);
                    showenElement = index;
                }
            })
        }
        setIconList(booleanArray);
        setSaleId(carosel[showenElement].id)
    }, [])

    return (
        <div className='sale-page'>

            <div className='sale-body'>
                <ul>
                    <h1>
                        Məhsul<span style={{ color: 'var(--color2)' }}>larımız</span>
                    </h1>
                    {
                        carosel.map((e, index) => {
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