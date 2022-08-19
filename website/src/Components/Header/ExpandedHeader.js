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
            <ListItem><Link to={'/administratorSite'}>AdministratorPage</Link></ListItem>
        </AddressList>
    </ExpandedHeaderDiv>
  )
}

const ExpandedHeaderDiv = styled.div`
    ${tw`bg-purple-200 w-full h-auto grid`}

    #img-container {
      height: 100%;
      width: 500px;
      position: relative;
      bottom: 30%;
      left: 33%;
      img {
        ${tw`h-full w-full`}
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