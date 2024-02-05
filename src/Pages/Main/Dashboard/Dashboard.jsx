import React from "react";
import { colors } from "../../../Setup/colors";
import styled from 'styled-components'
import Wrapper from "../Components/Wrapper";
import { GridContent } from "../StyledComponents";
import TextEditor from "../Components/TextEditor";


function Dashboard(){
    return(
        <Wrapper page={'Dashboard'} content={<>
            <MainContainer style={{color: colors.main}}>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <TopPart>
                    <GridContent>
                        <TextEditor/>
                    </GridContent>
                </TopPart>
            </MainContainer>
        </>}/>
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
const TopPart = styled.div`
    display:flex;
    align-items:center;


`
;



export default Dashboard