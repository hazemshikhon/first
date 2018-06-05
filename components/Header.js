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
            style={{ maxHeight: 60, flex: .1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  backgroundColor: Colors.maincolor , paddingTop: Platform.OS == 'ios' ? 20 : 27 , paddingVertical: 0, paddingHorizontal: 10, }}>
            <TouchableOpacity
                onPress={ () => {
                    if(this.props.currentRoute !== "Main")
                    {
                        this.props.nav.dispatch(NavigationActions.reset({
                          index: 0,
                          actions: [
                            NavigationActions.navigate({ routeName: 'Main' })
                          ]
                        }));
                    }
                    else
                    {
                        this.props.nav.goBack()
                    }
                }}
                style={{ flex: .6, marginLeft: 0, paddingRight: 60}}>
                <Image
                  style={{
                      resizeMode: 'contain',
                      width: '100%',
                      height: '70%',
                      borderRadius: 11,
                  }}
                  source={require('../assets/images/one.png')}
                />
            </TouchableOpacity>

            <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder ={'search'}
                    placeholderTextColor='rgba(16, 98, 52, 0.5803921568627451)'
                    returnKeyType={"search"}
                    style={{ flex: 1, backgroundColor: 'white', borderRadius: 13, fontSize: 18, color: '#106234', padding: 1,  paddingLeft: 17, paddingRight: 35 }}
                    onChangeText={(text) => this.setState({searchText:text})}
                    onSubmitEditing={(event) => this.doSearch() }
                />
                <Ionicons
                    onPress={ () => this.doSearch() }
                  name='ios-search-outline'
                  size={25}
                  color='rgba(16, 98, 52, 0.5803921568627451)'
                  style={{ marginLeft: -30, backgroundColor: 'transparent' }}
                />
            </View>
        </View>
    );
  }
}
