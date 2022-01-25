import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import { data } from 'autoprefixer'



export default function Home() {

  
  const [username, setUsername] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [recommendation, setRecom] = useState('')

  const addMember = async e =>{
    e.preventDefault()
    try{
      const body = {username,contact,address,recommendation}
      await fetch('https://namuwongo-basketball-registration-pt20b574y-namblazers.vercel.app/api/register',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(body)
      })
      await Router.push('/fund')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Namuwongo Basketball Campaign</title>
        <meta name="description" content="Nam Blazers campaign" />
        <link rel="icon" href="/blazers.ico" />
      </Head>

      <main>
        <h1>
        
        </h1>

        {/* <div className="max-w-xs rounded overflow-hidden shadow-lg my-6">
          <div className="px-7 py-7">
            <form className="space-y-4 text-gray-700" onSubmit={addMember}>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block mb-1">Name</label>
                  <input className="w-full h-10 px-7 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                  type="text" 
                  placeholder="John Mutebi Maureen"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="formGridCode_card"/>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block mb-1">Contact</label>
                  <input className="w-full h-10 px-7 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                  type="tel"
                  placeholder="077 6789 569"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  id="formGridCode_card"/>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block mb-1">Address</label>
                  <input className="w-full h-10 px-7 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                  type="text"
                  placeholder="Kisugu"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="formGridCode_card"/>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block mb-1">Recommendation</label>
                  <input className="w-full h-10 px-7 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
                  type="text" 
                  placeholder="Keep up the good work"
                  value={recommendation}
                  onChange={(e) => setRecom(e.target.value)}
                  id="formGridCode_card"/>
                </div>
              </div>
              <div className="-mx-3 md:flex mt-2">
              <div className="px-6 pt-4 pb-2">
                   <button className="w-full inline-flex items-center justify-center px-7 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                   type="submit"
                   >
                     Sign Up
                  </button>
               </div>
              </div>
            </form>
          </div>
        </div> */}
        
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div className="w-full h-auto bg-gray-500 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <Image src="/2.jpg" alt="team" width={1280} height={1280}></Image>
                <Image src="/4.jpg" alt="BIG" width={700} height={200}></Image>
              </div>
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center"> Namuwongo Basketball Club Registration Campaign</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={addMember}>
                  <div className="">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Name
                        </label>
                        <input
                          className="focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                          id="name"
                          type="text"
                          placeholder="John Mutebi Maureen"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Contact
                        </label>
                        <input
                          className="focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                          id="name"
                          type="tel"
                          placeholder="0704164752"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Address
                        </label>
                        <input
                          className="focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                          id="name"
                          type="text"
                          placeholder="Kisugu Road, African Gospel Church"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Recommendation
                        </label>
                        <input
                          className="focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                          id="name"
                          type="text"
                          placeholder="Move outside the community"
                          value={recommendation}
                          onChange={(e) => setRecom(e.target.value)}
                        />
                      </div>
                      {/* <div className="mb-6 text-center">
                        <button
                          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Sign Up
                        </button>
                      </div> */}
                      <div className="px-6 pt-4 pb-2">
                        <button className="w-full inline-flex items-center justify-center px-7 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                        type="submit"
                        >
                          Sign Up
                        </button>
                    </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

