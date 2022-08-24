import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Typography variant="subtitle1" gutterBottom>
				2022 Copyright by <label>Marianne Mateo</label>
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				Privacy . Terms . Sitemap
			</Typography>
		</div>
	);
};

const useStyle = makeStyles((theme) => ({
	root: {
		borderTop: '1px solid black',
		textAlign: 'center',
		fontStyle: 'italic',
		marginTop: theme.spacing(2),
		background: 'black',
		color: 'white',
		'& label': {
			color: '#d1a930',
		},
	},
}));

export default Footer;
