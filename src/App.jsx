import './header_body_footer.css'
import Header from './header'
import Body from './body'
import Footer from './footer'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { useEffect } from 'react'
let App = () => {

  // useEffect(() => {
  //   Aos.init({duration : 2000})
  // }, [])

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}


export default App;