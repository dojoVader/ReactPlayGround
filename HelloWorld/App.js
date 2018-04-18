import SearchPage from './screens/SearchPage';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator ({
    Home: {screen: SearchPage}
})

export default App;

