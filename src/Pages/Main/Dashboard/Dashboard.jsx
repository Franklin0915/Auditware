import React from "react";
import { colors } from "../../../Setup/colors";
import styled from 'styled-components'
import Wrapper from "../Components/Wrapper";
import { GridContent } from "../StyledComponents";
import TextEditor from "../Components/TextEditor";
import Card from "../Components/Card/Card";
import BigCard from "../Components/Card/BigCard";
import SmallCard from "../Components/Card/smallCard";


function Dashboard(props){
    const customStyle = {
        width:"300px",
        display:"none",
    }
    return(
        <Wrapper page={'Dashboard'} content={<>
            <MainContainer style={{color: colors.main}}>
                
                <TopPart>
                       <BigCard />
                      <SmallCard/>
                        
                    
                </TopPart>
            </MainContainer>
        </>}/>
    )
}


export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
   
    

    #name{
        border: 1px solid red;

        @media only screen and (max-width= 134px){

        }
    }

    

`
const TopPart = styled.div`
    display:flex;
    justifiy-content:space-between;
    


`
;



export default Dashboard