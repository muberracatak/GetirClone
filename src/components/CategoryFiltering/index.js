import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import DATA from '../../../data/categories.json'

const { height, width } = Dimensions.get('window')

const CategoryBox = ({ item, active }) => {
    const [categories, setCategories] = useState(DATA.categories);
    return <View style={[{ paddingHorizontal: 9, flexDirection: 'row', alignItems: 'center' }, item == active && { borderBottomWidth: 2.5, borderBottomColor: '#FFD00C' }]}>
        <Text style={{ fontSize: 14, color: 'white', fontWeight: '600' }}>
            {item.name}
        </Text>
    </View >
}

const index = ({ category }) => {
    const [categories, setCategories] = useState(DATA.categories);
    return (
        <ScrollView
            style={{ width: '100%', backgroundColor: '#7849F7', height: height * 0.065 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            bounces={true}>
            {categories.map((item) => (

                <CategoryBox key={item.id} item={item} active={category} />


            ))}

        </ScrollView>
    )
}

export default index