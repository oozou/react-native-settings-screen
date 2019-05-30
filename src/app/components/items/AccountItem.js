import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActiivityIndicator } from 'react-native';
import { itemStyles, GlobalStyle } from '../SettingsStyles';
import { Avatar, ListItem, Icon } from 'react-native-elements';

export default class AccountItem extends Component {
    render() {
        return (
            <ListItem
            title={
                <Text style={itemStyles.accountTitle}>{this.props.item.title}</Text>
            }
            subtitle={
                <Text style={itemStyles.accountSubtitle}>{this.props.item.subtitle}</Text>
            }
            leftElement={
                <Avatar
                    size={60}
                    source={{ uri: this.props.item.avatarUrl}}
                    onPress={()=> console.log('Works!')}
                    rounded
                />
            }
            rightElement={
                <Icon
                containerStyle={{
                    marginRight: -10,
                }}
                name='chevron-right'
                type='feather'
                color={GlobalStyle.colors.separator} />
            }
            />
        );
    }
}
