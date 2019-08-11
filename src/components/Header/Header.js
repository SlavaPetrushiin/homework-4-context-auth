import React, { PureComponent } from 'react';
import './Header.css';
import './../Layout/Layout.css'
import {AuthConsumer} from '../../contexts/Auth'; 
import Button from '../Button';

class RenderUserInfo extends PureComponent{
	render(){
		const {email, onClick: click} = this.props;
		return (
			<div className="header-menu">
				<p className="header-menu__email header-email t-header-email">{email}</p>
				<Button onClick={click} className="t-logout header-menu__button">
					Выйти
				</Button>
			</div>
		)
	}
}

class Header extends PureComponent {
  render() {
		return (
			<AuthConsumer>	
					{({isAuthorized, email, logout}) => {
						function handleSubmit(){
							logout();
						}						
						return (
							(isAuthorized)
								? <RenderUserInfo email={email} onClick={handleSubmit}/> 
								: null
						)
					}}
      </AuthConsumer>			
		);
  }
}

export default Header;
