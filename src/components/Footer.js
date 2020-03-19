import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	mainContainer: {
		position: 'fixed',
		left: 0,
		bottom: 0,
		backgroundColor: '#2c3e50',
		width: '100vw',
		color: 'white',
		padding: 16,
		textAlign: 'center',
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.mainContainer}>
			<Typography variant="caption" component="div">
				Footer here
			</Typography>
		</div>
	);
};

export default Footer;
