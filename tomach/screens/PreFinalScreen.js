import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../AuthContext';
import {getRegistrationProgress} from '../registrationUtils';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreFinalScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();
  const {token,isLoading, setToken} = useContext(AuthContext);

  console.log(token)

  useEffect(() => {
    getAllUserData();
  }, []);

  useEffect(()=>{
    if(token){
      navigation.replace("MainStack",{screen:"Main"})
    }
  },[token,navigation])

  const getAllUserData = async () => {
    try {
      const screens = [
        'Name',
        'Email',
        'Password',
        'Birth',
        'Gender',
        'Dating',
        'Photos',
        'Prompts',
      ];

      let userData = {};

      for (const screenName of screens) {
        const screenData = await getRegistrationProgress(screenName);
        if (screenData) {
          userData = {...userData, ...screenData};
        }
      }

      setUserData(userData);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const clearAllScreenData = async ()=>{
    try {
      const screens = [
        'Name',
        'Email',
        'Password',
        'Birth',
        'Gender',
        'Dating',
        'Photos',
        'Prompts',
      ];

      for(const screenName of screens){
        const key = `registration_progress_${screenName}`;
        await AsyncStorage.removeItem(key);

      }
      console.log('Clear Screnns');
    } catch (error) {
      console.log('Error', error);
    }
  }

  const registerUser = async () => {
    try {
      const response = await axios
        .post('http://192.168.0.19:4000/register', userData)
        .then(response => {
          console.log(response);
          const token = response.data.token;
          AsyncStorage.setItem('token', token);
          setToken(token);
        });

      clearAllScreenData();
    } catch (error) {
      console.log('Error', error);
    }
  };

  console.log('Data', userData);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            color: 'white',
          }}>
          All set to register
        </Text>

        <Text
          style={{
            fontSize: 35,
            fontFamily: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
            color: 'white',
          }}>
          Setting up your profile for you
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
        onPress={registerUser}
        style={{backgroundColor: '#897987', padding: 15, marginTop: 'auto'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
          }}>
          Finish Registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;
