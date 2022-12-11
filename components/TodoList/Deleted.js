import React from 'react';
import {Text, TextInput, View} from 'react-native';
import globalStyles from '../../theme/globalStyle';
import Todo from '../Todo';
import {styles} from './style';

import {useDispatch, useSelector} from 'react-redux';
import {todoListRemaningSelecter} from '../../redux/selectors';
const Deleted = () => {
  const todoList = useSelector(todoListRemaningSelecter);

  return (
    <View style={globalStyles.app}>
      {todoList.map(todo => {
        if (!todo.deleted) {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              completed={todo.completed}
            />
          );
        }
      })}
    </View>
  );
};

export default Deleted;
