import React from "react";
import { Text, View, Button, Pressable, StyleSheet } from 'react-native';
import { Power, RefreshCcw, Target } from "react-native-feather";


function Grid({children, icon, navigation, screen}) {

    function GridPressHandler(){
        navigation.navigate(screen);
    }

    return (
        <Pressable onPress={GridPressHandler}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    {icon}
                    <View style={styles.textContainer}><Text style={styles.gridText}>{children}</Text></View>
                </View>
            </View>
        </Pressable>
    );
}
export default Grid;

const styles = StyleSheet.create({
    outerContainer:{
        margin:4,
        borderWidth:1,
        borderColor:'#cccccc',
        borderRadius: 15,
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
    },

    innerContainer:{
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        
    },
    textContainer:{
        paddingHorizontal:10
    },

    gridText:{
        textAlign:'center',
    }
})