import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Logo from '/public/images/MW-logo.png';

const NavBar = () => {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href='/' onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    }

    return (
      <ul className='flex-row font-[anton] text-xl'>
        <li className='mx-1 '>
          <Link to='/signup'>Signup</Link>
        </li>
        <li className='mx-1'>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    );
  };

  return (
    <header className='flex-row justify-between px-1 '>
      <div className='size-1/6'>
        <Link to='/'>
          <img src={Logo} alt="Mang's Wars" />
        </Link>
      </div>
      <img src="/images/MangsWarDmg.png" alt="Mangs War" />

      <nav className='flex flex-wrap content-end'>{showNavigation()}</nav>
    </header>
  );
};

export default NavBar;
