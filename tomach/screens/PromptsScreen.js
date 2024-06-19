import {
  Text,
  View,
  Button,
  Pressable,
  TextInput
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  BottomModal,
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';

const PromptsScreen = () => {
  const navigation = useNavigation();
  const [prompts, setPrompts] = useState([]);
  const [option, setOption] = useState('About me');
  const [answer, setAnswer] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [question, setQuestion] = useState('');




  const addPrompt = () => {
    const newPrompt = { question, answer };
    const newPrompts = [...prompts, newPrompt];
    setPrompts(newPrompts);
    setQuestion('');
    setAnswer('');
    setModalVisible(false);
    if (newPrompts.length === 3) {
      navigation.navigate('ShowPrompts', {
        prompts: newPrompts
      });
    }
  };

  const openModal = (item) => {
    setModalVisible(true);
    setQuestion(item?.question);
  };

  const promptss = [
    {
      id: '0',
      name: 'About me',
      questions: [
        { id: '10', question: 'A random fact I love is' },
        { id: '11', question: 'Typical Sunday' },
        { id: '12', question: 'I go crazy for' },
        { id: '13', question: 'Unusual Skills' },
        { id: '14', question: 'My greatest strength' },
      ],
    },
    {
      id: '2',
      name: 'Self Care',
      questions: [
        { id: '10', question: 'I unwind by' },
        { id: '11', question: 'A boundary of mine is' },
        { id: '12', question: 'I go crazy for' },
        { id: '13', question: 'Unusual Skills' },
        { id: '14', question: 'My greatest strength' },
      ],
    },
  ];

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>
              View All
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'grey' }}>
              Prompts
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 10,
              marginTop: 20,
              flexDirection: 'row',
              gap: 10,
            }}>
            {promptss.map((item, index) => (
              <View key={index}>
                <Pressable
                  onPress={() => setOption(item.name)}
                  style={{
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor:
                      option == item?.name ? '#581845' : 'black',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: option == item?.name ? 'white' : 'gray',
                    }}>
                    {item?.name}
                  </Text>
                </Pressable>
              </View>
            ))}
          </View>

          <View style={{ marginTop: 20, marginHorizontal: 12 }}>
            {promptss?.map((item, index) => (
              <View key={index}>
                {option == item?.name && (
                  <View>
                    {item?.questions?.map((question, index) => (
                      <Pressable
                        key={index}
                        onPress={() => openModal(question)}
                        style={{ marginVertical: 12 }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '500',
                            color: 'white',
                          }}>
                          {question?.question}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </SafeAreaView>
        <BottomModal
          onBackdropPress={() => setModalVisible(!isModalVisible)}
          onHardwareBackPress={() => setModalVisible(!isModalVisible)}
          swipeDirection={['up', 'down']}
          swipeThreshold={200}
          modalTitle={<ModalTitle title="Answer the questions" />}
          modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
          visible={isModalVisible}
          onTouchOutside={() => setModalVisible(!isModalVisible)}>
          <ModalContent style={{ width: '100%', height: 250 }}>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'black',
                  marginVertical: 10,
                  textAlign: 'center',
                }}>
                Answer your questions
              </Text>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 20,
                  fontWeight: '600',
                  color: 'black',
                  marginVertical: 10,
                }}>
                {question}
              </Text>
              <View
                style={{
                  borderColor: '#202020',
                  borderWidth: 1,
                  padding: 10,
                  height: 100,
                  marginVertical: 12,
                  borderStyle: 'dashed',
                }}>
                <TextInput
                  style={{
                    fontSize: 18,
                    width: '100%',
                    color: 'gray',
                  }}
                  value={answer}
                  onChangeText={text => setAnswer(text)}
                  placeholder="Enter your answer"
                />
              </View>
              <Button onPress={addPrompt} title="Add" />
            </View>
          </ModalContent>
        </BottomModal>
      </GestureHandlerRootView>
    </>
  );
};

export default PromptsScreen;
