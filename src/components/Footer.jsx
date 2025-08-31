import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='bg-black/90 py-20 px-10'>
            <div className="call px-30">
                <p className='text-white/50'>Questions? Call 000-800-919-1743 (Toll-Free)</p>
            </div>
            <div className="lists py-5 md:flex justify-around">
                <div className="list-1">
                    <ul>
                        <li className='py-2 text-white/50 uppercase underline'>FAQ</li>
                        <li className='py-2 text-white/50 underline'>Cookies Preference</li>
                    </ul>
                </div>
                <div className="list-2">
                    <ul>
                        <li className='py-2 text-white/50 underline'>Help Centre</li>
                        <li className='py-2 text-white/50 underline'>Corporate Information</li>
                    </ul>
                </div>
                <div className="list-3">
                    <ul>
                        <li className='py-2 text-white/50 underline'>Terms of use</li>
                    </ul>
                </div>
                <div className="list-4">
                    <ul>
                        <li className='py-2 text-white/50 underline'>Privacy</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer