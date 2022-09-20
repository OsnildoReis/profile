import styled from "styled-components";

export const SectionStyle = styled.section`
    height: 100%;
    max-width: 81rem;
    transition: .3s;
    color: rgba(17, 58, 63, 1);

    

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