import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AdvancedFilter } from '../components/AdvancedFilter';
import { Filters } from '../components/Filters';

export function Home() {
    const host = process.env.REACT_APP_SERVER_HOST;
    const [filterIsVisible, setFilterVisibility] = useState(false);
    const [coins, updateCoins] = useState([]);
    const [categories, updateCategories] = useState([]);
    const navigate = useNavigate();

    const fetchUpdatedData = async (queryString) => {
        const updatedCoins = await axios.get(`${host}/api/coin?${queryString}`)
        console.log(queryString);
        updateCoins(updatedCoins?.data?.data)
    }

    useEffect(() => {
        (async () => {
            const categories = await axios.get(`${host}/api/categories`);
            updateCategories(categories?.data?.data);
        })();
    }, [])

    const sendForm = (queryString) => {
        navigate(`/catalog?${queryString}`)
    };

    return (
        <div className="home view">
            <section className="max-h">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl px-14 py-20">
                    Homepage
                </h1>
                <Filters
                    onUpdate={fetchUpdatedData}
                    onChangeVisibility={setFilterVisibility}
                    onSendForm={sendForm}
                    isVisible={filterIsVisible}
                />
            </section>
            <section>
                <div className="max-w-screen-xl px-4sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-6">
                        {
                            categories.length ?
                                categories.map((category) => {
                                    return (
                                        <div className="rounded-lg p-8 lg:col-span-2 lg:p-8" key={category.id}>
                                            <div className="block">
                                                <h3 className="mt-4 text-xl font-bold text-gray-900">{category.name}</h3>

                                                <Link to={`/catalog?category=${category.id}`} className="mt-2 max-w-sm text-gray-700 hover:underline">
                                                    <span>
                                                        Show All
                                                    </span>
                                                    <span style={{ display: 'inline-block', transform: 'translateY(25%)' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path fill="#000" d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" /></svg>
                                                    </span>
                                                </Link>
                                                <img src={`${host}${category.thumbnail}`} />
                                            </div>
                                        </div>
                                    );
                                })
                                :
                                null
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}