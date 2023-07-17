import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

function AddTodo() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        placeholder="Nueva tarea"
        value={title}
        onChangeText={setTitle}
        style={{ flex: 1, marginRight: 10 }}
      />
      <Button title="Agregar" onPress={handleAddTodo} />
    </View>
  );
}

export default AddTodo;