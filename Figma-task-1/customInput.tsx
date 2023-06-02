/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomInput({
  name,
  placeholder,
  type,
  icon,
  setEyeIcon,
  eyeIcon,
  secureTextEntry,
  textInput,
}) {
  return (
    <View
      style={{
        borderWidth: 1,
        height: 65,
        width: '100%',
        paddingHorizontal: 20,
        borderColor: '#2242D8',
        borderRadius: 20,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flex: 1,
          gap: -10,
          // width: '100%',
        }}>
        <Text
          style={{
            color: '#2242D8',
            marginTop: 12,
            marginLeft: 2,
          }}>
          {name}
        </Text>
        <TextInput
          inputMode={type}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          onChangeText={textInput}
          style={{width: '100%'}}
        />
      </View>
      {(name === 'Password' || name === 'Confirm password') && (
        <View>
          <Icon name={icon} size={20} onPress={() => setEyeIcon(!eyeIcon)} />
        </View>
      )}
    </View>
  );
}
