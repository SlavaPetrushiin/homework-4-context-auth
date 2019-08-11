import React, { PureComponent } from 'react';
import './Layout.css';

class Layout extends PureComponent {
  render() {
		const  {header: Header, footer: Footer, children} = this.props

    return (
			<div>
				{Header ? 
					(
						<header className="header">
							<p className="header__title section-title">header</p>
							<Header />
						</header>
					)
					: null
				}

				<main className={
					(!Header && !Footer)
					 ? "main" 
					 	: (Header && !Footer)
								? "main main--with-header"
								: (!Header && Footer)
									? "main main--with-footer" 
									: "main main--with-header main--with-footer" 
				}>
					<p className="main__title section-title">main</p>
					 {children}
				</main>

				{Footer ?
				 (
					<footer className="footer">
						<p className="header__title section-title">footer</p>
						<Footer /> 
					</footer>
				 )
				 : null
				}


			</div>
		)
  }
}

export default Layout;
