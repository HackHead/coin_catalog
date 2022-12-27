import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { AdvancedFilter } from '../components/AdvancedFilter';
import { CoinCard } from '../components/CoinCard';
import { Filters } from '../components/Filters';

export function Catalog() {
    const host = process.env.REACT_APP_SERVER_HOST;
    const [filterIsVisible, setFilterVisibility] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [coins, updateCoins] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const category = searchParams.get("category")
            const coins = await axios.get(`${host}/api/coin${category ? `?category=${category}`: ''}`)
            updateCoins(coins?.data?.data)
        })();
    }, []);
    const fetchUpdatedData = async (queryString) => {
        const updatedCoins = await axios.get(`${host}/api/coin?${queryString}`)
        console.log(queryString);
        updateCoins(updatedCoins?.data?.data)
    }
    const sendForm = (queryString) => {
        navigate(`/catalog?${queryString}`)
    } 
    return (
        <div className="home view">
            <section className="max-h">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl px-14 py-20">
                    Catalog
                </h1>
                <nav aria-label="Breadcrumb" className="px-14 py-8">
                    <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">

                        <li>
                            <Link to="/" className="block transition hover:text-gray-700">
                                <span className=""> Home </span>
                            </Link>
                        </li>

                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <span className="block"> Catalog </span>
                        </li>
                    </ol>
                </nav>
                <Filters 
                    onUpdate={fetchUpdatedData}
                    onChangeVisibility={setFilterVisibility}
                    onSendForm={sendForm}
                    isVisible={filterIsVisible}
                />
            </section>
            <section>
                <div className="max-w-screen-xl px-4sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        {
                            coins.map((coin) => {
                                return (
                                    <CoinCard
                                        id={coin.id}
                                        key={coin.id}
                                        img={`${host}${coin.thumbnail_head}`}
                                        name={coin.name}
                                        subtitle={coin.subtitle}
                                    />
                                   
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}