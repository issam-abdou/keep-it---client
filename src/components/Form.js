import React, { Component } from 'react'
import FormMessage from './FormMessage'
import Button from './Button'

export default class Form extends Component {
    render(props) {
        return (
            <>
                <h3>{this.props.type==="register"? "Hello!" : "Hello again!"}</h3>
                <span className="register__msg">{this.props.type==="register"? "Sign Up To Get Started" : "Welcome back"}</span>
                <form action="" className="register__form">
                    <div className="form-input" style={this.props.type==="register"?{display:"block"}:{display:"none"}}>
                        <span className="input-icon"><i className="fas fa-user"></i></span>
                        <input type="text" name="name" id="name" placeholder="Name"/>
                    </div>
                    <div className="form-input">
                        <span className="input-icon"><i className="far fa-envelope"></i></span>
                        <input type="email" name="email" id="email" placeholder="Email addresse"/>    
                    </div>
                    <div className="form-input">
                        <span className="input-icon"><i className="fas fa-lock"></i></span>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <Button type={this.props.type}/>
                </form>
                <FormMessage type={this.props.type}/>
            </>
        )
    }
}
