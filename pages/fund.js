import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import handle from './api/register'
import Router from 'next/router'



function Fund(){
    const handleClick = async e=>{
        e.preventDefault()
        await Router.push("https://flutterwave.com/pay/namuwongoblazersbasketballclubltd0cn2")
    }
    return( <>
            <div className="container mx-auto py-0">
                <div className="grid justify-items-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg" >
                        <Image className="w-full" src="/a.jpg" alt="" width={480} height={359}></Image>
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">Namuwongo Blazers Fundraiser</div>
                            <p className="text-gray-700 text-base font-sans">
                            This is an annual campaign that seeks to register all fans, well-wishers, associates and affiliates to the club
                            whether individually or as an organised group or a company.<br></br>
                            The campaign also aims to support the clubs CORPORATE SOCIAL RESPONSIBILITY(CSR) AND SPORTING ACTIVITIES FOR THE 2022 CALENDAR YEAR.<br></br>
                            All that register shall be kept abreast with the teams activities throughout the year and shall automatically be part of the beneficiaries of our selected
                            GIVE BACK CAMPAIGNS throughout the year.<br></br>
                            BE PART OF SOMETHING BIG
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
                          onClick={(e)=>handleClick(e,"https://ravesandbox.flutterwave.com/pay/uixyqbaue02u")}
                          >Donate</button>
                        </div>
                    </div>
                 </div>
            </div>
        </>
)
}

export default Fund