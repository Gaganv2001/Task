import React from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBar from '../components/StatusBar';
import Grid from '../components/Grid';
import { Calendar, CheckCircle, Clock, CornerLeftUp, CornerUpLeft, FileText, Power, RefreshCcw, RotateCcw, ShoppingCart, Tag, Target, User } from "react-native-feather";
import Icon from 'react-native-vector-icons/Fontisto';
import ActiveOrder from '../components/ActiveOrder';
import { useNavigation } from '@react-navigation/native';





const DashBoard = ({ navigation }) => {

  const gridData = [
    { icon: <User stroke="blue" width={30} height={30} />, children: 'QR Scanner' ,screen:'NewScreen'},
    { icon: <CornerUpLeft stroke="blue" width={30} height={30} />, children: 'Move', screen:'Move'},
    { icon: <Calendar stroke="blue" width={30} height={30} />, children: 'Fade',screen:'Fade' },

    { icon: <Clock stroke="blue" width={30} height={30} />, children: 'Rotate' ,screen:'Stock'},
    { icon: <CheckCircle stroke="blue" width={30} height={30} />, children: 'Order Logs' ,screen:'NewScreen'},
    { icon: <RotateCcw stroke="blue" width={30} height={30} />, children: 'SKU History' ,screen:'NewScreen'},

    { icon: <FileText stroke="blue" width={30} height={30} />, children: 'Special Orders' ,screen:'NewScreen'},
    { icon: <FileText stroke="blue" width={30} height={30} />, children: 'HTML-PDF' ,screen:'Pdf'},
    { icon: <Tag stroke="blue" width={30} height={30} />, children: 'PDF' ,screen:'CreateAndShare'},
    // Add more grid items as needed...
  ];

  return (
    <SafeAreaView>
      <View>
        <StatusBar />
        <View style={styles.NameContainer}><Text style={{ fontSize: 22 }}>Welcome Sales1</Text></View>
        <View style={styles.GridContainer}>
          {gridData.map((item, index) => (
            <Grid key={index} icon={item.icon} children={item.children} navigation={navigation} screen={item.screen}/>
          ))}
        </View>
        <View style={styles.OrderContainer}>
          <ActiveOrder navigation={navigation}/>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  NameContainer: {
    width:'80%',
    marginLeft:20,
  },
  GridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default DashBoard;

