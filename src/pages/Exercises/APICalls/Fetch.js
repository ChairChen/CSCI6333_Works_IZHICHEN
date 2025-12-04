import React from "react";
import { useState, useEffect } from "react";

export default function Fetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then((data) => {
            setData(data);
            setLoading(false);
            })
            .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);

    return (
        <section>
            <h1>API Calls - RESTful, SOAP, GraphQL and gRPC</h1>
            <div>
                {
                    (loading)
                    ? <p>Loading...</p>
                    : (error)
                    ? <p>Error: {error.message}</p>
                    : data.slice(0, 5).map((element) => (
                            <p key={element.id+element.userId}>
                                Post Id: {element.id}, User Id: {element.userId}
                                <br />
                                Title: {element.title}
                                <br />
                                Body: {element.body}
                                <br /><br />
                            </p>
                        ))
                }
            </div>
        </section>
    );
}
