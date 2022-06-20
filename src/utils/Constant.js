import {Platform} from 'react-native';

const FontName = {
    FeatherIcon: 'feather',
    MaterialIcon: 'material',
    FontAwesome5: 'fontawesome5',
    FontAwesome: 'FontAwesome',
};

const Settings = {
    darkMode: {
        title: 'Dark Mode',
        subtitle: 'Changes app theme to dark',
    },
    excludeFolders: {
        title: 'Folders to skip',
    },
    clearCache: {
        title: 'Clear cache',
        subtitle: 'Delete cache to free up space',
    },
    reportABug: {
        title: 'Report an issue',
        subtitle: 'Tell us what\'s wrong with the app',
    },
    tasbih: {
        title: 'Tasbih Counter',
    },
    rateApp: {
        title: 'Rate App',
    },
    premium: {
        title: 'Buy Premium',
        subtitle: 'Explore The Ad-Free Experience',
    },
    about: {
        title: 'About',
        subtitle: 'About Gujarati Quran Sharif',
    },
    excludeFoldersDialog: {
        title: 'Folders to skip',
        description: 'Enter the names of the folders that shouldn\'t be scanned (separate by comma)',
        placeholder: 'Folder names separated by a comma',
    },
    clearCacheConfirm: {
        title: 'Confirm Cache Purge',
        subtitle: 'Are you sure you want to clear covers cache?',
    },
    share: 'Share Gujarati Quran Sharif',
};

const BASE_URL = 'https://gujapps.stepuplab.com/v1';


const API_CONFIG = {
    ADD_DUA: `${BASE_URL}/add_dua`,
    GET_DUA_LIST: `${BASE_URL}/get_dua`,
    LIKE_DUA: `${BASE_URL}/like_dua`,
    DISLIKE_DUA: `${BASE_URL}/like_dua`,
    DISABLE_DUA: `${BASE_URL}/disable_dua`,
    ENABLE_DUA: `${BASE_URL}/enable_dua`,
    DELETE_DUA: `${BASE_URL}/delete_dua`,
};


const subsMonthly = Platform.select({
    ios: [],
    android: [
        'quran_monthly_40',
    ],
});




/*Ad format	Demo ad unit ID IOS
App Open	ca-app-pub-3940256099942544/5662855259
Banner	ca-app-pub-3940256099942544/2934735716
Interstitial	ca-app-pub-3940256099942544/4411468910
Interstitial Video	ca-app-pub-3940256099942544/5135589807
Rewarded	ca-app-pub-3940256099942544/1712485313
Rewarded Interstitial	ca-app-pub-3940256099942544/6978759866
Native Advanced	ca-app-pub-3940256099942544/3986624511
Native Advanced Video	ca-app-pub-3940256099942544/2521693316*/


/*Ad format	Sample ad unit ID
App Open	ca-app-pub-3940256099942544/3419835294
Banner	ca-app-pub-3940256099942544/6300978111
Interstitial	ca-app-pub-3940256099942544/1033173712
Interstitial Video	ca-app-pub-3940256099942544/8691691433
Rewarded	ca-app-pub-3940256099942544/5224354917
Rewarded Interstitial	ca-app-pub-3940256099942544/5354046379
Native Advanced	ca-app-pub-3940256099942544/2247696110
Native Advanced Video	ca-app-pub-3940256099942544/1044960115*/

const ADMOB_TEST_IDS = {
    ios: {
        bannerId: 'ca-app-pub-3940256099942544/2934735716',
        Interstitial: 'ca-app-pub-3940256099942544/4411468910',
        Rewarded: 'ca-app-pub-3940256099942544/1712485313',
    },
    android: {
        bannerId: 'ca-app-pub-6670173130470223/7858364710',
        Interstitial: 'ca-app-pub-6670173130470223/1468137607',
        Rewarded: 'ca-app-pub-6670173130470223/2091698994',
    },
};


const AD_COMPANY = {
    GOOGLE_ADMOB: "1",
    FACEBOOK_ADS: "2",
};


export {FontName, Settings, API_CONFIG, subsMonthly, ADMOB_TEST_IDS, AD_COMPANY};
