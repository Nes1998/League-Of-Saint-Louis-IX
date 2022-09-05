import React from 'react'
import tw, {styled} from "twin.macro"
import { ReactComponent as  MenuElement} from '../../Assets/SVG/menu-element.svg'
import { Link, useNavigate } from 'react-router-dom'

function ExpandedHeader() {
    const navigate = useNavigate()
  return (
    <ExpandedHeaderDiv>
        <div id='hamburger-div' onClick={() => navigate(-1)}>
          <MenuElement />
        </div>
        <div id='img-container'>
          <img src='League-logo.png' alt='league-logo'/>
        </div>

        <AddressList>
            <ListItem><Link to={'/welcome'}>Welcome Page</Link></ListItem>
            <ListItem><Link to={'/funding'}>Funding Page</Link></ListItem>
            <ListItem><Link to={'/'}>Sign in Page</Link></ListItem>
            <ListItem><Link to={'/administratorSite'}>Administrator Page</Link></ListItem>
        </AddressList>
    </ExpandedHeaderDiv>
  )
}

const ExpandedHeaderDiv = styled.div`
    ${tw`bg-purple-200 w-full h-screen grid animate-fadeIn font-canterbury`}

    #img-container {
      height: 200px;
      width: 500px;
      position: relative;
      bottom: 30%;
      left: 42%;
      img {
        ${tw`h-full w-auto`}
      }
    }

    @media screen and (max-width: 800px) {
      #img-container {
        height: 200px;
        width 500px;
        position: relative;
        bottom: 30%;
        left: 22%;
        img {
          ${tw`h-full w-auto`}
        }
      }  
    }
`

const AddressList = tw.ul`
    w-full grid place-items-center
`

const ListItem = tw.li`
    py-5
`

export default ExpandedHeader