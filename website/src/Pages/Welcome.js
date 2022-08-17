import tw, {styled} from 'twin.macro'
import React from 'react'
import Header from '../Components/Header/Header'

function Welcome() {
  return (
    <>
      <Header />
      <Greeting>
        <h1> Welcome to the League of Saint Louis IX! </h1>
        <Carousel id='carousel'>
          <img src='signal-2022-05-15-150152.jpeg' alt='fencing1' height={200} width={400}/>
        </Carousel>
      </Greeting>
      <div>
        <section>
          The League of Saint Louis IX is a Catholic fencing club where the main focus is longsword fencing. The goal of the League as an organization is
          to foster a spirit of masculinity and chivalry within our members, which they will then infuse in their day to day lives and, most importantly, their Faith.
          The League is mainly looking for devout Catholic young men in their late teens to their 30s, but there are no strict rules, so if you are older and/or
          not of the Faith but very interested in chivalry and medieval fencing, give the League a try!
        </section>
      </div>
      <div>
        <h1>Activities</h1>
        <p>
          As previously mentioned, the League is mainly focused on European, longsword fencing. However, in
          addition to this, focus, the League also provide additional activities for our members from time to time like: <br />
          <ul>
            <li>Rapier fencing</li>
            <li>Spear Throwing</li>
            <li>Gunplay</li>
          </ul>
        </p>
      </div>
      <div>
        <h1>Rules</h1>
        <p>
          As previously mentioned, the League is a Catholic fencing club, and though it is not expected
          for all members to have the same views or tastes, any contempt or mockery shown towards the Catholic 
          Religion will have consequences up to and including losing your membership. In addition, while 
          humor is far from being forbidden, the League does expect members to refrain from crass, vulgar or 
          otherwise inappropriate humor during lessons. The League also expects each member to show respect to 
          the instructor and other members. Our code of chivalry can be summarized like this:
          
          <div>
            
          </div>
        </p>
      </div>
    </>

  )
}

const Carousel = styled.div`
  ${tw`w-full h-1/2`}
`

const Greeting = styled.div`
  ${tw`w-full h-full bg-blue-200 text-lg font-bold`}
  text-align: center;
`

export default Welcome