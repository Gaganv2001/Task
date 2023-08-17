import React, { useState } from 'react';
import Share from 'react-native-share';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Button,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

const CreateAndShare = () => {

  const onShare = async () => {
    try {
      if (filePath) {
        const shareOptions = {
          title: 'Share PDF',
          url: `file://${filePath}`,
          failOnCancel: false,
        };
  
        const shareResponse = await Share.open(shareOptions);
  
        if (shareResponse.action === Share.sharedAction) {
          if (shareResponse.activityType) {
            // shared with activity type of shareResponse.activityType
          } else {
            // shared
          }
        } else if (shareResponse.action === Share.dismissedAction) {
          // dismissed
        }
      } else {
        Alert.alert('PDF not generated', 'Please create a PDF first.');
      }
    } catch (error) {
      Alert.alert('Error sharing PDF', error.message);
    }
  };

  const [filePath, setFilePath] = useState('');

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html:
          '<h1 style="text-align: center;"><strong>Hello Guys</strong></h1><p style="text-align: center;">Here is an example of pdf Print in React Native</p><p style="text-align: center;"><strong>Team About React</strong></p>',
        //File Name
        fileName: 'test',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.titleText}>
        Example to Make PDF in React Native from HTML Text
      </Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={createPDF}>
          <View>
            <Image
              //We are showing the Image from online
              source={{
                uri:
                  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Create PDF</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{filePath}</Text>
        <View style={{ marginTop: 50 }}>
          <Button onPress={onShare} title="Share" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateAndShare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'stretch',
  },
});