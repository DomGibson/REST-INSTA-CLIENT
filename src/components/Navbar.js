import '../App.css';
import logo from '../main-logo.png';

function Navbar() {
  return (
    <nav>
        <ul className='list-nav'>
          <div className='image-wrapper'>
            <img src={logo} className="app-logo" alt="logo" />
          </div>
            <li className='items-nav'>BING</li>
            <li className='items-nav'>BANG</li>
            <li className='items-nav'>BONG</li>
        </ul>
        <button className='btn-nav'>BTN</button>
    </nav>
  );
}

export default Navbar;
