import styled from "styled-components";

export const Container = styled.main`
    background-color: #FFF;
`
export const Contents = styled.div`

    max-width: 81rem;
    margin: 0 auto;    
    display: flex;
    flex-direction: column;
    background-color: #FFF;

    #about{
        height: 100%; 
        padding: 4rem 2rem; 
        display:flex; 
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    #aboutCard{
        height: 100%; 
        width: 60%; 
        background: rgba(17, 58, 63, .05);
        padding: 4rem; 
        box-shadow: 1px 1px 5px rgba(0,0,0,0.1); 
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    #atuacaoTitle{
        display: flex; 
        flex-direction: column; 
        text-align: center; 
        padding: 8rem 2rem 2rem;        
        gap: 1rem;
    }

    #atuacaoCards{
        display: flex;         
        justify-content: center; 
        padding: 2rem;
        gap: 1rem;
    }

    #profile{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    #profileLayout{
        display: flex;
        justify-content: space-between;
        background: rgba(17, 58, 63, .05);
        box-shadow: 1px 1px 5px rgba(0,0,0,0.1); 
    }
    #profileTitle{
        text-align: center; 
        padding-top: 8rem; 
    }
    #profileCard{       
        height: 100%;
        width: 70%;
        padding: 4rem; 
        display: flex;
        flex-direction: column;
        gap: 2rem;       
    }   
    #imgPerfil{
        width: 25vw;
    }

    #contactTitle{
        text-align: center; 
        padding-top: 8rem; 
        display: flex; 
        flex-direction: column; 
        gap: 1rem;
    }

    #contactCards{
        display: flex; 
        justify-content: center; 
        gap: 1rem; 
        margin-top: 3rem; 
        margin-bottom:3rem;
    }

    @media(max-width: 800px){
        #about{
            flex-direction: column;
            padding: 8rem 1rem 1rem 1rem;            
        }
        #aboutCard{
            width: 100%; 
            padding: 2rem 1rem;
        }
        #aboutLogo{
            display: none;
        }
        #atuacaoTitle{
            padding: 10rem 2rem 2rem; 
        }
        #atuacaoCards{
            flex-direction: column;  
            align-items :center;
        }
        #profileCard{
            width: 100%; 
            padding: 2rem 1rem;            
        }
        #profileLayout{
            flex-direction: column;
        }
        #imgPerfil{
            width: 100vw;
         }
        #contactCards{
            flex-direction: column;
        }
        
    }
`