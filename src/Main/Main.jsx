import React from 'react'
import Home from './HomePage/Home'
import { Route, Routes } from 'react-router-dom'
import SalePage from './SalePage/SalePage'
import SaleItem from './SalePage/SaleItem'
import Education from './Education/Education'
import Inkluziv from './Craftsmanship/Inkluziv'
import Azerbaijan from './Craftsmanship/Azerbaijan'
import About from './About/About'
import Layiheler from './Layiheler/Bcc'
import Layiheler2 from './Layiheler/yapimci'
import Xidmet1 from './Xidmetler/studia'
import Xidmet2 from './Xidmetler/ses'
import Xidmet3 from './Layiheler/zaqulbaart'
import Ixdisaslar from './ixtisaslar/ixtisaslar'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/sale' element={<SalePage />} /> */}
                {/* <Route path='/sale/:itemName' element={<SalePage />} /> */}
                {/* <Route path='/sale/:groupName/:itemId' element={<SaleItem />} /> */}
                <Route path='/type/:courseUrl' element={<Education />} />
                <Route path='/Ixdisaslar' element={<Ixdisaslar />} />
                <Route path='/inkluziv-art' element={<Inkluziv />} />
                <Route path='/azerbaijan-art' element={<Azerbaijan />} />
                <Route path='/bcc' element={<Layiheler />} /> /zaqulbaart
                <Route path='/yapimci' element={<Layiheler2 />} />
                <Route path='/studia' element={<Xidmet1 />} />
                <Route path='/ses' element={<Xidmet2 />} />
                <Route path='/zaqulbaart' element={<Xidmet3 />} />
                <Route path='/about-us' element={<About />} />
            </Routes>
        </div>
    )
}

export default Main