import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class QuantitySelector extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            quantity: this.props.value,
            minQuantity: this.props.minQuantity,
            maxQuantity: this.props.maxQuantity
        }

        if (this.props.onChange) {
            this.props.onChange(this.state.quantity)
        }
    }
    increaseQty() {
        if (this.state.quantity < this.state.maxQuantity) {
            this.setState({
                quantity: this.state.quantity + 1
            }, this.props.onChange(this.state.quantity + 1));

        }
    }
    decreaseQty() {
        if (this.state.quantity > this.state.minQuantity && this.state.quantity > 0) {
            this.setState({
                quantity: this.state.quantity - 1
            }, this.props.onChange(this.state.quantity - 1));

        }
    }


    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity onPress={() => this.decreaseQty()}>
                    <Icon.Button
                        size={30}
                        backgroundColor='transparent'
                        color='#ff574d'
                        underlayColor='transparent'
                        style={styles.actionButton}
                        iconStyle={styles.icon}
                        name='remove-circle-outline' />
                </TouchableOpacity>
                <TextInput
                    underlineColorAndroid={this.props.baseColor}
                    keyboardType='numeric'
                    onChangeText={this._onUpdateQuantity}
                    style={[styles.quantityInput, { color: this.props.baseColor }]}
                    editable={false}
                    value={this.state.quantity.toString()} />
                <TouchableOpacity onPress={() => this.increaseQty()}>
                    <Icon.Button
                        size={30}
                        color='#ff574d'
                        backgroundColor='transparent'
                        underlayColor='transparent'
                        style={styles.actionButton}
                        iconStyle={styles.icon}
                        name='add-circle-outline' />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
        padding: 0,
        marginTop: 50,
        marginBottom: 50
    },
    actionButton: {
    },
    icon: {
        marginRight: 0,
        alignSelf: 'center'
    },
    quantityInput: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        height: 45
    }
})