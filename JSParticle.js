import React, { Component } from "react";
import { View, Text, Animated, Easing, Image } from "react-native";



export class JSParticle extends Component {
  vector = {
    x: this._randomInRange(-500, 500),
    y: this._randomInRange(-500, 500)
  };

  duration = this._randomInRange(1000, 5000);
  delay= this._randomInRange(0,400)
  constructor() {
    super();
    this.state = {
      translateX: new Animated.Value(0),
      translateY: new Animated.Value(0),
      
      opacity: new Animated.Value(0),
      rotation: new Animated.Value(0)
    };
  }

  _randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  _startAnimating() {
    Animated.parallel([
      Animated.timing(this.state.translateX, {
        toValue: this.vector.x,
        easing: Easing.elastic(0, 4),
        duration: this.duration
      }),
      Animated.timing(this.state.translateY, {
        toValue: this.vector.y,
        easing: Easing.elastic(0, 4),
        duration: this.duration
      }),
      Animated.timing(this.state.rotation, {
          toValue: 1, 
          duration: this.duration, 
    
      }),
      Animated.sequence([
          Animated.timing(this.state.opacity, {
              toValue: 1,
              duration: 1000
          }), 
          Animated.timing(this.state.opacity,{
              toValue:0,
              duration: this.duration
          })
      ])
    ]).start(() => {
      (this.vector = {
        x: this._randomInRange(-500, 500),
        y: this._randomInRange(-500, 500)
      }),
        (this.duration = this._randomInRange(1000, 5000));
      this.setState({
        translateX: new Animated.Value(0),
        translateY: new Animated.Value(0),
        opacity: new Animated.Value(0),
        rotation: new Animated.Value(0)
      });
      this._startAnimating();
    });
  }
  componentDidMount() {
    setTimeout(() => this._startAnimating(), this.delay);
   
  }

  render() {
    // console.log(duration(1000 - 5000));
    const spin = this.state.rotation.interpolate({
        inputRange: [0.5, 1,],
        outputRange: ['0deg', '-360deg']
        
    })
    return (
      <Animated.View
        style={{
         
          position: "absolute",
          opacity: this.state.opacity,
          transform: [
            { translateX: this.state.translateX },
            { translateY: this.state.translateY },
            {rotate: spin}
          ]
        }}
      >
<Text style={{ fontSize: this._randomInRange(5, 24)}} > 😀 </Text>
     
      
        
       
       
      </Animated.View>
    );
  }
}
