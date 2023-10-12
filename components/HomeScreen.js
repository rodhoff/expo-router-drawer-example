import React, {useRef, useState} from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
    
  } from 'react-native';
import { Drawer } from './Drawer'

const HomeScreen = () => {
  
return ( 
    <View style={styles.container}>
      <Text style={styles.paragraph}>Main View!</Text>
    </View>
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    navigationLink: {
      flex: 1,
      padding: 8,
      fontSize: 18,
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
  
  });

export default HomeScreen;