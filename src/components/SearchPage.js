import { makeStyles, Typography, Chip, Slider } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useState } from 'react';
import data, { chips } from '../data';
import Results from './Results';
import { useSelector } from 'react-redux';
import { selectStart } from '../features/startSlice';
import { selectEnd } from '../features/endSlice';

const SearchPage = () => {
	const classes = useStyle();
	const [value, setValue] = useState(400);
	const start = useSelector(selectStart);
	const end = useSelector(selectEnd);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Typography variant="h5" gutterBottom>
				Available rooms
			</Typography>
			<div className={classes.chips}>
				{chips.map((e) => {
					let icon = <HighlightOffIcon />;
					return (
						<Chip
							label={e.label}
							key={e.key}
							icon={icon}
							className={classes.chip}
						/>
					);
				})}
			</div>
			<div className={classes.selector}>
				<Typography gutterBottom>Prices</Typography>
				<Slider
					value={value}
					onChange={handleChange}
					aria-labelledby="continuous-slider"
					min={150}
					max={400}
					valueLabelDisplay="auto"
					color="secondary"
				/>
			</div>
			{data
				.filter((e) => e.cat === 'room')
				.filter((e) => e.price <= value)
				.filter((e) => end < e.notAvailableStart || start > e.notAvailableEnd)
				.map((room, i) => (
					<Results
						title={room.title}
						key={i}
						src={room.src}
						description={room.description}
						price={room.price}
						stock={room.stock}
					/>
				))}
		</div>
	);
};

const useStyle = makeStyles((theme) => ({
	root: {},
	chips: {
		padding: theme.spacing(1),
	},
	chip: {
		margin: theme.spacing(1),
	},
	selector: {
		width: '300px',
		marginLeft: theme.spacing(3),
	},
}));

export default SearchPage;
