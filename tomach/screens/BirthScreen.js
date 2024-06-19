import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, GestureHandlerRootView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SaveRegistrationProgress, getRegistrationProgress } from '../registrationUtils';

const BirthScreen = () => {
  const navigation = useNavigation();
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handDayChange = text => {
    setDay(text);

    if (text.length == 2) monthRef.current.focus();
  };

  const handMonthChange = text => {
    setMonth(text);
    if (text.length == 2) yearRef.current.focus();
  };

  const handYearChange = text => {
    setYear(text);
    if (text.length == 2) yearRef.current.focus();
  };

  useEffect(() => {
    getRegistrationProgress('Birth').then(progressData => {
      if (progressData) {
        const {dateOfBirth} = progressData;
        const [dayValue,monthValue,yearValue] = dateOfBirth.split("/");
        setDay(dayValue)
        setMonth(monthValue)
        setYear(yearValue)
      }
    });
  }, []);

  const handleNext = () => {
    if(day.trim() !== '' && month.trim() !== '' && year.trim() !== ''){
      const dateOfBirth = `${day}/${month}/${year}`

      SaveRegistrationProgress('Birth',{dateOfBirth})
    }
    navigation.navigate('Gender')
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
              <MaterialCommunityIcons
                name="cake-variant-outline"
                size={26}
                color="white"
              />
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
            What' your date of birth?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              marginTop: 80,
              justifyContent: 'center',
            }}>
            <TextInput
              autoFocus={true}
              value={day}
              onChangeText={handDayChange}
              placeholder="DD"
              maxLength={2}
              placeholderTextColor={'#BEBEBE'}
              keyboardType="numeric"
              style={{
                width: 60,
                padding: 10,
                borderBottomWidth: 1,
                paddingBottom: 10,
                color: 'white',
                fontSize: day ? 22 : 22,
              }}></TextInput>

            <TextInput
              ref={monthRef}
              value={month}
              onChangeText={handMonthChange}
              placeholder="MM"
              maxLength={2}
              placeholderTextColor={'#BEBEBE'}
              keyboardType="numeric"
              style={{
                width: 60,
                padding: 10,
                borderBottomWidth: 1,
                paddingBottom: 10,
                color: 'white',
                fontSize: month ? 22 : 22,
              }}></TextInput>

            <TextInput
              ref={yearRef}
              value={year}
              onChangeText={handYearChange}
              placeholder="YYYY"
              maxLength={4}
              placeholderTextColor={'#BEBEBE'}
              keyboardType="numeric"
              style={{
                width: 70,
                padding: 10,
                borderBottomWidth: 1,
                paddingBottom: 10,
                color: 'white',
                fontSize: year ? 22 : 22,
              }}></TextInput>
          </View>

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

export default BirthScreen;
