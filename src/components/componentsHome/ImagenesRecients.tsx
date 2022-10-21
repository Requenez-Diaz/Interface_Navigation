import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'


function ImagenesRecients() {
    return (
        <ScrollView horizontal= {true}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/Foot.jpeg')}
                    />
                    <Text style={styles.txt}>Indonecian</Text>
                    <Text style={styles.txt}>Chicken bureguer</Text>
                    <Text style={styles.txt2}>By adriana Cury</Text>
                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/second.jpeg')}
                    />
                    <Text style={styles.txt}>Home</Text>
                    <Text style={styles.txt}>Cute Pankake</Text>
                    <Text style={styles.txt2}>By adriana Cury</Text>
                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/Foot.jpeg')}
                    />
                    <Text style={styles.txt}>Indoncian</Text>
                    <Text style={styles.txt}>Chicken bureguer</Text>
                    <Text style={styles.txt2}>By adriana Cury</Text>
                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/Foot.jpeg')}
                    />
                    <Text style={styles.txt}>Indoncian</Text>
                    <Text style={styles.txt}>Chicken bureguer</Text>
                    <Text style={styles.txt2}>By adriana Cury</Text>
                </View>
            </View>

        </ScrollView>

    )
}

export default ImagenesRecients;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'

    },
    img: {
        width: 140,
        height: 170,
        borderRadius: 8,
        margin: 15,
    },
    txt: {
        marginLeft: 15,
        fontWeight: 'bold'
    },
    txt2: {
        color: 'gray',
        marginLeft: 15

    }

})
