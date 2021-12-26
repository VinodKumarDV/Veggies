import React, { Component} from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

export class Input extends Component {
    constructor() {
        super(props);
        this.state = {
            title: " ",
            price: " ",
            description: " ",
        }
    }
    Submit() {
        console.log(this.state)
    }

    render() {
        return (
            < View style = { styles.container } >
                <TextInput 
                    placeholder="  enter title"
                    onChange={(text) => { this.setState({ title: text }) }}
                    style={{ borderWidth: 3, borderColor: 'black', marginStart: 11, width: 340, height: 50, marginBottom: 5, borderRadius: 5 }}
                />
                <TextInput 
                    placeholder="  enter price"
                    onChange={(text) => { this.setState({ price: text }) }}
                    style={{ borderWidth: 3, borderColor: 'black', marginStart: 11, width: 340, height: 50, marginBottom: 5, borderRadius: 5 }}
                />
                <TextInput 
                    placeholder="  enter description"
                    onChange={(text) => { this.setState({ description: text }) }}
                    style={{ borderWidth: 3, borderColor: 'black', marginStart: 11, width: 340, height: 50, marginBottom: 5, borderRadius: 5, alignItems: 'center'}}
                />
                <Button title='submit' onPress={() => { this.Submit() }}
                    
                />
            </View>
            
        )
    }
}

export default Input

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})