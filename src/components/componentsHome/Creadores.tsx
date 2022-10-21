import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

function Creadores() {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/Modelo.jpg')}
                    />
                    <View style={styles.textos}>
                        <Text style={styles.txt}>
                            Niki
                        </Text>
                        <Text style={styles.txt}>
                            Samantha
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/Alisha.webp')}
                    />
                    <View style={styles.textos}>
                        <Text style={styles.txt}>
                            Alisha
                        </Text>
                        <Text style={styles.txt}>
                            Lehmann
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/Hazell.jpg')}
                    />
                    <View style={styles.textos}>
                        <Text style={styles.txt}>
                            Hazell
                        </Text>
                        <Text style={styles.txt}>
                            Benny
                        </Text>
                    </View>

                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={require('../../Img/Pedro.jpg')}
                    />
                    <View style={styles.textos}>
                        <Text style={styles.txt}>
                            Pedro
                        </Text>
                        <Text style={styles.txt}>
                            Capo
                        </Text>
                    </View>

                </View>
            </View>

        </ScrollView>
    )
}

export default Creadores

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        left: 10,
        marginTop: 20,

    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 50,
        margin: 15
    },
    txt: {

    },
    textos: {
        alignItems: 'center'
    }

})