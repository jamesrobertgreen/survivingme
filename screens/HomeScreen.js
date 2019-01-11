import React from 'react';
import {
  ImageBackground ,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper'

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { primaryText, homeBackground } from '../constants/Colors';

class Page1 extends React.Component{
  render(){
    return (
        <ImageBackground source={require('../assets/images/kites.png')} style={styles.imageBackground}>
          <View style={styles.headingContainer}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.headingText}>Surviving Me</Text>
              <Text style={styles.headingSubText}>Living with a life-changing diagnosis</Text>
            </View>
          </View>
        </ImageBackground>
    )
  }
}


class Page extends React.Component{
  render(){
    return (
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>{this.props.content}</Text>
              <Text style={styles.headingSubText}>Lorem ipsum</Text>
            </View>
    )
  }
}


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Swiper style={styles.container} showsButtons>
          <View style={styles.pageStyle1}>
            <Page1/>
          </View>
          <View style={styles.pageStyle2}>
            <Page content={"Page 1"}/>
          </View>
          <View style={styles.pageStyle1}>
            <Page content={"Page 2"}/>
          </View>
          <View style={styles.pageStyle2}>
            <Page content={"Page 3"}/>
          </View>
          <View style={styles.pageStyle1}>
            <Page content={"Page 4"}/>
          </View>
        </Swiper>
      
      // <ScrollView>
      // </ScrollView>
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
  pageStyle1: {
    flex: 1,
    backgroundColor: '#9bbee4'
  },
  pageStyle2: {
    flex: 1,
    backgroundColor: '#a29bfe'
  },
});
