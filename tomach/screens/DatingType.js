import {Text, View, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, GestureHandlerRootView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SaveRegistrationProgress, getRegistrationProgress } from '../registrationUtils';

const DatingType = () => {
  
  const [datingPreferences,setDatingPreferences] = useState("");

  const [lookingFor, setlookingFor] = useState('');

  useEffect(() => {
    getRegistrationProgress('Dating').then(progressData => {
      if (progressData) {
        setDatingPreferences(progressData.datingPreferences || []);
      }
    });
  }, []);

  const navigation = useNavigation();
  const handleNext = () => {
    if(datingPreferences.length > 0){
      SaveRegistrationProgress('Dating',{datingPreferences})
    }
    navigation.navigate('Photos');
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
              <AntDesign
                name="heart"
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
            Which gender describes you the best
          </Text>

          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              color: 'gray',
              fontWeight: 'bold',
            }}>
            Hinge users are matched based on these three gender groups. You can
            add more about gender after.
          </Text>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  color: 'gray',
                  fontWeight: 'bold',
                  fontWeight: '500',
                }}>
                Life Partner
              </Text>
              <Pressable onPress={() => setlookingFor('Life Partner')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={lookingFor == 'Life Partner' ? '#581845' : '#F0F0F0'}
                />
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  color: 'gray',
                  fontWeight: 'bold',
                  fontWeight: '500',
                }}>
                Long-term relationship
              </Text>
              <Pressable onPress={() => setlookingFor('Long-term relationship')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={lookingFor == 'Long-term relationship' ? '#581845' : '#F0F0F0'}
                />
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  color: 'gray',
                  fontWeight: 'bold',
                  fontWeight: '500',
                }}>
                Long-term relationship open
              </Text>
              <Pressable onPress={() => setlookingFor('Long-term relationship open')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={lookingFor == 'Long-term relationship open' ? '#581845' : '#F0F0F0'}
                />
              </Pressable>
            </View>
          

          <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  color: 'gray',
                  fontWeight: 'bold',
                  fontWeight: '500',
                }}>
                Short-term relationship
              </Text>
              <Pressable onPress={() => setlookingFor('Short-term relationship')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={lookingFor == 'Short-term relationship' ? '#581845' : '#F0F0F0'}
                />
              </Pressable>
            </View>
          </View>

          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <AntDesign name="checksquare" size={26} color="white" />
            <Text
              style={{
                fontSize: 15,
                color: 'gray',
                fontWeight: 'bold',
              }}>
              Visible on profile
            </Text>
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

export default DatingType;
