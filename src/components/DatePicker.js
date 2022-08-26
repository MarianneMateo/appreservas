import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { makeStyles, Typography, InputBase, Button } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStart, selectStart } from '../features/startSlice';
import { setEnd, selectEnd } from '../features/endSlice';

const DatePicker = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const start = useSelector(selectStart);
	const end = useSelector(selectEnd);
	const dispatch = useDispatch()

	const selectionRange = {
		startDate: start,
		endDate: end,
		key: 'selection',
	};

	const handleSelect = (ranges) => {
		console.log(ranges);
		dispatch(setStart(ranges.selection.startDate.getTime()));
		dispatch(setEnd(ranges.selection.endDate.getTime()));
	};

	return (
		<div className={classes.root}>
			<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
			<div className={classes.inputSection}>
				<Typography variant="h6">Number of guests</Typography>
				<div className={classes.people}>
					<InputBase
						placeholder="2px"
						inputProps={{ className: classes.input }}
					/>
					<People />
				</div>
				<Button onClick={() => navigate('/search')}>Search Rooms</Button>
			</div>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		top: '14vh',
		left: '35vw',
		zIndex: '50',
		[theme.breakpoints.down('sm')]: {
			top: '15vh',
			left: '0vw',
		},
	},
	inputSection: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#fff',
		'& h6': {
			textAlign: 'center',
		},
		'& button': {
			backgroundColor: '#f3f2f2',
		},
		'& button:hover': {
			backgroundColor: 'rgba(209, 169, 48, 0.9)',
			color: '#fff',
		},
	},
	people: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '7vw',
		border: '1px solid #ccc',
		margin: theme.spacing(0, 1, 1, 0),
		padding: theme.spacing(1, 0, 1, 2),
	},
}));

export default DatePicker;
