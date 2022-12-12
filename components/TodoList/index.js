import React from 'react';
import {Text, TextInput, View} from 'react-native';
// import {List, Radio, SearchBar} from '@ant-design/react-native';
import globalStyles from '../../theme/globalStyle';
import Todo from '../Todo';
import AddTodo from '../AddTodo';
import {styles} from './style';
import Filter from '../Filters';

import {useDispatch, useSelector} from 'react-redux';
import {todoListRemaningSelecter} from '../../redux/selectors';

const TodosList = () => {
  const todoList = useSelector(todoListRemaningSelecter);
  console.log(todoList);
  return (
    <View>
      <Filter />
      <AddTodo />
      <View style={styles.todoList}>
        {todoList.map(todo => {
          if (!todo.deleted) {
            return (
             
                <Todo
                  key={todo.id}
                  id={todo.id}
                  name={todo.name}
                  completed={todo.completed}
                  deleted={todo.deleted}
                />
            
            );
          }
        })}
      </View>
    </View>
  );
};
export default TodosList;
