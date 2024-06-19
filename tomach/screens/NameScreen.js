import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput, GestureHandlerRootView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SaveRegistrationProgress, getRegistrationProgress } from '../registrationUtils';

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');
  const navigation = useNavigation();  

  useEffect(()=>{
    getRegistrationProgress('Name').then(progressData =>{
      if(progressData){
        setFirstName(progressData.firstName || '')
      }
    })
  },[])

  const handleNext = () => {
    if(firstName.trim() !== ''){
      SaveRegistrationProgress('Name',{firstName})
    }
    navigation.navigate('Email')
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            color: 'white',
          }}>
          NameScreen
        </Text>
        <View style={{marginTop: 30, marginHorizontal: 20}}>
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
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                size={26}
                color="white"
              />
            </View>
            <Image
              style={{width: 40, height: 30, color: 'white'}}
              source={require('../assests/menu.png')}
            />
          </View>

          <View style={{marginTop: 30}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              What's your name?
            </Text>
          </View>
          <TextInput
            autoFocus={true}
            value={firstName}
            onChangeText={text => setFirstName(text)}
            placeholder="First name"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 10,
              color: 'white',
              fontSize: firstName ? 22 : 22,
            }}></TextInput>
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

export default NameScreen;
