import { StyleSheet, Animated, Easing, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRef, useEffect, useState } from 'react'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as Tarot from '../core/Tarot'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


import { readyInterstitial } from '../core/Ads';


export default function OneCardScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const spinValue = useRef(new Animated.Value(0)).current
  const [turned, setTurned] = useState<boolean>(false)
  const [turnCounter, setTurnCounter] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{

    Animated.timing(
        spinValue,
        {
          toValue: 10,
          duration: 500,
          easing: Easing.linear , // Easing is an additional import from react-native
          useNativeDriver: true  // To make use of native driver for performance,
        }
    ).start()
 
/*     Animated.decay(
      spinValue,
      {
        velocity: 1,
        useNativeDriver: true  // To make use of native driver for performance
      }
    ).start()
 */
  },[])

  useEffect(()=>{

    if ((turnCounter > 5) && turned) {
      showAdAndResetCounter()
    }


  }, [turnCounter])

  const showAdAndResetCounter = async() => {
    await setLoading(true)
    readyInterstitial.requestAdAsync({ servePersonalizedAds: true})
      .then(()=>{
        readyInterstitial.showAdAsync()
        
      })
      .catch((e)=>{
        readyInterstitial.showAdAsync()
      })
    await setTurnCounter(0)
    await setLoading(false)

  }

  const spin = spinValue.interpolate({
    inputRange: [0, 8, 10],
    outputRange: ['-30deg', '0deg', '5deg']
  })

  const bannerError = () => {
    return null
  }


  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Card</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity
        onPress={()=> {
          setTurnCounter(turnCounter + 1)
          setTurned(!turned)
        }}
      >
        <Animated.Image
          style={{transform: [{rotate: spin}]}}
          source={turned ? Tarot.shuffleCards()[0] : Tarot.VERSE_IMAGE}
        /> 
      </TouchableOpacity>
      { loading ? <ActivityIndicator /> :
        <Text
          style={{
              marginTop:10
          }}
        >Touch Card for Next</Text>
      }
      <View>
      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-7360283744024858/3977656264" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={bannerError} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
