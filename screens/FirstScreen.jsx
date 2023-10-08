import { useRef, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, Button, Animated, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import FadeInShrinkView from '../components/FadeInShrinkView';
import Touchable01 from '../components/Touchable01';
import { Text, View } from '../components/Themed';
import Navigation from '../navigation';
import { NavigationContainerRefContext, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/'
import { RootStackScreenProps, RootStackParamList } from '../types';
import Spread from '../components/Spread'

import { readyInterstitial } from '../core/Ads';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

type FirstScreenProp = NativeStackNavigationProp<RootStackParamList, 'First'>

export default function First() {
  const widthAnim = useRef(new Animated.Value(1000)).current
  const heightAnim = useRef(new Animated.Value(1000)).current
  const navigation = useNavigation<FirstScreenProp>()

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{
    Animated.timing(widthAnim, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }).start()
    Animated.timing(heightAnim, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }).start()

  }, [])

/*   useEffect(()=>{
    if (loading) {
      SplashScreen.preventAutoHideAsync
    } else { 
      SplashScreen.hideAsync 
    }
  }, [loading]) */

  const bannerError = () => {
    return null
  }

  const showAds = async() => {
    await readyInterstitial.requestAdAsync({ servePersonalizedAds: true})
    .then(()=>{readyInterstitial.showAdAsync()})
    .catch((e)=>{readyInterstitial.showAdAsync()})
  }
  
  const isLoading = async(option:boolean) => {
    setLoading(option)
  }

  return (
    <View style={styles.container}>

      <FadeInShrinkView
        style={styles.logotitle}
        duration={3000}
      >
        <Animated.Image 
            source={require('../assets/ImageSets/android/drawable-xhdpi/divinate-logo.png')} 
            resizeMethod='auto'
            resizeMode='contain'
            style={{
              width: widthAnim,
              height: heightAnim,
          //    position: 'absolute'
            }}
          />
        <Text style={styles.tarottext}>T A R O T</Text>
        <Text style={styles.tarottext}>Rider Waite Deck</Text>
      </FadeInShrinkView>

      <FadeInShrinkView
        style={styles.btncontainer}
        duration={1000}
        delay={1000}
      >
        <TouchableOpacity
          onPress={async()=>{
            isLoading(true).then(async()=>{
              await showAds()
              isLoading(false).then(()=>{
                navigation.navigate('OneCard')
              })
              
            })
          }}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            padding: 4,
            width: 150,
          }}
        >
          { !loading ?
            <Text style={{color:"purple"}} adjustsFontSizeToFit>
              Divinate Now
            </Text>
          :
              <ActivityIndicator size={'large'} color={'purple'} />
          }

        </TouchableOpacity>

    
      </FadeInShrinkView>
      
      <View>
      <AdMobBanner
        bannerSize='banner'
        adUnitID="ca-app-pub-7360283744024858/3977656264" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={bannerError} />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 16
  },
  logotitle: {
    paddingTop: 80,
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btncontainer: {flex:3, justifyContent:'center', alignItems: 'center'},
  tarottext: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
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
  button: {
    flex: 1,
  }
});
