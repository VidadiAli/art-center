import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { coursesItem } from '../Data/coursesItem';
import { CiMenuFries } from 'react-icons/ci';
import logo from '../Images/whiteLogo.jpg';

const Navbar = () => {
    const [changeIcon, setChangeIcon] = useState(true);
    const [changeIconCourse, setChangeIconCourse] = useState(true);
    const [changeIconProject, setChangeIconProject] = useState(true);
    const [changeIconService, setChangeIconService] = useState(true); // ✅ Xidmətlər üçün ayrıca state
    const [scrolled, setScrolled] = useState(false);

    const callMenu = () => {
        document.getElementsByClassName('menu')[0].classList.toggle('coming-menu');
    };

    const navigate1 = useNavigate();
    const navigate2 = useNavigate();

    const mainPage = (itemName) => {
        const url = itemName.split(" ").join("-").toLowerCase();
        navigate1(`/sale/${url}`);
        setChangeIcon(!changeIcon);
    };

    const goCourseType = (courseUrl) => {
        const url = courseUrl.split(" ").join("-").toLowerCase();
        navigate2(`/type/${url}`);
        setChangeIconCourse(!changeIconCourse);
        window.location.reload();
    };

    const downMenu = () => {
        setChangeIcon(!true);
        setChangeIconCourse(true);
        setChangeIconProject(true);
        setChangeIconService(true);
        callMenu();
    };

    const downMenuCourse = () => {
        setChangeIconCourse(!changeIconCourse);
        setChangeIcon(true);
        setChangeIconProject(true);
        setChangeIconService(true);
    };

    const downMenuProject = () => {
        setChangeIconProject(!changeIconProject);
        setChangeIconCourse(true);
        setChangeIcon(true);
        setChangeIconService(true);
    };

    const downMenuService = () => {
        setChangeIconService(!changeIconService);
        setChangeIconCourse(true);
        setChangeIcon(true);
        setChangeIconProject(true);
    };

    const scrollEvent = () => {
        setScrolled(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'navbar-scroll' : ''}`}>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" />
            </NavLink>

            <ul className="menu">
                <li>
                    <NavLink to={'/'} className="menu-elements" onClick={callMenu}>
                        Ana Səhifə
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/azerbaijan-art'} className="menu-elements" onClick={callMenu}>
                        Azərbaycan Sənətkarlığı
                    </NavLink>
                </li>

                <li>
                    <NavLink className="menu-elements" onClick={downMenuCourse}>
                        Təhsil
                        {changeIconCourse ? (
                            <IoChevronDownSharp className="down-icon" />
                        ) : (
                            <IoChevronUpSharp className="down-icon" />
                        )}
                    </NavLink>

                    {!changeIconCourse && (
                        <ul className="submenu">
                            {coursesItem.map((e) => (
                                <li key={e.id}>
                                    <button onClick={() => { goCourseType(e.nameOfItem); callMenu(); }}>
                                        {e.nameOfItem}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>

                <li>
                    <NavLink className="menu-elements1" onClick={downMenuProject}>
                        Layihələr
                        {changeIconProject ? (
                            <IoChevronDownSharp className="down-icon" />
                        ) : (
                            <IoChevronUpSharp className="down-icon" />
                        )}
                    </NavLink>

                    {!changeIconProject && (
                        <ul className="submenu submenu2">
                            <li><NavLink to={"/yapimci"} onClick={callMenu}>Yapıncı Tekstil</NavLink></li>
                            <li><NavLink to={"/bcc"} onClick={callMenu}>BCC Stream</NavLink></li>
                            <li><NavLink to={"/zaqulbaart"} onClick={callMenu}>Zaqulbaart School</NavLink></li>
                        </ul>
                    )}
                </li>

                <li>
                    <NavLink className="menu-elements1" onClick={downMenuService}>
                        Xidmətlər
                        {changeIconService ? (
                            <IoChevronDownSharp className="down-icon" />
                        ) : (
                            <IoChevronUpSharp className="down-icon" />
                        )}
                    </NavLink>

                    {!changeIconService && (
                        <ul className="submenu submenu2">
                            <li><NavLink to={"/Studia"} onClick={callMenu}>Studia</NavLink></li>
                            <li><NavLink to={"/ses"} onClick={callMenu}>Səs Yazma</NavLink></li>
                        </ul>
                    )}
                </li>

                <li>
                    <NavLink to={"/ixdisaslar"} className="menu-elements" onClick={downMenu}>
                        İxtisaslar
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/about-us'} className="menu-elements" onClick={callMenu}>
                        Haqqımızda
                    </NavLink>
                </li>
            </ul>

            {window.innerWidth <= 1000 && (
                <CiMenuFries className='menu-icon' onClick={callMenu} />
            )}
        </header>
    );
};

export default Navbar;
