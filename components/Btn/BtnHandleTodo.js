import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

  const handleDeleteTodo = id => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const handleUpdtaeDeleteTodo = id => {
    console.log(id);
    dispatch(
      updateDeletedTodo({
        id: id,
        status: !deleted,
      }),
    );
  };

export const BtnDelete = () => {
  <Pressable onPress={() => handleUpdtaeDeleteTodo(id)}>
    <Icon name="minus-circle" size={20} color={checked ? 'red' : {}} />
  </Pressable>;
};

export const BtnDestroy = () => {
  <Pressable onPress={() => handleDeleteTodo(id)}>
    <Icon name="minus-circle" size={20} color={checked ? 'red' : {}} />
  </Pressable>;
};
