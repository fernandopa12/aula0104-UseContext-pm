import { Avatar, Button, Icon, ListItem, Text } from "react-native-elements";
import { Alert, FlatList } from "react-native";
import DadosUsuarios from "../dados/DadosUsuarios";

export default props=>{
    
    function getUsuarios({item}){
        return(
            <ListItem onPress={()=>props.navigation.navigate("TelaForm",item)}>
                <Avatar 
                    source={{uri:item.fotoPerfil}}
                    rounded
                    size={50}
                />
                <ListItem.Content>
                    <ListItem.Title>{item.nome}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>

                <ListItem.Content right style={{flexDirection:'row'}}>
                    <Button 
                    icon={<Icon name='edit' color='orange' size={30}/>}
                    type="clear"
                    onPress={()=>props.navigation.navigate('TelaForm',item)}
                    />

                    <Button 
                    icon={<Icon name='delete' color='red' size={30}/>}
                    type="clear"
                    onPress={()=>Alert.alert('EXCLUSÃO DE REGISTRO',"DESEJA EXCLUIR?",[
                        {
                            text:'SIM',
                            onPress(){alert("USUARIO:"+item.id+" DELETADO")}
                        },
                        {
                            text:'NÃO'
                        }
                    ])}
                    />
                </ListItem.Content>
            </ListItem>
        )
    }
    return(
        <FlatList
            data={DadosUsuarios}
            renderItem={getUsuarios}
        />
    )
}