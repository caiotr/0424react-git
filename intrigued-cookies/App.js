import React from 'react';
import { StyleSheet, Text, View,Image,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
   
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Favorites</Text>
         <Image
style={styles.menu}
source={require('./assets/menu.png')}
/>
      </View>
      <View style={styles.content}>
        <Image
  style={styles.image}
  source={require('./assets/pokemonicon.jpg') }
/>
 <Image
  style={styles.image}
  source={require('./assets/ariaicon.jpg') }
/>
 <Image
  style={styles.image}
  source={require('./assets/zeroicon.jpg') }
/>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu:{
  width:'20%',
  height:'40%',
  justifyContent: 'left',
  alignItems: 'left',
},
  navbar: {
    backgroundColor: 'green',
    height: 50,
 
  },
  navbarText: {
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
  alignItems: 'center',
  flex:1,
  },
  content: {
    flex: 1,
    backgroundColor: '#5A5A5A',

  },
  image: {
  width: '100%',
  height: '13%',
  justifyContent:'top',
  alignItems:'top',
},
});
