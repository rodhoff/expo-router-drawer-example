import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';


export const prepareInterstitial = async() => {
  await setTestDeviceIDAsync('M2102J20SG');
  await AdMobInterstitial.setAdUnitID('ca-app-pub-7360283744024858/2343395998'); // Test ID, Replace with your-admob-unit-id
}


export const readyInterstitial = AdMobInterstitial
