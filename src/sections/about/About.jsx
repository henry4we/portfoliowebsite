// import AboutImage from '../../assets/about.jpg'
import AboutImage from '../../assets/header3.jpeg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'


// 1. declare a secction with an id 'about'
// 2. inside the section create a  div with a class name 'container about__container '
// 3. insode the container page , on the about page we will have both left and right side
//    (i) declare two div with the class name about_left and about_right
// 4. on the div classname about_left  declare a div with classname about-potrait inside that include the img src, import the image  and add th image to the img src
// 5. on the about-right add a h2 with the word (About me) and add a div classname 'about-cards'
// 6.  below the about-card add a two p tags with messages
// 7. after the p add alink to download the CV IMPORT THE CV from assets folder,add the download attribute wih a classname 'btn-primary' and a text name download CV
// 8. To add a download icon to the download text , go to react icons to select download icon , import at the top from react-icons/hi, render it as a componet beside the text

//9. So first,  import the card components.

//  import the data as well.


// So inside the about__cards class

//   data.map(item => (
  //  declare the card component with a key and a clasname "about__card" : //       <Card key={item.id}    className="about__card">

// inside the card component declare a span with classname 'about__card-icon; this will render the icon:
  //  <span className='about__card-icon'>{item.icon}</span>
  //declare an h5 to render the title:
//           <h5>{item.title}</h5>
//declare a small tag for description:
//           <small>{item.desc}</small>
//       </Card>
//   ))
// }



// And in here we are going to return the card components.



const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
                </p>
                <p>
                Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About















// const About = () => {
//   return (
//     <section id="about">
//         <div className="container about__container">
//           <div className="about__left">
//             <div className="about__portrait">
//               <img src={AboutImage} alt="About Image" />
//             </div>
//           </div>
//           <div className="about__right">
//              <h2>About me</h2>
//              <div className="about__cards">
//             {
//                 data.map(item => (
//                     <Card key={item.id} className="about__card">
//                         <span className='about__card-icon'>{item.icon}</span>
//                         <h5>{item.title}</h5>
//                         <small>{item.desc}</small>
//                     </Card>
//                 ))
//             }
//         </div>
//              </div>
//              <p>
//                Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
//               </p>
//              <p>
//               Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
//              </p>
//            <a href={CV} download className='btn-primary'> Download CV <HiDownload /></a>
//            </div>
//         </div>
//     </section>
//   )
// }

// export default About
