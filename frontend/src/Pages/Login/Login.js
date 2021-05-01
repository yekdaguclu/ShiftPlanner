import Axios from 'axios';
import React  from "react";
import './Login.css'
class Login extends React.Component {
    
    state = {
        email: '',
        pwd: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.isLogin(true)
    }

    render() {
       
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className="imgcontainer">
                                <img src="dist/img/Logo1.jpg" alt="Avatar" className="avatar" />
                            </div>
                            <div className="container">
                                <label htmlFor="Id"><b>Id</b></label>
                                <input type="text" placeholder="Enter Email" name="email" required />
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psd" required />
                                <button type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;