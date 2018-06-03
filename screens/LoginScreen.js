import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button , Platform, TextInput , Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
export default class LoginScreen extends React.Component {

    state = {
        username: '',
        validity:'invalid' ,
        color: 'red'
    }

    loginUser = () => {
        /*if(this.state.username == 'haz')
            alert("You must enter a username with a minimum of 3 characters");
        else*/
            this.props.navigation.navigate('Tabs', { });
    }

    getDeviceTypeAsString = () => {
        return (
            (Platform.OS === 'ios') ? 'iOS' : 'Android'
        )
    }

    onChangeTextInput = (newtext) => {
        this.setState( {username: newtext})
if(this.state.username.length < 3){
    this.setState({validity:'invalid'})
    this.setState({color:'red'})

}
else {
    this.setState({validity:'valid'})
    this.setState({color:'green'})
}

    }

    static navigationOptions = {
        header:null
    };

    render() {
        return (
            <View style={{flex:1 , flexDirection:'column', justifyContent:'center', alignItems:'center' , paddingTop: Platform.OS == 'ios' ? 20 : 20}}>


                <Image style={{flex:1 ,height:'20%' , width:'100%' , resizeMode:'cover' }}
                         source={require('../assets/images/one.jpg')}/>


                <View style={{flex:.7 , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , width:'90%'}}>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , borderRadius:4 , borderBottomColor:'red' , borderBottomWidth:.7}} >
                        <Ionicons
                          name='ios-body'
                          size={28}
                          style={{ marginHorizontal:10}}
                          color={'red'}/>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='Enter your username'
                              placeholderTextColor='#CCCCCC'
                              autoGrow={false}
                              multiline={false}
                              autoFocus={false}
                              style={{ textAlign:'left'}}
                              onChangeText={ (new_text) => this.setState( {username: new_text}) }
                              onSubmitEditing={(event) => this.loginUser() } />
                    </View>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center', width:'100%' , borderRadius:4 , borderBottomColor:'red' , borderBottomWidth:.7 }} >
                        <Ionicons
                          name='ios-unlock'
                          size={28}
                          style={{marginHorizontal:10}}
                          color={'red'}/>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='Enter your password '
                              placeholderTextColor='#CCCCCC'
                              autoGrow={false}
                              multiline={false}
                              autoFocus={false}
                               style={{ textAlign:'left'}}
                              onChangeText={ (new_text) => this.setState( {username: new_text}) }
                              onSubmitEditing={(event) => this.loginUser() } />
                    </View>
                </View>

                <View style={{flex:1 , flexDirection:'column' , justifyContent:'center' , alignItems:'center'  }}>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'center' , alignItems:'center'  }}>
                    <TouchableOpacity
                        style={{ backgroundColor:Colors.maincolor, borderRadius:13, padding:10, margin:10 , flex:.5 }}
                        onPress={ () => this.loginUser() }>

                    <Text style={{ color:'white' , textAlign:'center' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ backgroundColor:Colors.maincolor, borderRadius:13, padding:10, margin:10 , flex:.5 }}
                        onPress={ () => this.props.navigation.navigate('Signup', { }) }>

                    <Text style={{ color:'white' , textAlign:'center'}}>Create</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'center' , alignItems:'center' }}>
                        <Text> Forget Password ? </Text>
                    </View>

                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'center' , alignItems:'center' , width:'92%' }}>
                        <TouchableOpacity
                            style={{ backgroundColor:Colors.maincolor, borderRadius:13, padding:15, flex:1 , width:'100%'}}
                            onPress={ () => this.loginUser() }>

                        <Text style={{ color:'white' , textAlign:'center' }}>Enter As Guest</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}
