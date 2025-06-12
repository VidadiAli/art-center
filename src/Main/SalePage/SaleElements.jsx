import React, { useEffect, useState } from 'react'
import { carosel, sell } from '../../Data/Carosel'
import { item } from '../../Data/Item'
import './SaleElements.css'
import { useNavigate } from 'react-router-dom'

// WhatsApp nömrəni burda dəyişə bilərsən (ölkə kodu ilə, ön sıfarsız)
const whatsappNumber = "994518848792";

const SaleElements = ({ saleId }) => {

    const navigate = useNavigate();

    const [paragraf, setParagraf] = useState('');
    const [heading, setHeading] = useState('')

    const goItem = (id, nameOfElement) => {
        navigate(`/sale/${nameOfElement}/${id}`)
    }

    useEffect(() => {
        sell.forEach((e) => {
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
                            // Mesajı avtomatik qururuq
                            const message = `Salam, mən "${e.itemName}" məhsulu haqqında məlumat almaq istəyirəm. Qiyməti: ${
                                e.itemDiscount === 0
                                ? e.itemPrice
                                : (Number(e.itemPrice) - ((Number(e.itemDiscount) * Number(e.itemPrice)) / 100)).toFixed(2)
                            } AZN.`;

                            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                            return (
                                <div key={e.itemId} className='item'>
                                    <img src={e.itemImage} alt={`name of ${e.itemName}`} />
                                    <span>{e.itemName}</span>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {
                                            e.itemDiscount === 0 ?
                                                <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>{e.itemPrice}.00 AZN</span>
                                                :
                                                <>
                                                    <span style={{ textDecoration: 'line-through' }}>{e.itemPrice}.00 AZN</span>
                                                    <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                                                        {(Number(e.itemPrice) - ((Number(e.itemDiscount) * Number(e.itemPrice)) / 100)).toFixed(2)} AZN
                                                    </span>
                                                </>
                                        }
                                    </div>

                                    <div className='item-bottom'>
                                        {/* WhatsApp link burada */}
                                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">İndi Al</a>
                                        <button onClick={() => goItem(e.itemId, e.groupName)}>Ətraflı bax</button>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div>
        </div>
    )
}

export default SaleElements;