import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Text,
  Button,
  Alert,
  ImageBackground
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
        <ImageBackground source={require('./images/nature.jpg')} style={styles.backgroundImage} >
        <View style={styles.container}>

            <View style={styles.header}>
              <Text style={{fontSize: 37, marginTop: 25, fontFamily: 'Savoye LET'}}>
                Registration Application
              </Text>
            </View>
            <View style={[styles.box, styles.box1]}>
              <Text style={{fontSize: 19, color:'white'}}>
                Enter your Name :
              </Text>
              <TextInput
                 clearButtonMode="always"
                 style={styles.inputTextStyle}
                 placeholder="Type Name here!"
                 placeholderTextColor="#cfbaba"
                 onChangeText={(text) => this.setState({text})}
                 onChangeText={(text) => Username = text}
              />
            </View>
            <View style={[styles.box, styles.box1]}>
              <Text style={{fontSize: 19, color:'white'}}>
                Enter your Password :
              </Text>
              <TextInput
                clearButtonMode="always"
                style={styles.inputTextStyle}
                placeholder="Type Password here!"
                placeholderTextColor="#cfbaba"
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
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  backgroundImage: {
  flex: 1
  },
  header: {
    backgroundColor : 'red',
    height: 65,
    justifyContent: 'center',
    alignItems:'center'
  },
  inputTextStyle: {
    color: 'white',
    height: 30,
    fontSize: 20,
    marginTop: 10,
    width: 250,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'white'
  },
  box: {
    height: box_height,
    marginHorizontal: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1: {
    borderRadius: 20,
    flexDirection: 'column',
    padding: 10,
    borderStyle: 'solid',
    borderColor : 'white',
    borderWidth: 1
  },
  box2: {
    justifyContent: 'flex-start',
    height: 100
  }
});
