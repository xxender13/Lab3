import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Load tasks from AsyncStorage on app start
  useEffect(() => {
    const loadTasksFromStorage = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };
    loadTasksFromStorage();
  }, []);

  // Save tasks to AsyncStorage whenever tasks change
  useEffect(() => {
    const saveTasksToStorage = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks:', error);
      }
    };
    saveTasksToStorage();
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: task, completed: false },
      ]);
      setTask('');
      fadeIn(); // Trigger the fade-in animation when a new task is added
    }
  };

  const deleteTask = (id) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    });
  };

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const renderTask = ({ item }) => (
    <Animated.View
      style={[
        styles.taskContainer,
        item.completed && styles.taskCompletedContainer,
        { opacity: fadeAnim },
      ]}
    >
      {editingTask === item.id ? (
        <TextInput
          style={styles.input}
          value={item.text}
          onChangeText={(newText) => {
            setTasks((prevTasks) =>
              prevTasks.map((task) =>
                task.id === item.id ? { ...task, text: newText } : task
              )
            );
          }}
          onBlur={() => setEditingTask(null)}
        />
      ) : (
        <TouchableOpacity onPress={() => setEditingTask(item.id)}>
          <Text
            style={[
              styles.taskText,
              item.completed && styles.taskCompletedText,
            ]}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => toggleTaskComplete(item.id)}
      >
        <Text style={styles.toggleButtonText}>
          {item.completed ? 'Undo' : 'Done'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>To-Do List</Text>
        <Text style={styles.copyright}>All rights reserved © Harshil Sharma</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a task"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTask}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a73e8',
    marginBottom: 10,
  },
  copyright: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#1a73e8',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  taskCompletedContainer: {
    backgroundColor: '#90EE90',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  taskCompletedText: {
    textDecorationLine: 'line-through',
    color: '#fff',
  },
  toggleButton: {
    backgroundColor: '#0078d4',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  toggleButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteText: {
    fontSize: 16,
    color: '#ff4d4f',
    fontWeight: 'bold',
  },
});
