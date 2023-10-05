
import React from 'react'
import { StyleSheet, Animated, Easing, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useRef, useEffect, useState } from 'react'

import * as Tarot from '../core/Tarot'
import Card from './Card'
import { CardProps } from './Card'

import { Text, View } from '../components/Themed';


export default function ThreeCards(props) {

    const [threeCards, setThreeCards] = useState([])



    const asyncGetSpread = async()=>{
        return Tarot.getCardSpread(3)
    }


    useEffect(() =>{
        

    }, [])

    return (
        <View style={styles.container}>

        </View>
    )
    



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
  