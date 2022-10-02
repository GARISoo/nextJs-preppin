import React from 'react'
import style from './styles.module.scss'
import Link from 'next/link'
import { faPuzzlePiece, faHeadset, faBell, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ButtonProps = {
    text: string,
    active: boolean,
    icon?: string,
    href?: string,
    handleClick?: () => void,
}

const Button = ({ text, icon, active, href, handleClick }: ButtonProps) => {
    const determineIcon = (el: string) => {
        switch (el) {
            case "dashboard":
                return faPuzzlePiece
            case "notification":
                return faBell
            case "support":
                return faHeadset
            case "logout":
                return faDoorOpen
            default:
                return faDoorOpen
        }
    }

    return (
        href ? (
            <Link href={href}>
                <span
                    className={`${style.button} ${active && style.active}`}
                    onClick={handleClick}
                >
                    {icon && (
                        <span className={style.icon}>
                            <FontAwesomeIcon icon={determineIcon(icon)} />
                        </span>
                    )}
                    {text}
                </span>
            </Link>
        ) : (
            <button
                className={`${style.button}`}
                onClick={handleClick}
            >
                {icon && (
                    <span className={style.icon}>
                        <FontAwesomeIcon icon={determineIcon(icon)} />
                    </span>
                )}
                {text}
            </button>
        )
    )
}

export default Button