import {React,Component} from 'react';
import {View,Image,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
  style={styles.image}
  source={require('../assets/aria.jpg') }
/>
      </View>
    </View>
  );
}