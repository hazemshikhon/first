import React from 'react';
import {View, Text, TouchableOpacity , Image} from 'react-native';

export default class SingleProductScreen extends React.Component {



    
    render() {
        return (

        <View style={{flex:1 , paddingTop:10 }}>
            <View style={{flex:.75}}>
                <Text style={{ textAlign:'center', fontSize:50 , color:'red' , marginBottom:25  }}> {this.props.navigation.state.params.name}</Text>

                <Image style={{height:'40%' , width:'100%' , resizeMode:'cover'}} source={this.props.navigation.state.params.srs}/>

                <Text style={{fontSize:25 , color:'black' , marginTop:30 , textAlign:'center' }} >Price : {this.props.navigation.state.params.price}</Text>

            </View>
            <View style={{flex:.25}}>
                <TouchableOpacity style={{ backgroundColor:'#9B1ADB', borderRadius:13, padding:10, margin:10 , flex:.25 }}>


                <Text style={{ color:'white' , textAlign:'center' , paddingTop:3 }}> {this.props.navigation.state.params.btn}  </Text>
                    </TouchableOpacity>

            </View>
        </View>
        );
    }
}
