import Navbar from "./components/Navbar"
import Client from "./components/Client"
import Main from "./components/Main"
import About from "./components/About"
import Call from "./components/Call"
import Service from "./components/Service"
import Team from "./components/Team"
import Testimony from "./components/Testimony"
import Contact from "./components/Contact"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      
      <Navbar
        comName='OTTIATECH'
        home='Home'
        about='About'
        service='Service'
        team='Team'
        testimony='Testimony'
        contact='Contact'
        login='Sign In'
      />

      <Main
        comName='OTTIATECH'
        login='Sign In'
        register='Get Started'
        
      />

      <Client />

      <About
        comName='OTTIATECH'
        cloud='Cloud Computing'
        SD='Software Development'
        Intelligence='AI/ML'
        data='Data Analytics'
        CS='Cyber Security'
        Iot='IoT'
        DT='Digital Transformation'
        EC='E-commerce'
        HG='Hardware Goods'
        RD='Research & Development'
        establish='2023'
        CEO="OTTIA PRAISE BETECK"

      />

      <Call
        comName="OTTIATECH"
        callTitle='Call To Action'
        login='Sign In'
        register='Get Started'
      />

      <Service
        comName="OTTIATECH"
        AD='Application Development'
        cloud='Cloud Computing'
        DP='Digital Payments'
        EC='E-commerce'
        data='Data Analysis'
        stream='Streaming'
      />

      <Team 
        teamTitle='OUR TEAM'
        CEO="Ottia Praise Beteck"
        comName="OTTIATECH"
        GM="Uttia Sharon Bessem"
        posCEO="Chief Executive Officer"
        posGM='General Manager'
        MM='Kumbong Erica Ofon'
        posMM='Marketing Manager'
        AM="Beteck Aldriss Ottia"
        posAM='Accounting Manager'
        PM='Ofon Boris Ottia'
        posPM='Project Manager'
        CDO='Mengeng Victory Kakon'
        posCDO='Chief Defense Officer'
      />

      <Testimony
        comName="Ottiatech"
        tes1='Ndi Maccarthy Kanjo'
        tes2='Kumbong Erica Bessem'
        tes3='Atebah Samuel Chidi'
    
      />

      <Contact
        comName="Ottiatech"
        conTitle='CONTACT US'
        location='Untared Malingo, Buea, Southwest, Cameroon'
        conEmail='ottiapraise50@gmail.com'
        conNum='+237 682 394 856'
      />

      <Newsletter
        comName="Ottiatech"
        newsTitle='Join Our Newsletter ❤️'
      />

      <Footer
        comName='OTTIATECH'
        quater='Untared Malingo'
        city='Buea'
        region='Southwest'
        country='Cameroon'
        footEmail='ottiapraise50@gmail.com'
        footNum='+237 682 394 956'
        title1='Useful Links'
        title2='Our Services'
        title3='Our Social Network'
        AD='Application Development'
        cloud='Cloud Computing'
        DP='Digital Payments'
        EC='E-commerce'
        data='Data Analysis'
        stream='Streaming'
        home='Home'
        about='About'
        service='Service'
        team='Team'
        testimony='Testimony'
        contact='Contact'
        CEO='OTTIA PRAISE BETECK'
      />
      
    </>
  )
}

export default App
