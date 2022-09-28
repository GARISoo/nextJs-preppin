import React from 'react';
import style from './styles.module.scss'
import Image from 'next/image'
import Button from '../Button/Button';

type DashboardProps = {
  children: JSX.Element | string
}

const buttons = [
  {
    text: 'Dashboard',
    icon: 'dashboard',
    primary: true,
    href: '/'
  },
  {
    text: 'Support',
    icon: 'support',
    primary: true,
    href: '/support'
  },
  {
    text: 'Notification',
    icon: 'notification',
    primary: true,
    href: '/notifications'
  },
  {
    text: 'Log out',
    icon: 'logout',
    primary: true,
    href: '/logout'
  },
]

const Dashboard = ({ children }: DashboardProps) => {
  console.log('dashboard rendered')

  return (
    <div className={style.dashboard}>
      <div className={style.sidebar}>
        <h1 className={style.heading}>Quiz time</h1>
        <nav className={style.nav}>
          {buttons.map(({ text, icon, primary, href }) => (
              <Button key={text} text={text} icon={icon} primary={primary} href={href}/>
          ))}
        </nav>
      </div>
      <div className={style.content}>
        <div className={style.contentHeader}>
          <div className={style.search}>
            <input
              type="text"
              placeholder="Search.."
              className={style.searchInput}
            />
            <span className={style.searchIcon}>
              <svg width="25" height="25" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6564 20.5516L15.7564 14.6516C17.1742 12.9495 17.8812 10.7663 17.7303 8.55617C17.5795 6.34607 16.5823 4.27921 14.9464 2.78556C13.3104 1.29191 11.1616 0.486463 8.94695 0.536785C6.73227 0.587106 4.62226 1.48932 3.05584 3.05573C1.48942 4.62215 0.587213 6.73217 0.536892 8.94684C0.48657 11.1615 1.29201 13.3103 2.78566 14.9463C4.27932 16.5822 6.34618 17.5793 8.55628 17.7302C10.7664 17.8811 12.9496 17.1741 14.6517 15.7562L20.5517 21.6562L21.6564 20.5516ZM2.12511 9.15625C2.12511 7.7656 2.53748 6.40618 3.31009 5.2499C4.08269 4.09361 5.18082 3.1924 6.46561 2.66022C7.75041 2.12804 9.16416 1.9888 10.5281 2.2601C11.892 2.5314 13.1449 3.20107 14.1282 4.1844C15.1115 5.16774 15.7812 6.42059 16.0525 7.78452C16.3238 9.14845 16.1846 10.5622 15.6524 11.847C15.1202 13.1318 14.219 14.2299 13.0627 15.0025C11.9064 15.7751 10.547 16.1875 9.15636 16.1875C7.29219 16.1854 5.50496 15.444 4.18679 14.1258C2.86863 12.8076 2.12717 11.0204 2.12511 9.15625Z" />
              </svg>
            </span>
          </div>
          <Button text='Start Quiz' primary />

          <div className={style.profile}>
            <Image src="/assets/profile_image.png" width={50} height={50} />
            Elvis
          </div>
        </div>
        <div className={style.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
