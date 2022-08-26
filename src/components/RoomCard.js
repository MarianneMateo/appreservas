import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const RoomCard = ({ src, title, description }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<figure className={classes.images}>
				<img className={classes.media} src={src} alt={title} />
			</figure>
			<Typography variant="h5" color="textPrimary">
				{title}
			</Typography>
			<Typography variant="h6" color="textSecondary">
				{description}
			</Typography>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(4, 0, 2, 0),
		[theme.breakpoints.down('xs')]: {
			'& h6': {
				wordWrap: 'break-word',
			},
		},
	},
	images: {
		overflow: 'hidden',
		borderRadius: '10px',
	},
	media: {
		height: '400px',
		width: '700px',
		objectFit: 'cover',
		transform: 'scale(1.1)',
		webkitTransform: 'scale(1.1)',
		webkitTransition: '.4s ease-in-out',
		transition: '.4s ease-in-out',
		'&:hover': {
			transform: 'scale(1)',
			webkitTransform: 'scale(1)',
		},
		[theme.breakpoints.down('xs')]: {
			height: '300px',
			width: '400px',
		},
	},
}));

export default RoomCard;
