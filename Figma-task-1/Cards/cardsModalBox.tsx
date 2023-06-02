/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CardsModalBox = ({modalVisible, setModalVisible, navigation}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        navigation.navigate('Cards');
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#00000278',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderTopEndRadius: 15,
            borderTopStartRadius: 15,
            padding: 15,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width: '100%',
            height: 190,
          }}>
          <Pressable
            style={{
              backgroundColor: '#E9ECFB',
              width: 60,
              height: 7,
              borderRadius: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Cards');
              setModalVisible(!modalVisible);
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
              height: '90%',
            }}>
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: '#E9ECFB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                borderRadius: 20,
              }}>
              <Icon name="radio-outline" size={25} color="#2242D8" />
              <Text
                style={{
                  fontSize: 12,
                  color: '#000000',
                  fontWeight: '500',
                }}>
                Write to NFC
              </Text>
            </View>
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: '#E9ECFB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                borderRadius: 20,
              }}>
              <Icon name="copy-outline" size={25} color="#2242D8" />
              <Text
                style={{
                  fontSize: 12,
                  color: '#000000',
                  fontWeight: '500',
                }}>
                Duplicate card
              </Text>
            </View>
            <View
              style={{
                width: 90,
                height: 90,
                backgroundColor: '#FDEDED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                borderRadius: 20,
              }}>
              <Icon name="trash-outline" size={25} color="#EF4B4B" />
              <Text
                style={{
                  fontSize: 12,
                  color: '#000000',
                  fontWeight: '500',
                }}>
                Delete card
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CardsModalBox;
