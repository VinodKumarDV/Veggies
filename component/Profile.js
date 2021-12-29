import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { Button, View } from 'react-native-web'

export class profile extends Component {
    render() {
        return (
            <View style={style.container}>
                <View>
                    <Text>Your Prediction is Under</Text>
                    <Text>enter tickets</Text>
                </View>
                <ScrollView Vertical showsVerticalScrollIndicator='falsh' style={{width= '100%', height= 50}}>
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6</Text>
                    <Text>7</Text>
                    <Text>8</Text>
                    <Text>9</Text>
                    <Text>10</Text>
                    <Text>11</Text>
                    <Text>12</Text>
                    <Text>13</Text>
                    <Text>14</Text>
                    <Text>15</Text>
                    <Text>16</Text>
                </ScrollView>
                <View>
                    <Text>Yow can win</Text>
                    <Text>$2000</Text>
                </View> 
                <View>
                    <Text>Total $5</Text>
                </View>
                <View>
                    <Button>Submit my Predections</Button>
                </View>
            </View>
        )
    }
}

export default profile

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: '98%'
    }
});
