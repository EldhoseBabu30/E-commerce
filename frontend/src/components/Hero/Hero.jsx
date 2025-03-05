import { assets } from "../../assets/frontend_assets/assets"

const Hero = () => {
  return (
    <div className="relative my-10 flex flex-col sm:flex-row border-0 overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/3 translate-y-1/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      {/* Left content side */}
      <div className="relative w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 z-10 overflow-hidden">
        <div className="relative">
          {/* Floating decorative elements */}
          <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 -translate-y-full translate-x-1/2 border border-gray-200 rounded-full"></div>
          <div className="hidden sm:block absolute -bottom-20 -left-8 w-12 h-12 border border-gray-200 rounded-md rotate-45"></div>
          
          <div className="text-[#414141] max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 md:w-14 h-[2px] bg-gradient-to-r from-[#414141] to-[#818181]"></div>
              <p className="font-medium text-sm md:text-base tracking-wider uppercase text-[#616161]">Premium Collection</p>
            </div>
            
            <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#414141] to-[#767676]">Arrivals</span>
            </h1>
            
            <p className="text-gray-600 my-5 text-sm md:text-base leading-relaxed">
              Discover our curated selection of sophisticated designs crafted for those who appreciate refined elegance and timeless style.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-5">
              <button className="group relative overflow-hidden bg-[#414141] text-white px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                <span className="relative z-10 font-medium flex items-center justify-center gap-2">
                  Shop Collection
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-black w-full h-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              
              <button className="flex items-center gap-3 text-[#414141] hover:text-[#767676] transition-all duration-300 px-4 py-3">
                <span className="font-medium">View Lookbook</span>
                <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right image side with advanced effects */}
      <div className="relative w-full sm:w-1/2 h-80 sm:h-auto overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#414141_1px,transparent_1px)] [background-size:20px_20px] opacity-5 z-10"></div>
        
        {/* Image with effects */}
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-black/20 to-transparent mix-blend-overlay z-10"></div>
          <img 
            className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-110" 
            src={assets.hero_img} 
            alt="Premium fashion collection showcase" 
          />
          
          {/* Tag overlays */}
          <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md text-[#414141] text-sm font-medium shadow-sm z-20">
            New Season
          </div>
          
          <div className="absolute top-6 right-6 bg-[#414141]/80 backdrop-blur-sm px-3 py-3 rounded-full text-white text-xs font-bold shadow-sm z-20">
            20% OFF
          </div>
        </div>
      </div>
      
      {/* Bottom edge highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  )
}

export default Hero