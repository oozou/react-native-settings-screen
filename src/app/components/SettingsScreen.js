import React, { Component } from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { itemStyles, styles, GlobalStyle } from './SettingsStyles';
import { SpaceItem, AccountItem, DisclosureItem, SwitchItem } from './items';
import NavBarTitle, { SeparatorLine } from './NavBarTitle';

class SettingsItemContainer extends Component {

    renderItem(item) {
        switch (item.type) {
            case 'account':
                return <AccountItem style={itemStyles.itemContainer} item={item} />
            case 'switch':
                return <SwitchItem style={itemStyles.itemContainer} item={item} />
            case 'disclosure':  
                return <DisclosureItem style={itemStyles.itemContainer} item={item} />
            case 'space':
                return <SpaceItem style={itemStyles.itemContainer} item={item}/>
            case 'separator':
                return <SeparatorLine item={item} />
            case 'separator-interitem':
                return <SeparatorLine margin={50} />
            default:
                return <Text>Unexpected item type</Text>
        }
    }

    render()  {
        return (
            <View>
                {this.renderItem(this.props.item)}
            </View>
        );
    }
};

export default class SettingsScreen extends Component {

    constructor(props) {
        super(props)
        this.toggleAirplaneMode = this.toggleAirplaneMode.bind(this);
        this.state = {
            items: [
                [
                    {type: 'account', height: 80, title: 'Stanislau Baranouski', subtitle: 'Apple ID, iCloud, iTunes & App Store', avatarUrl: 'https://i.ibb.co/SwdrRjG/Screen-Shot-2019-05-30-at-16-59-01.png'},
                ],
                [
                    {type: 'switch', title:'Airplane Mode', isOn:false, toggleHandler:(this.toggleAirplaneMode), icon: require('../assets/icons/icon-airplane-mode.svg')},
                    {type: 'disclosure', title:'Wi-Fi', subtitle: 'Wi-Fi, mobile, data usage', infoText: 'Oozou', icon: require('../assets/icons/icon-wifi.svg')},
                    {type: 'disclosure', title:'Bluetooth', subtitle: 'Bluethooth, driving mode, NFC', infoText: 'On', icon: require('../assets/icons/icon-bluetooth.png')},
                    {type: 'disclosure', title: 'Mobile Data', subtitle: 'mobile, data usage', icon: require('../assets/icons/icon-mobiledata.svg')},
                    {type: 'disclosure', title: 'Personal Hotspot', infoText: 'Off', icon: require('../assets/icons/icon-hotspot.svg')},
                    {type: 'disclosure', title: 'VPN', infoText: 'Not Connected', icon: require('../assets/icons/icon-vpn.svg')},
                ],
                [
                    {type: 'disclosure', title: 'Notifications', subtitle: 'Permissions, default apps', icon: require('../assets/icons/icon-notifications.svg')},
                    {type: 'disclosure', title: 'Control Center', icon: require('../assets/icons/icon-control-center.svg')},
                    {type: 'disclosure', title: 'Do Not Disturb', icon: require('../assets/icons/icon-dnd.svg')},
                ],
            ],
        };
    }

    toggleAirplaneMode = (isOn, item) => {
        const newItems = [...this.state.items];
        item.isOn = isOn;
        newItems[item] = item;
        this.setState({items: newItems});
    };

    render() {
        const processedItems = this.processItems(this.state.items)
        return (
            <View style={styles.container}>
                <NavBarTitle />
                <FlatList
                data={processedItems}
                showsVerticalScrollIndicator={true}
                renderItem={(item) => this.renderItem(item.item)}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    renderItem = (item) => {
        return (
            <View style={{backgroundColor: GlobalStyle.colors.white}}>
            <SettingsItemContainer item={item}/>
            </View>
        )
    }

    processItems(items) {
        if (Platform.OS === 'ios') {
            return this.processItems_iOS(items)
        } else if (Platform.OS === 'android') {
            return this.processItems_android(items)
        } else {
            return []
        }
        
    }

    processItems_android(items) {
        const processedItems = []
        for (let i=0; i<items.length; i++) {
            let group = items[i];
            for (let j=0; j<group.length; j++) {
                let item = group[j];
                processedItems.push(item)
            }
        }
        return processedItems
    }

    processItems_iOS(items) {
        // intention of this func: to flatten 2d input array and inject spaces and separator lines between items

        const processedItems = []
        for (let i=0; i<items.length; i++) {
            // add space 35 points above each group of items
            processedItems.push({type: 'space', height: 35})

            // add separator at the beginning of the group
            processedItems.push({type: 'separator'})

            let group = items[i];
            for (let j=0; j<group.length; j++) {
                let item = group[j];
                processedItems.push(item)

                // add separator with padding for the icon withing sgroup items
                if (j < group.length-1) {
                    processedItems.push({type: 'separator-interitem'})
                }
            }

            // add separator at the end of the group
            processedItems.push({type: 'separator'})
        }

        // add space 35 points in the end of the list
        processedItems.push({type: 'space', height: 35})

        return processedItems
    }
};