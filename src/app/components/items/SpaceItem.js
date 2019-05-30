import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SpaceItem extends Component {
    render () {
        return (
            <View style={{backgroundColor: 'green'}}>
                <Text>yo! space</Text>
            </View>
        )
    }
};