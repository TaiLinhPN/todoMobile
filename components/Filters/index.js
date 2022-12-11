import React, {useEffect, useState} from 'react';
// import { Radio } from '@ant-design/react-native';
// import {Radio} from 'native-base';
import RadioButtonRN from 'radio-buttons-react-native';


import { Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../../theme/globalStyle';
import { styles } from './style';
import {useDispatch} from 'react-redux';
import filtersSlite from './filterSlice';

const data = [
  {
    label: 'All',
  },
  {
    label: 'Done',
  },
  ,
  {
    label: 'To do',
  },
];

const Filter = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('')
  const [statusCompleted, setStatusCompleted] = useState('All')
 
    const handlenputSearch = (e) => {

    setSearchText(e.nativeEvent.text);
    dispatch(filtersSlite.actions.searchFilterChange(e.nativeEvent.text));
    }
    
  const dandleStatusCompleted = (e) => {
     console.log(e.label);
    setStatusCompleted(e.label);
    dispatch(filtersSlite.actions.statusFilterChange(e.label));
  }
  
  clear = () => {
    setSearchText('aaaaa');
  };
    
        return (
          <View>
            <Text>Search</Text>
            <View style={globalStyles.row}>
              <TextInput
                style={[styles.input, {flex: 1}]}
                onChange={handlenputSearch}
                value={searchText}
              />
              <Icon name="rocket" size={30} color="#900" />
            </View>
            <Text>Filter By Status</Text>
            {/* <Radio.Group
              value={statusCompleted}
              onChange={dandleStatusCompleted}
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
              }}>
              <Radio value={'All'}>All</Radio>
              <Radio value={'Completed'}>Completed</Radio>
              <Radio value={'Todo'}>To do</Radio>
            </Radio.Group> */}

            <RadioButtonRN
              initial={1}
              style={{display: 'flex', flexDirection: 'row'}}
              boxStyle={{width: '25%', margin: 4, borderWidth: 0, padding: -2}}
              textStyle={{paddingLeft: 8}}
              circleSize={10}
              data={data}
              selectedBtn={e => dandleStatusCompleted(e)}
            />
          </View>
        );
    }

export default Filter;