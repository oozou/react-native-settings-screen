import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { itemStyles, GlobalStyle } from '../SettingsStyles';
import { Avatar, ListItem, Icon } from 'react-native-elements';

export default class DisclosureItem extends Component {
    render() {
        return (
            <ListItem
            leftElement={
                <View style={{borderRadius:10, backgroundColor: 'green'}}>
                <Image
                source={require('../../assets/icons/icon_airplane_mode.svg')}
                style={{width: 29, height: 29, resizeMode: 'cover'}}
                />
                </View>
            }
            title={
                <Text style={itemStyles.title}>{this.props.item.title}</Text>
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
        )
    }
};
