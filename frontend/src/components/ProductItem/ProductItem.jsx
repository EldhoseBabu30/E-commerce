import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);
  
  return (
    <Link to={`product/${id}`} className="group block hover:shadow-md transition-shadow duration-300 rounded-lg p-2">
      <div className="overflow-hidden rounded-lg bg-gray-50">
        <img 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
          src={image[0]} 
          alt={name} 
        />
      </div>
      <div className="mt-3 px-1">
        <p className="text-sm text-gray-700 truncate">{name}</p>
        <p className="text-sm font-medium mt-1 text-gray-900">{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;