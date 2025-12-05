import { CountryClient } from './clients/CountryClient';
import { GraphQLZeroClient } from './clients/GraphQLZeroClient';
import { ApolloProvider } from '@apollo/client/react';

export default function ApolloRootProvider({ client, children }) {
    const targetClient = () => {
        switch (client) {
            case "GraphQLZeroClient": return GraphQLZeroClient;
            case "CountryClient": return CountryClient;
            default: return CountryClient;
        }
    }
    return (
        <ApolloProvider client={targetClient()}>
            {children}
        </ApolloProvider>
    );
}
