import React, { Component } from 'react';
import {FaFacebookF} from 'react-icons/fa'
import {FaGooglePlusG} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import './sliding.css'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

class Social extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            userId:'',
            name:'',
            email:'',
            picture:''
        }
    }

    responseFacebook=response=>{

        console.log(response)
        this.setState({
            isLoggedIn:true,
            userId:response.userID,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        },()=>{
            const obj = {
                isLoggedIn: this.state.isLoggedIn,
                userId:this.state.userId,
                name:this.state.name,
                email:this.state.email,
                picture:this.state.picture
            };
            this.props.submitFn(obj);
        });
    }
    componentClicked=()=>console.log('clicked')

    responseGoogle=response=>{
        
        console.log(response.profileObj)
        this.setState({
            isLoggedIn:true,
            name:response.profileObj.name,
            email:response.profileObj.email,
            picture:response.profileObj.picture
        },()=>{
            const googleObj ={
                isLoggedIn:this.state.isLoggedIn,
                name:this.state.name,
                email:this.state.email,
                picture:this.state.picture
            };
            this.props.googleSubmit(googleObj)
        })
    }
    render() {
        return (
            <div>
                 <div className="social-container">
                                <FacebookLogin
                                    appId="927378571013511"
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    render={renderProps => (
                                        <a className="social facebook" onClick={renderProps.onClick}><FaFacebookF/></a>
                                    )}
                                />
                                <GoogleLogin
                                    clientId="926599872855-rlvde4h9qk6v1u2p9vrilnondo2h2s11.apps.googleusercontent.com"
                                    render={renderProps => (
                                    <a className="social google" onClick={renderProps.onClick} disabled={renderProps.disabled}><FaGooglePlusG/></a>
                                    )}
                                    buttonText="Login"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                                {/* <a href="#" className="social linkedin"><FaLinkedin/></a> */}
                 </div>
            </div>
        );
    }
}

export default Social;