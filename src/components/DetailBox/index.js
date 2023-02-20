import { View, Text } from 'react-native'
import React from 'react'

const index = ({ price, name, quantity }) => {
    return (
        <View style={{ width: '100%', height: 100, backgroundColor: 'white', alignItems: 'center' }}>
            <Text style={{ color: '#5D3EBD', fontSize: 20, fontWeight: 'bold', marginTop: 12 }}>
                {price}
            </Text>
            <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 12 }}>
                {name}
            </Text>
            <Text style={{ color: '#848897', fontWeight: '600', marginTop: 8, paddingBottom: 18 }}>
                {quantity}
            </Text>
        </View>
    )
}

export default index
