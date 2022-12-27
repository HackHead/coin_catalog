import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AdvancedFilter } from '../components/AdvancedFilter';

export function Home() {
    const host = process.env.REACT_APP_SERVER_HOST;
    
    const [showFilters, updateFilters] = useState(false)
    const [queryString, setQueryString] = useState('');
    const [categories, updateCategories] = useState([]);
    

    useEffect(() => {
        (async () => {
            const categories = await axios.get(`${host}/api/categories`);
            updateCategories(categories?.data?.data);
        })();
    }, [])

    const onFiltersUpdate = (url) => {
        alert(url)
    }
    return (
        <div className="home view">
            <section className="max-h">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl px-14 py-20">
                    Homepage
                </h1>
                <form>
                    <div className="grid gap-y-8 px-14 lg:grid-cols-10">
                        <div className="col-span-2">
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Name"
                                type="text"
                                id="name"
                            />
                        </div>
                        <div className="col-span-1 mx-4">
                            <button
                                type="submit"
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>

                <div className="max-w-screen-xl px-4sm:px-6 lg:px-8">
                    <a className="inline-flex items-center hover:underline px-8 py-6 text-black  active:text-indigo-500" href="/" role="button" onClick={(e) => { e.preventDefault(); updateFilters(!showFilters) }}>
                        <span className="text-sm font-medium"> Advanced Filters </span>
                        {
                            showFilters ?
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path fill="#000" d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" /></svg>
                        }
                    </a>
                    <div className={`${showFilters ? '' : 'hidden'}`}>
                        <AdvancedFilter onUpdate={() => onFiltersUpdate}/>
                    </div>
                    
                </div>






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
                                                    <span style={{display: 'inline-block', transform: 'translateY(25%)'}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path fill="#000" d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" /></svg>
                                                    </span>
                                                </Link>
                                                <img src={`${host}${category.thumbnail}`}/>
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