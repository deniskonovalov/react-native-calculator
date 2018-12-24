/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class App extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        let rows = [];
        let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];

        for (let i = 0; i < 4; i++) {
            let row = [];

            for (let j = 0; j <3; j++) {
                row.push(
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                );
            }

            rows.push(
                <View style={styles.row}>
                    {row}
                </View>
            );
        }

        let operations = ['+','-','*','/'];
        let ops = [];

        for (let i = 0; i < 4; i++) {
            ops.push(
                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
                </TouchableOpacity>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>11*11</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>121</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        {ops}
                    </View>
                </View>
            </View>
        );
    }
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'stretch'
    },
    btnText: {
        fontSize: 30
    },
    calculationText: {
        color: 'white',
        fontSize: 24,
    },
    resultText: {
        color: 'white',
        fontSize: 30,
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center'
    },
    result: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row',
    },
    numbers: {
        flex: 3,
        backgroundColor: 'yellow'
    },
    operations: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-around'
    },
    white: {
        color: 'white'
    }

});