import { User } from "./models/User";

const updateDb = async () => {
    await User.sync({force:true});
    await User.create({
        name:"Luciano",
        password:"12345",
        email:"luciano@teste.com"
    });
}

updateDb();