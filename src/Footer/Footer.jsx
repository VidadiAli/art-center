import React from 'react'
import './Footer.css'
import { connection } from '../Data/Connection'
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

// Her seyfede gorsenen bitiş bolmesi

const Footer = () => {
    return (
        <footer>
            <div className='footer-back'>
                <span style={{ width: `${window.innerWidth <= 1000 ? 'calc(100% / 3)' : 'calc(100% / 9)'}` }}>A</span>
                <span style={{ width: `${window.innerWidth <= 1000 ? 'calc(100% / 3)' : 'calc(100% / 9)'}` }}>R</span>
                <span style={{ width: `${window.innerWidth <= 1000 ? 'calc(100% / 3)' : 'calc(100% / 9)'}` }}>T</span>
                <span>C</span>
                <span>E</span>
                <span>N</span>
                <span>T</span>
                <span>E</span>
                <span>R</span>
            </div>
            <div className='last-inform'>
                <h2>Web Sayt Üzərində İş Gedir! Tezliklə Yeni Web Sayt İlə Qarşınızda Olacağıq!</h2>
                <h2>Bizi izləyin</h2>
                <div className='sosial'>
                    <a href={connection[1].instagram} target='_blank'>
                        <FaInstagram className='sosial-icon' />
                    </a>

                    {/* <a href={connection[1].tiktok} target='_blank'>
                        <PiTiktokLogo className='sosial-icon' />
                    </a> */}

                    <a href={connection[1].facebook} target='_blank'>
                        <RiFacebookCircleLine className='sosial-icon' />
                    </a>

                    <a href={connection[1].youtube} target='_blank'>
                        <CiYoutube className='sosial-icon' />
                    </a>
                </div>
                <div className='connect'>
                    <a href={`https://wa.me/${connection[0].phone1Main}`} target='_blank'>
                        <FaWhatsapp className='connect-icon' />
                    </a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${connection[0].gmail}`}>
                        <MdMailOutline className='connect-icon' />
                    </a>
                </div>

                <div className='made'>
                    <span>Copyright © 2025 Bütün hüquqlar qorunur: ArtCenter Azerbaijan</span>
                    <span>
                        Developed by <a href="https://www.instagram.com/bcccreative/" target='_blank'>BCC Creative</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer