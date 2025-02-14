import logo from '@/assets/images/logo.png';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 z-50 bg-white py-4 px-6 shadow-md">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo Alinia"
              className="w-[50px] h-auto"
            />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;