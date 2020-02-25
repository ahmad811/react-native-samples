import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class MyCounter extends Component {
  state = {
    counter: 1,
    running: 1,
    stateButton: 'Stop'
  }
  timer = undefined;
  componentDidMount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
    this.timer = setInterval(() => this.updateCounter(), 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
  updateCounter = () => {
    if (this.state.running) {
      this.setState(prevState => {
        return {
          ...prevState,
          counter: prevState.counter + 1
        }
      })
    }
  }
  onStartStop = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        running: !prevState.running,
        stateButton: prevState.running ? 'Start' : 'Stop',
      }
    });
  }
  render() {
    return (
      <View>
        <Text style={styles.count}>{this.state.counter}</Text>
        <Button style={styles.button} title={this.state.stateButton} onPress={this.onStartStop}></Button>
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>

      <MyCounter></MyCounter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: { color: 'red', fontSize: 40 },
  button: {

    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    borderRadius: 5,
    marginBottom: 20
  },
});
