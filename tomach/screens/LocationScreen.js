import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, GestureHandlerRootView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from 'react-native-maps';


const LocationScreen = () => {
    const [location,setLocation]= useState("");
    const [coordinates] = useState([
      {
        latitude:12.9716,
        longitude: 77.5946,
      },
      {
        latitude: 13.0451,
        longitude: 77.6269
      }
    ])
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
                name="location-exit"
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
            Where do you live?
          </Text>

          <MapView 
          style={{width:"100%",height:500, marginTop:20,borderRadius:5}}
          initialRegion={{
            latitude: 13.0451,
            longitude: 77.6269,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <Marker draggable coordinate={coordinates[1]}>
              <View>
                <Text style={{textAlign:"center",fontSize:14,fontWeight:"500"}}></Text>
              </View>
            </Marker>
          </MapView>


    </View>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default LocationScreen