import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import EditTodo from './components/editTodo';

function App() {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const [showEditTodoModal, setShowEditTodoModal] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
    setShowEditTodoModal(true);
  };

  return (
    <Provider store={store}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Lista de tareas
        </Text>
        <Button title="Agregar tarea" onPress={() => setShowAddTodoModal(true)} />
        <TodoList onEditTodo={handleEditTodo} />
        <Modal visible={showAddTodoModal} animationType="slide">
          <AddTodo />
          <Button title="Cancelar" onPress={() => setShowAddTodoModal(false)} />
        </Modal>
        <Modal visible={showEditTodoModal} animationType="slide">
          {editTodo && (
            <EditTodo todo={editTodo} onClose={() => setShowEditTodoModal(false)} />
          )}
        </Modal>
      </View>
    </Provider>
  );
}

export default App;