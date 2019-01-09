import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View,Text,Slider} from 'react-native';


class SkillSlider extends React.Component{
  state = {
    value: 0
  };
  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
        <Slider
          value={this.state.value}
          maximumValue={5}
          step={1}
          onValueChange={(value) => this.setState({value})}></Slider>
        <Text>{this.state.value}</Text>
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
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
            <Text>Score each of these personal skills from 1 to 5</Text>
            <SkillSlider label="Resourceful"/>
            <SkillSlider label="Practically minded"/>
            <SkillSlider label="Problem solver"/>
            <SkillSlider label="Good communicator"/>
            <SkillSlider label="Quick thinking"/>
            <SkillSlider label="Alert"/>
        </View>
      );
  }
}
