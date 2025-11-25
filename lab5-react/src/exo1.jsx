import { useState } from "react";

function ClickMeButton() {
    const [clicked, setClicked] = useState(false);

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>question 1 — ClickMe</h3>
            <button onClick={() => setClicked(true)}>ClickMe</button>
            {clicked && <p>Cliqué</p>}
        </div>
    );
}

function ToggleButton() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>question 2 — Toggle</h3>
            <button onClick={() => setCount(c => c + 1)}>Basculer</button>
            <p>Nombre de clics : {count}</p>
            <p>{count % 2 === 1 ? "Cliqué" : "Pas cliqué"}</p>
        </div>
    );
}

function ThreeButtons() {
    const [lastClicked, setLastClicked] = useState(null);

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>question  3 — Trois boutons</h3>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => setLastClicked(1)}>Button1</button>
                <button onClick={() => setLastClicked(2)}>Button2</button>
                <button onClick={() => setLastClicked(3)}>Button3</button>
            </div>
            {lastClicked !== null && (
                <p style={{ marginTop: "10px" }}>Button #{lastClicked} was clicked</p>
            )}
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ marginBottom: "20px" }}>
            <h3>question 4 — Compteur</h3>
            <h1>{count}</h1>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => setCount(c => c + 1)}>Inc</button>
                <button onClick={() => setCount(c => c - 1)}>Dec</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>React question 1 à 4</h2>
            <ClickMeButton />
            <ToggleButton />
            <ThreeButtons />
            <Counter />
        </div>
    );
}

export default App;
