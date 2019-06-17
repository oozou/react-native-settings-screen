import React, { Component } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import { itemStyles, GlobalStyle } from '../SettingsStyles';
import { Avatar, ListItem, Icon } from 'react-native-elements';

export default class SwitchItem extends Component {
    render() {
        const rightText = this.props.item.rightText ? this.props.item.rightText : "";
        const showRightText = rightText.length > 0;
        const isOn = this.props.item.isOn;
        return (
            <ListItem
            leftElement={
                <View style={{borderRadius:10, backgroundColor: 'green'}}>
                <Image
                source={this.props.item.icon}
                style={{width: 29, height: 29, resizeMode: 'cover'}}
                />
                </View>
            }
            title={
                <Text style={itemStyles.title}>{this.props.item.title}</Text>
            }
            rightElement={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {showRightText
                        ? <Text style={itemStyles.disclosureText}>{rightText}</Text>
                        : null
                    }
                <Switch 
                onValueChange={(value) => this.props.item.toggleHandler(value, this.props.item)}
                value={isOn}
                />
                <Icon
                containerStyle={{
                    marginRight: -10,
                }}
                name='chevron-right'
                type='feather'
                color={GlobalStyle.colors.separator} />
                </View>
            }
            />
        )
    }
};
