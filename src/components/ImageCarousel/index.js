import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import DATA from '../../../data/productsGetir.json'

const { width, height } = Dimensions.get('window')
const index = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    return (
        <View style={{ alignItems: 'center', width: '100%', backgroundColor: 'white', paddingTop: 25, height: height * 0.25 }}>
            < FlatList
                data={images}
                style={{ width: width * 0.5, height: height * 0.18 }}
                renderItem={(item) => (
                    <Image
                        source={{ uri: item.item }}
                        style={{ width: width * 0.5, height: height * 0.21, resizeMode: 'stretch' }}
                    />
                )}

                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * 0.5}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            >
            </FlatList >

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
