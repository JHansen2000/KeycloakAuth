import { Session } from "next-auth"; // Adjust this import based on your actual session type
import Link from 'next/link'
import navStyles from '../styles/navbar.module.css'
import SignOut from './SignOut';
import SignIn from './SignIn';

function Capitalize(input: string) {
    const output = input.toUpperCase()
    return output
}

interface NavbarProps {
  session: Session | null; // Use the correct type for session, or any other type you need
}

export default function Navbar({ session }: NavbarProps) {
    const id = 451
    let username = "undefined"

    if (session && session.user?.name) {
        username = Capitalize(session.user.name)
    }

    console.log("session", session)

    return (
        <div className={navStyles.container} data-testid="navbar">
            <ul className={navStyles.table} data-testid="navbar-links">
                <li className={navStyles.item}>
                    <Link className={navStyles.link} href="/">HOME</Link>
                </li>
                <li className={`${navStyles.item} ${navStyles.dropdown}`}>
                    <a 
                    className={navStyles.dropbtn}
                    >API</a>
                    <div className={navStyles.dropdown_content}>
                        <a
                        className={navStyles.link}
                        href="/api/hello"
                        target='_blank'
                        rel="noopener noreferrer"
                        >HELLO</a>

                    {session ? (
                        <Link
                        className={navStyles.link}
                        href={{
                            pathname: "/api/users/"+id,
                        }}
                        target='_blank'
                        rel="noopener noreferrer"
                        >MY JWT</Link>
                    ) : (<></>) }

                    </div>
                </li>
            </ul>
            <ul className={navStyles.profile_table} data-testid="navbar-profile">

            {session ? (
                <li className={`${navStyles.item} ${navStyles.dropdown}`}>
                    <a 
                    className={navStyles.dropbtn}
                    >{username}</a>
                    <div className={navStyles.dropdown_content}>
                        <SignOut />
                    </div>
                </li>
            ) : (
                <li className={`${navStyles.item} ${navStyles.dropdown}`}>
                    <SignIn />
                </li>
            )}

            </ul>
        </div>
    );
}