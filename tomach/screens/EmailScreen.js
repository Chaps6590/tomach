import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput, GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {SaveRegistrationProgress, getRegistrationProgress} from '../registrationUtils';

const EmailScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  
  useEffect(() => {
    getRegistrationProgress('Email').then(progressData => {
      if (progressData) {
        setEmail(progressData.email || '');
      }
    });
  }, []);  
  
  const handleNext = () => {
    if (email.trim() !== '') {
      SaveRegistrationProgress('Email', {email});
    }
    navigation.navigate('Password');
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{marginTop: 90, marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="email" size={26} color="white" />
            </View>
            <Image
              style={{width: 40, height: 30, color: 'white'}}
              source={require('../assests/menu.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
              marginTop: 15,
            }}>
            Please provider a valid email
          </Text>
          <Text style={{marginTop: 30, fontSize: 15, color: 'gray'}}>
            Email verification helps us keep the account secure
          </Text>
          <TextInput
            autoFocus={true}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter your email"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 10,
              color: 'white',
              fontSize: email ? 22 : 22,
            }}></TextInput>
          <Text style={{marginTop: 7, fontSize: 15, color: 'gray'}}>
            You will be asked to verify your email
          </Text>
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            style={{marginTop: 30, marginLeft: 'auto'}}>
            <MaterialCommunityIcons
              style={{alignSelf: 'center', marginTop: 20}}
              name="arrow-right-circle"
              size={45}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default EmailScreen;
