import React from 'react';
import {
  Image,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';

export default class Header extends React.Component {


    componentDidMount() {

        //this.doTheFetching();


    }
    constructor(props){
        super(props)


    }



  render() {
    return (
        <View
            style={{ maxHeight: 60, flex: .1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#ff6600', paddingTop: Platform.OS == 'ios' ? 20 : 0, paddingVertical: 0, paddingHorizontal: 10, }}>
            

        </View>
    );
  }
}
