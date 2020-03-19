import React from 'react';
import LoginForm from '../components/LoginForm';
import CURRENT_USER_QUERY from '../lib/Queries/currentUserQuery';
import { makeStyles, Container, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router';
import LoadingComponent from './LoadingComponent';

const useStyles = makeStyles({
	loginContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
});

const PleaseSignIn = (props) => {
	const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
	const classes = useStyles();

	if (loading) return <LoadingComponent />;
	if (error) return <LoginForm history={props.history} />;
	if (!data.getCurrentUser) {
		return (
			<Container maxWidth="xl">
				<div className={classes.loginContainer}>
					<Typography color="primary">Login om verder te gaan</Typography>
					<LoginForm history={props.history} />
				</div>
			</Container>
		);
	}
	return props.children;
};

export default withRouter(PleaseSignIn);
