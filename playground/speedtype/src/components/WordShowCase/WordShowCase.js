import styles from './WordShowCase.module.css';
import Character from "./includes/Character";

const WordShowCase = (props) => {

    let offset = 0.5;
    let hasTyped = false;

    const wordsData = props.wordsToType.map((character, index) => {
        let currentKey = false;
        if (character.position) {
            offset +=1;
            hasTyped = true;
        }
        if ((hasTyped && !character.position) || (index === 0 && !hasTyped)) {
            currentKey = true;
            hasTyped = false;
        }

        return <Character key={index} currentKey={currentKey} position={character.position} character={character.letter}/>
    });

    offset = '-' + offset * 60 + 'px';

    return (
        <div className={styles.wordsShowCase}>
            <div className={styles.wordHolder} style={{marginLeft: offset}}>
                {wordsData}
            </div>
        </div>
    );

};

export default WordShowCase;