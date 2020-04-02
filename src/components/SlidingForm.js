import React, { Component } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import Social from './Social.js'


class SlidingForm extends Component {
    constructor(props){
        super(props);
        this.state={
            signupbtn:false,
            isLoggedIn:false,
            userId:'',
            name:'',
            email:'',
            picture:''
        }
    }
    signup=()=>{
        this.setState({
            signupbtn:true
        })
    }
    signIn=()=>{
        this.setState({
            signupbtn:false
        })
    }
    facebookResponse=(obj)=>{
        console.log(obj)
        this.setState({
            isLoggedIn:obj.isLoggedIn,
            name:obj.name,
            userId:obj.userId,
            email:obj.email,
            picture:obj.picture
        })
    }
    googleResponse=(googleObj)=>{
        this.setState({
            isLoggedIn:googleObj.isLoggedIn,
            name:googleObj.name,
            email:googleObj.email,
            picture:googleObj.picture
        })
    }
    render() {
        // let fbContent;
        // if(this.state.isLoggedIn){
        //     fbContent=null
        // }
        // else{
        //     fbContent=(<FacebookLogin
        //     appId="927378571013511"
        //     autoLoad={true}
        //     fields="name,email,picture"
        //     onClick={this.componentClicked}
        //     callback={this.responseFacebook} />);
        // }
        const{signupbtn}=this.state
        return (
            <div className="body">
                {this.state.isLoggedIn?<div className='logged-in-div' ><div className="logged-info"><h1>{this.state.name}  </h1><br/>
                    <p> email  :-{this.state.email}</p></div>
                    <div className="logged-in-image"><img src={this.state.picture} alt={this.state.name}/></div>
                </div>:
                <div className={`container ${signupbtn ? 'right-panel-active':''}`  }>
                    <div className={`form-container sign-up-container`}>
                        <form>
                            <h1>Create account</h1>
                            <Social />
                            <span>or use your email for registration</span>
                            <input type="text" placeholder='Name'/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className={`form-container sign-in-container`}>
                        <form action='#'>
                            <h1>Sign in</h1>
                            <Social submitFn={this.facebookResponse} googleSubmit={this.googleResponse} />
                            <span>or use your account</span>
                            <input type="text" placeholder='Name'/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className={`overlay-panel overlay-left`}>
                                <h1> Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" onClick={this.signIn}>Sign In</button>
                            </div>
                            <div className={`overlay-panel overlay-right`}>
                                <h1> Hello Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" onClick={this.signup}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>}
                {/* <div>{fbContent}</div> */}
               
                
                 
            </div>
        );
    }
}

export default SlidingForm;