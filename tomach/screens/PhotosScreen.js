import {Text, View, Image, Button, TouchableOpacity, Pressable, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {SaveRegistrationProgress, getRegistrationProgress} from '../registrationUtils';

const PhotosScreen = () => {
  const [imageUrls, setImageUrls] = useState(['', '', '', '', '', '']);
  const [imageUrl, setImageUrl] = useState('');
  const navigation = useNavigation();

  const handleAddImage = () => {
    const index = imageUrls.findIndex(url => url === '');
    if (index !== -1) {
      const updateUrls = [...imageUrls];
      updateUrls[index] = imageUrl;
      setImageUrls(updateUrls);
      setImageUrl('');
    }
  };

  useEffect(() => {
    getRegistrationProgress('Photos').then(progressData => {
      if (progressData && progressData.imageUrls) {
        setImageUrls(progressData.imageUrls);
      }
    });
  }, []);

  const handleNext = () => {
    SaveRegistrationProgress('Photos', {imageUrls});
    navigation.navigate('Prompts');
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
              <MaterialIcons name="photo-camera" size={26} color="white" />
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
            Pick your Photos
          </Text>

          <View style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 20,
              }}>
              {imageUrls.slice(0, 3).map((url, index) => (
                <Pressable
                  style={{
                    borderColor: '#581845',
                    borderWidth: url ? 0 : 2,
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 100,
                  }}
                  key={index}
                  onPress={(event) => {
                    event.persist();
                    // tu lógica aquí
                  }}>
                  {url ? (
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        resizeMode: 'cover',
                      }}
                      source={{uri: url}}
                    />
                  ) : (
                    <EvilIcons name="image" size={22} color="white" />
                  )}
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 20,
              }}>
              {imageUrls.slice(3, 6).map((url, index) => (
                <Pressable
                  style={{
                    borderColor: '#581845',
                    borderWidth: url ? 0 : 2,
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 100,
                  }}
                  key={index + 3}
                  onPress={(event) => {
                    event.persist();
                    // tu lógica aquí
                  }}>
                  {url ? (
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                        resizeMode: 'cover',
                      }}
                      source={{uri: url}}
                    />
                  ) : (
                    <EvilIcons name="image" size={22} color="white" />
                  )}
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{marginVertical: 10}}>
            <Text
              style={{
                marginTop: 15,
                fontSize: 15,
                color: 'gray',
                fontWeight: 'bold',
              }}>
              Drag to reorder
            </Text>
            <Text
              style={{
                marginTop: 3,
                fontSize: 15,
                fontWeight: '500',
                color: 'gray',
                fontWeight: 'bold',
              }}>
              Add four to six Photos
            </Text>
          </View>

          <View style={{marginVertical: 15}}>
            <Text
              style={{
                marginTop: 15,
                fontSize: 15,
                color: 'gray',
                fontWeight: 'bold',
              }}>
              Add a picture of yourself
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 10,
                backgroundColor: 'gray',
              }}>
              <EvilIcons name="image" size={22} color="white" style={{marginLeft: 8}} />
              <TextInput
                value={imageUrl}
                onChangeText={text => setImageUrl(text)}
                style={{color: 'white', marginVertical: 1, width: 300}}
                placeholder="Enter your image url"
                placeholderTextColor={'#BEBEBE'}
              />
            </View>
          </View>
          <Button onPress={handleAddImage} title="Add Image" />

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

export default PhotosScreen;
