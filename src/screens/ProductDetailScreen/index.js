import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import DATA from '../../../data/productsGetir.json'
import ImageCarousel from '../../components/ImageCarousel'
import DetailBox from '../../components/DetailBox'
import DetailProperty from '../../components/DetailProperty'
import CardButton from '../../components/CardButton'

const index = (props) => {
    const [product, setProduct] = useState(DATA.products);
    useEffect(() => {
        setProduct(props.route.params.product)
    }, [])

    if (!product) {
        return <ActivityIndicator color={"#5D3EBD"} />
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <ImageCarousel images={product.images} />
                <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
                <Text style={{ fontWeight: '600', paddingHorizontal: 10, paddingVertical: 14, color: '#808B99' }}>Detaylar</Text>
                <DetailProperty />

            </ScrollView>
            <CardButton item={product} />
        </View>
    )
}

export default index
const styles = StyleSheet.create({
    dots: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 20,
        marginVertical: 2,
        marginHorizontal: 5
    },
})
