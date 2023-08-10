import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, SafeAreaView, Button } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewScreen from './screens/NewScreen';
import { useNavigation } from '@react-navigation/native';
import AnotherScreen from './screens/AnotherScreen';
import DashBoard from './screens/DashBoard';
import NewOrder from './screens/UsingFetch';
import OrderHistory from './screens/OrderHistory';
import Stock from './screens/Stock';
import UserList from './screens/UserList';
import UsingFetch from './screens/UsingFetch';
import BottomNavigation from './components/BottomNavigation';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false }} /> */}   
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
      <Stack.Screen name="UsingFetch" component={UsingFetch} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="Stock" component={Stock} options={{ headerShown: false }}/>
      </Stack.Navigator>    
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  userContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default App;