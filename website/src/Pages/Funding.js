import React from 'react'
import tw from 'twin.macro'
import Header from '../Components/Header/Header'

function Funding() {
  return (
    <>
      <Header />
      <FundingDiv>
        To supply you with the equipment and safety gear necessary for an authentic and safe fencing experience, the League does require some funding. Therefore, after the first lesson,
        a monthly membership fee of $50 will be expected. Nevertheless, as briefly mentioned previously, the first lesson will be free, so you will be able to try the experience before 
        making any commitments. If you do decide to join, you can use either PayPal or Venmo to pay deposits to the League. Deus Benedicat!
      </FundingDiv>
    </>
  )
}

const FundingDiv = tw.div`
  max-w-full h-1/2 bg-yellow-400 text-lg text-green-600 font-bold
`

export default Funding