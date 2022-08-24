import { makeStyles, CssBaseline, Button, Grid } from '@material-ui/core';
import { useState } from 'react';
import data from '../data';
import Banner from './Banner';
import DatePicker from './DatePicker';
import RoomCard from './RoomCard';

const Home = () => {
	const classes = useStyles();
	const [showDates, setShowDates] = useState(false);
	return (
		<>
			<CssBaseline />
			<div className={classes.root}>
				<div className={classes.dates}>
					<Button onClick={() => setShowDates(!showDates)}>
						{showDates ? 'Hide' : 'Search Dates'}
					</Button>
				</div>
				{showDates && <DatePicker />}
				<Banner />
				<Grid container className={classes.section}>
					{data.map(({ src, title, description }, i) => (
						<Grid item sm="12" md="6" lg="4">
							<RoomCard
								src={src}
								title={title}
								description={description}
								key={i}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		margin: theme.spacing(0, 2, 2),
	},
	dates: {
		display: 'flex',
		flexDirection: 'column',
		'& button': {
			background: '#fff',
			color: 'rgba(209, 169, 48, 0.9)',
			textTransform: 'inherit',
			fontSize: '1.2rem',
			fontWeight: 'bold',
		},
		'& button:hover': {
			background: 'rgba(209, 169, 48, 0.9)',
			color: '#fff',
		},
	},
}));

export default Home;
