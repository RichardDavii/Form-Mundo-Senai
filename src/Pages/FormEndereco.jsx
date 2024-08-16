import * as C from "@chakra-ui/react";

const FormEndereco = () =>{
    







return(
    <C.VStack spacing={5}>
    <C.Text>Formulário Endereço</C.Text>
    <C.Input type="text" placeholder="Insira o CEP"/>
    <C.Input type="text" placeholder="Insira o Bairro"  
    />

    

    <C.Select placeholder="Insira a UF">  
    <option value="">SE</option>

    </C.Select>
    

    </C.VStack>
)

}

export default FormEndereco