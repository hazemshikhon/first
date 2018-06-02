import React from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button , Platform, TextInput , Image , FlatList , List , ListItem , ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class HomeScreen extends React.Component {

 render() {

     _keyExtractor1 = (item, index) => item.flower1;
     _keyExtractor2 = (item, index) => item.flower2;
     _keyExtractor3 = (item, index) => item.flower3;

var flower1 = [
    {key1:'this pizza very good', name1:'بيتزا مشكل جبن' , price1:'10'},
    {key1:'this pizza very good' , name1:'بيتزا مشكل لحوم' , price1:'20'},
    {key1:'this pizza very good' , name1:'بيتزا خضار' , price1:'5'}
];

var flower2 = [
    {key2:'this Crepe very good' , name2:'كريب مشكل جبن' , price2:'10' },
    {key2:'this Crepe very good' , name2:'كريب مشكل لحوم ' , price2:'20' },
    {key2:'this Crepe very good' , name2:'كريب خضار' , price2:'5'}
];
var flower3 = [
    {key3:'this sweets very good' , name3:'شيكولاته' , price3:'50'},
    {key3:'this sweets very good' , name3:'مكسرات' , price3:'200'},
    {key3:'this sweets very good' , name3:'كنافه' , price3:'100'}
];
return (
<ScrollView style={{flexDirection: 'column'}}>

    <View  style={{flexDirection: 'row' , marginTop:20}} >
        <Ionicons
              name='ios-arrow-dropright-circle-outline'
              size={24}
              color='#106234'
              style={{marginLeft:10, padding:0, backgroundColor: 'transparent' }}/>

        <Text style={{ marginLeft: 5, fontWeight: 'bold', color: '#555555', fontSize: 20 }}>
            Pizza
        </Text>
    </View>

    <FlatList
        data={flower1}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{marginTop:50}}
        keyExtractor={this._keyExtractor1}
        renderItem={
            ({item}) =>
            <TouchableOpacity style={{flex:1 , margin:30}}
             onPress={ () => this.props.navigation.navigate('SingleProduct', { name:item.name1, price:item.price1 , btn:'ORDER' }) }>
            <Image source={require('../assets/images/one.jpg')}
               style={{width: '85%', height: 140, borderRadius: 1, marginBottom: 9}} />
                <Text style={{}}> {item.key1} </Text>

                </TouchableOpacity>
        }
        >
        </FlatList>

        <View  style={{flexDirection: 'row' , marginTop:20}} >
            <Ionicons
                  name='ios-arrow-dropright-circle-outline'
                  size={24}
                  color='#106234'
                  style={{marginLeft:10, padding:0, backgroundColor: 'transparent' }}/>

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
                <TouchableOpacity style={{flex:1 , margin:30}}
                onPress={ () => this.props.navigation.navigate('SingleProduct', { name:item.name2, price:item.price2 , btn:'ORDER' }) }>
                <Image source={require('../assets/images/two.jpg')}
                   style={{width: '85%', height: 140, borderRadius: 1, marginBottom: 9}} />
                    <Text style={{}}> {item.key2} </Text>

                    </TouchableOpacity>

            }
            >
            </FlatList>

            <TouchableOpacity
                style={{ backgroundColor:'#9B1ADB', borderRadius:13, padding:10, margin:10 , flex:.25 }}
                onPress={ () => this.props.navigation.navigate('SingleProduct', { name:'x', price:'10 LE' , btn:'ORDER X' }) }>

            <Text style={{ color:'white' , textAlign:'center' , paddingTop:3}}>Product X </Text>
            </TouchableOpacity>



            <View  style={{flexDirection: 'row' , marginTop:20}} >
                <Ionicons
                      name='ios-arrow-dropright-circle-outline'
                      size={24}
                      color='#106234'
                      style={{marginLeft:10, padding:0, backgroundColor: 'transparent' }}/>

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
                    <TouchableOpacity style={{flex:1 , margin:30}}
                    onPress={ () => this.props.navigation.navigate('SingleProduct', { name:item.name3, price:item.price3 , btn:'ORDER' }) }>
                    <Image source={require('../assets/images/three.jpg')}
                       style={{width: '85%', height: 140, borderRadius: 1, marginBottom: 9}} />
                        <Text style={{}}> {item.key3} </Text>

                        </TouchableOpacity>

                }
                >
                </FlatList>

     </ScrollView>
);
}
}
