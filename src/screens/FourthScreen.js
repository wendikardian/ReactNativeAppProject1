import React from 'react'
import {View, Text, ImageBackground, TextInput} from 'react-native'
import {InputComponent} from '../../components/InputComponent'

const FourthScreen = () => {
    return(
        <View style={{margin: 16}}>
            <ImageBackground style={{
                width: '100%',
                height: 300,
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}
            imageStyle={{borderRadius: 30, opacity: 0.7}} source={{uri:'https://wallpaperaccess.com/full/250180.jpg'}}
            >
                <Text style={{backgroundColor: 'yellow', fontWeight: 'bold', margin: 12, padding: 4, borderRadius: 10}}>Disney Land</Text>
            </ImageBackground>
            <InputComponent title="Description" height={80} placeholder="Description" multiline={true} keyboardType="default"  /> 
            <InputComponent title="Phone Number" height={40} placeholder="Phone number" multiline={true} keyboardType="numeric"  /> 
            <InputComponent title="Location" height={40} placeholder="Location" multiline={true} keyboardType="default"  /> 
        </View>
    )
}


const Challange4 = () => {
    return(
        <View style={{flex: 1}}>
            <ImageBackground style={{flex: 1, justifyContent: 'center'}} imageStyle={{opacity: 0.3}} source={{uri:'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg'}}>
                <View style={{alignItems: 'flex-end'}}>
                <Text style={{backgroundColor: '#F7F6B2', width: 100, padding: 10, borderRadius: 20, textAlign: 'center'}}>Colloseum</Text>
                </View>
                <View style={{margin: 8, padding: 8}}>
                    <InputComponent title="Description" height={100} placeholder="About the place" multiline={true} keyboardType="default" />
                    <InputComponent title="Phone Number" height={40} placeholder="Phone Number" multiline={true} keyboardType="numeric" />
                    <InputComponent title="Location" height={40} placeholder="Location" multiline={true} keyboardType="default" />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Challange4