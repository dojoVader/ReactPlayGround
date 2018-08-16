'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image
} from 'react-native'


export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        //Declare the state for the application
    }

    static navigationOptions = {
        title: 'Property Finder'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}> Search for houses to buy! (Again)</Text>
                <Text style={styles.description}>
                    Search by place-name or postcode.
        </Text>
            </View>


        );
    }




}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65,
    }
});