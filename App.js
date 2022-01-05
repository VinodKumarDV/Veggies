import React from 'react';
import { View } from 'react-native';
import UploadProdect from './component/UploadProdect'
import Input from './component/Input';

export default function App() {
  return (
    <View style={{ flex: 1}}>
          <UploadProdect />
          <Input/>
    </View>
  );
}