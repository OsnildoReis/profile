import { CardsStyle } from "./styles";

interface CardsInterface {
    children?: React.ReactNode;
    bg?: string;
}

export function Cards({ bg, children, ...rest }: CardsInterface) {
    return (
        <CardsStyle style={{ background: bg }} >
            {children}
        </CardsStyle>
    );
}