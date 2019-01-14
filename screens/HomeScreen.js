import React from 'react';
import {
  ImageBackground ,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';



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
  static navigationOptions = {
    header: null,
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>{this.props.content}</Text>
              <Text style={styles.headingSubText}>Lorem ipsum</Text>
              <Button
                title={this.props.linkText}
                onPress={() => navigate(this.props.linkPath)}/>
            </View>
    )
  }
}


class SoundPage extends React.Component{
  render(){

    let soundObject = new Expo.Audio.Sound();

    const playSound = async () => {
      try {
         soundObject = new Expo.Audio.Sound();
         await soundObject.loadAsync(require('../assets/audio/test.wav'));
         await soundObject.playAsync();
      } catch (error) {
        // An error occurred!
      }
    };
    const stopSound = async () => {
      try {
         await soundObject.stopAsync();
      } catch (error) {
        // An error occurred!
      }
    };
    const pauseSound = async () => {
      try {
         await soundObject.pauseAsync();
      } catch (error) {
        // An error occurred!
      }
    };
    const resumeSound = async () => {
      try {
         await soundObject.replayAsync();
  
      } catch (error) {
        // An error occurred!
      }
    };
    return (

      <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{this.props.content}</Text>
      <Text style={styles.headingSubText}>Lorem ipsum</Text>
      <Button style={styles.button} onPress={playSound} title="Play"></Button>
      <Button style={styles.button} onPress={stopSound} title="Stop"></Button>
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
      <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View style={styles.pageStyle1}>
            <Page1/>
          </View>
          <View style={styles.pageStyle2}>
            <Page navigation={this.props.navigation} content={"Page 1"} linkText={"Go to diary"} linkPath={"Diary"}/>
          </View>
          <View style={styles.pageStyle1}>
            <Page navigation={this.props.navigation} content={"Page 2"} linkText={"Go to personal skills"} linkPath={"PersonalSkills"}/>
          </View>
          <View style={styles.pageStyle2}>
            <SoundPage  content={"Page 3"}></SoundPage>
          </View>

        </ScrollView>
        </View>

    );
  }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bbee4',
  },
  imageBackground:{
    width: '100%', 
    height: '100%',
  },
  headingContainer: {
    flex:1,
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
    flex:1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bbee4'
  },
  pageStyle2: {
    flex:1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a29bfe'
  },
  button:{
    paddingBottom: 50,
    marginBottom: 50
  }
});
