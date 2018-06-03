import React from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button , Platform, TextInput , Image , FlatList , List , ListItem , ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import MyTouch from '../components/MyTouch';
export default class HomeScreen extends React.Component {

 render() {

     _keyExtractor1 = (item, index) => item.flower1;
     _keyExtractor2 = (item, index) => item.flower2;
     _keyExtractor3 = (item, index) => item.flower3;

var flower1 = [
    {key1:'this pizza very good', name1:'بيتزا مشكل جبن' , price1:'10', photo1:require('../assets/images/one.jpg')},
    {key1:'this pizza very good' , name1:'بيتزا مشكل لحوم' , price1:'20' , photo1:require('../assets/images/two.jpg')},
    {key1:'this pizza very good' , name1:'بيتزا خضار' , price1:'5' , photo1:require('../assets/images/three.jpg')}
];

var flower2 = [
    {key2:'this Crepe very good' , name2:'كريب مشكل جبن' , price2:'10' , photo2:require('../assets/images/one.jpg')},
    {key2:'this Crepe very good' , name2:'كريب مشكل لحوم ' , price2:'20' , photo2:require('../assets/images/two.jpg')},
    {key2:'this Crepe very good' , name2:'كريب خضار' , price2:'5' , photo2:require('../assets/images/three.jpg')}
];
var flower3 = [
    {key3:'this sweets very good' , name3:'شيكولاته' , price3:'50', photo3:require('../assets/images/one.jpg')},
    {key3:'this sweets very good' , name3:'مكسرات' , price3:'200', photo3:require('../assets/images/two.jpg')},
    {key3:'this sweets very good' , name3:'كنافه' , price3:'100' , photo3:require('../assets/images/three.jpg')}
];
return (
<ScrollView style={{flexDirection: 'column'}}>

    <View  style={{flexDirection: 'row' , marginTop:20}} >
        <Ionicons
              name='ios-arrow-dropright-circle-outline'
              size={24}
              color= {Colors.maincolor}
              style={{marginLeft:9, padding:0, backgroundColor: 'transparent' }}/>

        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#555555', fontSize: 20 }}>
            Pizza
        </Text>
    </View>

    <FlatList
        data={flower1}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{marginTop:10}}
        keyExtractor={this._keyExtractor1}
        renderItem={
            ({item}) =>

                <MyTouch type={2} name1={item.name1} photo1={item.photo1} price1={item.price1} key1={item.key1}/>

        }
        >
        </FlatList>

        <View  style={{flexDirection: 'row' , marginTop:20}} >
            <Ionicons
                  name='ios-arrow-dropright-circle-outline'
                  size={24}
                  color={Colors.maincolor}
                  style={{marginLeft:9, padding:0, backgroundColor: 'transparent' }}/>

            <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#555555', fontSize: 20 }}>
                Crepe
            </Text>
        </View>

        <FlatList
            data={flower2}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            keyExtractor={this._keyExtractor2}
            style={{ marginTop:10}}
            renderItem={
                ({item}) =>
                <MyTouch type={3} name2={item.name2} photo2={item.photo2} price2={item.price2} key2={item.key2}/>
            }
            >
            </FlatList>



            <View  style={{flexDirection: 'row' , marginTop:20}} >
                <Ionicons
                      name='ios-arrow-dropright-circle-outline'
                      size={24}
                      color={Colors.maincolor}
                      style={{marginLeft:9, padding:0, backgroundColor: 'transparent' }}/>

                <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#555555', fontSize: 20 }}>
                    Sweets
                </Text>
            </View>

            <FlatList
                data={flower3}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                style={{ marginTop:10 }}
                keyExtractor={this._keyExtractor3}
                renderItem={
                    ({item}) =>
                    <MyTouch type={4} name3={item.name3} photo3={item.photo3} price3={item.price3} key3={item.key3}/>

                }
                >
                </FlatList>

     </ScrollView>
);
}
}
