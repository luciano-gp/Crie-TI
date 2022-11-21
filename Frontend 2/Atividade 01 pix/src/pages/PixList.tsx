import axios from "axios";
import styles from "./PixList.module.css";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";

export interface Pix {
  id: number;
  value: number;
  createdAt: string;
  recipient: {
    name: string;
  };
  sender: {
    name: string;
  };
  type?: number;
}

export function PixList() {
  const [pixList, setPixList] = useState<Pix[]>([]);

  useEffect(() => {
    axios.get<Pix[]>("http://177.44.248.30/v1/pix").then((response) => {
      setPixList(response.data);
    });
  }, []);

  return (
    <div>
      <Header showButton />
      <Sidebar />
      <main className={styles.content}>
        {pixList.map((pix) => {
          return (
            <Card
              id={pix.id}
              value={pix.value}
              createdAt={pix.createdAt}
              recipient={pix.recipient}
              sender={pix.sender}
              type={pix.type}
            />
          );
        })}
      </main>
    </div>
  );
}
