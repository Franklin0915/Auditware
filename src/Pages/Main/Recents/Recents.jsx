import React from 'react'
import Wrapper from '../Components/Wrapper'
import Card from '../Components/Card/Card'
import { GridContent } from '../StyledComponents'

function Recents() {
    const members = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  return (
    <Wrapper content={<>
        <GridContent>
            {
                members.map((card, idx)=>{
                    return <Card key={`Card${idx}`}/>
                })
            }
        </GridContent>
    </>} page={'Recents'} />
  )
}
export default Recents