import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";
import ApolloRootProvider from "../../../../apollo/ApolloRootProvider";

const GET_USERS = gql`
    query {
        users(options: { paginate: { page: 1, limit: 5 } }) {
            data {
                id
                name
                email
            }
        }
    }
`;

const UPDATE_USER = gql`
    mutation ($id: ID!, $name: String!) {
        updateUser(id: $id, input: { name: $name }) {
            id
            name
            email
        }
    }
`;

const DELETE_USER = gql`
    mutation ($id: ID!) {
        deleteUser(id: $id)
    }
`;

const GraphQLContent = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    const [users, setUsers] = useState([]);
    const [updateUser] = useMutation(UPDATE_USER);
    const [deleteUser] = useMutation(DELETE_USER);

    useEffect(() => {
        if (data?.users?.data) {
            setUsers(data.users.data);
        }
    }, [data]);

    const handleUpdate = async (id) => {
        const newName = prompt("New name?");

        if(!newName) return;
        await updateUser({ variables: { id, name: newName } });
        setUsers((prev) => (
            prev.map((u) => (
                u.id === id ? { ...u, name: newName } : u
            ))
        ));
    };

    const handleDelete = async (id) => {
        await deleteUser({ variables: { id } });
        setUsers((prev) => (prev.filter((u) => (u.id !== id))));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section>
            <h1>Assignment 6 — GraphQL CRUD</h1>
            {users.map((user) => (
            <div key={user.id} style={{ marginBottom: 10 }}>
                <strong>{user.name}</strong> ({user.email})
                <button onClick={() => handleUpdate(user.id)}>Update</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
            ))}
        </section>
    );
}

export default function GraphQL() {
    return (
        <ApolloRootProvider client="GraphQLZeroClient">
            <GraphQLContent />
        </ApolloRootProvider>
    );
}
