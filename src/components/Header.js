import {
	AppBar,
	Avatar,
	InputAdornment,
	makeStyles,
	TextField,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	List,
	ListItem,
} from '@material-ui/core';
import { useState } from 'react';
import logo from '../img/BSLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [tablet, setTablet] = useState(true);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const classes = useStyles();

	useEffect(() => {
		const responsiveness = () => {
			window.innerWidth < 900 ? setTablet(true) : setTablet(false);
		};
		responsiveness();
		window.addEventListener('resize', () => {
			responsiveness();
		});
	}, []);

	const displayTablet = () => {
		const handleDrawerOpen = () => {
			setDrawerOpen(true);
		};

		const handleDrawerClose = () => {
			setDrawerOpen(false);
		};

		const headerData = ['My account', 'Previous bookings', 'Log out'];

		const getDrawerChoices = () => {
			return headerData.map((e) => {
				return (
					<List>
						<ListItem>{e}</ListItem>
					</List>
				);
			});
		};

		return (
			<Toolbar className={classes.toolbar}>
				<IconButton
					{...{
						edge: 'start',
						'aria-label': 'menu',
						'aria-haspopup': 'true',
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon style={{ color: 'white' }} />
				</IconButton>
				<Drawer
					{...{
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div> {getDrawerChoices()} </div>
				</Drawer>
				<Link to="/">
					<img src={logo} className={classes.logo} alt='logo'/>
				</Link>
				<div className={classes.right}>
					<Typography>Sign in</Typography>
					<Avatar className={classes.avatar} />
				</div>
			</Toolbar>
		);
	};

	const displayDesktop = () => (
		<Toolbar className={classes.toolbar}>
			<Link to="/">
				<img src={logo} className={classes.logo} alt='logo'/>
			</Link>
			<TextField
				placeholder="Search here"
				InputProps={{
					className: classes.input,
					disableUnderline: true,
					endAdornment: (
						<InputAdornment position="start">
							<SearchIcon className={classes.iconSearch} />
						</InputAdornment>
					),
				}}
			/>
			<div className={classes.right}>
				<Typography>Sign in</Typography>
				<Avatar className={classes.avatar} />
			</div>
		</Toolbar>
	);
	return (
		<AppBar className={classes.root}>
			{tablet ? displayTablet() : displayDesktop()}
		</AppBar>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'sticky',
		top: 0,
		zIndex: 99,
		width: '100vw',
	},
	toolbar: {
		backgroundColor: 'black',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		height: '60px',
		margin: theme.spacing(1, 0, 1, 2),
		objectFit: 'contain',
	},
	input: {
		background: 'white',
		borderRadius: '6px',
		padding: theme.spacing(0, 1),
		minWidth: '200px',
	},
	iconSearch: {
		color: '#d1a930',
	},
	right: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	avatar: {
		marginLeft: '5px',
	},
}));

export default Header;
