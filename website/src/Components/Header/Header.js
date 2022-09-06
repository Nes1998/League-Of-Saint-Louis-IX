import React from 'react'
import tw, { styled } from "twin.macro"
import { ReactComponent as MenuElement } from '../../Assets/SVG/menu-element.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <HeaderDiv>
      <div id='hamburger-div' onClick={() => navigate('/expanded-header')}>
        <MenuElement />
      </div>
      <div id='img-container'>
        <img src='League-logo.png' alt='league-logo' />
      </div>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
    ${tw`bg-gray-100 w-full grid animate-fadeIn`}

    height: 10vh;

    #img-container {
      height: 40%;
      width: 200px;
      position: relative;
      bottom: 20%;
      left: 45%;
      img {
        ${tw`h-full w-auto`}
      }
      ${tw`py-5`}
    }

    @media screen and (max-width: 800px)
    {
      #img-container {
        height: 35%;
        width: 200px;
        position: relative;
        bottom: 20%;
        left: 45%;
        img {
          ${tw`h-full w-auto`}
        }
        ${tw`py-5`}
      }
    }
`

export default Header