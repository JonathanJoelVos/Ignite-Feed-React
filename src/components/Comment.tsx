import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCount() {
        setLikeCount(likeCount + 1)
    }

    return (
        <section className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/106450890?v=4"
                alt=""
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonathan Vós</strong>
                            <time title='08 de agosto 14:30' dateTime="2022-08-08 14:43:00">
                                Cerca de 2h
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp className={styles.commentLike} onClick={handleLikeCount} />Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </section>
    )
}