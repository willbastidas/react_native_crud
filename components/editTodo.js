import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { editTodo } from '../store/todoSlice';

function EditTodo({ todo, onClose }) {
  const [title, setTitle] = useState(todo.title);
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    dispatch(editTodo({ id: todo.id, title }));
    onClose();
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ flex: 1, marginRight: 10 }}
      />
      <Button title="Guardar" onPress={handleEditTodo} />
      <Button title="Cancelar" onPress={onClose} />
    </View>
  );
}

export default EditTodo;