import React from "react";
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from "../styles";

const Counter = () => {
    const dispatch = useDispatch();
    
    const value = useSelector(state => state.demo.value);
    
    const addValue = () => {
        dispatch({type: 'add_value', payload: 1})
      };
    
    const decrementValue = () => {
        dispatch({type: 'decrement_value', payload: 1})
      };
    
    return(
      <View style={styles.counter}>
      <Button title='Up' onPress={() => addValue()}></Button>
      <Button title='Down' onPress={() => decrementValue()}></Button>
      <Text>{value}</Text>
      </View>
    )
};

export default Counter;