import React, { useRef } from 'react';
import { Share, View, Text, Animated, Button } from 'react-native';

const Move = () => {


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Share Example',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }


  const posAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current; // Using ValueXY for 2D animations
  const twirl = useRef(new Animated.Value(0)).current; // Twirl animation value

  const startAnimation = () => {
    // Reset animation values
    posAnim.setValue({ x: 0, y: 0 });
    twirl.setValue(0);

    Animated.sequence([
      Animated.decay(posAnim, {
        // coast to a stop
        velocity: { x: 0.5, y: 0.5 }, // Sample velocity values
        deceleration: 0.997,
        useNativeDriver: true,
      }),
      Animated.spring(posAnim, {
        toValue: { x: 0, y: 0 }, // Return to start
        useNativeDriver: true,
      }),
    ]).start();
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
      <View style={{ marginTop: 50 }}>
        <Button onPress={onShare} title="Share" />
      </View>
    </View>
  );
};

export default Move;
