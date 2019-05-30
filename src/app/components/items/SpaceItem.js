import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GlobalStyle, itemStyles } from '../SettingsStyles';

export default class SpaceItem extends Component {
    render () {
        return (
            <View style={{height: this.props.item.height, backgroundColor: GlobalStyle.colors.emptySpace}}>
            </View>
        )
    }
};