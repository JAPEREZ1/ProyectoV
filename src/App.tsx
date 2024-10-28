import { useState } from 'react';
import InputComponent from './components/InputComponent';
import FeedbackComponent from './components/FeedbackComponent';
import ControlsComponent from './components/ControlsComponent';

const App: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(generateRandomNumber());
  const [userGuess, setUserGuess] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [attempts, setAttempts] = useState<number[]>([]);

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  const createConfetti = () => {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
      confetti.style.backgroundColor = getRandomColor();
      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 2000);
    }
  };

  const getRandomColor = (): string => {
    const colors = ["#ff69b4", "#ffe600", "#28a745", "#646cff", "#f94144"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess);

    if (isNaN(guess)) {
      setFeedback('Por favor, ingresa un número válido.');
      return;
    }

    if (guess < 1 || guess > 100) {
      setFeedback('El número está fuera del rango asignado (1-100).');
      return;
    }

    setAttempts([...attempts, guess]);

    if (guess < randomNumber) {
      setFeedback('El número es muy bajo.');
    } else if (guess > randomNumber) {
      setFeedback('El número es muy alto.');
    } else {
      setFeedback(`¡Correcto! El número era ${randomNumber}.`);
      onGuess(true);  // Activar celebración al acertar
    }
  };

  const onGuess = (correct: boolean) => {
    if (correct) {
      createConfetti();
    }
  };

  const handleReset = () => {
    setRandomNumber(generateRandomNumber());
    setUserGuess('');
    setFeedback('');
    setAttempts([]);
  };

  return (
    <div className="game-container">
      <h1>Juego de Adivinanza de Números</h1>
      <InputComponent userGuess={userGuess} setUserGuess={setUserGuess} onGuess={handleGuess} />
      <FeedbackComponent feedback={feedback} />
      <ControlsComponent onReset={handleReset} />
      <div>
        <h2>Intentos:</h2>
        <ul>
          {attempts.map((attempt, index) => (
            <li key={index}>Intento {index + 1}: {attempt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
