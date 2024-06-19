import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const BasicInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'dark'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          Chats
        </Text>

        <Text
          style={{
            fontSize: 35,
            fontFamily: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}>
          More Chats
        </Text>
      </View>
      <View>
        <LottieView
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          source={require('../assests/trueFalse.json')}
          autoPlay
          loop={true}
          speed={0.7}></LottieView>
      </View>

      <Pressable
      onPress={() => navigation.navigate("Name")}
        style={{backgroundColor: '#897987', padding: 15, marginTop: 'auto'}}>
        <Text 
        style={{
          textAlign: 'center',
          fontSize:15
          }}>Enter Basic Info</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BasicInfo;
