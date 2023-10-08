import { StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import { useRef, useEffect, useState } from 'react'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import * as Tarot from '../core/Tarot'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const spinValue = useRef(new Animated.Value(0)).current
  const [turned, setTurned] = useState<boolean>(true)

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

  const spin = spinValue.interpolate({
    inputRange: [0, 8, 10],
    outputRange: ['-30deg', '0deg', '5deg']
  })



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Card</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <TouchableOpacity
        onPress={()=> setTurned(!turned)}
      >
        <Animated.Image
          style={{transform: [{rotate: spin}]}}
          source={turned ? Tarot.shuffleCards()[0] : Tarot.VERSE_IMAGE}
        /> 
      </TouchableOpacity>

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
