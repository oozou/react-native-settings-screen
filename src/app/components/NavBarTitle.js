import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles, GlobalVars, GlobalStyle } from './SettingsStyles';

export class SeparatorLine extends Component {
    render() {
        const isIcon = this.props.isIcon ? this.props.isIcon : false;
        const margin = isIcon ? 50 : 0;
        return (
            <View
            style={{borderBottomColor: GlobalStyle.colors.separator,
                    borderBottomWidth: 1,
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
