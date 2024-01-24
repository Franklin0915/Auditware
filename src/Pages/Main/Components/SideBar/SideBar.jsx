import React from 'react'
import styled from 'styled-components'
import { avatar, brand } from '../../../../Assets'
import {home} from '../../../../Assets/Icons/index'
import NavItem from './NavItem'

function SideBar() {
  return (
    <Container className='flex v-flex a-i-c j-c-b'>
      <section className='flex v-flex a-i-c' style={{width: '100%'}}>
        <div className='brand-image flex'>
          <img src={brand} alt="" width={110}/>
        </div>

        <NavItem link={'/'} content={<>
          <img src={home} alt="" />
          <small className='text'>Dashboard</small>
        </>}/>
        <NavItem link={'/recents'} content={<>
          <svg width="19" height="19" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C7.03 0 3 4.03 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 16.99 9.51 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.25 12.52L16.02 11.24L12.5 9.15V5H11Z" fill="#024744"/>
          </svg>

          <small className='text'>Recents</small>
        </>}/>
        <NavItem link={'/analytics'} content={<>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 9.64 2 7.4 3.42 5.52C3.67 5.19 4.14 5.13 4.47 5.38C4.8 5.63 4.87 6.1 4.62 6.43C3.4 8.04 2.75 9.97 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75C11.59 2.75 11.25 2.41 11.25 2C11.25 1.59 11.59 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z" fill="#024744"/>
          <path d="M12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 11.59 4.59 11.25 5 11.25C5.41 11.25 5.75 11.59 5.75 12C5.75 15.45 8.55 18.25 12 18.25C15.45 18.25 18.25 15.45 18.25 12C18.25 8.55 15.45 5.75 12 5.75C11.59 5.75 11.25 5.41 11.25 5C11.25 4.59 11.59 4.25 12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75Z" fill="#024744"/>
          <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16C11.25 15.59 11.59 15.25 12 15.25C13.79 15.25 15.25 13.79 15.25 12C15.25 10.21 13.79 8.75 12 8.75C11.59 8.75 11.25 8.41 11.25 8C11.25 7.59 11.59 7.25 12 7.25C14.62 7.25 16.75 9.38 16.75 12C16.75 14.62 14.62 16.75 12 16.75Z" fill="#024744"/>
          </svg>

          <small className='text'>Analytics</small>
        </>}/>

        <hr style={{width: '100%', margin: '1rem 0'}}/>

        <NavItem link={'/workspaces'} content={<>
          <svg style={{width: '19'}} dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          <small className='text'>Workspaces</small>
        </>}/>
        <NavItem link={'/projects'} content={<>
          <svg style={{width: '19'}} dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
          <small className='text'>Projects</small>
        </>}/>
        <NavItem link={'/members'} content={<>
          <svg style={{width: '19'}} dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          <small className='text'>Members</small>
        </>}/>
        <NavItem link={'/files'} content={<>
          <svg style={{width: '19'}} dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          <small className='text'>Files</small>
        </>}/>

        <hr style={{width: '100%', margin: '1rem 0'}}/>

        <NavItem link={'/members'} content={<>
          <svg style={{width: '19'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

          <small className='text'>Profile</small>
        </>}/>
        <NavItem link={'/files'} content={<>
          <img src={home} alt="" />
          <small className='text'>Settings</small>
        </>}/>
      </section>

      <section className='flex w-100' style={{width: '100%'}}>
          <div className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
              <img src={avatar} alt="" className=''/>
          </div>
          <div className="profileContent flex v-flex">
            <b><small>Joshua Odame</small></b>
            <small className='role'>Admistrator</small>
          </div>
      </section>
        
    </Container>
  )
}
const Container = styled.div`
    min-width: 200px;
    height: 100%;
    background-color: #F8F8F8;
    overflow: hidden;
    overflow-y: auto;
    padding: 0rem 0.7rem;
    padding-bottom: 1rem;

    .brand-image{
      min-height: 100px;
    }

    .profileImg{
      min-width: 40px;
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .profileContent{
      width: 100%;
      margin-left: 0.3rem;

      *{
        line-height: normal;
      }
      .role{
        color: gray;
      }
    }
`

export default SideBar