type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.25em',
        fontSize: '4rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => {
        return (
          <span style={{ borderBottom: '0.1em solid black' }} key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? 'visible'
                    : 'hidden',
                color:
                  !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
