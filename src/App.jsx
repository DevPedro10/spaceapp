import styled from 'styled-components'
import GlobalStyles from './Components/GlobalStyles'
import Header from './Components/Header'
import Aside from './Components/Aside'
import Banner from './Components/Banner'
import Galeria from './Components/Galeria'

const FundoGradiente = styled.div`
  width: 100%;
  height: 100vh;

  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);

`
const AppContainer = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: auto;
 `

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GaleryContainer = styled.section`
  
`

function App() {
  return (
    <FundoGradiente>
      <AppContainer>
        <GlobalStyles />
        <Header />
        <MainContainer>
          <Aside />
          <GaleryContainer>
            <Banner image="src/assets/images/banner.png">
              A galeria mais completa de fotos do espaço!
            </Banner>
            <Galeria />
          </GaleryContainer>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
