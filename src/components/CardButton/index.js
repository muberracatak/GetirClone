import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/cartActions'
const { width, height } = Dimensions.get('window')
const index = ({ item, addItemToCart }) => {
    return (
        <TouchableOpacity
            onPress={() => addItemToCart(item)}
            style={{ alignItems: 'center', width: '100%', height: height * 0.11, backgroundColor: 'white', position: 'absolute', bottom: 0 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: -10, marginHorizontal: '5%', backgroundColor: '#5D39C1', height: height * 0.06, width: '88%' }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Sepete ekle</Text>
            </View>
        </TouchableOpacity>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) =>
            dispatch(actions.addToCart({ quantity: 1, product }))
    }
}
export default connect(null, mapDispatchToProps)(index)