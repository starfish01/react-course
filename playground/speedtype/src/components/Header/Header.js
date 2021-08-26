import styles from './Header.module.css';

const Header = (props) => {

    return (
        <div className={styles.header}>
            <a href="/" className={`${styles.logo} ${styles.item}`}>Speed Type</a>
            <div className={styles.headerRight}>
                <div className={styles.sideButtons}>
                    <div className={styles.item}>
                        Count Down: 60:00
                    </div>
                    <button onClick={props.onEndActivity} className={styles.item}>Exit</button>
                    {/*<button className={styles.item} >Reset</button>*/}
                </div>
            </div>
        </div>
    );

};

export default Header;