import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Text, View, Share} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  ShareMessage = () => {
    Share.share({
      message: 'xD',
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };

  render() {
    console.log(Share);
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.ShareMessage}>
          <Text> Share text here </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});
