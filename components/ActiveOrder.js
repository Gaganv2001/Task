import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function ActiveOrder({navigation}) {

    function PressHandler({}){
        navigation.navigate('AnotherScreen');
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>No Active Order</Text>
                <View style={styles.itemsContainer}>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>0</Text>
                        <Text style={styles.itemText}>Amount</Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>0</Text>
                        <Text style={styles.itemText}>Total Items</Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>0</Text>
                        <Text style={styles.itemText}>Total Qty</Text>
                    </View>

                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={PressHandler}>
                        <View style={styles.button}><Text style={{textAlign:'center',color:'blue', fontWeight:'bold'}}>Create New Order</Text></View>
                    </Pressable>
                </View>
            </View>
        </View>
    );

}

export default ActiveOrder;

const styles = StyleSheet.create({
    outerContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginHorizontal: 20,
        borderRadius: 15,
    },
    innerContainer: {
        
    },
    title: {
        textAlign: 'center',
        fontSize:20,
        marginTop:10,
        color:'black',
    },
    itemsContainer:{
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    itemText:{
        textAlign:'center',
        color:'black',
    },
    button:{
        borderWidth:1,
        borderColor:'#cccccc',
        paddingVertical:15,
        marginHorizontal:20,
        marginBottom:15,
        borderRadius:2,

    },
});