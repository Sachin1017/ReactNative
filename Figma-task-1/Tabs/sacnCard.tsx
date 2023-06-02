/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ScanCards({navigation}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#2242D8',
        }}>
        Scan card
      </Text>
      <View
        style={{
          backgroundColor: '#F5F7FD',
          width: '90%',
          position: 'absolute',
          top: 100,
          justifyContent: 'flex-start',
          alignSelf: 'center',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 30,
          borderRadius: 10,
          height: 700,
        }}>
        <Image
          source={require('../icons/scan.png')}
          style={{height: 60, width: 60, marginBottom: 30}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#2242D8',
          }}>
          Scan new card
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#2242D8',
            marginTop: 10,
            width: 250,
            textAlign: 'center',
            marginBottom: 30,
          }}>
          Just tap on scan card to add contact from physical card
        </Text>
        <Pressable
          style={{
            borderWidth: 0.5,
            borderColor: '#2242D8',
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 20,
            marginBottom: 70,
          }}
          onPress={() => navigation.navigate('VisionCamera')}>
          <Text
            style={{
              color: '#2242D8',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Scan card
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 0.2,
            borderColor: '#2242D8',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            borderRadius: 5,
            justifyContent: 'space-around',
            width: '90%',
            backgroundColor: 'white',
            // marginBottom: 100,
          }}>
          <FontAwesome5
            name="id-badge"
            size={20}
            color="#2242D8"
            style={{
              backgroundColor: '#F5F7FF',
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              color: '#2242D8',
              fontSize: 20,
            }}>
            See scanned contacts
          </Text>
          <FontAwesome5 name="angle-right" size={20} color="#2242D8" />
        </Pressable>
      </View>
    </View>
  );
}
