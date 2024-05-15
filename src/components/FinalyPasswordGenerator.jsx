import React, { useEffect, useState } from 'react'
import { FaClipboard } from 'react-icons/fa6'
import { SymbolsChar, NumbersChar, LowerCaseChar, UpperCaseChar } from './AllCharachters.jsx'

export default function FinalyPasswordGenerator() {

    const [uppercase, setUppercase] = useState(false)
    const [lowercase, setLowercase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)
    const [passLEngth, setPassLEngth] = useState(8)
    const [finalPassword, setFinalPassword] = useState('')

    let passwordString = '';
    let collectCheckbuxData = () => {

        if (uppercase) {
            passwordString += UpperCaseChar

        }
        if (lowercase) {
            passwordString += LowerCaseChar

        }
        if (numbers) {
            passwordString += NumbersChar

        }
        if (symbols) {
            passwordString += SymbolsChar

        }

      

        let finalPsss = ''
        let collectedPAsLength = passwordString.length
        for (let i = 1; i <= passLEngth; i++) {
            finalPsss += passwordString[Math.floor(Math.random() * collectedPAsLength)]

        }

        setFinalPassword(finalPsss)

        if (!uppercase & !lowercase & !numbers & !symbols) {
            alert('Please Check At Least One Checkbox...');
            setFinalPassword('')
            
        }

        // console.log(finalPsss);



    }
    // useEffect(()=>{

    //     console.log(uppercase)

    // })

    return (
        <>
            <div className='w-[100%] h-screen bg-gradient-to-b from-blue-500 to-black'>
                <div className='max-w-[350px] mx-auto pt-[100px] text-white'>
                    <div className='p-[20px] bg-[#23235b] rounded-lg'>
                        <h3 className="text-[30px] font-[600] text-center decoration-orange-50">Password Generator</h3>

                        <div className="w-[100%] mt-[15px] mb-[25px] flex items-center justify-between relative">
                            <input type="text" placeholder="Password" name="" value={finalPassword} className="w-[100%] h-[35px] rounded-sm ps-[10px] text-black font-[600]" />
                            <button className="cursor-pointer text-black absolute right-[10px]">
                                <FaClipboard />
                            </button>
                        </div>
                        <div className="w-[100%] my-[15px] flex items-center justify-between">
                            <label className="">Password Length</label>
                            <input type="text" onChange={(event) => setPassLEngth(event.target.value)} name="" className="w-[50px] rounded-sm text-black text-center font-[600] text-[18px]"
                            />
                        </div>
                        <div className="w-[100%] my-[15px] flex items-center justify-between">
                            <label className="">Include Uppercase Letters</label>
                            <input type="checkbox" className="rounded-lg w-[17px] h-[17px]"
                                checked={uppercase} onChange={() => setUppercase(!uppercase)} />
                        </div>
                        <div className="w-[100%] my-[15px] flex items-center justify-between">
                            <label className="">Include Lowercase Letters</label>
                            <input type="checkbox" name=""
                                className="rounded-lg w-[17px] h-[17px]"
                                checked={lowercase} onChange={() => setLowercase(!lowercase)} />
                        </div>
                        <div className="w-[100%] my-[15px] flex items-center justify-between">
                            <label className="">Include Numbers</label>
                            <input type="checkbox"

                                name="" className="rounded-lg w-[17px] h-[17px]"
                                checked={numbers} onChange={() => setNumbers(!numbers)} />
                        </div>
                        <div className="w-[100%] my-[15px] flex items-center justify-between">
                            <label className="">Include Symbols</label>
                            <input type="checkbox" name=""
                                className="rounded-lg w-[17px] h-[17px]"
                                checked={symbols} onChange={() => setSymbols(!symbols)} />
                        </div>
                        <div className="w-[100%] mt-[25px] mb-[15px] flex items-center justify-center">
                            <button className="bg-[#3b3b98] px-[12px] py-[8px] text-[20px] rounded-lg text-white" onClick={collectCheckbuxData}>Generate Password</button>
                        </div>
                    </div>

                </div>



            </div>


        </>
    )
}
