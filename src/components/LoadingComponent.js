import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core/';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
	test: console.log(theme),
	loadingContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		width: '100%',
	},
	backgroundColorFab: {
		backgroundColor: '',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '56px',
		height: '56px',
		borderRadius: '50%',
		boxShadow:
			'0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
	},
	progressColor: {
		color: theme.palette.primary,
	},
}));

const LoadingComponent = () => {
	const classes = useStyles();
	return (
		<Fade in timeout={{ enter: 1000 }}>
			<div className={classes.loadingContainer}>
				<div className={classes.backgroundColorFab}>
					<CircularProgress className={classes.progressColor} />
				</div>
			</div>
		</Fade>
	);
};

export default LoadingComponent;
