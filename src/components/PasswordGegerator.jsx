import React from 'react';
import { MdContentPaste } from "react-icons/md";

export default function PasswordGenerator() {
    return (
        <>
            <div className='bg-indigo-950'>

                <div className='w-[1320px] mx-auto py-10'>
                    <div className='w-[400px] h-[450px] border bg-indigo-950 drop-shadow-2xl py-5 p-4'>
                        <div>
                            <h1 className='text-white text-center text-[30px] font-bold py-5'>Password Generator</h1>
                        </div>

                        <div className="relative">
                            <form action="">
                                <input type="text" className='py-2 bg-black w-[100%] pr-10 text-white' placeholder='Enter Password' style={{ paddingRight: "40px" }} />
                                <MdContentPaste className='absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer text-[30px]' style={{ background: "blue", padding: "3px" }} />
                            </form>
                        </div>

                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className='text-white'>Password Length</td>
                                    <td>
                                        <form action="">
                                            <input type="text" className='my-3 w-[50px]' />
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-white'>Include uppercase letters</td>
                                    <td>
                                        <input type="checkbox" className='my-3 w-[50px]' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-white'>Include lowercase letters</td>
                                    <td>
                                        <input type="checkbox" className='my-3 w-[50px]' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-white'>Include numbers</td>
                                    <td>
                                        <input type="checkbox" className='my-3 w-[50px]' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-white'>Include symbols</td>
                                    <td>
                                        <input type="checkbox" className='my-3 w-[50px]' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <input type="submit" value="Create Password" className='bg-indigo-700 px-5 py-2 w-[100%] my-3 text-white'/>
                    </div>
                </div>
            </div>
        </>
    );
}
