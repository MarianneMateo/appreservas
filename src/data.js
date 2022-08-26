import lobby from './img/lobby.jpg';
import indoorpool from './img/indoorpool.jpg';
import bar from './img/bar.jpg';
import bathroom from './img/bathroom.jpg';
import standard from './img/standard.jpg';
import suite from './img/suite.jpg';
import executive from './img/executive.jpg';
import gym from './img/gym.jpg';
import double from './img/doubleRoom.jpg';

const data = [
	{
		src: lobby,
		title: 'Lobby Bera Suite',
		description: 'luxurious lobby with the best service',
	},
	{
		src: indoorpool,
		title: 'Indoor Pool',
		description: '40m away minimalist indoor pool with sauna',
	},
	{
		src: bar,
		title: 'Cocktail Bar',
		description: 'splendid cocktail bar and live music',
	},
	{
		src: gym,
		title: 'Gym Bera Suite',
		description: 'spacious gym, fully equipped',
	},
	{
		src: bathroom,
		title: 'Suite Bathroom',
		description: 'luxurious and spacious bathroom',
	},
	{
		src: executive,
		title: 'Executive Room',
		description:
		'50m standard room with full amenities, large closet, balcony and beautiful view',
		cat: 'room',
		price: 400,
		stock: 15,
		notAvailableStart: new Date(2022, 8, 12).getTime(),
		notAvailableEnd: new Date(2022, 8, 12).getTime(),
	},
	{
		src: suite,
		title: 'Junior Room',
		description: '30m standard room with full amenities',
		cat: 'room',
		price: 300,
		stock: 25,
		notAvailableStart: new Date(2022, 8, 25).getTime(),
		notAvailableEnd: new Date(2022, 8, 30).getTime(),
	},
	{
		src: double,
		title: 'Standard Double Room',
		description: '20m standard room with full amenities',
		cat: 'room',
		price: 200,
		stock: 30,
		notAvailableStart: new Date(2022, 8, 12).getTime(),
		notAvailableEnd: new Date(2022, 8, 12).getTime(),
	},
	{
		src: standard,
		title: 'Standard Room',
		description: '20m standard room with full amenities',
		cat: 'room',
		price: 150,
		stock: 30,
		notAvailableStart: new Date(2022, 8, 12).getTime(),
		notAvailableEnd: new Date(2022, 8, 12).getTime(),
	},
];

export const chips = [
	{ key: 0, label: 'Cancellation Flexibility' },
	{ key: 1, label: 'Standard rooms' },
	{ key: 2, label: 'Junior rooms' },
	{ key: 3, label: 'Executive rooms' },
	{ key: 4, label: 'more filters' },
];

export default data;
