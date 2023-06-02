/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import CardsModalBox from '../Cards/cardsModalBox';

export default function Cards({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState('');
  const getToken = async () => {
    try {
      const data = await AsyncStorage.getItem('token');
      setName(JSON.parse(data).Name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={{backgroundColor: '#FFFFFF', width: '100%', height: '100%'}}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Image source={require('../icons/card-logo.png')} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#2242D8',
              fontWeight: '500',
            }}>
            Hey, {name}
          </Text>
          <View
            style={{
              backgroundColor: '#F5F5FD',
              borderRadius: 22,
              margin: 10,
            }}>
            <Image source={require('../icons/IMG_7117.png')} />
          </View>
        </View>
      </View>
      {/* <View
        style={{
          backgroundColor: '#F5F7FD',
          width: '90%',
          alignSelf: 'center',
          height: '90%',
          marginTop: 10,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <Image
          source={require('../icons/empty.png')}
          style={{
            marginTop: 40,
          }}
        />
        <Text
          style={{
            color: '#2242D8',
            marginTop: 30,
            fontSize: 18,
            fontWeight: '500',
          }}>
          Nothing in your card list!
        </Text>
        <Text
          style={{
            color: '#2242D8',
            marginTop: 10,
            fontSize: 12,
            fontWeight: '300',
            width: 200,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          No worried make your first digital business card now
        </Text>
        <Image
          source={require('../icons/Line1.png')}
          style={{marginLeft: 40}}
        />
      </View> */}
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          gap: 20,
          marginTop: 20,
        }}>
        {/* Presonal card */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F1F3FC',
            borderWidth: 1,
            borderColor: '#59ACF3',
            borderRadius: 20,
            padding: 20,
            width: '100%',
            gap: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Image source={require('../icons/contacts/contact11.png')} />
            <View>
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                John ryan
              </Text>
              <Text
                style={{
                  color: '#5870E1',
                  fontSize: 12,
                  fontWeight: '400',
                }}>
                Personal card
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: '#59ACF3',
                backgroundColor: '#FFFFFF',
                width: 45,
                height: 20,
                borderRadius: 35,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              onPress={() => setModalVisible(true)}>
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              justifyContent: 'space-around',
              width: '100%',
              height: 49,
              borderWidth: 0.5,
              borderRadius: 20,
              gap: -15,
            }}>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}
              onPress={() => navigation.navigate('EditCard')}>
              <Icon
                name="pencil-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center', borderBottomWidth: 1}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderLeftWidth: 0.5,
                borderEndWidth: 0.5,
                borderColor: '#B6C1F2',
                paddingHorizontal: 15,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="newspaper-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Preview card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="paper-plane-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Work card */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F1FCF3',
            borderWidth: 1,
            borderColor: '#4CDB66',
            borderRadius: 20,
            padding: 20,
            width: '100%',
            gap: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Image source={require('../icons/contacts/contact11.png')} />
            <View>
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                John ryan
              </Text>
              <Text
                style={{
                  color: '#5870E1',
                  fontSize: 12,
                  fontWeight: '400',
                }}>
                Work card
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: '#59ACF3',
                backgroundColor: '#FFFFFF',
                width: 45,
                height: 20,
                borderRadius: 35,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              onPress={() => setModalVisible(true)}>
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              justifyContent: 'space-around',
              width: '100%',
              height: 49,
              borderWidth: 0.5,
              borderRadius: 20,
              gap: -15,
            }}>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="pencil-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center', borderBottomWidth: 1}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderLeftWidth: 0.5,
                borderEndWidth: 0.5,
                borderColor: '#B6C1F2',
                paddingHorizontal: 15,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="newspaper-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Preview card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="paper-plane-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Portfolio card */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F4FEFF',
            borderWidth: 1,
            borderColor: '#4CD2DB',
            borderRadius: 20,
            padding: 20,
            width: '100%',
            gap: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Image source={require('../icons/contacts/contact11.png')} />
            <View>
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                John ryan
              </Text>
              <Text
                style={{
                  color: '#5870E1',
                  fontSize: 12,
                  fontWeight: '400',
                }}>
                Portfolio card
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: '#59ACF3',
                backgroundColor: '#FFFFFF',
                width: 45,
                height: 20,
                borderRadius: 35,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              onPress={() => setModalVisible(true)}>
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: '#2242D8',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              justifyContent: 'space-around',
              width: '100%',
              height: 49,
              borderWidth: 0.5,
              borderRadius: 20,
              gap: -15,
            }}>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="pencil-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center', borderBottomWidth: 1}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderLeftWidth: 0.5,
                borderEndWidth: 0.5,
                borderColor: '#B6C1F2',
                paddingHorizontal: 15,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="newspaper-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Preview card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                height: '90%',
              }}>
              <Icon
                name="paper-plane-outline"
                size={12}
                color="#2242D8"
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  color: '#2242D8',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CardsModalBox
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />
      </View>
    </View>
  );
}
