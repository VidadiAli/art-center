// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
// import { NavLink, useNavigate } from 'react-router-dom';
// import { carosel } from '../Data/Carosel';
// import { CiMenuFries } from 'react-icons/ci';
// import logo from '../Images/whiteLogo.jpg';
// import { coursesItem } from '../Data/coursesItem';

// // Navbar

// const Navbar = () => {
//     const [changeIcon, setChangeIcon] = useState(true);
//     const [changeIconCourse, setChangeIconCourse] = useState(true);
//     const [scrolled, setScrolled] = useState(false);

//     const callMenu = () => {
//         document.getElementsByClassName('menu')[0].classList.toggle('coming-menu');
//     }

//     // Alt menyunun ikonunu dəyişmək funksiyası

//     const navigate1 = useNavigate();
//     const navigate2 = useNavigate();

//     const mainPage = (itemName) => {
//         const url = itemName.split(" ").join("-").toLowerCase()
//         navigate1(`/sale/${url}`);
//         setChangeIcon(!changeIcon);
//     }

//     const goCourseType = (courseUrl) => {
//         const url = courseUrl.split(" ").join("-").toLowerCase()
//         navigate2(`/type/${url}`)
//         setChangeIconCourse(!changeIconCourse);
//         window.location.reload()
//     }

//     const downMenu = () => {
//         setChangeIcon(!true); // deyisiklik 1 - false - true edib satis bolmesin aktiv edirem
//         setChangeIconCourse(true);
//         callMenu()
//     };

//     const downMenuCourse = () => {
//         setChangeIconCourse(!changeIconCourse);
//         setChangeIcon(true);
//     };

//     // Scroll hadisəsini izləyən funksiya
//     const scrollEvent = () => {
//         setScrolled(window.scrollY > 100);
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', scrollEvent);

//         return () => window.removeEventListener('scroll', scrollEvent);
//     }, []);

//     return (
//         <header className={`navbar ${scrolled ? 'navbar-scroll' : ''}`}>
//             <NavLink to={'/'}>
//                 <img src={logo} alt="logo" />
//             </NavLink>

//             <ul className="menu">
//                 <li>
//                     <NavLink to={'/'} className="menu-elements" onClick={callMenu}>
//                         Ana Səhifə
//                     </NavLink>
//                 </li>

//                 <li>
//                     <NavLink to={'/azerbaijan-art'} className="menu-elements" onClick={callMenu}>
//                         Azərbaycan Sənətkarlığı
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink className="menu-elements" onClick={downMenuCourse}>
//                         Təhsil
//                         {changeIconCourse ? (
//                             <IoChevronDownSharp className="down-icon" />
//                         ) : (
//                             <IoChevronUpSharp className="down-icon" />
//                         )}
//                     </NavLink>

//                     {!changeIconCourse && (
//                         <ul className="submenu">
//                             {
//                                 coursesItem.map((e) => {
//                                     // klik zamanı iki funksiya çağrılıb
//                                     return <li key={e.id}>
//                                         <button onClick={() => { goCourseType(e.nameOfItem), callMenu() }}>{e.nameOfItem}</button>
//                                     </li>
//                                 })
//                             }
//                         </ul>
//                     )}
//                 </li>
//                 <li>
//                     <NavLink to={"/sale/s"} className="menu-elements" onClick={downMenu}>
//                         Satış
//                     </NavLink>
//                 </li>

//                 <li>
//                     <NavLink className="menu-elements1" onClick={downMenuCourse}>
//                         Layiheler
//                         {changeIconCourse ? (
//                             <IoChevronDownSharp className="down-icon" />
//                         ) : (
//                             <IoChevronUpSharp className="down-icon" />
//                         )}
//                     </NavLink>

//                     {!changeIconCourse && (
//                         <ul className="submenu">
                            
//                         </ul>
//                     )}
//                 </li>


//                 <li>
//                     <NavLink to={"/xidmetler"} className="menu-elements" onClick={downMenu}>
//                         Xidmətlər
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/about-us'} className="menu-elements" onClick={callMenu}>
//                         Haqqımızda
//                     </NavLink>
//                 </li>
//             </ul>

//             {
//                 window.innerWidth <= 1000
//                     ? <CiMenuFries className='menu-icon'
//                         onClick={
//                             () => callMenu()
//                         } />
//                     : ''
//             }
//         </header>
//     );
// };

// export default Navbar;








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
    const [changeIconProject, setChangeIconProject] = useState(true); // ✅ Layihələr üçün ayrıca state
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
        setChangeIconProject(true); // ✅ Layihələr menyusunu bağla
        callMenu();
    };

    const downMenuCourse = () => {
        setChangeIconCourse(!changeIconCourse);
        setChangeIcon(true);
        setChangeIconProject(true); // ✅ Layihələr menyusunu bağla
    };

    const downMenuProject = () => {
        setChangeIconProject(!changeIconProject);
        setChangeIconCourse(true); // ✅ Təhsil menyusunu bağla
        setChangeIcon(true);
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
                            <li><NavLink to={"/yapimci"}>Yapıncı Tekstil</NavLink></li>
                            <li><NavLink to={"/bcc"}>BCC Stream</NavLink></li>
                        </ul>
                    )}
                </li>

                <li>
                    <NavLink to={"/xidmetler"} className="menu-elements" onClick={downMenu}>
                        Xidmətlər
                    </NavLink>
                </li>

                
                <li>
                    <NavLink to={"/sale/s"} className="menu-elements" onClick={downMenu}>
                        Satış
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
