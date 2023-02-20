import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/cartActions'
const { width, height } = Dimensions.get('window')
const index = ({ item, quantity, product, addItemToCart }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
            style={{
                width: width * 0.28,
                marginTop: 12,
                height: height * 0.24,
                marginLeft: 12,
                marginBottom: 0

            }}>
            <Image style={{ borderWidth: 0.1, borderColor: 'gray', borderRadius: 12, width: width * 0.28, height: width * 0.28 }} source={{ uri: item.image }} />
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 11.4, color: "#747990", textDecorationLine: 'line-through' }}>
                    <Text>  {"\u20BA"}</Text>{item.fiyat}
                </Text>
                <Text style={{
                    color: "#5D3EBD",
                    fontWeight: 'bold',
                    fontSize: 12,
                    marginLeft: 4
                }}>
                    <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
                </Text>
            </View>
            <Text style={{ fontSize: 13, fontWeight: '600', marginTop: 5 }}>{item.name}</Text>
            <Text style={{ color: '#747990', fontSize: 12, marginTop: 4, fontWeight: '500' }}>{item.miktar}</Text>
            <TouchableOpacity onPress={() => { addItemToCart(item) }} style={{ alignItems: 'center', shadowRadius: 3.8, shadowOpacity: 0.05, justifyContent: 'center', width: 30, height: 30, borderWidth: 0.3, borderRadius: 6, borderColor: 'lightgray', right: -6, top: -6, position: 'absolute', backgroundColor: 'white' }}>
                <AntDesign name="plus" size={24} color="#5D3EBD" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => {
            dispatch(actions.addToCart({ quantity: 1, product }))
        }
    }
}

export default connect(null, mapDispatchToProps)(index)