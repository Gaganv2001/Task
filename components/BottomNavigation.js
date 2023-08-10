import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Bell, Home, Power, RefreshCcw, Search, Settings, Target, User } from "react-native-feather";
import AnotherScreen from '../screens/AnotherScreen';
import NewOrder from '../screens/UsingFetch';
import OrderHistory from '../screens/OrderHistory';
import Stock from '../screens/Stock';
import UserList from '../screens/UserList';
import DashBoard from '../screens/DashBoard';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'gray', // Color of the active tab label and icon
        inactiveTintColor: 'gray', // Color of the inactive tab label and icon
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Home stroke="blue" width={30} height={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="UserList"
        component={AnotherScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <User stroke="blue" width={30} height={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={OrderHistory}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Search stroke="blue" width={30} height={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NewOrder}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Bell stroke="blue" width={30} height={30}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Stock}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Settings stroke="blue" width={30} height={30}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
