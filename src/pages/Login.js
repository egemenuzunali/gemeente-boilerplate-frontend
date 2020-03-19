import React from 'react';
import PropTypes from 'prop-types';
import { Container, makeStyles } from '@material-ui/core';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles({
	loginContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
});

const Login = ({ history }) => {
	const classes = useStyles();
	return (
		<Container maxWidth="xl">
			<div className={classes.loginContainer}>
				<LoginForm history={history} />
			</div>
		</Container>
	);
};

Login.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Login;
