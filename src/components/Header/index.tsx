import { Container, Content } from "./styles";

export function Header() {

    window.addEventListener("scroll", changeheaderStyle);

    function changeheaderStyle() {
        const hdr = document.querySelector("header");

        if (window.scrollY > 200 && hdr?.classList.contains("t")) {
            hdr?.classList.remove("t");
            hdr?.classList.add("t2");
        } else if (window.scrollY <= 200 && hdr?.classList.contains("t2")) {
            hdr?.classList.remove("t2");
            hdr?.classList.add("t");
        }
    }

    return (
        <Container className="hdr t" >
            <Content>
                <a href="/" >Osnildo Reis Advocacia</a>
                <nav>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#atuacao">Atuação</a></li>
                        <li><a href="#profile">Dr. Osnildo</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </Content>
        </Container>
    );
}
