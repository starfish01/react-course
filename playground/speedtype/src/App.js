import './App.css';
import Header from "./components/Header/Header";
import WordShowCase from "./components/WordShowCase/WordShowCase";
import UserInput from "./components/UserInput/UserInput";
import {useState} from "react";
import EndGameScore from "./components/EndGameScore/EndGameScore";


const App = () => {

    const countDownTimeAllocated = 60;

    const [active, setActive] = useState(false);
    const [wordsToType, setWordsToType] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [currentCorrect, setCurrentCorrect] = useState(0);
    const [charactersTyped, setCharactersTyped] = useState(0);
    const [countDownTimeRemaining, setCountDownTimeRemaining] = useState(countDownTimeAllocated);

    const [displayEndGameScore, setDisplayEndGameScore] = useState(false);


    const startActiveHandler = () => {
        generateWordsToType();
        setDisplayEndGameScore(false);
        setActive(true);
    }

    const toBeReplaceWord = 'There was a reason for her shyness. Everyone assumed it had always been there but she knew better. She knew the exact moment that the shyness began. It had been that fateful moment at the lake. There are just some events that do that to you. She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn\'t help but feel that something horrible was about to happen. He heard the loud impact before he ever saw the result. It had been so loud that it had actually made him jump back in his seat. As soon as he recovered from the surprise, he saw the crack in the windshield. It seemed to be an analogy of the current condition of his life. The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.';



    const generateWordsToType = () => {
        let words = toBeReplaceWord.split('').map(letter => {
            return {
                'letter': letter,
                'position': false
            };
        });
        setWordsToType(words);
    }

    const endActivityHandler = () => {
        setActive(false);
        setCountDownTimeRemaining(countDownTimeAllocated);
        setDisplayEndGameScore(true);
    }

    const userInputHandler = newUserInput => {
        setUserInput(preUserInput => {
            return preUserInput + newUserInput;
        });
        let check = 'wrong';
        setWordsToType( prevWordToType => {
            if (wordsToType[userInput.length].letter === newUserInput) {
                check = 'right'
            }
            prevWordToType[userInput.length].position = check;
            return prevWordToType;
        });
        setCurrentCorrect(prevCurrentCorrect => {
            prevCurrentCorrect += check === 'right' ? 1 : 0;
            return prevCurrentCorrect;
        });

        //start countdown timer
        if (charactersTyped === 0) {
            countDown();
        }
        setCharactersTyped(prevCharactersTyped => {
           return  prevCharactersTyped + 1;
        });

    }

    const countDown = () => {
        console.log('countDownStart');
        let time = countDownTimeRemaining;
        const countDownTimer = setInterval(function(){
            if(time === 1){
                clearInterval(countDownTimer);
                endActivityHandler();
            }
            setCountDownTimeRemaining(prevCountDownTimeRemaining => {
                return prevCountDownTimeRemaining - 1;
            })
            time -= 1;
        }, 1000);
    }

    // Error rate
    let currentScore = 100;
    if (charactersTyped) {
        currentScore = (100 / charactersTyped * currentCorrect).toFixed(2);
    }

    // Words Per Minute
    let charPerMinute = 0;
    charPerMinute = charactersTyped;

    let display = 'Hi';
    if (active) {
        display = <WordShowCase wordsToType={wordsToType}/>;
    } else if (displayEndGameScore) {
        // work out words per minute
        display = <EndGameScore currentScore={currentScore} charPerMinute={charPerMinute}/>
    }


    return (
        <div className="App">
            <Header onEndActivity={endActivityHandler} currentScore={currentScore} active={active} countDownTimeRemaining={countDownTimeRemaining}/>
            <div className="content">
                {display}
            </div>
            <UserInput onUserInput={userInputHandler} active={active} onStartActivity={startActiveHandler}/>
        </div>
    );
}

export default App;
