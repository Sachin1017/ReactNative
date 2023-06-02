/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import {SignUpFields} from './SignUpFields';
import CustomInput from '../customInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(false);
  const [user, setUser] = useState({
    Name: '',
    EmailAddress: '',
    Password: '',
    ConfirmPassword: '',
  });
  // console.log(user);

  const setStorage = async () => {
    try {
      if (user !== '') {
        await AsyncStorage.setItem('user', JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
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
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text
          style={{
            color: '#2242D8',
            marginTop: 20,
            fontSize: 15,
            fontWeight: '300',
          }}>
          SignUp
        </Text>
        <Text
          style={{
            color: '#2242D8',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Welcome to App 👋
        </Text>
        <Text
          style={{
            color: '#2242D8',
            marginTop: 10,
            fontWeight: '300',
          }}>
          Create your account to make your first business card
        </Text>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 45,
            width: '100%',
            gap: 10,
          }}>
          <FlatList
            data={SignUpFields}
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
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>I accepts the terms & conditions</Text>
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
            Already have an account?
            <Text
              style={{color: '#2242D8', fontWeight: 'bold'}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              {' '}
              Login
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
              marginBottom: 20,
            }}
            onPress={() => {
              setStorage();
              navigation.navigate('Login');
            }}>
            <Text style={{color: '#FFFFFF'}}>Next</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
