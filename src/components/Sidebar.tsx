import styles from './Sidebar.module.css'
import { Pencil } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1614312385003-dcea7b8b6ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt=""
            />
            <div className={styles.profile}>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/106450890?v=4"
                />
                <strong>Jonathan Vós</strong>
                <span>Front-End Dev</span>
            </div>
            <footer>
                <a href="#">
                    <Pencil size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}