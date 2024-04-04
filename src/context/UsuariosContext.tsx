import React,{createContext} from "react";
import DadosUsuarios from "../dados/DadosUsuarios";

const UsuariosContext = createContext({})

export const UsuariosProvider = props=>{
    return(
        <UsuariosContext.Provider value={{
            state:{
                DadosUsuarios
            }
        }}>
            {props.children}
        </UsuariosContext.Provider>
    )
}

export default UsuariosContext