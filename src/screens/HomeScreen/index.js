import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import MainCategories from '../../components/MainCategories'

const index = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{ backgroundColor: '#f5f5f5' }}>
            <HeaderMain />
            <BannerCarousel />
            <MainCategories />
        </ScrollView>
    )
}

export default index