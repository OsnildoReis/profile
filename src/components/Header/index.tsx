import { useState } from 'react'
import { Container, Content, HamburgerArea, HamburgerContent, HamburgerIcon, Logo, MenuList } from "./styles";
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io';

export function Header() {

    const [hamburgerDisplay, setHamburgerDisplay] = useState("none");

    window.addEventListener("scroll", changeheaderStyle);
    function changeheaderStyle() {
        const hdr = document.querySelector("header");
        const asd = document.querySelector("aside");
        const iconn = document.getElementById("iconn");

        if (window.scrollY > 100 && hdr?.classList.contains("bckTransparent")) {
            hdr?.classList.remove("bckTransparent");
            hdr?.classList.add("bckBranco");
        } else if (window.scrollY <= 100 && hdr?.classList.contains("bckBranco")) {
            hdr?.classList.remove("bckBranco");
            hdr?.classList.add("bckTransparent");
        }

        if (window.scrollY > 100 && asd?.classList.contains("hbgInit")) {
            asd?.classList.remove("hbgInit");
            asd?.classList.add("hbgDone");
        } else if (window.scrollY <= 100 && asd?.classList.contains("hbgDone")) {
            asd?.classList.remove("hbgDone");
            asd?.classList.add("hbgInit");
        }

        if (window.scrollY > 100 && iconn?.classList.contains("iconInit")) {
            iconn?.classList.remove("iconInit");
            iconn?.classList.add("iconDone");
        } else if (window.scrollY <= 100 && iconn?.classList.contains("iconDone")) {
            iconn?.classList.remove("iconDone");
            iconn?.classList.add("iconInit");
        }
    }



    return (
        <Container className="hdr bckTransparent" >
            <Content>
                <Logo>
                    <a href="/" >Osnildo Reis Advocacia</a>
                </Logo>
                <MenuList>
                    <nav>
                        <ul>
                            <li><a href="#home">Início</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#atuacao">Atuação</a></li>
                            <li><a href="#profile">Dr. Osnildo</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                </MenuList>

                <HamburgerIcon id="iconn" className='iconInit'>
                    {
                        hamburgerDisplay === "inline" ?
                            null :
                            <FiMenu onClick={() => { setHamburgerDisplay("inline") }} />
                    }
                </HamburgerIcon>

                <HamburgerArea className="asd hbgInit" style={{ display: hamburgerDisplay }}                >
                    <HamburgerIcon>
                        <IoMdClose onClick={() => { setHamburgerDisplay("none") }} />
                    </HamburgerIcon>
                    
                    <HamburgerContent>
                        <nav>
                            <ul>
                                <li onClick={() => { setHamburgerDisplay("none") }}><a href="#home">Início</a></li>
                                <li onClick={() => { setHamburgerDisplay("none") }}><a href="#about">Sobre</a></li>
                                <li onClick={() => { setHamburgerDisplay("none") }}><a href="#atuacao">Atuação</a></li>
                                <li onClick={() => { setHamburgerDisplay("none") }}><a href="#profile">Dr. Osnildo</a></li>
                                <li onClick={() => { setHamburgerDisplay("none") }}><a href="#contact">Contato</a></li>
                            </ul>
                        </nav>
                    </HamburgerContent>
                </HamburgerArea>
            </Content>
        </Container >

    );
}
