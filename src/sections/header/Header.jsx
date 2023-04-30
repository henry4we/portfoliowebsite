// import HeaderImage from '../../assets/header.jpg'
 import HeaderImage from '../../assets/header2.jpeg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
       <div className="header__profile">
        <img src={HeaderImage} alt="Header Portrait" />
       </div>
       <h3>Henry Ese Ivwighre</h3>
        <p>
        Software Developer with a demonstrated history of working with C#. Skilled in asp.net core, JavaScript, laravel, HTML and CSS. Strong engineering professional with a MSc focused on Software Engineering with Application and Project Management from University of Bedfordshire - United Kingdom.
        Passionate about building software technologies and products that run on the web and Mobile. I am enthusiastic about learning, a great team player and have developed the drive to produce excellent results consistently. 
          </p>
        <div className="header__cta">
        <a href="#contact" className='btn primary'>Lets Talk</a>
        <a href="#portfolio" className='btn light'>My Work </a>
        </div>
        <div className="header__socials">
          {
           data.map(item=> <a key={item.id} href={item.link} target ="_blank"  rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
      </header>
  )
}

export default Header