/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Display = () => {
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      {/* Profile photo */}
      <View
        style={{
          marginVertical: 20,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: 10,
          }}>
          Profile photo
        </Text>
        <View
          style={{
            width: '75%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={require('../../icons/profile.png')} />
          <TouchableOpacity
            style={{
              backgroundColor: '#E9ECFB',
              width: 150,
              // height: '40',
              paddingVertical: 10,
              borderRadius: 27,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: -20,
            }}>
            <Icon
              name="pencil-outline"
              size={12}
              color="#2242D8"
              style={{
                borderBottomWidth: 1,
                width: 12,
                borderColor: '#2242D8',
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Change photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Card color */}
      <View
        style={{
          marginVertical: 20,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: 10,
          }}>
          Card color
        </Text>
        <View
          style={{
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#00FA00',
            borderWidth: 1,
            borderRadius: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#EAEDFB',
              width: 34,
              height: 34,
              borderRadius: 17,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 5,
            }}>
            <Icon name="add" size={20} color="#7B88FF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#3700DC',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#92CAFF',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#EEFF00',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#00FA00',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#F910EB',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#8D0077',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#FFACAC',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#8D0077',
              width: 34,
              height: 34,
              borderRadius: 17,
              marginHorizontal: 5,
            }}
          />
        </View>
      </View>
      {/* Logo */}
      <View
        style={{
          marginVertical: 20,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#000000',
            marginBottom: 10,
          }}>
          Logo
        </Text>
        <View
          style={{
            width: '75%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E9ECFB',
              width: 70,
              height: 70,
              borderWidth: 1,
              borderColor: '#2242D8',
              borderRadius: 14,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../../icons/card-logo.png')} />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#E9ECFB',
              width: 150,
              // height: '40',
              paddingVertical: 10,
              borderRadius: 27,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: -20,
            }}>
            <Icon
              name="pencil-outline"
              size={12}
              color="#2242D8"
              style={{
                borderBottomWidth: 1,
                width: 12,
                borderColor: '#2242D8',
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#000000',
              }}>
              Change photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Display;
