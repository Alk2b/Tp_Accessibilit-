import logo from '@/assets/images/logo.png';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="p-5 flex justify-center items-center">
      <div className="shadow-lg inset-shadow-2xs p-2 rounded-lg">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo Alinia"
              className="w-[50px] mr-16"
            />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;