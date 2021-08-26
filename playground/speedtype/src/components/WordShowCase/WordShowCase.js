import styles from './WordShowCase.module.css';
import Character from "./includes/Character";

const WordShowCase = (props) => {

    let array = props.wordsToType;

    console.log(array);

    return (
        <div className={styles.wordsShowCase}>
            <div className={styles.wordHolder}>
                { array.map((character, index) =>
                    <Character key={index} position={character.position} character={character.letter}/>)
                }
            </div>
        </div>
    );

};

export default WordShowCase;