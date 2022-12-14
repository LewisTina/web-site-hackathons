import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../../styles/Layout.module.scss'
import Footer from './Footer'

interface LayoutProps {
    title?: string,
    children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
    const router = useRouter()
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                
            </Head>
            <NavBar />

                    {props.children}

                    <Footer></Footer>
        </main>
    );
}

export default Layout;
