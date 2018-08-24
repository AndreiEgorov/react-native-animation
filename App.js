/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { JSParticle } from "./JSParticle";

export default class App extends Component {
  particles = [];

  constructor() {
    super();

    for (let i = 0; i < 100; i++) {
      this.particles.push(JSParticle);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.particles.map((Particle, i) => (
          <JSParticle key={i} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
