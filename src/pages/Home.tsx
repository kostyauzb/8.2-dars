import Footer from "../components/Footer"
import MainSection from "../components/MainSection"
import Navbar from "../components/Navbar"
import Statistics from "../components/Statistics"

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="bg-[#FFFFFF] mb-24 flex-1">
        <Navbar />
        <MainSection />
      </main>
      <div className="flex h-20 justify-between bg-white container px-8 items-center py-0 rounded-md">
        <p className="font-medium text-[20px] tracking-[0.15px]">
          https://www.frontendmentor.io
        </p>
        <div className="flex items-baseline gap-x-6">
          <p className="text-[#2BD0D0] font-medium text-[20px] tracking-[0.15px]">
            https://rel.ink/k4lKyk
          </p>
          <button className="px-7 py-3 bg-[#2BD0D0] font-bold text-[15px] text-white rounded-md">
            Copy
          </button>
        </div>
      </div>
      <Statistics />
      <Footer />
    </div>
  )
}

export default Home
