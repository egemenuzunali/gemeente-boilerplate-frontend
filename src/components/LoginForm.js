import React from 'react';
import PropTypes from 'prop-types';
import {
	Paper,
	Typography,
	TextField,
	Fade,
	Button,
	makeStyles,
} from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Error from './ErrorMessage';
import CURRENT_USER_QUERY from '../lib/Queries/currentUserQuery';
import SIGNIN_MUTATION from '../lib/Mutations/signInMutation';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '50vw',
		padding: '16px',
		[theme.breakpoints.down('sm')]: {
			width: '80vw',
		},
	},
	formStyles: {
		display: 'flex',
		border: 'none !important',
	},
}));

const INITIAL_STATE = {
	email: '',
	password: '',
};

const LoginForm = ({ history }) => {
	const [state, setState] = React.useState({ ...INITIAL_STATE });
	const [errorState, setErrorState] = React.useState('');
	const { loading, error, data } = useQuery(CURRENT_USER_QUERY);
	const [signIn] = useMutation(SIGNIN_MUTATION);
	const classes = useStyles();

	React.useEffect(() => {
		if (data && data.getCurrentUser) {
			history.push('/');
		}
	});

	const saveToState = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const response = await signIn({
				variables: {
					...state,
				},
				refetchQueries: [
					{
						query: CURRENT_USER_QUERY,
					},
				],
			});
			localStorage.setItem('token', `${response.data.signIn.token}`);
			window.location.reload();
		} catch (error) {
			setErrorState(error);
		}
	};

	return (
		<Fade in timeout={{ enter: 500 }}>
			<Paper className={classes.root}>
				<form method="post" onSubmit={submitForm}>
					<fieldset
						disabled={loading}
						aria-busy={loading}
						className={classes.formStyles}
					>
						<Typography variant="h6">Inloggen</Typography>
						<Error error={error || errorState} />
						<TextField
							id="email"
							label="email"
							type="email"
							name="email"
							htmlFor="email"
							value={state.email}
							onChange={saveToState}
							margin="normal"
						/>
						<TextField
							id="password"
							label="password"
							type="password"
							name="password"
							htmlFor="password"
							value={state.password}
							onChange={saveToState}
							margin="normal"
						/>
						<div className="flex-column-center">
							<Button
								variant="contained"
								type="submit"
								className="full-width"
								color="primary"
							>
								Inloggen
							</Button>
						</div>
					</fieldset>
				</form>
			</Paper>
		</Fade>
	);
};

LoginForm.propTypes = {
	history: PropTypes.object.isRequired,
};

export default LoginForm;
