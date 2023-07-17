import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todoSlice';

function TodoList({ onEditTodo }) {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={() => onEditTodo && onEditTodo(item)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
        <Text style={{ color: 'red' }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default TodoList;