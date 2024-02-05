import React from 'react'
import styled from 'styled-components'

function TextSpace() {
  return (
    <Container className='flex a-i-s'>
        <section style={{minWidth: '300px', height: '100%', background: 'rgb(0,0,0,.1)'}}>
            
        </section>
        <section style={{width: '100%', height: '100%'}} className=''>

        </section>
        <section style={{minWidth: '300px', height: '100%', background: 'rgb(0,0,0,.1'}}>

        </section>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

`

export default TextSpace