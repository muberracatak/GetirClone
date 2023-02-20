import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from '../screens/ListScreen'
const Stack = createStackNavigator();

const ListNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='ListScreen'>
            <Stack.Screen name='list' component={ListScreen}
                options={{
                    headerStyle: { backgroundColor: '#5C3EBC' },
                    headerTitle: () => (
                        <Image
                            style={{ width: 70, height: 30 }}
                            source={require('../../assets/getirlogo.png')}
                        />
                    ),
                    headerShown: false
                }}

            />


        </Stack.Navigator>
    )
}

export default ListNavigator