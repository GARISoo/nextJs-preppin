import React from 'react'
import style from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type ButtonProps = {
    text: string,
    primary: boolean
    icon?: any,
    handleClick?: () => void
    href?: string,
}

const Button = ({ text, icon, primary, href, handleClick }: ButtonProps) => {

    return (
        href ? (
            <Link href={href}>
                <span
                    className={primary ? style.primary : style.secondary}
                    onClick={handleClick}
                >
                    {icon && (
                        <span className={style.icon}>{icon}</span>
                    )}
                    {text}
                </span>
            </Link>
        ) : (
            <button
                className={primary ? style.primary : style.secondary}
                onClick={handleClick}
            >
                {icon && (
                    <span className={style.icon}>{icon}</span>
                )}
                {text}
            </button>
        )
    )
}

export default Button