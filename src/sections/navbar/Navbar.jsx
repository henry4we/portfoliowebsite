// import Logo from '../../assets/logo.jpg'
import Logo from '../../assets/header1.jpeg'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      {/* 
         1. declare a div with a  className 
         2. decalare an anchore tag with a className to hold the logo
         3. inside the anchore tag declare an image src, also import the logo from the assests folder
         4. declare an un order list for the menu items
         5. import the data file that was added then use data.map to map the the list of  menu items
         6. data.map(item => <li key={item.id}>
          <a href={item.link}>{item.title}</a></li>)
          7. delare a  button with an id , also get icon from react icon library
       
       */}
       

      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar