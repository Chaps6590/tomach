import { Text, View, Image, Button, TouchableOpacity, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SaveRegistrationProgress, getRegistrationProgress } from '../registrationUtils';

const ShowPromptsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const handleNext = () => {
    SaveRegistrationProgress('Prompts',{prompts:route?.params?.prompts})
    navigation.navigate('PreFinal');
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ marginTop: 90, marginHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                name="eye"
                size={26}
                color="white"
              />
            </View>
            <Image
              style={{ width: 40, height: 30, color: 'white' }}
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
            Write your profile answers
          </Text>

          <View style={{
            marginTop: 20,
            flexDirection: "column",
            gap: 20,
            color: 'gray'
          }}>
            {route?.params?.prompts ? (
              route?.params?.prompts?.map((item, index) => (
                <Pressable
                  key={index} // Add key prop here
                  onPress={() => navigation.navigate('Prompts')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70
                  }}>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    color: "white"
                  }}>
                    {item?.question}
                  </Text>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                    color: "white"
                  }}>
                    {item?.answer}
                  </Text>
                </Pressable>
              ))
            ) : (
              <View>
                <Pressable
                  onPress={() => navigation.navigate('Prompts')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70
                  }}>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    color: "white"
                  }}>
                    Select a Prompt
                  </Text>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                    color: "white"
                  }}>
                    And write your own answer
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate('Prompts')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70,
                    marginVertical: 15
                  }}>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    color: "white"
                  }}>
                    Select a Prompt
                  </Text>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                    color: "white"
                  }}>
                    And write your own answer
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate('Prompts')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70,
                    marginVertical: 15
                  }}>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    color: "white"
                  }}>
                    Select a Prompt
                  </Text>
                  <Text style={{
                    fontWeight: '600',
                    fontFamily: 'italic',
                    fontSize: 15,
                    marginTop: 3,
                    color: "white"
                  }}>
                    And write your own answer
                  </Text>
                </Pressable>
              </View>
            )}
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
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default ShowPromptsScreen;
