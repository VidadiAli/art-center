import React, { useEffect, useState } from 'react'
import './SaleItem.css'
import { useParams } from 'react-router-dom'
import { item } from '../../Data/Item';

// Satış bölməsindəki hər hansısa mehsulua etrafli baxa click etdikde gelen ekrandaki İndi al, şekil movcud deyil bolmesi

const SaleItem = () => {

    const { itemId, groupName } = useParams();

    const [changedUrl, setChangedUrl] = useState('');

    const changeImage = (url) => {
        setChangedUrl(url);
    }

    useEffect(() => {
        item.forEach((e) => {
            if (e.itemId === itemId && e.groupName === groupName) {
                setChangedUrl(e.itemImage)
            }
        })
    }, [])

    return (
        <div className='sale-item'>
            {
                item.map((e) => {
                    if (e.itemId === itemId && e.groupName === groupName) {
                        return <div key={e.itemId} className='sale-item-child'>
                            <div className='sale-item-child-1'>
                                <div className='s-i-1'>
                                    <img src={changedUrl} alt="" />
                                </div>
                                <div className='s-i-2'>
                                    <h2>{e.itemName}</h2>
                                    <p>{e.itemInform}</p>
                                    <div>
                                        {
                                            e.otherImages.length ?
                                                <img src={e.itemImage} alt="" onClick={() => changeImage(e.itemImage)} /> : ''
                                        }
                                        {
                                            e.otherImages.length ?
                                                e.otherImages.map((f) => {
                                                    return <img src={f} alt="" onClick={() => changeImage(f)} />
                                                })
                                                :
                                                <span>Əlavə şəkilllər mövcud deyil</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='sale-item-child-2'>
                                <span>
                                    {
                                        (e.itemPrice - ((e.itemPrice * e.itemDiscount) / 100)).toFixed(2)
                                    }  AZN
                                </span>

                                <a href="#">İndi Al</a>
                            </div>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default SaleItem