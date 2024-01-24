import React from 'react'
import SideBar from './SideBar/SideBar'
import Header from './Header'
import styled from 'styled-components'

function Wrapper({content, page}) {
  return (
    <Container className='flex'>
        <SideBar/>
        <MainContent className="">
            <Header page={page}/>
            <Content className="">
                {content}
            </Content>
        </MainContent>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    
`
const MainContent = styled.section`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    padding: 0 1.5rem;
`
const Content = styled.div`
    width: 100%;
    height: 100%;
`

export default Wrapper