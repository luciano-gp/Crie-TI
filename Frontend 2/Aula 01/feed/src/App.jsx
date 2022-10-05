import './global.css';
import styles from './App.module.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Post } from './components/post';
import { Comment } from './components/comment';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        {/* <Post hello='Boa tarde pessoal!' msg='Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀' link='https://github.com/luciano-gp/' tags='#novoprojeto #git #frontend'/> */}
        <Post hello='Boa tarde pessoal!' msg='Acabei de publicar novos projetos no meu figma, corre aqui pra ver 🚀' link='https://figma.com' tags='#novoprojeto #figma #ux/ui'/>
      </div>
    </div>
  );
}

export default App