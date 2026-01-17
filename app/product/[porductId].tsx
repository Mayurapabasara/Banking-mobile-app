import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SingleProduct = () => {

      const params = useLocalSearchParams();
      console.log(params);
      
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text>SingleProduct</Text>
      <Text>{params.productId}</Text>
      <Text>{params.name}</Text>
      <Text>{params.age}</Text>
    </View>
  )
}

export default SingleProduct