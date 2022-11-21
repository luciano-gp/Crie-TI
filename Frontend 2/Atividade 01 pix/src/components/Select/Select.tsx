import { useEffect, useState } from 'react';
// import styles from './Select.module.css';
import Axios, { AxiosResponse } from 'axios';

export function Select() {

    interface User {
        id: number;
        name: string;
        createdAt: string;
        updatedAt: string;
    }

    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        const getUsers = async () => {
            const res = await Axios.get('http://177.44.248.30/v1/users');
            setUsers(res.data);
        }
        getUsers();
    }, []);

    users?.sort((a:any, b:any) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });

    return (
        <select>
            {users?.map((user) => <option value={user.id}>{user.name}</option>)}
        </select>
    );
}