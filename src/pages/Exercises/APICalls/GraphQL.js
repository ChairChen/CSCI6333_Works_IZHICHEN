import React from 'react';
import {
    gql
} from '@apollo/client';
import { useQuery } from '@apollo/client/react';


const GET_COUNTRIES = gql`
    query GetCountries {
        countries {
            code
            name
            emoji
        }
    }
`;

export default function GraphQL() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <section>
            <h1>Apollo/GraphQL Example</h1>
            <p>ref to latest src - https://www.apollographql.com/docs/react/get-started</p>
            <ul>
                {data.countries.slice(0, 5).map((country) => (
                    <li key={country.code}>
                        {country.name} {country.emoji}
                    </li>
                ))}
            </ul>
        </section>
    );
}
