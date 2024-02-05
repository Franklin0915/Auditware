import React, { useState } from 'react'
import styled from 'styled-components'
import TextEditor from '../Components/TextEditor'
import { colors } from '../../../Setup/colors'

function TextSpace() {
    const [tab, setTab] = useState('Preparation notes')
    return (
        <Container className='flex a-i-s'>
            <section style={{minWidth: '300px', height: '100%', background: 'rgb(0,0,0,.1)'}}>
                
            </section>
            <section style={{width: '100%', height: '100%', padding: '0 1.5rem', overflow: 'hidden', overflowY: 'auto'}} className=''>
                <section className="flex v-flex a-i-s j-c-s" style={{minHeight: '100px',position: 'sticky', top: 0, background: 'white', zIndex: '10', paddingTop: '1.5rem'}}>
                    <div className="w-100 flex j-c-b mb-1">
                        <b>2024 First Quarter Financial Audit</b>
                        <b>In progress - 80%</b>
                    </div>
                    <section className='tab flex mb-1 mt-1'>
                        <div className={`mr-1 ${tab === 'Documents:' ? 'active' : ''}`}>Documents:</div>
                        <div onClick={()=>setTab('Preparation notes')} className={`tabItem ${tab === 'Preparation notes' ? 'active' : ''}`}>Preparation notes</div>
                        <div onClick={()=>setTab('progress')} className={`tabItem ${tab === 'Additional preparation notes' ? 'active' : ''}`}>Additional preparation notes</div>
                    </section>
                </section>
                <section style={{height: 'calc(100%-111px)', overflow: 'hidden', overflowY: 'auto', background: 'white', zIndex: 0}}>
                    <TextEditor/>
                </section>
            </section>
            <section style={{minWidth: '300px', height: '100%', background: 'rgb(0,0,0,.1'}}>

            </section>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    .tab{
        border-bottom: 1px solid lightgray;
        width: 100%;
        
        .tabItem{
            margin-right: 1.5rem;
            padding: 0.5rem 1rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: 500;
            color: gray;
            cursor: pointer;

            &.active{
                color: ${colors.themeLight};
                font-weight: 600;
                background-color: ${colors.activeLight};
            }
        }
    }

`

export default TextSpace