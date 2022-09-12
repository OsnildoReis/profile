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
    return (
        <SectionStyle className="anime" id={id} style={customStyle} {...rest} >
            {children}
        </SectionStyle>
    );
}
