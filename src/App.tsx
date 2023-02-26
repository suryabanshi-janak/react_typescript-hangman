import { useCallback, useEffect, useState } from 'react';
import { HangmanDrawing } from './Component/HangmanDrawing';
import { HangmanWord } from './Component/HangmanWord';
import { Keyboard } from './Component/Keyboard';
import words from './words.json';

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => document.removeEventListener('keypress', handler);
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => document.removeEventListener('keypress', handler);
  }, []);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>
        {isWinner && 'Winner! - Refresh to try again'}
        {isLoser && 'Nice Try! - Refresh to try again'}
      </div>
      <HangmanDrawing numberOfWrongGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessLetter={addGuessLetter}
        />
      </div>
    </div>
  );
}

export default App;
