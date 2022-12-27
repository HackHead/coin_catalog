import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export function Coin() {
    const { id } = useParams();
    const host = process.env.REACT_APP_SERVER_HOST;
    const [coin, setCoin] = useState({});
    useEffect(() => {
        (async() => {
            const fetchedCoin = await axios.get(`${host}/api/coin/${id}`);
            setCoin(fetchedCoin?.data?.data)
        })()
    }, [])
    return (
        <div className="home view">
            <section className="bg-gray-100 py-20" style={{minHeight: '100vh'}}>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <img src={host + coin.thumbnail_head} width="350" style={{display: 'block', margin: '1rem auto'}}/>
                            <img src={host + coin.thumbnail_tail} width="350" style={{display: 'block', margin: '1rem auto'}}/>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <h1 className="text-2xl font-bold sm:text-3xl">{coin.name}</h1>
                            <p className="max-w-xl text-lg py-6">
                                {coin.subtitle}
                            </p>
                            <p className="max-w-xl text-lg py-4">
                                {coin.description}
                            </p>
                            <div className="overflow-x-auto py-4">
                                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Issuing Country</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin?.Country?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Composition</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin?.Metal?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Quality</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin?.Quality?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Denomination</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin.denomination}</td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Year of Issue</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin.year}</td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Weight</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin.weight} g</td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin.price}$</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="inline-flex items-center hover:underline underline hover:no-underline py-6 text-black  active:text-indigo-500 py-20" onClick={() => {window.close()}}>
                                <span className="text-sm font-medium"> Back to the list </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}