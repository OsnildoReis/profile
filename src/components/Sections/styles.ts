import styled from "styled-components";

export const SectionStyle = styled.section`
    height: auto;
    max-width: 81rem;
    transition: .3s;
    

    /* Animation */
    &.initAnimation{
        opacity: 0;        
        transform: translate3d(-50px, 0 , 0);
    }
    
    &.doneAnimation{
        opacity: 1;
        transform: translate3d(0, 0 , 0);
    }

`