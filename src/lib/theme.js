import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ec0000',
		},
		secondary: {
			main: '#014699',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
});

export default theme;