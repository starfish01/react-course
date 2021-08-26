import styles from './UserInput.module.css';
import {useState} from "react";

const UserInput = (props) => {

    const [input, setInput] = useState('');

    const newInput = newUserInput => {
        let key = newUserInput.key;
        // send it back and clear
        props.onUserInput(key);
        setInput('');
        console.log(newUserInput.key);
    }
    
    const changeValue = () => {

    }

    let displayInput = <div onClick={props.onStartActivity} className={styles.start}><button>Start</button></div>;
    if (props.active) {
        displayInput = <div className={styles.textInput}><input value={input} onChange={changeValue} onKeyDown={newInput} type="text"/></div>;
    }


    return (
        <div className={styles.userInput}>
            {displayInput}
        </div>
    );

};

export default UserInput;