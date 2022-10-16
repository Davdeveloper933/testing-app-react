import TopBar from './components/elements/TopBar/TopBar'
import Header from './components/elements/Header/Header'
import Slider from './components/elements/Slider/Slider'
import AboutUs from './components/elements/AboutUs/AboutUs'
import Services from './components/elements/Services/Services'
import Products from './components/elements/Products/Products'
import Dover from './components/elements/Dover/Dover'
import Footer from './components/elements/Footer/Footer'
import Contacts from './components/elements/Contacts/Contacts'
import MobileMenu from './components/elements/MobileMenu/MobileMenu'

function App() {
  return (
    <div>
          <TopBar />
          <Header />
          <MobileMenu />
          <Slider />
          <AboutUs />
          <Services />
          <Products />
          <Dover />
          <Contacts />
          <Footer />
    </div>
  )
}

export default App;
