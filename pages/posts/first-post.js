import Link from 'next/link';
import { MyComponent } from '../../components/MyComponent';
import Head from 'next/head';
import Script from 'next/script';
import {useState} from 'react'
import Layout from '../../components/Layout'

export default function FirstPost(){
  const [message, setMessage] = useState('')
  return (
    <>
    <Layout>
    <Head>
      <title>First Post Header</title>
    </Head>
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={
        ()=>setMessage("script loaded correctly")
      }
      />
    <h1>first post</h1>
      <Link href="/">home</Link>
      <img src="/images/profile.jpg" alt="Your Name" />
    <h4>Message:{message}</h4>
    <div>
      <MyComponent></MyComponent>
    </div>
    </Layout>
    </>
  )
}