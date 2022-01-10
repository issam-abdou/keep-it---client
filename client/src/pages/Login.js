import React, { Component } from 'react'
import RegisterGrid from '../components/RegisterGrid'
import Logo from '../components/Logo'

export default class Login extends Component {
    render() {
        return (
            <main>
                <Logo/>
                <RegisterGrid type="login"/>
            </main>
        )
    }
}
