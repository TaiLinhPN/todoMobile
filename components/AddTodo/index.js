import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import globalStyles from '../../theme/globalStyle';
import {styles} from './style';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNewTodo} from '../TodoList/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState('');

  const handleAddTodo = () => {
    dispatch(
      addNewTodo({
        name: todoName,
        completed: false,
        // prioriry: prioriry,
      }),
    );
    setTodoName('');
    // setPrioriry('Medium');
  };
  return (
    <View style={[globalStyles.row, globalStyles.containerInput,]}>
      <TextInput
        style={[ {flex: 1, marginLeft: 20}]}
        value={todoName}
        onChangeText={newTodoName => setTodoName(newTodoName)}
      />
      <Pressable style={styles.btnAdd} onPress={handleAddTodo}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

export default AddTodo;
