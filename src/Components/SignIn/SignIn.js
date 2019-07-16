import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		signInEmail: '',
		signInPassword: '',
		errorMessage: ''
	}
}

	onEmailChange = (event) => {
		this.setState( {signInEmail: event.target.value} )
	}

	onPasswordChange = (event) => {
		this.setState( {signInPassword: event.target.value} )
	}

	errorLogin = (message) => {
		this.setState( {errorMessage: message} )
	}

	onSubmitButton = () => {
		fetch('https://shrouded-basin-70412.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home')
				}
				else {
					this.errorLogin('Wrong email and password.')
				}
			})
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="br3 b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center">

	<main className="pa4 black-80">
		  <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="center f2 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">Email</label>
		        <input 
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="email" 
		        name="email-address"  
		        id="email-address"
		        onChange={this.onEmailChange}
		         />
		       
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6 tc" htmlFor="password">Password</label>
		        <input 
		        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
		        type="password" 
		        name="password"  
		        id="password"
		        onChange={this.onPasswordChange}
		         />
		      </div>
		      <div className="tc hover-hot-pink pointer white i shadow-4"><h5> {this.state.errorMessage} </h5></div>
		    </fieldset>
		    <div className="center">
		      <input 
		      onClick = {this.onSubmitButton}
		      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center tc center" 
		      type="submit" value="Sign in" />
		    </div>
		    <div className="lh-copy mt3 center">
		      <a onClick = {() => onRouteChange('register')} href="#0" className="f6 underline link dim black db">Register</a>
		    </div>
  		</div>
</main>
</article>

			
		);
	}}

export default SignIn;