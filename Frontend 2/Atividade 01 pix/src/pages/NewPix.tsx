import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { Header } from "../components/Header";
import { toast } from "react-toastify";

import styles from "./NewPix.module.css";

interface User {
  id: number;
  name: string;
}

export function NewPix() {
  const [users, setUsers] = useState<User[]>([]);
  const [senderId, setSenderId] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get<User[]>("http://177.44.248.30/v1/users").then((response) => {
      setUsers(response.data);
    });
  }, [users]);

  async function handleCrateNewComment(e: FormEvent) {
    e.preventDefault();
    try {
      await axios
        .post("http://177.44.248.30/v1/pix", {
          senderId,
          recipientId,
          value,
        })
        .then((response) => {
          setUsers(response.data);
        });

      setSenderId("");
      setRecipientId("");
      setValue("");

      toast.success("Pix enviado com sucesso");
    } catch (error) {
      toast.error("O Pix não pode ser enviado");
    }
  }

  return (
    <div className={styles.newPix}>
      <Header />
      <form onSubmit={handleCrateNewComment}>
        <div className={styles.itemsForm}>
          <label htmlFor="sender" className={styles.label}>
            REMETENTE
          </label>
          <select
            className={styles.input}
            id="sender"
            value={senderId}
            onChange={(e) => setSenderId(e.target.value)}
          >
            <option value="" disabled>
              Selecione o Remetente
            </option>
            {users?.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.itemsForm}>
          <label htmlFor="recipient" className={styles.label}>
            DESTINATÁRIO
          </label>
          <select
            className={styles.input}
            id="recipient"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
          >
            <option value="" disabled>
              Selecione o destinatário
            </option>
            {users?.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.itemsForm}>
          <label htmlFor="value">VALOR</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
