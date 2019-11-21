import React from 'react'
import styles from './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        const { isVisible } = this.state;
        return (
            <div className={styles.Header}>
                <nav className={styles.Navigation}>
                    <div className={styles.LogoContainer}>
                        <h4 className={styles.Logo}>runner shop</h4>
                    </div>
                    <ul className={`${styles.NavLinks} ${isVisible ? styles.NavLinksActive : ''}`}>
                        <li><a className={styles.NavLink} href="#">Home</a></li>
                        <li><a className={styles.NavLink} href="#">FAQ</a></li>
                        <li><a className={styles.NavLink} href="#">Regulamin</a></li>
                        <li><a className={styles.NavLink} href="#">Kontakt</a></li>
                        <li><a className={styles.NavLink} href="#"><FontAwesomeIcon className={styles.ShoppingBasket} icon={faShoppingBasket} size="lg" /></a></li>
                    </ul>
                    <div className={`${styles.Burger} ${isVisible ? styles.Toggle : ''}`} onClick={(e) => this.handleToggle(e)}>
                        <div className={styles.BurgerLineOne}></div>
                        <div className={styles.BurgerLineTwo}></div>
                        <div className={styles.BurgerLineThree}></div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;