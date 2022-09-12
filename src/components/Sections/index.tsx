import { SectionStyle } from "./styles";

interface SectionsInterface {
    id: string;
    bgColor?: string;
    children?: React.ReactNode;
}

export function Sections({ id, bgColor, children, ...rest }: SectionsInterface) {

    const customStyle = {
        background: bgColor,
    }

    // const target = document.querySelectorAll('.anime');
    // const animationClass = 'doneAnimation';

    // function animeScroll() {
    //     const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    //     target.forEach(function (element: any) {
    //         if ((windowTop) > element.offsetTop) {
    //             element.classList.add(animationClass);
    //         } else {
    //             element.classList.remove(animationClass);
    //         }
    //     })
    // }

    // animeScroll();

    // if (target.length) {
    //     window.addEventListener('scroll', () => { animeScroll() });
    // }

    // console.log(target);

    return (
        <SectionStyle className="anime" id={id} style={customStyle} {...rest} >
            {children}
        </SectionStyle>
    );
}
