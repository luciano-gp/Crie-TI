import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import LottieView from 'lottie-react-native';
import CustomButton from '../components/CustomButton';
import ListItem from '../components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const ViewTasks = () => {
  const [taskList, setTaskList] = useState([])
  const [task, setTask] = useState('')

  useEffect(() => {
    const getList = async () => {
      const storagedTaskList = await AsyncStorage.getItem('tasks_taskList');
      storagedTaskList ? setTaskList(JSON.parse(storagedTaskList)) : null;
    }
    getList()
  }, []);

  useEffect(() => {
    const saveList = async () => {
      await AsyncStorage.setItem('tasks_taskList', JSON.stringify(taskList));
    }
    saveList();
  }, [taskList]);

  const updateTaskList = async () => {
    if (task) {
      const newTask = {
        id: String(new Date().getTime()),
        name: task,
        done: false,
      }
      const orderTaskList = [...taskList, newTask];
      orderTaskList.sort((a, b) => (a.name > b.name ? 1 : (b.name > a.name ? -1 : 0)));
      setTaskList(orderTaskList);
      setTask('');

      await AsyncStorage.setItem('tasks_taskList', JSON.stringify(orderTaskList));
    } else {
      Alert.alert('Ops', 'Tarefa não foi preenchida');
    }
  }

  const deleteTask = (id) => {
    Alert.alert("Atenção", 'Voce gostaria de deletar essa tarefa?', [{
      text: "Deletar",
      onPress: () => setTaskList([...taskList.filter((item) => item.id !== id)]),
    }, {
      text: "Cancelar",
      onPress: () => { }
    }]);
  }

  const handleCheckTask = (id) => {
    const newTaskList = taskList.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done }
      }
      return item;
    })
    setTaskList(newTaskList);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.label}>Tarefa</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Digite uma nova tarefa"
            placeholderTextColor='#bebebe'
            value={task}
            onChangeText={(value) => setTask(value)}
          />
          <CustomButton title='Salvar' onPress={updateTaskList} />
        </View>

        {
          taskList && taskList.length > 0 ?
            <FlatList
              data={taskList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <ListItem
                    item={item}
                    onPress={() => deleteTask(item.id)}
                    onValueChange={() => handleCheckTask(item.id)} />
                )
              }}
            />
            :
            <View style={styles.list}>
              <LottieView
                autoPlay
                style={{ width: 200, height: 200 }}
                loop={true}
                source={require('../assets/animations/EmptyListAnimation.json')}
              />
            </View>
        }
      </SafeAreaView>
    </View>
  );
}

export default ViewTasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 15,
    color: '#6AC66B',
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#6AC66B',
    borderRadius: 10,
    padding: 10,
    width: (width * 0.9),
    color: 'white',
  },
  list: {
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});