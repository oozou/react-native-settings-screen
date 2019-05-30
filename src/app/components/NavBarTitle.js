import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles, GlobalVars } from './SettingsStyles';

export default class NavBarTitle extends Component {
    render() {
        return (
            <View style={styles.navBar}>
                <View style={styles.leftContainer}>
                    <Text style={styles.header}>{GlobalVars.text.header}</Text>
                </View>
            </View>
        )
    }
};
