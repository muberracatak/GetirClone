import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import categoriesGetir from '../../../assets/categoriesGetir'
import DATA from '../../../data/categories.json'
import CategoryItem from '../../components/CategoryItem'
import { useNavigation } from '@react-navigation/native'

const index = () => {
    const navigation = useNavigation();
    const DATAS = DATA.categories;
    const [categories, setCategories] = useState(categories)
    return (
        <View>
            <View style={styles.listContainer}>
                {DATAS.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))
                }

            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    }
})