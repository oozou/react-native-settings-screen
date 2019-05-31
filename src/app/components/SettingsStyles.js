import { StyleSheet } from 'react-native';

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
        containerBackground: '#F5F5F7',
        emptySpace: '#EEEFF3',
        separator: '#C7C7CB',
        headerBg: '#F5F5F7',
        labelBg: 'red',
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
    navBar: {
        height: 84,
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GlobalStyle.colors.headerBg,
    },
    headerContainer: {
        height: 60,
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: GlobalStyle.itemMarginLeft,
    },
    header: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
        backgroundColor: GlobalStyle.colors.headerBg
    },
});