import BestSeller from "../../components/BestSeller/BestSeller"
import Hero from "../../components/Hero/Hero"
import LatestCollection from "../../components/LatestCollection/LatestCollection"
import NewsletterBox from "../../components/NewsletterBox/NewsletterBox"
import OurPolicy from "../../components/OurPolicy/OurPolicy"

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home
