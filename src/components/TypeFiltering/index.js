import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get('window')

const TypeBox = ({ item, active, setCat }) => {
    return (
        <TouchableOpacity onPress={() => setCat(item)} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, borderRadius: 6, height: height * 0.044, marginRight: 12 }, item == active ? { backgroundColor: '#5C3EBC' } : { borderColor: '#F0EFF7', borderWidth: 1 }]}>
            <Text style={[{ fontSize: 12, color: '#7849F7', fontWeight: '600' }, item == active && { color: 'white' }]}>{item}</Text>
        </TouchableOpacity>
    )
}
const index = () => {
    const [category, setCategory] = useState("Birlikte iyi gider")
    return (
        <ScrollView style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', width: '100%', backgroundColor: 'white', height: height * 0.072, flexDirection: 'row', paddingVertical: height * 0.014, paddingHorizontal: 12 }} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
            {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) => (
                <TypeBox setCat={setCategory} item={item} active={category} />
            ))
            }
        </ScrollView>
    )
}

export default index
