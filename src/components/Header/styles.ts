import styled from "styled-components";

export const Container = styled.header`    
    width: 100%;
    position: fixed;
    top: 0;
    transition: .4s;
    z-index: 1;

    &.bckTransparent{
        background-color: rgba(0,0,0,0);
        padding: 1rem;
        a{
            color: #fff;
        }
    }

    &.bckBranco{
        background-color: rgba(256,256,256, 1);
        padding: 0rem;
        box-shadow: 0px 0px 20px rgba(0,0,0,.1);       
        *{
            color: #000;
        }        
    }    
`

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;    
    display: flex;    
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    @media(max-width:800px ){
        padding: 1rem 1.5rem;
    }  
`

export const Logo = styled.div`
    a {
        /* color: rgba(256,256,256,1); */
        font-weight: 400;
        font-size: 1.3rem;       
        text-decoration: none;      
    }
`

export const MenuList = styled.div`

    a {
        /* color: rgba(256,256,256,1); */
        font-weight: 400;
        font-size: 1rem;       
        text-decoration: none;      
    }

    ul li{
        cursor: pointer;
        display: inline-block;
        margin: auto 0;
        transition: filter 0.2s;
        padding: 0 1rem;

        &:hover{           
            filter: brightness(0.8);
        }
    }
    
    @media(max-width:800px ){
        display: none;
    }
`

// Hamburger
export const HamburgerArea = styled.aside`
    display:none;    
    position: fixed;
    right: 0;
    top: 0;    
    height: 100vh;
    width: 50vw;
    
    &.hbgInit{
        background-color: rgba(0,0,0,1);
        border-left: 1px solid #b69764;

        ul li{
            background-color: #b69764;
        }
    }

    &.hbgDone{
        background-color: white;
        border-left: 1px solid #b69764;

        ul li{
            background-color: rgba(17, 58, 63, .2);
        }
    }
`
export const HamburgerIcon = styled.div`
    display: none;
    color: white;
    position: fixed;   
    font-size: 3rem;   
    padding: .5rem;
    cursor: pointer;
    width: 50vw;

    @media (max-width: 800px){        
        display: flex;
        justify-content: end;
    }

    &.iconInit{
        right: 1rem;
        top: 1rem;    
    }

    &.iconDone{
        right: 0;
        top: 0;    
    }
`
export const HamburgerContent = styled.div`
    margin-top: 7vh;
    
    a {        
        font-weight: 400;
        font-size: 1rem;       
        text-decoration: none;
        width: 100% ;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 93vh;
        gap: .4rem;
    }

    ul li{
        height: 100%;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover{           
            filter: brightness(0.8);
        }
    }
`
