/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../customInput';
import {LoginFields} from './loginFields';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [eyeIcon, setEyeIcon] = useState(true);
  const [user, setUser] = useState({
    EmailAddress: '',
    Password: '',
  });
  const getStorage = async () => {
    try {
      if (user !== '') {
        const res = await AsyncStorage.getItem('user');
        const data = JSON.parse(res);
        if (
          data.EmailAddress === user.EmailAddress &&
          data.Password === user.Password
        ) {
          AsyncStorage.setItem('token', JSON.stringify(data));
          navigation.navigate('BotNavigator');
        }
      } else {
        console.warn('user is empty');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          margin: 20,
        }}>
        <Icon
          name="arrow-back"
          size={20}
          color="#2242D8"
          style={{
            backgroundColor: '#F5F7FD',
            borderRadius: 20,
            width: 30,
            padding: 5,
          }}
        />
        <Text
          style={{
            color: '#2242D8',
            marginTop: 20,
            fontSize: 15,
            fontWeight: '300',
          }}>
          Login
        </Text>
        <Text
          style={{
            color: '#2242D8',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Welcome back 👋
        </Text>
        <Text
          style={{
            color: '#2242D8',
            marginTop: 10,
            fontWeight: '300',
          }}>
          Enter your Email and password to continue
        </Text>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 45,
            width: '100%',
            gap: 10,
          }}>
          <FlatList
            data={LoginFields}
            renderItem={({item}) => (
              <CustomInput
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                icon={eyeIcon ? 'eye-off-outline' : 'eye-outline'}
                setEyeIcon={setEyeIcon}
                eyeIcon={eyeIcon}
                secureTextEntry={eyeIcon}
                textInput={x => setUser({...user, [item.id]: x})}
              />
            )}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 10,
          }}>
          <Text style={{color: '#2242D8'}}>Forgot password?</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 680,
            width: '100%',
            gap: 10,
          }}>
          <Text>
            Don’t have an account?
            <Text
              style={{color: '#2242D8', fontWeight: 'bold'}}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              {' '}
              Sign up
            </Text>
          </Text>
          <Pressable
            style={{
              backgroundColor: '#2242D8',
              width: '90%',
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => {
              getStorage();
            }}>
            <Text style={{color: '#FFFFFF'}}>Login</Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 40,
        }}>
        <View style={{borderBottomWidth: 1, flex: 1, borderColor: '#EBEEFC'}} />
        <Text style={{marginHorizontal: 20}}>or</Text>
        <View style={{borderBottomWidth: 1, flex: 1, borderColor: '#EBEEFC'}} />
      </View>
      <Text style={{alignSelf: 'center', color: '#2242D8'}}>
        Login with Mobile no.
      </Text>
    </View>
  );
};

export default Login;
