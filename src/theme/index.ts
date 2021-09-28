import { createTheme } from '@material-ui/core/styles';
import CustomComponents from './overrides';

const theme = createTheme({
    components: CustomComponents,
    transitions: {
        create: () => 'none',
      },
});

export default theme;