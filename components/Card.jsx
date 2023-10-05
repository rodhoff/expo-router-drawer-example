
import { StyleSheet, Animated, Easing, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRef, useEffect, useState } from 'react'

import * as Tarot from '../core/Tarot'



/* export interface CardProps {
    imageURL: string
    rotation?: number
    turnedUp?: boolean
    width: number
    heigth: number
    top: number
    left: number
} */



// export default function Card(props:CardProps) {
export default function Card(props) {
    
    const [turnedUp, setTurnedUp] = useState<boolean>(props.turnedUp)
    
    return (
      <TouchableOpacity
        onPress={()=> {
          setTurnedUp(!turnedUp)
        }}
      >
        <Animated.Image
          style={{
            width: props.width,
            height: props.heigth,
            top: props.top,
            left: props.left,
            position: 'absolute',

          }}   
          source={turnedUp ? props.imageURL : Tarot.VERSE_IMAGE}
        /> 
      </TouchableOpacity>
    )
}


