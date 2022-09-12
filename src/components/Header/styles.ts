import styled from "styled-components";

export const Container = styled.header`    
    width: 100%;
    position: fixed;
    top: 0;
    transition: .4s;
    z-index: 1;

    &.t{
        background-color: rgba(0,0,0,0);
        padding: 1rem;
       
        a{
            color: #fff;
        }
    }

    &.t2{
        background-color: rgba(256,256,256, 1);
        padding: 0rem;
        box-shadow: 0px 0px 20px rgba(0,0,0,.1);
       
        a{
            color: #000;
        }
        
    }
`

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5rem 0.3rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;    

    a{
        /* color: rgba(256,256,256,1); */
        font-weight: 400;
        font-size: 1rem;       
        text-decoration: none;      
    }
    

    ul li{
        cursor: pointer;
        display: inline-block;
        margin: auto 20px;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`
