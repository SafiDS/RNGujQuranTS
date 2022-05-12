import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import mobileAds from 'react-native-google-mobile-ads';

// Initialize of Admob
mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

AppRegistry.registerComponent(appName, () => App);
