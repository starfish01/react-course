import styles from './EndGameScore.module.css';


const EndGameScore = (props) => {

    return (
        <div>
            <h1>End Game Score Here</h1>
            <div>Error Rate; {props.currentScore} %</div>
            <div>Characters per minute; {props.charPerMinute}</div>
        </div>
    );

};

export default EndGameScore;