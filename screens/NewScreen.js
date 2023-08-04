import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const NewScreen = ({ navigation }) => {

    const [color, setColor] = useState('red');

    function colorHandler(){
        setColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Hello World!</Text>
                <Button title="change color" onPress={colorHandler} />
                <View style={[styles.box, { backgroundColor: color , marginBottom:20}]}></View>
                {/* Use the dynamic color value as backgroundColor */}
                <Button title="Another Screen" onPress={() => { navigation.navigate('AnotherScreen') }} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 40,
        height: 40,
    }
});

export default NewScreen;
