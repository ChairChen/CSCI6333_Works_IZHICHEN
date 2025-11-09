import React, { useState } from "react";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
            ,error: null
            ,loading: true
        };
    }
    // added to DOM
    // initial API call when component mounts
    componentDidMount() {
        this.fetchUserData(this.props.userId);
    }

    // updated in DOM
    // if user id changes, fetch new user data
    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            this.setState({ loading: true, user: null, error: null });
            this.fetchUserData(this.props.userId);
        }
    }
    
    // being deleted from DOM
    componentWillUnmount() {
        console.log('Component will unmount, cleaning up resources...');
    }

    fetchUserData(userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) throw new Error("User not found");
            return response.json();
        })
        .then(data => this.setState({ user: data, loading: false }))
        .catch(error => this.setState({ error: error, loading: false }))
    }

    render() {
        const { user, error, loading } = this.state;
        if (loading) return <div>Loading...</div>
        if (!user) return <div style={{ color: "red" }}>No User Data Found.</div>
        if (error) return <div>Error: {error.message}</div>
        return (
            <div>
                <h2>{user.name}</h2>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>website: {user.website}</p>
            </div>
        );
    }
}

export default function UserProfileLookup() {
    const [userId, setUserId] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => setInputValue(e.target.value);
    const handleClick = () => setUserId(inputValue);


    return (
        <section>
            <h2>User Profile Lookup</h2>
            <div>
                <label htmlFor="userId">Search User Id: </label>
                <input 
                    id="userId"
                    name="userId"
                    type="number"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter a number (1–10)" />
                <button onClick={handleClick}>Search</button>
            </div>
            {userId && <UserProfile userId={userId}/>}
        </section>
    );
}