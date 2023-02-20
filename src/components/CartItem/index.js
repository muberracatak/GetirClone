import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/cartActions'
import { TouchableOpacity } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window')
const index = ({ product, quantity, removeFromCart }) => {
    return (
        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <View style={{
                borderBottomWidth: 0.4,
                width: width * 0.92,
                marginHorizontal: width * 0.04,
                borderBottomColor: 'lightgrey',
                flexDirection: 'row',
                alignItems: 'center',
                height: height * 0.13,
                backgroundColor: 'white',
                paddingHorizontal: width * 0.04,
                justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        borderWidth: 0.45,
                        padding: 4,
                        borderColor: 'lightgray',
                        borderRadius: 8
                    }}>
                        <Image style={{

                            height: height * 0.09,
                            width: height * 0.09,

                        }} source={{ uri: product.image }} />
                    </View>
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontSize: 13, fontWeight: '600', maxWidth: width * 0.46 }}>{product.name}</Text>
                        <Text style={{ fontWeight: '600', fontSize: 12, marginTop: 3, color: '#848897' }}>{product.miktar}</Text>
                        <Text style={{ marginTop: 6, color: '#5D3EBD', fontWeight: 'bold' }}>{product.fiyat}</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: width * 0.22,
                        height: height * 0.04,
                        borderRadius: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        borderWidth: 0.5,
                        borderColor: "lightgrey",
                        shadowOpacity: 0.4,
                        shadowColor: "gray",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => removeFromCart(product)}
                        style={{ width: width * 0.08, flex: 1, alignItems: "center" }}
                    >
                        <Text
                            style={{ fontWeight: "bold", fontSize: 16, color: "#5D3EBD" }}
                        >
                            -
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, height: height * 0.037, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5D3EBD' }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'white'
                            }}>
                            {quantity}
                        </Text>
                    </View>
                    <View style={{ fontSize: 12, flex: 1, alignItems: 'center' }}>
                        <Text>+</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product) =>
            dispatch(actions.removeFromCart(product))
    }
}

export default connect(null, mapDispatchToProps)(index)