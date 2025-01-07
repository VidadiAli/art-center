import React from 'react'
import Home from './HomePage/Home'
import { Route, Routes } from 'react-router-dom'
import SalePage from './SalePage/SalePage'
import SaleItem from './SalePage/SaleItem'
import Education from './Education/Education'
import Inkluziv from './Craftsmanship/Inkluziv'
import Azerbaijan from './Craftsmanship/Azerbaijan'
import About from './About/About'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sale' element={<SalePage />} />
                <Route path='/sale/:itemName' element={<SalePage />} />
                <Route path='/sale/:groupName/:itemId' element={<SaleItem />} />
                <Route path='/type/:courseUrl' element={<Education />} />
                <Route path='/inkluziv-art' element={<Inkluziv />} />
                <Route path='/azerbaijan-art' element={<Azerbaijan />} />
                <Route path='/about-us' element={<About />} />
            </Routes>
        </div>
    )
}

export default Main