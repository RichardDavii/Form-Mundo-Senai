import * as C from "@chakra-ui/react";

const FormProjeto = () =>{

return(
    <C.VStack spacing={5}>
        <C.Text>Formulário Projeto</C.Text>
    <C.Input type="email" placeholder="Insira o Projeto"/>
    <C.Input type="text" placeholder="Área de atuação"/>
    
    <C.HStack>
    <C.Checkbox>CETCC</C.Checkbox>
    <C.Checkbox>CETAFEST</C.Checkbox>
    <C.Checkbox>CETICC</C.Checkbox>
    <C.Checkbox>CETAFAJU</C.Checkbox>
    </C.HStack>
    
    <C.Input type="text" placeholder="Coordenador/Professor"/>

    </C.VStack>
)

}

export default FormProjeto