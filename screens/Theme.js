import React, { useEffect, useState } from 'react';
import {
  Appearance,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Switch,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Theme = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    const handleAppearanceChange = ({ colorScheme }) => {
      setColorScheme(colorScheme);
    };

    Appearance.addChangeListener(handleAppearanceChange);

   
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDarkMode);
    const newColorScheme = isDarkMode ? 'light' : 'dark';
    Appearance.setColorScheme(newColorScheme);
  };

  const isDarkMode = colorScheme === 'dark';
  const backgroundColor=isDarkMode? 'black' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';
  const inputBorderColor = isDarkMode ? 'white' : 'black';
  const buttonBackgroundColor = isDarkMode ? 'white' : 'black';
  const buttonTextColor = isDarkMode ? 'black' : 'white';

  return (
    <View style={[styles.rootContainer,{backgroundColor:backgroundColor}]}>
      <View>
        <Text style={[styles.text, { color: textColor }]}>User Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderColor: inputBorderColor }]}
          placeholder="Enter Email"
          placeholderTextColor={textColor}
        />
      </View>
      <View>
        <TextInput
          style={[styles.input, { borderColor: inputBorderColor }]}
          placeholder="Enter password"
          placeholderTextColor={textColor}
        />
      </View>
      <TouchableOpacity>
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: buttonBackgroundColor },
          ]}
        >
          <Text style={{ color: buttonTextColor, textAlign: 'center' }}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.toggleContainer,{ borderColor: inputBorderColor }]}>
        <Text style={{ color: textColor }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  rootContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
 
    },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    borderRadius: 10,
    paddingVertical: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width:150,
    borderRadius:10,
    borderWidth:1,
    paddingVertical:5,
  },
});
