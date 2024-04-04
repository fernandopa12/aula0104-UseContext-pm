import {Text} from "@rneui/base";
import { useState } from "react";
import {Button, TextInput, View} from 'react-native'


export default props=>{
    //[console.warn(Object.keys(props.route.params))

    const[user,setUser]=useState(props.route.params?props.route.params:{})
    return(
        <View>
            <Text>Nome</Text>
            <TextInput
                value={user.nome}
            />
            <Text>EMAIL</Text>
            <TextInput 
                placeholder="DIGITE SEU EMAIL"
                value={user.email}
            />
            <Button title="SALVAR" onPress={()=>props.navigation.goBack()}/>
        </View>
    )
}
