import React from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button , Platform, TextInput , Image , FlatList , List , ListItem , ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import MyTouch from '../components/MyTouch';
import { TabNavigator, NavigationActions } from 'react-navigation';
export default class BranchesScreen extends React.Component {




_keyExtractor = (store, index) => store.ID;

 render() {

    var storesInfo = [
                 {
                     ID: 0,
                     name: 'Sedi Gaber',
                     tele: '03122121 ',
                     fax: '012100',

                 },
                 {
                     ID: 1,
                     name: 'Sedi Bishr',
                     tele:'0112107228',
                     fax: '012870'
                 },
                 {
                     ID: 2,
                     name: 'Smouha',
                     tele:'0126813706',
                     fax: '0165100'
                 },

                 ]
return (
    <View >
        <FlatList
        data={storesInfo}
        keyExtractor={this._keyExtractor}
        renderItem={
            ({item}) =>
                <View style={{ marginVertical: 20, marginHorizontal: 30 , justifyContent:'flex-start'}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                    <Text style={{fontWeight:'bold' , fontSize:20}}>
                        {item.name}
                    </Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                    <Ionicons
                    name='ios-phone-portrait-outline'
                      size={28}
                      style={{ color: Colors.maincolor, }}
                    />
                    <Text style={{  marginVertical: 7, }}>
                        {'  '+item.tele+'  '}
                    </Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <Ionicons
              name='ios-calculator-outline'
              size={27}
              style={{ color: Colors.maincolor, }}
            />
            <Text style={{  marginVertical: 7, }}>
                {'  '+item.fax+'  ' }
            </Text>
            </View>
                </View>

        }
        >
        </FlatList>




    </View>


);
}
}
