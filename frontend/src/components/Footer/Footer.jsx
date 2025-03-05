import logo from '../../assets/frontend_assets/storever.png';


const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
        <img src={logo} className="mb-5 w-32" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus ad dolorum! Excepturi iure dolorum nobis magni. Tempora animi ab omnis!</p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 6282213188</li>
            <li>contact@storeverforyou@gmail.com</li>
        </ul>
      </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'> Copyright 2025 @storever.com - All Right Reserved</p>
      </div>
    </div>

   
  )
}

export default Footer
