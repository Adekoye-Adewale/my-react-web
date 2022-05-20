import logo from './logo.svg';
import './Header.css';
import Menu from './Menu';

function Header() {
  return (
    <div className="Head">
        <div className="Head-logo-wrap">
            <img src={logo} className='Head-logo' alt='logo'/>
        </div>
        <div className="Head-menu">
            <Menu />
        </div>
    </div>
  );
}

export default Header;
