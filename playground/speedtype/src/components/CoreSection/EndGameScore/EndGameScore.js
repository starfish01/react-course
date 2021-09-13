import styles from './EndGameScore.module.css';


const EndGameScore = (props) => {

    let wordsTyped = props.userInput.split(' ');
    wordsTyped = wordsTyped.at(-1) === '' ? wordsTyped.length - 1 :  wordsTyped.length;

    // work out what letters are most wrong
    const wrongArray = [];

    console.log(props.typedDetails);

    props.typedDetails.forEach(character => {
        if (character.position !== 'right' && character.position !== false) {
            console.log(character.position);
            const objIndex = wrongArray.findIndex((obj => obj.letter === character.letter.toLowerCase()));
            if (objIndex !== -1) {
                wrongArray[objIndex].count += 1;
            } else {
                wrongArray.push({
                    letter: character.letter.toLowerCase(),
                    count: 1
                });
            }
        }
    });

    const listOfWrong = wrongArray.map(letter => {
        return <li>"{letter.letter.toUpperCase()}" - {letter.count}</li>
    })

    console.log(wrongArray);

    return (
        <div>
            <h1>End Game Score Here</h1>
            <div>Error Rate: {props.currentScore} %</div>
            <div>Characters per minute: {props.charPerMinute}</div>
            <div>Words Per Minute: {wordsTyped}</div>
            <div className={styles.listOfWrong}>
                <div>Keys Missed;</div>
                <ul>
                    {listOfWrong}
                </ul>
            </div>
        </div>
    );

};

export default EndGameScore;