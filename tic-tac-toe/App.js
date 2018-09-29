import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Text,
  Button,
  Alert,
  ImageBackground,
  TouchableOpacity,
  AppRegistry,
  StatusBar,
  window,
  CodePush
} from 'react-native';

var _fontSize = 110;

var zeroesTurn = false;
var crossesTurn = true;

var screenWidht = Dimensions.get('window').width;
var screenHight = Dimensions.get('window').height;

if( screenHight/screenWidht < 1.778){
  screenWidht = 550;
  _fontSize = 150;
}

var gameMatrix = [[0,0,0],[0,0,0],[0,0,0]];
var textMatrix = [["","",""],["","",""],["","",""]];
var GAME_STATUS = "Crosses Turn";


//MAIN WINDOW
export default class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
  }

  checkLanes(symb){
  var cols=false;
  var rows = false;
  for (var col=0; col<3; col++) {
    cols = true;
    rows = true;
    for (var row=0; row<3; row++) {
      cols &= (gameMatrix[col][row] == symb);
      rows &= (gameMatrix[row][col] == symb);
    }
    if (cols || rows){
      return true;
    }
  }
return false;
}

  checkDiagonal(symb) {
	var toright = true;
  var toleft = true;
	for (var i=0; i<3; i++) {
		toright &= (gameMatrix[i][i] == symb);
		toleft &= (gameMatrix[3-i-1][i] == symb);
	}

	if (toright || toleft) return true;

	return false;
}

  isFull(){
    for(var i = 0; i < 3; i++){
      for(var j = 0;j<3;j++){
        if(gameMatrix[i][j] == 0){
          return false;
        }
      }
    }
    return true;
  }

  clean(){
    gameMatrix = [[0,0,0],[0,0,0],[0,0,0]];
    textMatrix = [["","",""],["","",""],["","",""]];
    GAME_STATUS = "Crosses Turn";
    crossesTurn = true;
    this.forceUpdate();
  }

  checkForWinn(id){
    var p = gameMatrix[Math.floor(id/3)][id % 3];
    var full = this.isFull();
    var win = this.checkLanes(p) || this.checkDiagonal(p);

    if(full || win){
      if(full && !win){
          Alert.alert('DRAW !');
      }
      if(win){
        if(p == 1){
          Alert.alert('CROSSES WIN !');
        }
        else{
          Alert.alert('ZEROES WIN !');
        }
      }
      this.clean();
      return;
    }
  }


  changeItemValue(id){
    if(gameMatrix[Math.floor(id/3)][id % 3] != 0){
      return;
    }

    if(crossesTurn){
        gameMatrix[Math.floor(id/3)][id % 3] = 1;
        textMatrix[Math.floor(id/3)][id % 3] = "X";
        crossesTurn = false;
        GAME_STATUS = "Zeroes Turn"
        this.checkForWinn(id)
        this.forceUpdate();
        return;
    }
    else{
        gameMatrix[Math.floor(id/3)][id % 3] = 2;
        textMatrix[Math.floor(id/3)][id % 3] = "O";
        crossesTurn = true;
        GAME_STATUS = "Crosses Turn";
        this.checkForWinn(id);
        this.forceUpdate();
        return;
    }
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <ImageBackground source={require('./images/space.jpeg')} style={styles.backgroundImage}>
      <View style={styles.header}>
              <Text style={{fontSize: 30, marginTop: 25, fontFamily: 'Bradley Hand', color: 'white'}}>
                Tic Tac Toe Game
              </Text>
            </View>
      <View style={styles.container}>

        <View style={styles.boxForStatusAndReset}>
          <View style={styles.gameStatus}>
            <Text  style={{fontSize: 30, color: 'white'}}>{GAME_STATUS}</Text>
          </View>
          <View style={styles.resetBtn}>
          <TouchableOpacity
            onPress = {()=> this.clean()}
            >
            <Text  style={{fontSize: 30, color: 'white'}}>Reset</Text>
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gameFiled}>
          <View style={styles.gameLineField}>
            <TouchableOpacity
              textColor = "white"
              id = "0"
              style={styles.gameLineFieldElement}
              onPress = {() => this.changeItemValue(0)}
              >
                <Text style={styles.gameText}>{textMatrix[0][0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.gameLineFieldElement}
              textColor = "white"
              id = "1"
              style={styles.gameLineFieldElement}
              onPress = {() => this.changeItemValue(1)}
              >
                <Text style={styles.gameText}>{textMatrix[0][1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.gameLineFieldElement}
              textColor = "white"
              id = "2"
              style={styles.gameLineFieldElement}
              onPress = {() => this.changeItemValue(2)}>
                <Text style={styles.gameText}>{textMatrix[0][2]}</Text>
            </TouchableOpacity>

          </View>

            <View style={styles.gameLineField}>
              <TouchableOpacity
                textColor = "white"
                id = "3"
                style={styles.gameLineFieldElement}
                onPress = {() => this.changeItemValue(3)}
                >
                  <Text style={styles.gameText}>{textMatrix[1][0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gameLineFieldElement}
                textColor = "white"
                id = "4"
                style={styles.gameLineFieldElement}
                onPress = {() => this.changeItemValue(4)}
                >
                  <Text style={styles.gameText}>{textMatrix[1][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gameLineFieldElement}
                textColor = "white"
                id = "5"
                style={styles.gameLineFieldElement}
                onPress = {() => this.changeItemValue(5)}>
                  <Text style={styles.gameText}>{textMatrix[1][2]}</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.gameLineField}>
              <TouchableOpacity
                textColor = "white"
                id = "6"
                style={styles.gameLineFieldElement}
                onPress = {() => this.changeItemValue(6)}
                >
                  <Text style={styles.gameText}>{textMatrix[2][0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gameLineFieldElement}
                textColor = "white"
                id = "7"
                style={styles.gameLineFieldElement}
                onPress = {() => this.changeItemValue(7)}
                >
                  <Text style={styles.gameText}>{textMatrix[2][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gameLineFieldElement}
                textColor = "white"
                id = "8"
                style={styles.gameLineFieldElement}
                onPress = {() => this.changeItemValue(8)}>
                  <Text style={styles.gameText}>{textMatrix[2][2]}</Text>
              </TouchableOpacity>

            </View>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: screenWidht/8
  },
  boxForStatusAndReset:{
    flexDirection: 'row',
    width: screenWidht,
    justifyContent: 'center',
  },
  resetBtn:{
    height: screenWidht/7,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : 'white',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginLeft: 20,
  },
  gameFiled:{
    width: screenWidht,
    height: screenWidht,
    flexDirection: 'column'
  },
  gameStatus:{
    height: screenWidht/7,
    width: screenWidht/1.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : 'white',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 20,
  },
  gameLineField: {
    flexDirection: 'row',
    height: screenWidht/3,
    borderStyle: 'solid',
    borderColor : 'white',
    borderWidth: 1
  },
  gameLineFieldElement: {
    width: screenWidht/3,
    borderStyle: 'solid',
    borderColor : 'white',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems:'center'
  },
  gameText: {
    color: 'cyan',
    fontSize: _fontSize,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlignVertical: 'center'
  },
});
