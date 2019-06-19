import { StyleSheet, Platform } from 'react-native';

export const GlobalVars = {
    text: {
        header: 'Settings',
    },
};

export const GlobalStyle = {
    header: {
        offsetTop: 50,
    },
    itemMarginLeft: 15,
    colors: {
        white: 'white',
        containerBackground: '#F5F5F7',
        emptySpace: '#EEEFF3',
        separator: '#C7C7CB',
        headerBg: '#F5F5F7',
        title: '#010000',
        subtitle: '#010000',
        disclosureText: '#8E8E92'
    }
};

export const itemStyles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        paddingTop: 10,
        height: 46,
        alignItems: 'flex-start',
    },
    account: {
        height: 80,
    },
    accountTitle: {
        marginTop: -6,
        marginLeft: 0,
        color: 'black',
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 22,
    },
    accountSubtitle: {
        marginTop: 5,
        marginLeft: 0,
        color: 'black',
        fontFamily: 'SFProText-Regular',
        fontSize: 13,
    },
    title: {
        marginLeft: 0,
        color: 'black',
        fontFamily: 'SFProText-Regular',
        fontSize: 17,
    },
    subtitle: {
        marginLeft: GlobalStyle.itemMarginLeft,
        color: 'green',
        fontFamily: 'Verdana',
        fontSize: 16,
    },
    disclosureText: {
        marginLeft: 0,
        color: 'rgba(0, 0, 0, 0.4)',
        fontFamily: 'SFProText-Regular',
        fontSize: 17,
    },
    icon: {
        borderRadius: 16,
        width: 32,
        height: 32,
        resizeMode: 'cover'
    },
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: GlobalStyle.colors.containerBackground,
    },
    headerContainer: {
        height: 60,
        alignItems: 'center',
    },
    header: {
        marginTop: Platform.OS === 'ios' ? 54 : 15,
        marginLeft: 15,
        marginBottom: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
        backgroundColor: GlobalStyle.colors.headerBg
    },
});