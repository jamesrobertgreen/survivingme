import React from 'react';
import {
  ImageBackground ,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { primaryText, homeBackground } from '../constants/Colors';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ImageBackground source={require('../assets/images/kites.png')} style={styles.imageBackground}>
            <View style={styles.headingContainer}>
              <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>Surviving Me</Text>
                <Text style={styles.headingSubText}>Living with a life-changing diagnosis</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bbee4',
  },
  contentContainer: {
    flex: 0,
  },
  imageBackground:{
    width: '100%', 
    height: '100%',
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingTextContainer:{
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)'
  },
  headingText: {
    color: '#FFF',
    fontSize: 42,
  },
  headingSubText: {
    color: '#FFF',
    fontSize: 20,
  },
});
