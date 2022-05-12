import React, {useEffect, useState} from 'react';
import {Button, View} from 'react-native';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
  RewardedAd,
  RewardedAdEventType,
  AppOpenAd,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = appOpenAd.addAdEventListener(
      AdEventType.LOADED,
      () => {
        console.log('Add Loaded');
        setLoaded(true);
      },
    );
    const unsubscribeEarned = appOpenAd.addAdEventListener(
      AdEventType.CLICKED,
      reward => {
        appOpenAd.load();
        console.log('User earned reward of ', reward);
      },
    );

    const unsubscribeClose = appOpenAd.addAdEventListener(
      AdEventType.CLOSED,
      reward => {
        appOpenAd.load();
        console.log('User close app open', reward);
      },
    );

    // Start loading the rewarded ad straight away
    appOpenAd.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
      unsubscribeClose();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Button
        title="Show Rewarded Ad"
        onPress={() => {
          appOpenAd.show();
        }}
      />
    </View>
  );
}

export default App;
