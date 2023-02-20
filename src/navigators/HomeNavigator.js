import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import CartScreen from '../screens/CartScreen'
import { connect } from 'react-redux'
import * as actions from "../redux/actions/cartActions"
const Stack = createStackNavigator();

const { width, height } = Dimensions.get('window')
function MyStack({ navigation, route, cartItems, clearCart }) {

    const tabHiddenRoutes = ["ProductDetails", "CartScreen"]
    const [totalPrice, setTotalPrice] = useState(0)

    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (tabHiddenRoutes.includes(routeName)) {
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
    }, [navigation, route]);


    const getProductsPrice = () => {
        var total = 0;
        cartItems.forEach(cartItem => {
            const price = (total += cartItem.product.fiyat);
            setTotalPrice(price)
        })
    }
    useEffect(() => {
        getProductsPrice()
    }, [cartItems, navigation, route])
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: '#5C3EBC' },
                    headerTitle: () => (
                        <Image
                            style={{ width: 70, height: 30 }}
                            source={require('../../assets/getirlogo.png')}
                        />
                    )
                }}

            />
            <Stack.Screen
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{
                    headerTintColor: "white",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("CartScreen")}
                            style={{
                                width: width * 0.22,
                                height: 33,
                                backgroundColor: "white",
                                marginRight: width * 0.03,
                                borderRadius: 9,
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                style={{ width: 23, height: 23, marginLeft: 6 }}
                                source={require("../../assets/cart.png")}
                            />
                            <View
                                style={{ width: 5, height: 30, backgroundColor: "white" }}
                            />
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: "#F3EFFE",
                                    height: 30,
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                    justifyContent: 'center', alignItems: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#5D3EBD",
                                        fontWeight: "bold",
                                        fontSize: 12,
                                    }}
                                >
                                    <Text>{"\u20BA"}</Text>
                                    {totalPrice.toFixed(2)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
                            Ürünler
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name='ProductDetails'
                component={ProductDetailsScreen}
                options={{
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#5C3EBC' },
                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                            Ürün Detayı
                        </Text>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 12 }}>
                            <AntDesign name="close" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingRight: 12 }}>
                            <Ionicons name="heart" size={24} color="#32177a" />
                        </TouchableOpacity>
                    )
                }}

            />
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#5C3EBC' },
                    headerBackTitleVisible: false,
                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                            Sepetim
                        </Text>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.goBack()}>
                            <AntDesign name="close" size={26} color="white" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => clearCart()}
                            style={{ paddingRight: 10 }}>
                            <Ionicons name="md-trash-sharp" size={24} color="white" />
                        </TouchableOpacity>
                    )
                }}

            />

        </Stack.Navigator>
    )
}
const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart())
    }
}

function HomeNavigator({ navigation, route, cartItems, clearCart }) {
    return <MyStack navigation={navigation} route={route} clearCart={clearCart} cartItems={cartItems} />
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator)