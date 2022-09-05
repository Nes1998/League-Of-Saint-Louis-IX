import tw, { styled } from 'twin.macro'
import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'

function Welcome() {

  useEffect(() => {
    var slideIndex = 1

    showImgs(1)
    setInterval(() => showNextImg(1), 5000)

    function showNextImg(n) {
      if (n < 0) {
        showImgs(slideIndex -= 1);
      } else {
        showImgs(slideIndex += 1);
      }
    }

    function showImgs(n) {
      var imgs = document.getElementsByClassName('fencing')

      if (slideIndex > imgs.length) slideIndex = 1
      else if (slideIndex < 1) slideIndex = imgs.length

      for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("selected")
        imgs[i].classList.add("hidden")
      }
      imgs[slideIndex - 1].classList.remove("hidden")
      imgs[slideIndex - 1].classList.add("selected")
    }

  }, [])

  return (
    <WelcomeDiv>
      <Header />
      <Greeting>
        <h1> Welcome to the League of Saint Louis IX! </h1>
        <Carousel id='carousel'>
          <div>
            <img src='signal-2022-05-15-150152.jpg' className='fencing' alt='fencing' height={300} width={400} />
          </div>
          <div>
            <img src='signal-2022-05-15-150153.jpeg' className='fencing' alt='fencing' height={300} width={400} />
          </div>
          <div>
            <img src='signal-2022-05-15-150152 (1).jpeg' className='fencing' alt='fencing' height={300} width={400} />
          </div>
          <div>
            <img src='signal-2022-05-15-150152 (2).jpeg' className='fencing' alt='fencing' height={300} width={400} />
          </div>
          <div>
            <img src='signal-2022-05-15-150152 (3).jpeg' className='fencing' alt='fencing' height={300} width={400} />
          </div>
          <div>
            <img src='signal-2022-05-15-150152 (4).jpeg' className='fencing' alt='fencing' height={300} width={400} />
          </div>
        </Carousel>
      </Greeting>
      <DescriptionDiv>
        <section>
          The League of Saint Louis IX is a Catholic fencing club where the main focus is longsword fencing. The goal of the League as an organization is
          to foster a spirit of masculinity and chivalry within our members, which they will then infuse in their day to day lives and, most importantly, their Faith.
          The League is mainly looking for devout Catholic young men in their late teens to their 30s, but there are no strict rules, so if you are older and/or
          not of the Faith but very interested in chivalry and medieval fencing, give the League a try!
        </section>
      </DescriptionDiv>
      <ActivityDiv>
        <h1>Activities</h1>
        <p>
          As previously mentioned, the League is mainly focused on European, longsword fencing. However, in
          addition to this, focus, the League also provide additional activities for our members from time to time like: <br />
        </p>
        <ul>
          <li>Rapier fencing</li>
          <li>Spear Throwing</li>
          <li>Gunplay</li>
        </ul>
      </ActivityDiv>
      <RulesDiv>
        <h1>Rules</h1>
        <p>
          As previously mentioned, the League is a Catholic fencing club, and though it is not expected
          for all members to have the same views or tastes, any contempt or mockery shown towards the Catholic
          Religion will have consequences up to and including losing your membership. In addition, while
          humor is far from being forbidden, the League does expect members to refrain from crass, vulgar or
          otherwise inappropriate humor during lessons. The League also expects each member to show respect to
          the instructor and other members. In summary, since the League is based around the principles of Medieval
          chivalry, each member is expected to behave accordingly when they present themselves for lessons
          <div>

          </div>
        </p>
      </RulesDiv>
    </WelcomeDiv>

  )
}

const Carousel = styled.div`
  ${tw`w-full h-1/2`}
  
  .selected {
    position: relative;
    left: 37%;
    padding-bottom: 15px;
  }

  @media screen and (max-width: 800px) {
    .selected {
      left: 25%;
      width: 150px;
    }
  }

  .hidden {
    display: none;
    position: fixed;
    left: -100%;
  }
`

const Greeting = styled.div`
  ${tw`w-full h-full bg-blue-200 text-lg font-bold place-items-center font-canterbury`}
  text-align: center;
`
const WelcomeDiv = styled.div`
  ${tw`font-canterbury`}
  
  h1 {
    ${tw`font-bold text-lg`}
  }
`
const DescriptionDiv = tw.div`
  bg-yellow-200 text-lg
`

const ActivityDiv = styled.div`
  ${tw`bg-green-200`}
  ul {
    ${tw`list-disc`}
    li {
      ${tw`py-5 px-5`}
    }
  }
`
const RulesDiv = tw.div`
  bg-indigo-100
`

export default Welcome