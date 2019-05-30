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
            // <ListItem
            // leftAvatar={{ source: { uri: this.props.item.avatarUrl } }}
            // title={this.props.item.title}
            // subtitle={this.props.item.subtitle}
            // />
            // <View style={{backgroundColor: 'red'}}>
            //     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, width: 100, height: 100, backgroundColor: 'green'}}>
            //         <View style={{width: 80, height: 80, backgroundColor: 'red'}}>
                        // <Avatar
                        //     source={{ uri: this.props.item.avatarUrl}}
                        //     onPress={()=> console.log('Works!')}
                        //     avatarStyle={{alignSelf: 'stretch'}}
                        //     rounded
                        // />
            //         </View>
            //     </View>
            // </View>
            // <View styles={styles.container}>
            //     <View>
                // {/* <Avatar
                //  source={{ uri: this.props.item.avatarUrl}}
                //  onPress={()=> console.log('Works!')}
                //  rounded
                // /> */}
            //    {/* <Text style={itemStyles.accountTitle}>{this.props.item.title}</Text>
            //    <Text style={itemStyles.accountSubtitle}>{this.props.item.subtitle}</Text> */}
            //    </View>
            // </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'column',
        backgroundColor: 'yellow',
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    },
});
