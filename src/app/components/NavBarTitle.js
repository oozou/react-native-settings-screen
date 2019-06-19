import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { styles, GlobalVars, GlobalStyle } from './SettingsStyles';

export class SeparatorLine extends Component {
    render() {
        return (
            <View
            style={{borderBottomColor: GlobalStyle.colors.separator,
                    borderBottomWidth: 0.5,
                    marginLeft: this.props.margin ?? 0,
                    alignSelf: 'stretch'}}
            />
        )
    }
};

export default class NavBarTitle extends Component {
    render() {
        const separator = Platform.OS === 'ios' ? <SeparatorLine /> : null;
        return (
            <View>
                <Text style={[styles.header]}>{GlobalVars.text.header}</Text>
                {separator}
            </View>
        )
    }
};
