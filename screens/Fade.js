import React, { useRef, useEffect } from 'react';
import { Animated, Button, Text, View } from 'react-native';


const Fade = () => {


    const FadeInView = () => {
        const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

        const pressHandler = () => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }
        return (
            <View>
                <Animated.View // Special animatable View
                    style={{
                        opacity: fadeAnim,
                        width: 250,
                        height: 50,
                        backgroundColor: 'powderblue',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
                        Fading in
                    </Text>
                </Animated.View>
                <View style={{ marginTop: 200 }}><Button title="Start Animation" onPress={pressHandler} /></View>
            </View>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <FadeInView />

        </View>
    );
};

export default Fade;
