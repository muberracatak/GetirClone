import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

const index = () => {
    const [details, setDetails] = useState([
        "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
        "İçindekiler",
        "Besin Değerleri",
        "Kullanım",
        "Ek Bilgiler",
    ])
    const TextComponent = ({ detail, index }) => {
        return (
            <View style={{
                paddingVertical: 12,
                borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
                borderBottomColor: 'lightgray',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: index === 0 ? '#4E4E4E' : '#687482',
                    fontSize: index === 0 ? 10.5 : 13,
                    fontWeight: index === 0 ? '400' : '500'
                }}>{detail}</Text>
                {index != 0 &&
                    <Feather name="chevron-down" size={24} color="#9f9f9f" />
                }
            </View>
        )
    }
    return (
        <View style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 8 }}>
            {details.map((item, index) => (
                <TextComponent key={index} detail={item} />
            ))}
        </View>
    )
}

export default index
