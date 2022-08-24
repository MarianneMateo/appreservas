import { makeStyles, Typography, Button } from '@material-ui/core';
import banner from '../img/banner.jpg';

const Banner = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.info}>
				<Typography variant="h2">Plan your getaway!</Typography>
				<Button variant="contained">Check our rooms</Button>
			</div>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		height: '60vh',
		position: 'relative',
		backgroundImage: `url(${banner})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	info: {
		backgroundColor: '#000',
		color: '#fff',
		width: '350px',
		padding: theme.spacing(2),
		'& h2': {
			marginBottom: theme.spacing(4),
		},
		'& button': {
			backgroundColor: '#d1a930',
			color: '#fff',
			textTransform: 'inherit',
			fontSize: '1.2rem',
			fontWeight: 'bold',
		},
		'& button:hover': {
			backgroundColor: '#fff',
			color: '#d1a930',
		},
	},
}));

export default Banner;
