/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TopNavigator from '../../Navigation/topNavigator';

const EditCard = ({navigation}) => {
  return (
    <View style={{width: '100%', backgroundColor: '#FFFFFF', flex: 1}}>
      {/* Header */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          alignSelf: 'center',
          gap: 20,
          borderBottomWidth: 1,
          paddingVertical: 10,
          borderColor: '#EEEEEE',
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: 17.5,
            backgroundColor: '#EAEDFB',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Cards')}>
          <Icon name="close" size={18} color="#3055D9" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#2242D8',
            fontSize: 18,
            fontWeight: '500',
            marginLeft: 20,
          }}>
          Edit Card
        </Text>
        <TouchableOpacity
          style={{
            width: 70,
            height: 30,
            borderRadius: 22,
            backgroundColor: '#EAEDFB',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: '#2242D8',
              fontWeight: '500',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'}}>
        <TopNavigator />
      </View>
    </View>
  );
};

export default EditCard;
