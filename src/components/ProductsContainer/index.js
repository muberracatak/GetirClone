import { View, Text } from 'react-native'
import React from 'react'
import ProductItem from '../../components/ProductItem'
import productsGetir from '../../../data/productsGetir.json'

const DATA = productsGetir.products;
const index = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
                {DATA.slice(0, 2).map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </View>
            <Text style={{ color: 'gray', fontWeight: 'bold', padding: 14 }}>Çubuk</Text>
            <View style={{
                flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', flex: 1, backgroundColor: 'white', paddingVertical: 10
            }}>
                {DATA.slice(2).map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </View>
        </View>
    )
}

export default index