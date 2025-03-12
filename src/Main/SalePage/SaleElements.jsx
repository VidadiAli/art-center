import React, { useEffect, useState } from 'react'
import { carosel } from '../../Data/Carosel'
import { item } from '../../Data/Item'
import './SaleElements.css'
import { useNavigate } from 'react-router-dom'

// Satış Bölməsindəki İndi Al, Ətrafli bax butonlari 

const SaleElements = ({ saleId }) => {

    const navigate = useNavigate();

    const [paragraf, setParagraf] = useState('');
    const [heading, setHeading] = useState('')

    const goItem = (id, nameOfElement) => {
        navigate(`/sale/${nameOfElement}/${id}`)
    }

    useEffect(() => {
        carosel.forEach((e) => {
            if (e.id === saleId) {
                setParagraf(e.textCarosel);
                setHeading(e.nameCarosel);
            }
        })
    }, [saleId])

    return (
        <div className='section-of-item'>
            <div className='item-head'>
                <h2>{heading}</h2>
                <p>
                    {paragraf}
                </p>
            </div>
            <div className='box-of-items'>
                {
                    item.map((e) => {
                        if (e.groupId === saleId) {
                            return <div key={e.itemId} className='item'>
                                <img src={e.itemImage} alt={`name of ${e.itemName}`} />
                                <span>{e.itemName}</span>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {
                                        e.itemDiscount === 0 ?
                                            <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>{e.itemPrice}.00 AZN</span>
                                            :
                                            <>
                                                <span style={{ textDecoration: 'line-through' }}>{e.itemPrice}.00 AZN</span>
                                                <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>{(Number(e.itemPrice) - ((Number(e.itemDiscount)
                                                    * Number(e.itemPrice)) / 100)).toFixed(2)} AZN</span>
                                            </>
                                    }
                                </div>

                                <div className='item-bottom'>
                                    <a href="#">İndi Al</a>
                                    <button onClick={() => goItem(e.itemId, e.groupName)}>Ətraflı bax</button>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SaleElements