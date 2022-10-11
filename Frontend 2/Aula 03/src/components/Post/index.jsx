import styles from "./index.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from "react";

//Arrumar post para receber propriedades
export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState(["Que legal"]);
  const [newComment, setNewComment] = useState('');

  const publishDateFormatted = format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  });

  const publishDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt), {
      locale: ptBr,
      addSuffix: true
    }
  );

  const handleCreateNewComment = (e) => {
    e.preventDefault();
    setComments([...comments, e.target.comment.value]);
    setNewComment('');
  }

  const handleNewCommentChange = () => {
    setNewComment(event.target.value)
  }

  const deleteComment = (commentDelete) => {
    const newCommentsList = comments.filter((comment) => comment != commentDelete);
    setComments(newCommentsList);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar hasBorder={true} src={author.avatarUrl}/>
          <div className={styles.description}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={publishDateFormatted}>
          Publicado {publishDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          switch (line.type) {
            case 'paragraph': return <p>{line.content}</p>
            case 'link': return <p><a className={styles.link} href={line.content} target="_blank">{line.content}</a></p>
            default: return ''
          }
        })}
        <p>
          <a className={styles.tag} href="">#novoprojeto</a> <a className={styles.tag} href="">#git</a>{" "}
          <a className={styles.tag} href="">#frontend</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea value={newComment} onChange={handleNewCommentChange} placeholder="Deixe um comentário" name="comment"/>

        <button type="submit">Publicar</button>
      </form>

      <div className={styles.comments}>
        {comments.map((comment) => <Comment comment={comment} deleteComment={deleteComment}/>)}
      </div>
    </article>
  );
}
