import React from "react";
import { colors } from "../../../Setup/colors";
import styled from 'styled-components'


function Dashboard(){
    return(
        <MainContainer style={{color: colors.main}}>
            
        </MainContainer>
    )
}


export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;

    #name{
        border: 1px solid red;

        @media only screen and (max-width= 134px){

        }
    }

    

`



export default Dashboard