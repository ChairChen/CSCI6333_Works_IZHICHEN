import useLocalStorage from "./useLocalStorage";
export default function NameSaver() {
    const [name, setName] = useLocalStorage("name", "");

    return (
        <section>
            <h2>Name Saver</h2>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name..."
            />
            <button
                onClick={() => setName("")}
                style={{
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Clear
            </button>

            <p style={{marginTop: "10px"}}>
                {name ? `Hello, ${name}!` : "No name saved yet."}
            </p>
        </section>
    );
}
