/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = ({navigation}) => {
  const checkUser = async () => {
    try {
      const data = await AsyncStorage.getItem('token');
      if (data !== null) {
        console.log('Home');

        navigation.navigate('BotNavigator');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2242DA',
        alignSelf: 'center',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}>
      <Text
        style={{
          color: '#FFFFFF',
          width: 300,
          fontSize: 20,
          textAlign: 'center',
          position: 'absolute',
          top: 50,
          left: 50,
        }}>
        Let’s make your first digital business card
      </Text>
      <Image
        source={require('./icons/Ellipse.png')}
        style={{
          position: 'absolute',
          top: 110,
          left: 50,
          zIndex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 250,
          height: 300,
          borderTopRightRadius: 80,
          position: 'absolute',
          top: 130,
        }}>
        <View
          style={{
            backgroundColor: '#54A4EE',
            padding: 10,
            width: 100,
            borderRadius: 20,
            position: 'absolute',
            top: 20,
            left: 60,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Ryan john
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#54A4EE45',
            width: 130,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 30,
            position: 'absolute',
            top: 70,
            left: 70,
          }}>
          <Text
            style={{
              fontSize: 12,
            }}>
            Software engineer
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#2242D8',
              textAlign: 'right',
              marginRight: 10,
            }}>
            At Google
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#2242DA17',
            width: 210,
            paddingLeft: 10,
            paddingVertical: 5,
            position: 'absolute',
            top: 140,
            left: 40,
            borderTopStartRadius: 30,
            borderBottomStartRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 11,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            I’m ryan software engineer at Google and here is my digital business
            card with all my career and personal details with only the best app
          </Text>
        </View>
        <View
          style={{
            width: 100,
            backgroundColor: '#54A4EE45',
            padding: 5,
            borderRadius: 10,
            position: 'absolute',
            top: 220,
            left: 50,
          }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              color: '#2242D8',
              textAlign: 'center',
            }}>
            twitter.com/ryan
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#54A4EE45',
            width: 80,
            padding: 3,
            borderRadius: 10,
            position: 'absolute',
            top: 230,
            left: 160,
          }}>
          <Text
            style={{
              fontSize: 8,
              color: '#2242D8',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            instagram.com/ryan
          </Text>
        </View>
        <View
          style={{
            width: 80,
            backgroundColor: '#54A4EE45',
            height: 30,
            position: 'absolute',
            top: 253,
            left: 85,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          width: '100%',
          height: '60%',
          top: 390,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}>
        <View
          style={{
            width: 35,
            height: 5,
            backgroundColor: '#54A4EE45',
            position: 'absolute',
            top: 10,
            left: 180,
            borderRadius: 10,
          }}
        />
        <Pressable
          style={{
            backgroundColor: '#2242D8',
            width: '70%',
            alignSelf: 'center',
            padding: 16,
            borderRadius: 20,
            marginTop: 40,
          }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Sign up
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#FFFFFF',
            width: '70%',
            alignSelf: 'center',
            padding: 16,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#2242D8',
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Login to App
          </Text>
        </Pressable>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{borderBottomWidth: 0.25, flex: 1}} />
          <Text style={{color: '#2242D8', margin: 20}}>or</Text>
          <View style={{borderBottomWidth: 0.25, flex: 1}} />
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '70%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: '#2242D8',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 40,
          }}>
          <Image
            source={require('./icons/google.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#2242D8',
            }}>
            Continue with Google
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '70%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: '#2242D8',
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 30,
          }}>
          <Image source={require('./icons/facebook.png')} />
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#2242D8',
            }}>
            Continue with Facebook
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '70%',
            alignSelf: 'center',
            padding: 10,
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: '#2242D8',
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 40,
          }}>
          <Image source={require('./icons/apple.png')} />
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#2242D8',
            }}>
            Continue with Apple
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
