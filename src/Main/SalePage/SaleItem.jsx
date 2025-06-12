import React, { useEffect, useState } from 'react'
import './SaleItem.css'
import { useParams } from 'react-router-dom'
import { item } from '../../Data/Item';

const SaleItem = () => {

    const { itemId, groupName } = useParams();

    const [changedUrl, setChangedUrl] = useState('');
    const [currentItem, setCurrentItem] = useState(null);

    const changeImage = (url) => {
        setChangedUrl(url);
    }

    useEffect(() => {
        item.forEach((e) => {
            if (e.itemId === itemId && e.groupName === groupName) {
                setChangedUrl(e.itemImage);
                setCurrentItem(e);
            }
        })
    }, [itemId, groupName])

    // WhatsApp nömrəni belə yaz: ölkə kodu ilə və ön sıfarsız
    const whatsappNumber = "994518848792"; 

    // Məhsul haqda mesajı avtomatik yazırıq
    const message = currentItem 
        ? `Salam, mən "${currentItem.itemName}" məhsulu haqqında məlumat almaq istəyirəm. Qiyməti: ${(currentItem.itemPrice - ((currentItem.itemPrice * currentItem.itemDiscount) / 100)).toFixed(2)} AZN.` 
        : '';

    return (
        <div className='sale-item'>
            {
                currentItem && (
                    <div className='sale-item-child'>
                        <div className='sale-item-child-1'>
                            <div className='s-i-1'>
                                <img src={changedUrl} alt="" />
                            </div>
                            <div className='s-i-2'>
                                <h2>{currentItem.itemName}</h2>
                                <p>{currentItem.itemInform}</p>
                                <div>
                                    {
                                        currentItem.otherImages.length ?
                                            <img src={currentItem.itemImage} alt="" onClick={() => changeImage(currentItem.itemImage)} /> : ''
                                    }
                                    {
                                        currentItem.otherImages.length ?
                                            currentItem.otherImages.map((f, idx) => {
                                                return <img key={idx} src={f} alt="" onClick={() => changeImage(f)} />
                                            })
                                            :
                                            <span>Əlavə şəkillər mövcud deyil</span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='sale-item-child-2'>
                            <span>
                                {(currentItem.itemPrice - ((currentItem.itemPrice * currentItem.itemDiscount) / 100)).toFixed(2)} AZN
                            </span>

                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                İndi Al
                            </a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SaleItem;
