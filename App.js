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
        this.operations = ['C','DEL','+','-','*','/'];
        this.state = {
            resultText: '',
            calculationText: ''
        };
    }

    calculateResult() {
        const text = this.state.resultText;
        this.setState({
            calculationText: eval(text)
        });
    }

    validate() {
        let text = this.state.resultText;
        switch(text.slice(-1)){
            case '+':
            case '-':
            case '*':
            case '/':
                return false;
        }
        return true;
    }

    buttonPressed(text) {
        if(text == '='){
            return this.validate() && this.calculateResult();
        }

        this.setState({
            resultText: this.state.resultText + text
        });
    }

    operate(operation) {
        switch(operation){
            case 'DEL':
                let text = this.state.resultText.split('');
                text.pop();
                this.setState({
                    resultText: text.join('')
                });
                break;
            case 'C':
                this.setState({
                    resultText: '',
                    calculationText: ''
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                let lastChar = this.state.resultText.split('').pop();
                if(this.operations.lastIndexOf(lastChar) > 0) return;

                if(this.state.resultText == '') return;
                this.setState({
                    resultText: this.state.resultText + operation
                });

        }
    }

    render() {
        let rows = [];
        let nums = [[7,8,9],[4,5,6],[1,2,3],['.',0,'=']];

        for (let i = 0; i < 4; i++) {
            let row = [];

            for (let j = 0; j <3; j++) {
                row.push(
                    <TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
                        <Text style={styles.btnText}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                );
            }

            rows.push(
                <View key={i} style={styles.row}>
                    {row}
                </View>
            );
        }

        let ops = [];
        for (let i = 0; i < 6; i++) {
            ops.push(
                <TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])}>
                    <Text style={[styles.btnText, styles.white]}>{this.operations[i]}</Text>
                </TouchableOpacity>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.resultText}</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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
        fontSize: 30,
        color: 'white'
    },
    calculationText: {
        color: 'black',
        fontSize: 40,
    },
    resultText: {
        color: 'black',
        fontSize: 55,
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center'
    },
    result: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row',
    },
    numbers: {
        flex: 3,
        backgroundColor: '#434343'
    },
    operations: {
        flex: 1,
        backgroundColor: '#636363',
        justifyContent: 'space-around'
    },
    white: {
        color: 'white'
    }

});