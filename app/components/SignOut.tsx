"use client"
import { signOut } from "next-auth/react";
import React from 'react'
import Link from 'next/link';
import navStyles from '../styles/navbar.module.css'

function SignOut() {
  return (
    <div className={navStyles.item}>
      <Link className={navStyles.link}
        href=""
        onClick={() => signOut()}
        type="button"
        data-testid="btn-signout">
        SIGN OUT
      </Link>
    </div>
  );
}

export default SignOut