import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
	query CURRENT_USER_QUERY {
		getCurrentUser {
			id
			name
			email
		}
	}
`;

export default CURRENT_USER_QUERY;
