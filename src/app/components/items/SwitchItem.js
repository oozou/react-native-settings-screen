import React, { Component } from 'react';
import { View, Text, Image, Switch, Platform } from 'react-native';
import { itemStyles, GlobalStyle } from '../SettingsStyles';
import { Avatar, ListItem, Icon } from 'react-native-elements';

class SwitchItemIOS extends Component {
    render() {
        const infoText = this.props.item.infoText ? this.props.item.infoText : "";
        const showInfoText = infoText.length > 0;
        const isOn = this.props.item.isOn;
        return (
            <ListItem
            style={{height: 64}}
            leftElement={
                <View style={{borderRadius:10, backgroundColor: GlobalStyle.colors.separator}}>
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
                    {showInfoText
                        ? <Text style={itemStyles.disclosureText}>{infoText}</Text>
                        : null
                    }
                <Switch 
                onValueChange={(value) => this.props.item.toggleHandler(value, this.props.item)}
                value={isOn}
                />
                </View>
            }
            />
        )
    }
};

class SwitchItemAndroid extends Component {
    render() {
        const infoText = this.props.item.infoText ? this.props.item.infoText : "";
        const showInfoText = infoText.length > 0;
        const isOn = this.props.item.isOn;
        return (
            <ListItem
            leftElement={
                <View style={itemStyles.icon}>
                <Image
                source={this.props.item.icon}
                style={itemStyles.icon}
                />
                </View>
            }
            title={
                <Text style={itemStyles.title}>{this.props.item.title}</Text>
            }
            rightElement={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {showInfoText
                        ? <Text style={itemStyles.disclosureText}>{infoText}</Text>
                        : null
                    }
                <Switch 
                onValueChange={(value) => this.props.item.toggleHandler(value, this.props.item)}
                value={isOn}
                />
                </View>
            }
            />
        )
    }
};

export default class SwitchItem extends Component {
    render() {
        if (Platform.OS === 'ios') {
            return <SwitchItemIOS item={this.props.item}/>
        } else if (Platform.OS === 'android') {
            return <SwitchItemAndroid item={this.props.item}/>
        } else {
            return (<Text>not supported platform</Text>)
        }
    }
}