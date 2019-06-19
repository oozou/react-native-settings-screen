import React, { Component } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { itemStyles, GlobalStyle } from '../SettingsStyles';
import { Avatar, ListItem, Icon } from 'react-native-elements';

class DisclosureItemAndroid extends Component {
    render() {
        const subtitle = this.props.item.infoText ? this.props.item.infoText : (this.props.item.subtitle ?? "")
        const showSubtitle = subtitle.length > 0;

        return (
            <ListItem
            style={{height: 64}}
            leftElement={
                <View style={itemStyles.icon}>
                <Image
                source={this.props.item.icon}
                style={itemStyles.icon}
                />
                </View>
            }
            title={
                <Text style={[itemStyles.title]}>{this.props.item.title}</Text>
            }
            subtitle={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {showSubtitle
                        ? <Text style={itemStyles.disclosureText}>{subtitle}</Text>
                        : null
                    }
                </View>
            }
            />
        )
    }
};

class DisclosureItemIOS extends Component {
    render() {
        const infoText = this.props.item.infoText ? this.props.item.infoText : "";
        const showInfoText = infoText.length > 0;
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
                    {showInfoText
                        ? <Text style={itemStyles.disclosureText}>{infoText}</Text>
                        : null
                    }
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

export default class DisclosureItem extends Component {
    render() {
        if (Platform.OS === 'ios') {
            return <DisclosureItemIOS item={this.props.item}/>
        } else if (Platform.OS === 'android') {
            return <DisclosureItemAndroid item={this.props.item}/>
        } else {
            return (<Text>not supported platform</Text>)
        }
    }
}