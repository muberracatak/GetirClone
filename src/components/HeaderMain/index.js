import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../../screens/HomeScreen/styles'
import { Entypo } from '@expo/vector-icons';

const index = () => {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerOne}>
                <Image style={styles.image} source={require('../../../assets/home3.png')} />
                <View style={styles.headerOneView}>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Ev</Text>
                    <Text style={{ fontWeight: '500', fontSize: 11.5, marginRight: 1, marginLeft: 6, color: '#6E7480' }}>Dedepaşa Blv. Yenişehir mahallesi</Text>
                    <Entypo name="chevron-right" size={22} color="#5D3EBD" />
                </View>
                <View style={styles.headerTwo}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', left: 15, color: '#5D3EBD' }}>Tvs</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', left: 15, color: '#5D3EBD' }}>13dk</Text>

                </View>
            </View>
            <View>

            </View>
        </View>
    )
}

export default index