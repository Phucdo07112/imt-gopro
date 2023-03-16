import {images} from "../assets/images"
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import { GoChevronDown } from "react-icons/go"
import { useEffect, useState } from "react"
const Header = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const li = document.querySelectorAll(".navbar-menu-item");
        const sec = document.querySelectorAll("section");
        console.log(li, sec);
        function activeMenu() {
            let len = sec.length;
            while(--len && window.scrollY + 107 < sec[len].offsetTop) {

            }
            li.forEach(ltx => ltx.classList.remove("active"));
            li[len].classList.add("active");
        }
        activeMenu();
        window.addEventListener("scroll", activeMenu);
    })
  return (
    <header className="header">
        <div className="header-top">
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <a href="/"><img src={images.logo} alt="gopro" /></a>
                    </div>
                    <div className="navbar">
                        <ul className={`navbar-menu ${toggle ? 'active' : ''}`}>
                            <li className="navbar-menu-item">
                                <a href="#home">
                                    Home
                                    <GoChevronDown className="icon-down" />
                                </a>
                            </li>
                            <li className="navbar-menu-item">
                                <a href="#about">
                                    About
                                    <GoChevronDown className="icon-down" />
                                </a>
                            </li>
                            <li className="navbar-menu-item">
                                <a href="#company">
                                    Company
                                    <GoChevronDown className="icon-down" />
                                </a>
                            </li>
                            <li className="navbar-menu-item">
                                <a href="#page">
                                    Pages
                                    <GoChevronDown className="icon-down" />
                                </a>
                            </li>
                            <li className="navbar-menu-item">
                                <a href="#blog">
                                    Blog
                                    <GoChevronDown className="icon-down" />
                                </a>
                            </li>
                            <li className="navbar-menu-item">
                                <a href="#shop">
                                    Shop
                                    <GoChevronDown className="icon-down" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <div className="start-btn">
                            <h4>Get Started</h4>
                            <AiOutlineArrowRight className="header-right" />
                        </div>
                        <div className="menu-btn" onClick={() => setToggle(!toggle)}>
                            <div className={`menu-btn-show ${toggle ? '' : 'active'}`}>
                                <FiMenu />
                            </div>
                            <div className={`menu-btn-close ${toggle ? 'active' : ''}`}>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
        </div>
    </header>
  )
}

export default Header