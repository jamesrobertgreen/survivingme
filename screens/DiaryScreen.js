import React from 'react';
import {
  Alert,
  Picker,
  TextInput,
  Button,
  View,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import Swiper from 'react-native-swiper'


class DiaryEntry extends React.Component{

  state = {time: ''}

  render(){
    const onPressAdd = () => {
      Alert.alert(
        'Time = ',
        this.state.time,
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
    return (
        <View style={styles.diaryEntry}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Time:</Text>
          <Picker selectedValue={this.state.time} style={styles.picker}
                  onValueChange={(itemValue) => this.setState(  {time : itemValue} )}>
            <Picker.Item label="Please select a time..." value="" />
            <Picker.Item label="01:00" value="0100" />
            <Picker.Item label="02:00" value="0200" />
            <Picker.Item label="03:00" value="0300" />
            <Picker.Item label="04:00" value="0400" />
            <Picker.Item label="05:00" value="0500" />
            <Picker.Item label="06:00" value="0600" />
            <Picker.Item label="07:00" value="0700" />
            <Picker.Item label="08:00" value="0800" />
            <Picker.Item label="09:00" value="0900" />
            <Picker.Item label="10:00" value="1000" />
            <Picker.Item label="11:00" value="1100" />
            <Picker.Item label="12:00" value="1200" />
            <Picker.Item label="13:00" value="1300" />
            <Picker.Item label="14:00" value="1400" />
            <Picker.Item label="15:00" value="1500" />
            <Picker.Item label="16:00" value="1600" />
            <Picker.Item label="17:00" value="1700" />
            <Picker.Item label="18:00" value="1800" />
            <Picker.Item label="19:00" value="1900" />
            <Picker.Item label="20:00" value="2000" />
            <Picker.Item label="21:00" value="2100" />
            <Picker.Item label="22:00" value="2200" />
            <Picker.Item label="23:00" value="2300" />
            <Picker.Item label="00:00" value="0000" />
          </Picker>
        </View>

        <TextInput multiline = {true} numberOfLines = {4} style={styles.input}></TextInput>

        <Button onPress={onPressAdd} style={styles.button} title="Add Entry"></Button>
      </View>
  );
  }
}

export default class DiaryScreen extends React.Component {
  static navigationOptions = {
    title: 'Diary',
  };

  render() {
    var testData = [ {key: 'entry1'},
    {key: 'entry2'},
    {key: 'entry3'},
    {key: 'entry4'},
    {key: 'entry5'},
    {key: 'entry6'},
    {key: 'entry7'},
    {key: 'entry8'},
    {key: 'entry9'},
    {key: 'entry10'},
    {key: 'entry11'},
    {key: 'entry12'},
    {key: 'entry13'},
    {key: 'entry14'},
    {key: 'entry15'},
    {key: 'entry16'},
    {key: 'entry17'},
    {key: 'entry18'},
    {key: 'entry19'},
    {key: 'entry20'},
    {key: 'entry21'},
    {key: 'entry22'},
    {key: 'entry23'},
    {key: 'entry24'},
    {key: 'entry25'},
    {key: 'entry26'},
    {key: 'entry27'},
    {key: 'entry28'},
    {key: 'entry29'},
    {key: 'entry30'},
    {key: 'entry31'},
    {key: 'entry32'},
    ];
    return (


          <Swiper style={styles.wrapper} showsButtons>
            
            <View style={styles.slide1}>
              <Text style={styles.text}>Day 1</Text>
              <DiaryEntry/>
              <FlatList style={styles.flatList} data={testData} renderItem={({item}) => <Text style={styles.flatListItem}>{item.key}</Text>}/>

            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Day 2</Text>
              <DiaryEntry/>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Day 3</Text>
              <DiaryEntry/>
            </View>
          </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  containerContent:{
    margin: 10
  },
  diaryEntry:{

  },
  button:{

  },
  input:{
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 2,
  },
  picker:{
    backgroundColor: '#FFF',
    // height: 50, width: 100
  },
  fieldContainer:{

  },
  label:{

  },

  wrapper: {
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9bbee4'
  },
  slide2: {
    flex: 1,
    backgroundColor: '#74b9ff'
  },
  slide3: {
    flex: 1,
    backgroundColor: '#a29bfe'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  flatList:{
    backgroundColor: '#FFF',
    color: '#000',
  },
  flatListItem:{
    backgroundColor: '#dfe6e9',
    color: '#000',
    paddingLeft: 10,
    borderColor: '#000',
    borderWidth: 1,
    fontSize: 20,
  }

});

