import { useReducer } from "react";

const initialState = {
    email: "",
    password: "",
    loading: false,
    message: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value }
        case "SET_LOADING":
            return { ...state, loading: action.value }
        case "SET_MESSAGE":
            return { ...state, message: action.value }
        default:
            return state;
    }
}

export default function LoginForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({ type: "SET_LOADING", value: true });
        dispatch({ type: "SET_MESSAGE", value: "" });
        setTimeout(() => {
            if (state.email === "" || state.password === "") {
                dispatch({ type: "SET_MESSAGE", value: "Please enter email and password." });
            } else if (state.email === "admin@example.com" && state.password === "1234") {
                dispatch({ type: "SET_MESSAGE", value: "Login successful!" });
            } else {
                dispatch({ type: "SET_MESSAGE", value: "Invalid credentials." });
            }
            dispatch({ type: "SET_LOADING", value: false });
        }, 2000);
    };

    return (
        <section>
            <h2>Login Form</h2>
            <form onSubmit={handleLogin} style={{display: "flex", flexDirection: "column"}}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={state.email}
                        onChange={(e) => dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })}
                        placeholder="Enter your email..." 
                    />
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={state.password}
                        onChange={(e) => dispatch({ type: "SET_FIELD", field: "password", value: e.target.value })}
                        placeholder="Enter your password..." 
                    />
                </div>
                
                <button type="submit">{state.loading ? "Loading..." : "Login"}</button>
            </form>
            {state.message && <p>{state.message}</p>}
        </section>
    );
}