import React from 'react'
import style from './styles.module.scss'
import Link from 'next/link'
import SvgComponent from '../vectors/SvgComponent'

type IconType = string | "dashboard" | "notification" | "logout" | "support"

type ButtonProps = {
    text: string,
    primary: boolean,
    icon?: IconType,
    handleClick?: () => void,
    href?: string,
}

const Button = ({ text, icon, primary, href, handleClick }: ButtonProps) => {

    return (
        href ? (
            <Link href={href}>
                <span
                    className={`${style.button} ${primary && style.primary}`}
                    onClick={handleClick}
                >
                    {icon && (
                        <span className={style.icon}>
                            <SvgComponent type={icon} />
                        </span>
                    )}
                    {text}
                </span>
            </Link>
        ) : (
            <button
            className={`${style.button} ${primary && style.primary}`}
                onClick={handleClick}
            >
                {icon && (
                    <span className={style.icon}>
                        <SvgComponent type={icon} />
                    </span>
                )}
                {text}
            </button>
        )
    )
}

export default Button