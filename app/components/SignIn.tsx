import { signIn } from "@/auth"
import navStyles from '../styles/navbar.module.css'
 
export default function SignIn() {
  return (
    <form
      className={navStyles.item}
      action={async () => {
        "use server"
        await signIn("keycloak")
      }}
    >
      <button className={navStyles.link} type="submit">SIGN IN</button>
    </form>
  )
} 