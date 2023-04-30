import React from 'react'
import './card.css'


const Card = ({children, className, onClick}) => {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card


// 9 to create a resusabke card componet , on the componet create a new file call Card.jsx and card.css, ON HE Card.jsx import the card css
// 10. on the card.jsx add an article tag of classname 'card'And all this is going to do is render children prop 
// 11.  distructure the  children prop and then bring it in here inside the Opening and closing insode article tag
// 12 const Card = ({children, className, onClick}) => {
//   return (
//     <article className={`card ${className}`} onClick={onClick}>
//         {children}
//     </article>
//   )
// }