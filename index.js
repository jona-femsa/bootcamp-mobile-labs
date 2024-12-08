// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/lab-async-data/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);