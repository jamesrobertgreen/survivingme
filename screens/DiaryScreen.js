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
} from 'react-native';

export default class DiaryScreen extends React.Component {
  state = {time: ''}

  static navigationOptions = {
    title: 'Diary',
  };

  render() {
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
      <ScrollView style={styles.container}>
        <View style={styles.containerContent}>
          <Text>Hello there this is your diary</Text>
          <View style={styles.diaryEntry}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Time:</Text>
              <Picker label="test111" selectedValue={this.state.time} style={styles.picker}
                      onValueChange={(itemValue, itemIndex) => this.setState({time: itemValue})}>
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

            <TextInput label="test123" multiline = {true} numberOfLines = {4} style={styles.input}></TextInput>

            <Button onPress={onPressAdd} style={styles.button} title="+"></Button>
          </View>
        </View>
      </ScrollView>
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
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 2,
  },
  picker:{
    // height: 50, width: 100
  },
  fieldContainer:{

  },
  label:{

  }
});
