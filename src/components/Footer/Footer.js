import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';
import './../Layout/Layout.css'

class Footer extends PureComponent {
  render() {
    return (
			<AuthConsumer>	
					{({isAuthorized, email}) => {
						return (
							<div className="header__content">
								{
									(isAuthorized)
										? <p className="footer-message t-footer">{`Вы вошли как ${email}`}</p> 
										: <p className="footer-message t-footer">Вы гость в этой системе</p>
								}
							</div>
						)
					}}
      </AuthConsumer>		
		);
  }
}

export default Footer;
