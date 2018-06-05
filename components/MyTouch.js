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
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import SingleProduct from '../screens/SingleProductScreen';




export default class MyTouch extends React.Component {



    componentDidMount() {

        //this.doTheFetching();


    }
    constructor(props){
        super(props)


    }



  render() {
      if(this.props.type == 1){
    return (
        <View>
            <TouchableOpacity style={{ position: 'absolute', right: 0, bottom: 10 }} onPress={ this.navigateToHomeOrLogin }>
                    <Text style={{ backgroundColor: '#106234', color: 'white', padding: 10, marginRight: 10, fontWeight: 'bold', borderRadius: 10 }}>Get Started</Text>
                </TouchableOpacity>
        </View>
    );
}
if(this.props.type == 2){
return (
    <TouchableOpacity style={{flex:1 , margin:30 , marginLeft:10}}
        onPress={ () => this.props.navigation.navigate('SingleProduct' , { name:this.props.name1, price:this.props.price1 , btn:'ORDER' , srs:this.props.photo1}) }>

        <Image source={this.props.photo1}
            style={{width: '85%', height: 140, borderRadius: 1, marginBottom: 9}} />
        <Text style={{}}> {this.props.key1} </Text>

    </TouchableOpacity>
);
}

if(this.props.type == 3){
return (
    <TouchableOpacity style={{flex:1 , margin:30 , marginLeft:10}}
    onPress={ () => this.props.navigation.navigate('SingleProduct', { name:this.props.name2, price:this.props.price2 , btn:'ORDER', srs:this.props.photo2 }) }>
    <Image source={this.props.photo2}
       style={{width: '85%', height: 140, borderRadius: 1, marginBottom: 9}} />
        <Text style={{}}> {this.props.key2} </Text>

        </TouchableOpacity>

);
}

if(this.props.type == 4){
return (
    <TouchableOpacity style={{flex:1 , margin:30 , marginLeft:10}}
    onPress={ () => this.props.navigation.navigate('SingleProduct', { name:this.props.name3, price:this.props.price3 , btn:'ORDER' , srs:this.props.photo3 }) }>
    <Image source={this.props.photo3}
       style={{width: '85%', height: 140, borderRadius: 1, marginBottom: 9}} />
        <Text style={{}}> {this.props.key3} </Text>

        </TouchableOpacity>

);
}
  }
}
