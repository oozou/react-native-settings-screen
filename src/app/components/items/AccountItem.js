import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { itemStyles } from '../SettingsStyles';

export default class AccountItem extends Component {
    render() {
        return (
            <View>
                <Text style={itemStyles.accountTitle}>{this.props.item.title}</Text>
                <Text style={itemStyles.accountSubtitle}>{this.props.item.subtitle}</Text>
            </View>
        )
    }
}
