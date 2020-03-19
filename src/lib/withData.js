import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { endpoint, prodEndpoint } from './config';

const link = createHttpLink({
	uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : '',
		},
	};
});

function createClient() {
	return new ApolloClient({
		link: authLink.concat(link),
		cache: new InMemoryCache(),
	});
}
export default createClient;
