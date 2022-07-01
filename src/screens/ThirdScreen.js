import React from 'react'
import {View, Text, Image} from 'react-native'

const ThirdScreen = () => {
    return(
        <View style={{backgroundColor: 'mistyrose', flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{color: 'black'}}>Pikachu</Text>
                <Image style={{width: 150, height: 150, borderRadius: 100, borderWidth: 1, borderColor: 'skyblue', backgroundColor: '#A4E6EF'}} source={require('../../assets/images/pikachu.png')} />
            </View>
            <View style={{flex: 1, backgroundColor: 'orange'}}>
                <Text>
                    Flareo
                </Text>
            </View>
            <View style={{flex: 2, backgroundColor: 'purple'}}>
                <Text>
                    Rapidash
                </Text>
            </View>
        </View>
    )
}

export default ThirdScreen