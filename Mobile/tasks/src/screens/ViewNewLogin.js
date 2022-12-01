import { useContext, useState } from "react";
import LoginScreen from "react-native-login-screen";

import base64 from 'base-64';
import axios from 'axios';
import { ActivityIndicator, Alert } from "react-native";
import { AppContext } from "../contexts/AppContext";

const ViewNewLogin = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const { saveUser } = useContext(AppContext);

    const login = async (email, password) => {
        setLoading(true);
        const token = base64.encode(`${email}:${password}`);
        const headers = { 'Authorization': 'Basic ' + token };

        try {
            const response = await axios.post('http://177.44.248.30:3333/auth', {}, { headers })
            if (response.data) {
                saveUser(email, password);
                setLoading(false);
                navigation.navigate("ViewSkeleton");
            }
        } catch (err) {
            setLoading(false);
            Alert.alert('Falha de login', 'Usuário ou senha incorretos');
        }
    }

    const user = {
        email: '',
        password: ''
    };

    return (
        <>
            {loading ?
                <LoginScreen
                    logoImageSource={require("../../assets/icon.png")}
                    onLoginPress={() => login(user.email, user.password)}
                    onSignupPress={() => { }}
                    onEmailChange={(email) => { user.email = email }}
                    onPasswordChange={(password) => { user.password = password }}
                    disableDivider={true}
                    disableSocialButtons={true}
                    style={{ flex: 1, backgroundColor: '#222', justifyContent: 'center' }}
                    loginButtonStyle={{ backgroundColor: '#6AC66B' }}
                />
                :
                <ActivityIndicator size='large' color='#6AC66B' />
            }
        </>
    )
}

export default ViewNewLogin;