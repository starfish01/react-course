import styles from './ActiveHeaderItems.module.css';


const ActiveHeaderItems = (props) => {

    return (
        <div className={styles.sideButtons}>
            <div className={styles.item}>
                Count Down: {props.countDownTimeRemaining}
            </div>
            <div className={styles.item}>
                Score: {props.currentScore}%
            </div>
            <button onClick={props.onEndActivity} className={styles.item}>Exit</button>
            {/*<button className={styles.item} >Reset</button>*/}
        </div>
    );

};

export default ActiveHeaderItems;