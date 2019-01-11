import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View,ScrollView,Text,Slider,StyleSheet} from 'react-native';


class SkillSlider extends React.Component{
  state = {
    value: 0
  };
  render() {
    return (
      <View style={styles.slider}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Slider style={styles.track}
          value={this.state.value}
          maximumValue={5}
          step={1}
          onValueChange={(value) => this.setState({value})}></Slider>
          <View style={styles.valueTextContainer}>
            <Text style={styles.valueText}>{this.state.value}</Text>
          </View>

      </View>
    );
  }
}

export default class PersonalSkillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Personal Skills',
  };
  render() {
      return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{color: '#FFF',fontSize: 20, paddingBottom: 50}}>Score each of these personal skills from 1 to 5</Text>
            <SkillSlider label="Resourceful"/>
            <SkillSlider label="Practically minded"/>
            <SkillSlider label="Problem solver"/>
            <SkillSlider label="Good communicator"/>
            <SkillSlider label="Quick thinking"/>
            <SkillSlider label="Alert"/>
        </ScrollView>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#9bbee4',
  },
  label:{
    fontSize: 24,
    color: '#FFF',
    backgroundColor: 'rgba(0,0,0,0.15)'
  },
  valueTextContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText:{
    fontSize: 18,
    color: '#FFF',
  },
  track: {
    paddingBottom: 50,
    height: 18,
    borderRadius: 1,
    backgroundColor: '#DCDCDC',
  },
  slider: {
    paddingBottom: 45

  }
});