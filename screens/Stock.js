import React, { useRef } from 'react';
import { View, Text, Animated, Button } from 'react-native';

const Stock = () => {
  const posAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current; // Using ValueXY for 2D animations
  const twirl = useRef(new Animated.Value(0)).current; // Twirl animation value

  const startAnimation = () => {
    // Reset animation values
    posAnim.setValue({ x: 0, y: 0 });
    twirl.setValue(0);

    Animated.timing(twirl, {
      toValue: 1, // Twirl to 360 degrees
      duration: 5000, // Duration in milliseconds
      useNativeDriver: true,
    }).start();
  };

  const rotateStyle = twirl.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View
        style={{
          opacity: 1,
          transform: [...posAnim.getTranslateTransform(), { rotate: rotateStyle }],
          width: 250,
          height: 50,
          backgroundColor: 'powderblue',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
          Box
        </Text>
      </Animated.View>
      <View style={{ marginTop: 150 }}>
        <Button title="Start Animation" onPress={startAnimation} />
      </View>

    </View>
  );
};

export default Stock;
