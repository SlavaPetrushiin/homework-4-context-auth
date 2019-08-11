import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const user ={
	email: "stu@dent.com",
	password: "123",
}

class AuthProvider extends PureComponent {

	state = {
		password: '',
		authorizeError: '',
		email: '',
		isAuthorized: false
	};

	authorize = (email, password) => {
		if (user.email === email && String(user.password) === password){
			this.setState({
				isAuthorized: true,
				email: email,
				authorizeError: '',
			})
		} else {
			this.setState({authorizeError: "Email или пароль введён не верно"})
		}
	};

	logout = () => {
		this.setState({
			isAuthorized: false,
			email: ""
		})
	};
	
	getProviderValue = () => {
		return ({
			...this.state, logout: this.logout,  authorize: this.authorize
		})
	};

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
