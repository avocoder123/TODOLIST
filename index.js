/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';  // Now importing App.js
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
