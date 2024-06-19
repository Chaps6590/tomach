import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useEffect} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem('token');
      setToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, [token]);


  return (
    <AuthContext.Provider value={{token,isLoading,setToken}}>
        {children}
    </AuthContext.Provider>
  )
};


export {AuthContext,AuthProvider}