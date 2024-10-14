interface InputProps {
    userGuess: string;
    setUserGuess: (value: string) => void;
    onGuess: () => void;
  }
  
  const InputComponent: React.FC<InputProps> = ({ userGuess, setUserGuess, onGuess }) => {
    return (
      <div>
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Ingresa un número"
        />
        <button onClick={onGuess}>Adivinar</button>
      </div>
    );
  };
  
  export default InputComponent;
  