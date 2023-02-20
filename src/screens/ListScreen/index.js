import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'

const index = () => {
    return (

        <SafeAreaView style={{ borderColor: '#5D3EBD' }}>
            <HeaderMain />
            <BannerCarousel />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 10, padding: 5, top: 10 }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 18,
                        color: '#5D3EBD'
                    }}>Merhaba Müberra!</Text>
                </View>
                <View style={{ justifyContent: 'center', top: 12, borderWidth: 1, width: 180, height: 45, borderColor: '#5D3EBD', borderRadius: 5, padding: 6 }}>
                    <TextInput placeholder='Getir`de ara' />
                </View>
            </View>
            <TouchableOpacity style={{ margin: 10, padding: 6, top: 10 }}>
                <Image style={{ width: 180, borderRadius: 20, padding: 5 }} source={require('../../../assets/getir1.png')} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default index
