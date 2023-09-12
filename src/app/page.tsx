'use client';

import { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import { CsrfToken } from './types'

export const Home = () => {

  useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const {data} = await axios.get<CsrfToken>(
        `${process.env.NEXT_PUBLIC_API_URL}/csrf-token`
      )
      axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
    }
    getCsrfToken()
  }, [])


  return (
    <main className='p-10'>
      <Header />
    </main>
  )
}
 
export default Home
