import {React , useCallback, useEffect, useState} from 'react'

import HangmanDrawing from './hangmandrawing'
import HangmanWord from './hangmanword'
import Keyboard from './keyboard'
 import Wordlist from "./wordlist";

function getWord() {
    return Wordlist[Math.floor(Math.random() * Wordlist.length)]
}
 

function Hungman() {

    const randomnumber=Wordlist[Math.floor(Math.random()*Wordlist.length)]
   
    const [wordToGuess, setWordToGuess] = useState(()=> {
         return randomnumber.word;
    })
    const btnrefresh = () => {
        window.location.reload();
    }
    const[Hint,setHint]=useState(randomnumber.hint)

    const [guessedLetters, setGuessedLetters] = useState([])
  
    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
      )

    const isLoser=incorrectLetters.length >=6

    const isWinner=wordToGuess.split("").every(letter=>guessedLetters.includes(letter))


    const addGuessedLetter=useCallback((letter)=>{
        if(guessedLetters.includes(letter) || isLoser || isWinner)return;
        setGuessedLetters(currentLetters=>[...currentLetters, letter]);
    },[guessedLetters , isWinner, isLoser])

    useEffect(()=>{
        const handler=(e)=>
        {
            const key =e.key;
            if (!key.match(/^[a-z]/)) return
            e.preventDefault();
            addGuessedLetter(key);

        }
        document.addEventListener("keypress",handler)
        return ()=>{
            document.removeEventListener("keypress",handler)
        }
    },[guessedLetters])

      useEffect(() => {
        const handler = (e) => {
          const key = e.key
          if (key !== "Enter") return
    
          e.preventDefault()
          setGuessedLetters([])
          setWordToGuess(getWord())
        }
    
        document.addEventListener("keypress", handler)
    
        return () => {
          document.removeEventListener("keypress", handler)
        }
      }, [])
  return (
    <div className='max-w-4xl flex flex-col gap-2 m-auto items-center '>
        {isWinner &&"Winner!! - Refresh the page to try again.."}
        {isLoser &&"You Lost, Nice Try!! - Refresh the page to try again.."}
        <div className="text-2xl text-center mt-3">
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}></HangmanDrawing>
          
           
           
        </div>
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}></HangmanWord>
            
        <div className="self-stretch text-center">
        
        <h3 className='mb-2'>{Hint}</h3>

        {isLoser && <button onClick={btnrefresh} className='bg-sky-400 mb-2'>Try again</button>}
            <Keyboard activeLetters={guessedLetters.filter(letter=> wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} 
            addGuessedLetter={addGuessedLetter} disabled={isWinner || isLoser}></Keyboard>
            </div>

           

      
    </div>
  )
}

export default Hungman