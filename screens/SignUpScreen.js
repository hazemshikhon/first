import React from 'react';
import { Dimensions ,Text, View,AsyncStorage, TouchableOpacity, StyleSheet,KeyboardAvoidingView, Button , Platform, TextInput , Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
export default class SignUpScreen extends React.Component {


    static navigationOptions = {
        header:null
    };

    render() {
        return (
            <View style={{flex:.8 , flexDirection:'column', justifyContent:'center', alignItems:'center' , paddingTop: Platform.OS == 'ios' ? 20 : 20}}>
            <KeyboardAvoidingView
                behavior='position'
                keyboardVerticalOffset={0}
                style={{}}
                contentContainerStyle= {{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: Dimensions.get('window').width }}>

                <Image style={{flex:.3 ,height:'10%' , width:'100%' , resizeMode:'cover' }}
                         source={require('../assets/images/one.jpg')}/>


                <View style={{flex:.9 , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , width:'90%'}}>


                    <View style={{flex:1 , justifyContent:'flex-start' , flexDirection:'row' , alignItems:'center' , width:'100%' , borderRadius:4 , borderBottomColor:Colors.maincolor , borderBottomWidth:.7}} >
                        <Ionicons
                          name='ios-body'
                          size={28}
                          style={{ marginHorizontal:10}}
                          color={Colors.maincolor}/>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='Enter your username'
                              placeholderTextColor={Colors.maincolor}
                              autoGrow={false}
                              multiline={false}
                              autoFocus={false}
                              style={{ textAlign:'left'}}
                              onChangeText={ (new_text) => this.setState( {username: new_text}) }
                              onSubmitEditing={(event) => this.loginUser() } />
                    </View>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center', width:'100%' , borderRadius:4 , borderBottomColor:Colors.maincolor , borderBottomWidth:.7 }} >
                        <Ionicons
                          name='ios-unlock'
                          size={28}
                          style={{marginHorizontal:10}}
                          color={Colors.maincolor}/>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='Enter your password '
                              placeholderTextColor={Colors.maincolor}
                              autoGrow={false}
                              multiline={false}
                              autoFocus={false}
                               style={{ textAlign:'left'}}
                              onChangeText={ (new_text) => this.setState( {username: new_text}) }
                              onSubmitEditing={(event) => this.loginUser() } />
                    </View>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center', width:'100%' , borderRadius:4 , borderBottomColor:Colors.maincolor , borderBottomWidth:.7 }} >
                        <Ionicons
                          name='ios-unlock'
                          size={28}
                          style={{marginHorizontal:10}}
                          color={Colors.maincolor}/>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='Repet your password '
                              placeholderTextColor={Colors.maincolor}
                              autoGrow={false}
                              multiline={false}
                              autoFocus={false}
                               style={{ textAlign:'left'}}
                              onChangeText={ (new_text) => this.setState( {username: new_text}) }
                              onSubmitEditing={(event) => this.loginUser() } />
                    </View>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center', width:'100%' , borderRadius:4 , borderBottomColor:Colors.maincolor , borderBottomWidth:.7 }} >
                        <Ionicons
                          name='ios-mail'
                          size={28}
                          style={{marginHorizontal:10}}
                          color={Colors.maincolor}/>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='E-mail'
                              placeholderTextColor={Colors.maincolor}
                              autoGrow={false}
                              multiline={false}
                              autoFocus={false}
                               style={{ textAlign:'left'}}
                              onChangeText={ (new_text) => this.setState( {username: new_text}) }
                              onSubmitEditing={(event) => this.loginUser() } />
                    </View>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center', width:'100%' , borderRadius:4 , borderBottomColor:Colors.maincolor , borderBottomWidth:.7 }} >
                        <Ionicons
                          name='ios-phone-portrait'
                          size={28}
                          style={{marginHorizontal:10}}
                          color={Colors.maincolor}/>
                          <TextInput
                              underlineColorAndroid='transparent'
                              placeholder='Phone'
                              placeholderTextColor={Colors.maincolor}
                              autoGrow={false}
                              multiline={false}
                              autoFocus={false}
                               style={{ textAlign:'left'}}
                              onChangeText={ (new_text) => this.setState( {username: new_text}) }
                              onSubmitEditing={(event) => this.loginUser() } />
                    </View>
                    <View style={{flex:1 , flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center', width:'100%' , borderRadius:4 }} >
                    <TouchableOpacity
                        style={{ backgroundColor:Colors.maincolor, borderRadius:13, padding:10, margin:10 , marginLeft:115 , flex:.5 }}
                        onPress={ () => this.loginUser() }>

                    <Text style={{ color:'white' , textAlign:'center' }}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>

                </View>

</KeyboardAvoidingView>
            </View>
        );
    }
}
