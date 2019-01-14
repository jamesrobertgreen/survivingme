import React from 'react';
import {
  Alert,
  Picker,
  TextInput,
  Button,
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  SwipeableFlatList,
  TouchableHighlight,
  Image
} from 'react-native';

class DiaryEntry extends React.Component{
  state = {time: '',
           text: ''
          };
  render(){
    const onPressAdd = () => {
      if( this.state.time === '' ){
        error('Please enter a time');
      } else {
        if( this.state.text === ''){
          error('Please enter a diary entry');
        }else{
          this.props.callback(this.state.time,this.state.text);
        }
      }
    };
    const error = (message) => {
      Alert.alert(
        'Error' ,
        message,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    };
    return (
        <View style={styles.diaryEntry}>
        <View style={styles.fieldContainer}>
          <KeyboardAvoidingView behavior="padding">
          <Text style={styles.label}>Diary Entry:</Text>
            <TextInput placeholder={'Add Your Diary Entry Here'} onChangeText={(text) => this.setState({text})}
                      value={this.state.text} multiline = {true} numberOfLines = {4} style={styles.input}/>
          </KeyboardAvoidingView>
          <Text style={styles.label}>Time:</Text>
          <Picker style={styles.input} selectedValue={this.state.time}
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
          <Button onPress={onPressAdd} style={styles.button} title="Add Entry"></Button>
        </View>
      </View>
  );
  }
}

export default class DiaryScreen extends React.Component {
  static navigationOptions = {
    title: 'Diary',
  };

  state = {
    diaryData: [],
  };

  _renderItem = function({item}){
    return (
      <View style={styles.row}>
        <Image style={styles.rowIcon} source={item.icon} />
        <View style={styles.rowData}>
          <Text style={styles.rowDataText}>{item.key} - {item.data}</Text>
        </View>
      </View>
    );
  };
  
  _renderQuickActions = function({item}){
    return (
      <View style={styles.actionsContainer}>
        <TouchableHighlight
          style={styles.actionButton}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this edit action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonDestructive]}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this remove action!',
            );
          }}>
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableHighlight>
      </View>
    );
}

myCallback = (time,text) => {
  // console.log(diaryEntry)
    if (this.state.diaryData.filter( (e) => e.key === time).length > 0){
        Alert.alert(
          'Error' ,
          'Entry already exists',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
    } else{
      this.setState({ diaryData: [...this.state.diaryData, {key: time, icon: require('../assets/images/kites.png'), data: text}]});
    }
  }

  render() {
    return (
          <ScrollView style={styles.container}>
              <DiaryEntry callback={this.myCallback}/>
              <SwipeableFlatList
                  data={this.state.diaryData}
                  bounceFirstRowOnMount={false}
                  maxSwipeDistance={160}
                  renderItem={this._renderItem.bind(this)}
                  renderQuickActions={this._renderQuickActions.bind(this)}/>
          </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#9bbee4'
  },
  containerContent:{
    margin: 10
  },
  input:{
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 2,
    margin: 5
  },
  inputText:{
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 2,
    margin: 5,
    height: 100
  },
  fieldContainer:{
    padding:20
  },
  label:{

  },

  wrapper: {
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },



  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20,
  },
  rowData: {
    flex: 1,
  },
  rowDataText: {
    fontSize: 24,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionButton: {
    padding: 10,
    width: 80,
    backgroundColor: '#999999',
  },
  actionButtonDestructive: {
    backgroundColor: '#FF0000',
  },
  actionButtonText: {
    textAlign: 'center',
  },

});

