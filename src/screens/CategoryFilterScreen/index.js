import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryFiltering from '../../components/CategoryFiltering'
import DATA from '../../../data/categories.json'
import TypeFiltering from '../../components/TypeFiltering'
import ProductsContainer from '../../components/ProductsContainer'

const index = (props) => {
    const [category, setCategory] = useState(props.route.params);
    return (
        <ScrollView>
            <CategoryFiltering category={category} />
            <TypeFiltering />
            <ProductsContainer />
        </ScrollView>
    )
}

export default index
