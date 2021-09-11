import styles from './Header.module.css';
import ActiveHeaderItems from "./ActiveHeaderItems/ActiveHeaderItems";

const Header = (props) => {

    let headerItems = '';
    if (props.active) {
        headerItems = <ActiveHeaderItems countDownTimeRemaining={props.countDownTimeRemaining} currentScore={props.currentScore} onEndActivity={props.onEndActivity}/>
    }

    return (
        <div className={styles.header}>
            <a href="/" className={`${styles.logo} ${styles.item}`}>Speed Type</a>
            <div className={styles.headerRight}>
                {headerItems}
            </div>
        </div>
    );

};

export default Header;