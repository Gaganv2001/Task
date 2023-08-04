import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 
import { Power, RefreshCcw, Target } from "react-native-feather";
const StatusBar = () => {
  return (
    <View style={styles.container}>
      {/* Logo on the left side */}
      <View style={styles.logoContainer}>
        {/* Replace 'YourLogo' with your logo component */}
        {/* For example, if your logo is an image: */}
        <Image source={require('../assets/logo-social.png')} style={styles.logo} />
      </View>

      {/* Three perusable icons on the right side */}
      <View style={styles.iconsContainer}>
        {/* Replace 'icon1', 'icon2', and 'icon3' with the desired icons */}
        {/* You can choose icons from the 'react-native-vector-icons' library */}
        <Target style={ styles.icon} stroke="white" fill="blue" width={30} height={30}/>
        <RefreshCcw style={ styles.icon} stroke="blue" width={30} height={30}/>
        <Power style={ styles.icon} stroke="blue" width={30} height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#f2f2f2',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width:60,
    height:60,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
  },
});

export default StatusBar;
