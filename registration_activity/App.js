import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Text,
  Button,
  Alert,
  Header
} from 'react-native';


var { height } = Dimensions.get('window');

var box_count = 3;
height = height
var box_height = height/2.2 / box_count;

var Username = "";
var Password = "";

export default class StartPage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={{fontSize: 37, marginTop: 25, fontFamily: 'Savoye LET'}}>
                Registration Application
              </Text>
            </View>
            <View style={[styles.box, styles.box1]}>
              <Text style={{fontSize: 19}}>
                Enter your Name :
              </Text>
              <TextInput
                 clearButtonMode="always"
                 style={styles.inputTextStyle}
                 placeholder="Type Name here!"
                 onChangeText={(text) => this.setState({text})}
                 onChangeText={(text) => Username = text}
              />
            </View>
            <View style={[styles.box, styles.box1]}>
              <Text style={{fontSize: 19}}>
                Enter your Password :
              </Text>
              <TextInput
                clearButtonMode="always"
                style={styles.inputTextStyle}
                placeholder="Type Password here!"
                onChangeText={(text) => this.setState({text})}
                onChangeText={(text) => Password = text}
               />
            </View>
            <View style={[styles.box, styles.box2]}>
              <Button
                              style={styles.button}
                onPress={() => {
                    Alert.alert(Username + ' tapped the button!');
                }}
                title='SIGN IN' />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor : 'red',
    height: 65,
    justifyContent: 'center',
    alignItems:'center'
  },
  button: {
    borderStyle: 'solid',
    borderColor : 'blue',
    borderWidth: 2
  },
  inputTextStyle: {
    height: 40,
    fontSize: 20,
    marginTop: 10,
    backgroundColor: 'white',
    width: 250,
    borderRadius: 5,
    textAlign: 'center',
    borderStyle: 'dashed',
    borderColor : 'grey',
    borderWidth: 1
  },
  box: {
    height: box_height,
    marginHorizontal: 35
  },
  box1: {
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    borderStyle: 'solid',
    borderColor : 'blue',
    borderWidth: 1
  },
  box2: {
    backgroundColor: 'white',
    height: 35,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center'
  }
});
