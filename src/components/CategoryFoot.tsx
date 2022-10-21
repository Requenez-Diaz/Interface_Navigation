import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export const CategoryImage = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.breackfast}>
                <View style={styles.container2}>
                    <View style={styles.circle}>
                        <Image style={styles.breack} source={require('../Img/file.jpg')} />
                    </View>
                    <View style={styles.txt2}>
                        <Text style={styles.txt}>Pepper aweetcorn</Text>
                        <Text style={styles.txt}>ramen</Text>
                    </View>

                </View>
            </View>
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    breackfast: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 20,
        marginLeft: 10,

    },
    container2: {
        margin: 20,
        backgroundColor: 'gray',
        width: 160,
        height: 180,
        borderRadius: 15,
    },
    breack: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    circle: {
        backgroundColor: '#F1F1F1',
        width: 100,
        height: 100,
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute',
        left: 30,
        top: -50,
        marginTop: 10
    },
    txt2: {
        alignItems: 'center',
        position:'absolute',
        left: 25,
        top: 60
    },
    txt: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})