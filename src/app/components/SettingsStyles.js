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
    label: {
        account: {
            title: {
                color: 'red',
                fontFamily: 'Verdana',
                fontSize: 28,
            },
            subtitle: {
                color: 'red',
                fontFamily: 'Verdana',
                fontSize: 18,
            },
        },
        title: {
            color: 'green',
            fontFamily: 'Verdana',
            fontSize: 22,
        },
        subtitle: {
            color: 'green',
            fontFamily: 'Verdana',
            fontSize: 16,
        },
    },
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
    accountTitle: {
        marginLeft: GlobalStyle.itemMarginLeft,
        color: GlobalStyle.label.account.title.color,
        fontFamily: GlobalStyle.label.account.title.fontFamily,
        fontSize: GlobalStyle.label.account.title.fontSize,
    },
    accountSubtitle: {
        marginLeft: GlobalStyle.itemMarginLeft,
        color: GlobalStyle.label.account.subtitle.color,
        fontFamily: GlobalStyle.label.account.subtitle.fontFamily,
        fontSize: GlobalStyle.label.account.subtitle.fontSize,
    },
    title: {
        marginLeft: GlobalStyle.itemMarginLeft,
        color: GlobalStyle.label.title.color,
        fontFamily: GlobalStyle.label.title.fontFamily,
        fontSize: GlobalStyle.label.title.fontSize,
    },
    subtitle: {
        marginLeft: GlobalStyle.itemMarginLeft,
        color: GlobalStyle.label.subtitle.color,
        fontFamily: GlobalStyle.label.subtitle.fontFamily,
        fontSize: GlobalStyle.label.subtitle.fontSize,
    },
    disclosureText: {
        marginLeft: GlobalStyle.itemMarginLeft,
        color: 'red',
        fontFamily: GlobalStyle.label.subtitle.fontFamily,
        fontSize: 50,
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