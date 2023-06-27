import { type NextPage } from "next";
import { 
    Button, 
    Container, 
    FormControl, 
    FormLabel, 
    Heading, 
    Input,
    Card,
    ButtonGroup
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import { env } from "~/env.mjs";

const Login: NextPage = () => {
    const { register, getValues } = useForm()
    useEffect(() => {
        console.log('RENDER');
        
    })
    
    return (
        <Container marginTop={10}>
            <Heading textAlign="center">Iniciar sesión</Heading>
            <Card padding={3} textAlign={'center'}>
                <form>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type='text' 
                            placeholder="Ingresa tu email"
                            {...register("email")}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Código</FormLabel>
                        <Input 
                            type='text' 
                            placeholder="Ingresa tu código"
                            {...register("code")}
                        />
                    </FormControl>
                    <ButtonGroup marginTop={8} justifyContent={"center"}>
                        <Button>Iniciar sesión</Button> 
                        <Button
                            onClick={() => {
                                const email = getValues("email")
                                
                                axios
                                    .post(`${env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login/${email}/code`)
                                    .then(console.log)
                                    .catch(console.log)
                            }}
                        >Quiero un código</Button>
                    </ButtonGroup>
                </form>
            </Card>
        </Container>
    )
}

export default Login