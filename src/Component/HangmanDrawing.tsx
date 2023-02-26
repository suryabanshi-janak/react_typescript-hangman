const HEAD = (
  <div
    style={{
      height: '40px',
      width: '40px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      right: '-24px',
      top: '40px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '80px',
      background: 'black',
      position: 'absolute',
      top: '90px',
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: '80px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '130px',
      right: '-80px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '80px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '130px',
      right: '10px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '80px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '160px',
      right: '-70px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '80px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '160px',
      right: 0,
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfWrongGuesses: number;
};

export function HangmanDrawing({ numberOfWrongGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: 'relative' }}>
      {BODY_PARTS.slice(0, numberOfWrongGuesses)}
      <div
        style={{
          width: '10px',
          height: '40px',
          background: 'black',
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          height: '10px',
          width: '180px',
          marginLeft: '95px',
          background: 'black',
        }}
      />
      <div
        style={{
          height: '350px',
          width: '10px',
          background: 'black',
          marginLeft: '95px',
        }}
      />
      <div style={{ width: '200px', height: '10px', background: 'black' }} />
    </div>
  );
}
