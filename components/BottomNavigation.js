import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library
import AnotherScreen from '../screens/AnotherScreen';
import NewOrder from '../screens/NewOrder';
import OrderHistory from '../screens/OrderHistory';
import Stock from '../screens/Stock';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue', // Color of the active tab label and icon
        inactiveTintColor: 'gray', // Color of the inactive tab label and icon
      }}
    >
      <Tab.Screen
        name="Home"
        component={AnotherScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AnotherScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={OrderHistory}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NewOrder}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Stock}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
