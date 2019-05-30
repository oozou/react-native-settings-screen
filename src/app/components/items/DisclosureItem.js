import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { itemStyles } from '../SettingsStyles';

export default class DisclosureItem extends Component {
    render() {
        return (
            <View>
                <Text style={itemStyles.title}>{this.props.item.title}</Text>
            </View>
        )
    }
};
