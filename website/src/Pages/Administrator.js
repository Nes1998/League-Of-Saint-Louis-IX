import tw from 'twin.macro'

function Administrator() {
  return (
    <AdministratorDiv>
        <h1>Welcome to the Administrator Page</h1>
        <div>
            
        </div>
    </AdministratorDiv>
  )
}

const AdministratorDiv = tw.div`
    h-screen w-full
`

export default Administrator