import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
  useColorScheme,
} from 'react-native';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  };

  const handleAddTask = () => {
    if (text.trim() === '') {
      Alert.alert('Input Error', 'Please enter a task to proceed.');
      return;
    }
    setTasks([...tasks, text]);
    setText('');
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text style={styles.title}>To-Do List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="enter text to add a new task"
          value={text}
          onChangeText={setText}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.taskItem}>• {item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff69b4', // pink
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  taskItem: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
