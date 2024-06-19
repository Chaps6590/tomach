import { Text, View, Image,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, GestureHandlerRootView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SaveRegistrationProgress, getRegistrationProgress } from '../registrationUtils';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');  
  const navigation = useNavigation();  
  
  useEffect(() => {
    getRegistrationProgress('Password').then(progressData => {
      if (progressData) {
        setPassword(progressData.password || '');
      }
    });
  }, []);
  
  
  const handleNext = () => {
    if(password.trim() !== ''){
      SaveRegistrationProgress('Password',{password})
    }

    navigation.navigate('Birth')
  }


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
              <AntDesign name="lock1" size={26} color="white" />
            </View>
            <Image
              style={{width: 40, height: 30, color: 'white'}}
              source={require('../assests/menu.png')}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              fontSize: 25,
              color: 'gray',
              fontWeight: 'bold',
            }}>
            Please choose a password
          </Text>
          <TextInput
            autoFocus={true}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your password"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              paddingBottom: 10,
              color: 'white',
              fontSize: password ? 22 : 22,
            }}></TextInput>
          <Text style={{marginTop: 7, fontSize: 15, color: 'gray'}}>
            Your details will be safe with us
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

export default PasswordScreen;
