import React from 'react';
import { useState } from 'react';
import { Button, View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';

export default function screen2(){

    var [content,setcontent]=useState(false);

    const componentHideAndShow = () => {
        setcontent(!content);
      }

    return(
        <SafeAreaView style={styles.container}>
            <Button onPress={componentHideAndShow} title="Two Sum"/>
            {
                content?<Image style={{width:300,height:300}} source={require('./assets/DubaiMarina.jpg')}/>:null
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems:'center',
        justifyContent: 'flex-start',
      }
}
)