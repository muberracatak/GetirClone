import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')
const index = ({ item }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('CategoryDetails')} style={{ marginTop: 10, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', width: width * 0.25, height: width * 0.25 }}>
            <Image
                source={{ uri: item.src }}
                style={{ width: width * 0.18, height: width * 0.18, borderRadius: 9 }} />
            <Text style={{ fontSize: 12, color: '#616161', fontWeight: '500' }}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default index