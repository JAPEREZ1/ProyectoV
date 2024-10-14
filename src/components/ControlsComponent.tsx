interface ControlsProps {
    onReset: () => void;
  }
  
  const ControlsComponent: React.FC<ControlsProps> = ({ onReset }) => {
    return (
      <div>
        <button onClick={onReset}>Reiniciar Juego</button>
      </div>
    );
  };
  
  export default ControlsComponent;
      