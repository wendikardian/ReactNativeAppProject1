import React from 'react'
import {View, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import {useFonts} from 'expo-font'

const InstagramHomeScreen = () => {
    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/StyleScript-Regular.ttf'),
      });
    return(
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: 'StyleScript-Regular', fontSize: 40, marginLeft: 16}}>Instagram</Text>
            </View>
            <View style={{flexDirection : 'row', alignItems: 'center', marginRight: 8}}>
                <View style={{margin: 8}}>
                    <Icon name='plus-square-o' type='font-awesome' size={26} />
                </View>
            </View>
        </View>
    )
}

export default InstagramHomeScreen