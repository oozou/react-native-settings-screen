import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles, GlobalVars, GlobalStyle } from './SettingsStyles';

export class SeparatorLine extends Component {
    render() {
        var margin = 0;
        if (this.props.item) {
            if (this.props.item.isIcon) {
                margin = 50;
            }
        }
        return (
            <View
            style={{borderBottomColor: GlobalStyle.colors.separator,
                    borderBottomWidth: 0.5,
                    marginLeft: margin,
                    alignSelf: 'stretch'}}
            />
        )
    }
};

export default class NavBarTitle extends Component {
    render() {
        return (
            <View>
                <View style={styles.navBar}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.header}>{GlobalVars.text.header}</Text>
                    </View>
                </View>
                <SeparatorLine />
            </View>
        )
    }
};
