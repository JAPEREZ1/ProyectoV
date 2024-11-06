# Juego de Adivinanza de Números

Este proyecto es un juego de adivinanza donde el usuario intenta adivinar un número aleatorio entre 1 y 100. Fue creado usando **Vite**, **React**, y **TypeScript**. El objetivo es proporcionar un entorno interactivo donde el usuario pueda adivinar el número con pistas sobre si su elección es demasiado alta o baja. Incluye características como un límite de intentos y la opción de reiniciar el juego.



## Habilidades

### 1. Escribir tu primer componente de React

**Descripción**: Crear un componente `InputComponent` que reciba el número ingresado por el usuario y permita iniciar el proceso de adivinanza.

```typescript
// InputComponent.tsx
import React from 'react';

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
```

**Explicación**:
- **¿Qué hace?** Este componente permite al usuario ingresar un número y enviar la adivinanza al juego.
- **¿Cómo cumple el requisito?** Implementa la habilidad de crear un componente React simple que toma la entrada del usuario.
- **¿Por qué es la mejor forma?** Es una implementación clara y reutilizable que gestiona la entrada de usuario de forma modular.



### 2. Crear archivos con múltiples componentes

**Descripción**: Crear componentes independientes para la entrada de números, la retroalimentación, y los controles para reiniciar el juego.

**Componentes:**

#### InputComponent.tsx:
  - **Explicación**: Permite al usuario ingresar un número y realizar la adivinanza.
  - **Código**: Incluido en la habilidad 1.

#### FeedbackComponent.tsx:
```typescript
// FeedbackComponent.tsx
interface FeedbackProps {
    feedback: string;
}

const FeedbackComponent: React.FC<FeedbackProps> = ({ feedback }) => {
    return <div>{feedback && <p>{feedback}</p>}</div>;
};

export default FeedbackComponent;
```

- **Explicación**: Muestra los mensajes de retroalimentación dependiendo de la adivinanza del usuario.

#### ControlsComponent.tsx:
```typescript
// ControlsComponent.tsx
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
```

- **Explicación**: Proporciona un botón para reiniciar el juego.



### 3. Añadir marcado a JavaScript con JSX

**Descripción**: Usar JSX para mostrar la interfaz de entrada y la retroalimentación en el componente `App.tsx`.

```typescript
// App.tsx (extracto)
return (
    <div className="game-container">
        <h1>Juego de Adivinanza de Números</h1>
        <InputComponent userGuess={userGuess} setUserGuess={setUserGuess} onGuess={handleGuess} />
        <FeedbackComponent feedback={feedback} />
        <ControlsComponent onReset={handleReset} />
    </div>
);
```

- **Explicación**: El JSX permite estructurar el juego visualmente en una interfaz de usuario.



### 4. Añadir llaves con JSX

**Descripción**: Utilizar llaves `{ }` en JSX para acceder al valor del número ingresado y manejar los eventos.

```typescript
<input
    type="number"
    value={userGuess}
    onChange={(e) => setUserGuess(e.target.value)}
    placeholder="Ingresa un número"
/>
```

- **Explicación**: Utilizamos llaves para acceder al valor ingresado (`userGuess`) y para manejar el evento `onChange` que actualiza el valor.



### 5. Configurar componentes con props

**Descripción**: Pasar el número ingresado y la retroalimentación como props entre los componentes.

- **Explicación**: La comunicación mediante `props` facilita el paso de datos entre componentes, manteniendo el código modular.



### 6. Renderizar condicionalmente

**Descripción**: Mostrar diferentes mensajes en el componente `FeedbackComponent` dependiendo de si el número es muy alto, muy bajo o correcto.



### 7. Renderizar múltiples componentes a la vez

**Descripción**: Mostrar todos los intentos previos del usuario en una lista.

```typescript
<ul>
    {attempts.map((attempt, index) => (
        <li key={index}>Intento {index + 1}: {attempt}</li>
    ))}
</ul>
```



### 8. Mantener componentes puros

**Descripción**: Todos los componentes son puros, sin cambios de estado internos, para facilitar el mantenimiento y la predictibilidad.



### 9. Controlar eventos del usuario

**Descripción**: Capturar el evento `onClick` en el botón de adivinanza y en el botón de reinicio.

```typescript
<button onClick={onGuess}>Adivinar</button>
<button onClick={onReset}>Reiniciar Juego</button>
```



### 10. Gestionar el estado

**Descripción**: Usar `useState` para manejar el estado del número aleatorio, el número ingresado y la retroalimentación.



### 11. Actualizar un array en el estado

**Descripción**: Usar `setAttempts([...attempts, guess])` para registrar cada intento en el array `attempts`.



### 12. Levantar el estado

**Descripción**: Mantener el estado en `App.tsx` y pasarlo como `props` a los componentes, para que todos compartan el mismo estado.



### 13. Efectos opcionales

**Descripción**: Usar `useEffect` para generar un nuevo número aleatorio cuando se reinicia el juego.

```typescript
useEffect(() => {
    setRandomNumber(generateRandomNumber());
}, []);
```
