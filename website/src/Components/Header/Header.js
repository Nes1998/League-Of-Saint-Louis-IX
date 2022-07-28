import React from 'react'
import tw, {styled} from "twin.macro"

function Header() {
  return (
    <HeaderDiv>
       <img src='League-logo.png' alt='league-logo'/>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
    ${tw`bg-gray-100 grid place-items-center`}

    img {
      height: 526px;
      width: 498px;
      ${tw`p-0`}
    }
`

export default Header