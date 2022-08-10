import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: {
        avatar_url: string;
        name: string;
        role: string;
    };
    publishAt: Date;
    content: Content[];
}

export function Post({ author, publishAt, content }: PostProps) {

    const [comments, setComments] = useState([])

    const [newCommentText, setNewCommentText] = useState('')

    const publishDateFormatted = format(publishAt, "d 'de' LLL 'as' HH:mm'h'", {
        locale: ptBr,
    })

    const isNewCommentInEmpy = (newCommentText.length == 0)

    const publishDateRelativeNow = formatDistanceToNow(publishAt, {
        locale: ptBr,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório")
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
        event.target.setCustomValidity("")
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comments => {
            return comments != commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatar_url}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishDateFormatted}
                    dateTime={publishAt.toISOString()}
                >Publicado há {publishDateRelativeNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(content => {
                    if (content.type === 'paragraph') {
                        return <p key={content.content}>{content.content}</p>
                    } else if (content.type === 'link') {
                        return <p key={content.content}><a href='#'>{content.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment}
                className={styles.feedback}>
                <label>
                    Deixe seu feedback
                </label>
                <textarea
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder='Digite aqui'
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentInEmpy}>
                        Publicar
                    </button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                })}
            </div>
        </article>
    )
}

