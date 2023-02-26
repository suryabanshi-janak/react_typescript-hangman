import styles from './Keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  disabled: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessLetter: (x: string) => void;
};

export function Keyboard({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addGuessLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(65px, 1fr))',
        gap: '.5em',
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ''} ${
              isInactive ? styles.inactive : ''
            }`}
            key={key}
            onClick={() => addGuessLetter(key)}
            disabled={isActive || isInactive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
