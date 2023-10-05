import {useRef, useEffect} from 'react'
import { Animated } from 'react-native'


const FadeInShrinkView = (props) => {
  
    const fadeAnim = useRef(new Animated.Value(0)).current  //Starting Opacity on Zero
    const widthAnim = useRef(new Animated.Value(1000)).current
    
    const fadeAnimConfig: Animated.TimingAnimationConfig = {
      toValue: 1,         
      useNativeDriver: false,
      duration: Number(props.duration),
      delay: props.delay ? props.delay : null
    }

    const widthAnimConfig: Animated.TimingAnimationConfig = {
      toValue: 600,         
      useNativeDriver: false,
      duration: Number(props.duration),
      delay: props.delay ? props.delay : null
    }
  


  
    useEffect(()=>{
      
      Animated.timing( fadeAnim, fadeAnimConfig ).start()
      Animated.timing( widthAnim, widthAnimConfig).start()
    
    }, [])
    

  
    return (
      <Animated.View
        style={{...props.style, opacity: fadeAnim, width:widthAnim }}
      >

        {props.children}

      </Animated.View>
    )
  
  
}


export default FadeInShrinkView