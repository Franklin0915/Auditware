import React from "react";
import styled from "styled-components";
import Forward from '../../../Auth/assets/images/Forward.svg'


function BigCard(){
    const members = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    const[collapse,setColl]=React.useState({Columns:false})
    return(
        <Container>
            <Columns>
                <aside>Recent Projects</aside>
                <Pointer
                >See all <img height='10px' src={Forward}/>
                </Pointer>
            </Columns>
            <Columns>
                <aside>2024 First Quater Financial Audit</aside> <Vr></Vr>
                <aside>DSR Audit Tax Consultancy</aside> 
                <aside></aside>
            </Columns>

        </Container>
    )


}
const Container = styled.div`
margin: 0;
width: 650px;
height: fit-content;
border: 1px solid #02474335;
padding: 0.8rem;
display: flex;
flex-direction: column;
border-radius: 15px;
text-align: left;
cursor: pointer;
color: gray;

`
;
const Vr = styled.div`
border: 1px solid #02474335;
    height: 14px;

`;
const Columns =styled.div`
    display:flex;
    justify-content:space-between;

`
;
const Pointer = styled.div`
    display:flex;
    align-items:center;
    margin:0 0 0 4rem;

`;
export default BigCard