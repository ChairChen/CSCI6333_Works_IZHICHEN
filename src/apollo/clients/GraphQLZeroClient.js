import { 
    ApolloClient
    ,InMemoryCache
    ,HttpLink
} from '@apollo/client';

export const GraphQLZeroClient = new ApolloClient({
    link: new HttpLink({uri: 'https://graphqlzero.almansi.me/api'})
    ,cache: new InMemoryCache()
});
