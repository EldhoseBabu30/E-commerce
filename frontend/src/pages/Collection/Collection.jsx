import { useContext, useState } from "react"
import {ShopContext} from '../../components/context/ShopContext'
import { assets } from "../../assets/frontend_assets/assets";
import Title from "../../components/Title/Title";


const Collection = () => {

  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-10">
      {/* filter options */}
      <div className="min-w-60">
        <p onClick={()=> setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">Filters</p>
        <img className={`h-3 sm:hidden ${showFilter? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? '' :'hidden' }  sm:block`}>
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} />
              Kids
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter? '' :'hidden' }  sm:block`}>
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'TopWear'} />
              TopWear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'BottomWear'} />
              BottomWear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'WinterWear'} />
              WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1={"All"} text2={'Collections'}/>
        {/* Product Sorting */}

        <select className="border-2 border-gray-300 text-sm px-2">
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>

          <option value="high-low">Sort by: High to Low</option>

          

        </select>

        </div>
      </div>
      
    </div>
  )
}

export default Collection
