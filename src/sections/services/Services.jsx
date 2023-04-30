import Card from '../../components/Card'
import data from './data'
import './services.css'

const Services = () => {
  return (
    // declare a section with an id of 'services'
    // insode the section decalare a h2 and p tage to covey the lines of messages
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>

      {/* declare a div with div with a classname "container services__container" 
          inside the div with a classname "services__container use the "MAP" JS function to loop throug the data usng data.map(item)
          import card from '../../components/Card' with key as item.id 
           inside the card with a classname "services light declare a div with the classname of service__icon and dynamically use the item.icon 
           declare another div with a classname service__details"
           inside the div  create a h4 and gdynamically input {item.title} and also a p tag and dynamically inpute {item.desc}
      */}
       
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services