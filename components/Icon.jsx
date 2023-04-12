import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faRectangleAd,
  faLaptopCode,
  faHotel,
  faPiggyBank,
  faBurger,
  faHouseCrack,
  faMapLocationDot,
  faMortarPestle,
  faIndustry,
  faCarSide,
  faTruckFast
} from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  return (
    <div className="text-sm  bg-gray-200 p-3 m-3 md:p-7 md:m-10 rounded-lg ">
      <div className="text-center text-base py-2.5">
        <h className="font-bold">The market we cater</h>
      </div>
      {/* <div className=" items-center text-gray-600 flex sm:grid-cols-12  md:justify-evenly pt-6"> */}
      <div className=" items-center text-xs text-gray-600 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 justify-evenly ">
        
        <div className="flex flex-col items-center justify-center  py-4">
          <FontAwesomeIcon icon={faHelmetSafety} className="w-10 h-10 mx-2 " color="#5082FF" /><br/>
          <h>Engineering</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faRectangleAd} className="w-10 h-10 mx-2" color="#5082FF" /><br/>
          <h>Advertising</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faLaptopCode} className="w-10 h-10 mx-2"  color="#5082FF" /><br/>
          <h>IT</h>
        </div>
        
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faHotel} className="w-10 h-10 mx-2" color="#5082FF" /><br/>
          <h>Hotel</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faPiggyBank} className="w-10 h-10 mx-2" color="#5082FF" /><br/>
          <h>Banking</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faBurger} className="w-10 h-10 mx-2" color="#5082FF" /><br/>
          <h>Food</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faHouseCrack} className="w-10 h-10 mx-2" color="#5082FF" /><br/>
          <h>Insurance</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faMapLocationDot} className="w-10 h-10 mx-2" color="#5082FF" /><br/>
          <h>Tourism</h>
        </div>
        <div className="flex flex-col items-center justify-center  py-4">
          <FontAwesomeIcon icon={faMortarPestle} className="w-10 h-10  mx-2" color="#5082FF" /><br/>
          <h>Pharmaceuticals</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faIndustry} className="w-10 h-10  mx-2" color="#5082FF" /><br/>
          <h>Manufacturing</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <FontAwesomeIcon icon={faCarSide} className="w-10 h-10  mx-2" color="#5082FF" /><br/>
          <h>Automobiles</h>
        </div>
        <div className="flex flex-col items-center justify-center py-4 ">
          <FontAwesomeIcon icon={faTruckFast} className="w-10 h-10  mx-2" color="#5082FF" /><br/>
          <h>Shipping</h>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
