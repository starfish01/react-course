import styles from './Character.module.css';

const Character = (props) => {

    let newClass = ` ${styles.character}`;
    if (props.position === 'right') {
        newClass += `  ${styles.right}`;
    }else if (props.position === 'wrong') {
        newClass += `  ${styles.wrong}`;
    }


    return (
        <div className={newClass}>{props.character}</div>
    );

};

export default Character;