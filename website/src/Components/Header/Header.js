import React from 'react'
import tw, {styled} from "twin.macro"

function Header() {
  return (
    <HeaderDiv>
        <div id='img-container'>
          <img src='League-logo.png' alt='league-logo'/>
        </div>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
    ${tw`bg-gray-100 w-auto grid place-items-center`}

    height: 200px;
    #img-container {
      height: 100%;
      width: 200px;
      img {
        ${tw`h-full w-full`}
      }
      ${tw`p-0`}
    }
`

export default Header