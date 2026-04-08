import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Tracker from "../components/Tracker"

const Home = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Tracker />
      <Footer />
    </div>
  )
}

export default Home