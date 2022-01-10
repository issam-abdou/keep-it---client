import React from 'react'
import { Link } from "react-router-dom";

// export default function Button(props) {
//     return (
//         <Link to="/user" className='btn' onClick={()=>{console.log('clicked ++++++++')}}><button type="submit" className=''>{props.type==="register"?"Register":"Login"}</button></Link>
        
//     )
// }

// import React, { Component } from 'react'

// export default class Button extends Component {
//     render() {
//         return (
//             <div>
//                 <Link to="/user" className='btn' onClick={()=>{console.log('clicked ++++++++')}}><button type="submit" className=''>{props.type==="register"?"Register":"Login"}</button></Link>
//         )
//     }
// }

class Button extends React.Component {
    
    render(props) {
      return (
        <Link to="/user" className='btn'><button type="submit" className=''>{this.props.type==="register"?"Register":"Login"}</button></Link>
      );
    }
  }
  
export default Button;
