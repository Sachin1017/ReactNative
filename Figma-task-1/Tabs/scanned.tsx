/* eslint-disable react-native/no-inline-styles */
import {View, Text, Pressable, TextInput, Image, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Scanned = ({navigation}) => {
  return (
    <View style={{width: '100%', backgroundColor: '#FFFFFF', height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          padding: 5,
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Pressable
          style={{
            backgroundColor: '#F4F6FD',
            width: 32,
            height: 32,
            borderRadius: 16,
            justifyContent: 'center',
            alignContent: 'center',
          }}
          onPress={() => navigation.navigate('BotNavigator')}>
          <Icon
            name="arrow-back"
            size={20}
            color="#2242D8"
            style={{alignSelf: 'center'}}
          />
        </Pressable>
        <Text
          style={{
            color: '#2242D8',
            fontSize: 20,
            fontWeight: '500',
          }}>
          Scanned
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5,
          }}>
          <Pressable
            style={{
              backgroundColor: '#F4F6FD',
              width: 35,
              height: 35,
              borderRadius: 17.5,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#2242D8',
              borderWidth: 0.5,
            }}>
            <Icon
              name="add"
              size={20}
              color="#2242D8"
              style={{alignSelf: 'center'}}
            />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#F4F6FD',
              width: 35,
              height: 35,
              borderRadius: 17.5,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#2242D8',
              borderWidth: 0.5,
            }}>
            <Icon
              name="pencil-outline"
              size={12}
              color="#2242D8"
              style={{alignSelf: 'center', borderBottomWidth: 1}}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#EAEDFB',
            paddingLeft: 10,
            borderRadius: 20,
            width: '85%',
            height: 50,
            gap: 10,
          }}>
          <Icon name="search" size={20} color="#2242D8" />
          <TextInput placeholder="Search by job, name..." style={{flex: 1}} />
        </View>
        <View
          style={{
            backgroundColor: '#EAEDFB',
            borderRadius: 20,
            width: 50,
            height: 50,
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Icon
            name="md-swap-vertical"
            size={14}
            color="#2242D8"
            style={{
              borderWidth: 2,
              width: 18,
              height: 18,
              borderRadius: 4,
              borderColor: '#2242D8',
              padding: 2,
              alignSelf: 'center',
            }}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          alignSelf: 'center',
          gap: -25,
        }}>
        <FlatList
          data={ContactsList}
          renderItem={({item}) => (
            <RenderItem char={item.char} list={item.list} />
          )}
        />
        <View
          style={{
            backgroundColor: '#F4F6FD',
            width: 21,
            borderRadius: 20,
            height: 226,
            // position: 'absolute',
            // left: 350,
            // bottom: 80,
          }}>
          <FlatList
            data={Alphabets}
            renderItem={({item}) => (
              <Text
                style={{
                  color: '#2242D8',
                  fontWeight: '500',
                  alignSelf: 'center',
                  fontSize: 9,
                  marginVertical: 6,
                }}>
                {item.chars}
              </Text>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Scanned;

const ContactsList = [
  {
    char: 'A',
    list: [
      {
        img: require('../icons/contacts/contact11.png'),
        name: 'Aont reni',
        details: 'Co-founder at visio',
      },
      {
        img: require('../icons/contacts/contact12.png'),
        name: 'Aimy len',
        details: 'Marketing head at visio',
      },
    ],
  },
  {
    char: 'B',
    list: [
      {
        img: require('../icons/contacts/contact11.png'),
        name: 'Ben roy',
        details: 'Co-founder at visio',
      },
      {
        img: require('../icons/contacts/contact12.png'),
        name: 'Buzil ken',
        details: 'Marketing head at visio',
      },
    ],
  },
  {
    char: 'C',
    list: [
      {
        img: require('../icons/contacts/contact12.png'),
        name: 'Ciniz mel',
        details: 'Co-founder at visio',
      },
      {
        img: require('../icons/contacts/contact11.png'),
        name: 'Cili ven',
        details: 'Marketing head at visio',
      },
    ],
  },
];
const Alphabets = [
  {chars: 'A'},
  {chars: 'B'},
  {chars: 'C'},
  {chars: 'D'},
  {chars: 'E'},
  {chars: 'F'},
  {chars: 'G'},
  {chars: 'H'},
  {chars: 'I'},
];
const RenderItem = ({char, list}) => {
  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
      }}>
      <View
        style={{
          backgroundColor: '#F4F6FD',
          width: 35,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 17.5,
          marginBottom: 10,
        }}>
        <Text style={{color: '#2242D8', fontWeight: '500'}}>{char}</Text>
      </View>
      {list.map(i => (
        <Pressable
          style={{
            backgroundColor: '#F4F6FD',
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            marginBottom: 10,
          }}>
          <View
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 20,
            }}>
            <Image source={i.img} style={{width: 38, height: 38}} />
            <View>
              <Text
                style={{
                  color: '#2242D8',
                  fontWeight: '500',
                  fontSize: 14,
                }}>
                {i.name}
              </Text>
              <Text
                style={{
                  color: '#2242D8',
                  fontWeight: '300',
                  fontSize: 10,
                }}>
                {i.details}
              </Text>
            </View>
          </View>
          <Pressable
            style={{
              width: 55,
              height: 25,
              backgroundColor: '#FFFFFF',
              borderRadius: 12.5,
              borderColor: '#2242D8',
              borderWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#2242D8',
                fontWeight: '500',
                fontSize: 9,
              }}>
              View
            </Text>
          </Pressable>
        </Pressable>
      ))}
    </View>
  );
};
