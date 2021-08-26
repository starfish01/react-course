import './App.css';
import Header from "./components/Header/Header";
import WordShowCase from "./components/WordShowCase/WordShowCase";
import UserInput from "./components/UserInput/UserInput";
import {useState} from "react";


const App = () => {

    const [active, setActive] = useState(false);
    const [wordsToType, setWordsToType] = useState([]);
    const [userInput, setUserInput] = useState('');

    const startActiveHandler = () => {
        generateWordsToType();
        setActive(true);
    }

    const generateWordsToType = () => {
        let words = 'something new'.split('').map(letter => {
            return {
                'letter': letter,
                'position': false
            };
        });
        setWordsToType(words);
    }

    const endActivityHandler = () => {
        setActive(false);
        setWordsToType('Game Over'.split('').map(letter => {
            return {
                'letter': letter,
                'position': false
            };
        }));
    }

    const userInputHandler = newUserInput => {
        setUserInput(preUserInput => {
            return preUserInput + newUserInput;
        });
        setWordsToType( prevWordToType => {
            let check = 'wrong'
            if (wordsToType[userInput.length].letter === newUserInput) {
                check = 'right'
            }
            prevWordToType[userInput.length].position = check;
            return prevWordToType;
        });
    }

    return (
        <div className="App">
            <Header onEndActivity={endActivityHandler}/>
            <div className="content">
                <WordShowCase active={active} wordsToType={wordsToType}/>
                <UserInput onUserInput={userInputHandler} active={active} onStartActivity={startActiveHandler}/>
            </div>
        </div>
    );
}

export default App;
