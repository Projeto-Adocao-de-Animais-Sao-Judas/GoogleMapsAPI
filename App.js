import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {

  state = {
    origin: { latitude: -23.977475, longitude: -46.307118 },
    destination: { latitude: 42.3730591, longitude: -71.033754 },
    originText: '',
    destinationText: '',    
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          initialRegion={{
            latitude: -23.977475,
            longitude: -46.307118,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
  
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },

  map: {

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },

});