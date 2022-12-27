import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { encodeQueryData } from "../utils";

export function Filters({ onUpdate, isVisible, onChangeVisibility }) {
    const host = process.env.REACT_APP_SERVER_HOST;
    const [queryString, setQueryString] = useState('');

    const [filterText, setFilterText] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filterPriceFrom, setFilterPriceFrom] = useState();
    const [filterPriceTo, setFilterPriceTo] = useState();
    const [filterYearTo, setFilterYearTo] = useState();
    const [filterYearFrom, setFilterYearFrom] = useState();
    const [filterCountries, setFilterCountries] = useState([]);
    const [filterMetals, setFilterMetals] = useState([]);
    const [filterQualities, setFilterQualities] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
   

    const [countriesList, setCountries] = useState([]);
    const [metalsList, setMetals] = useState([]);
    const [qualititesList, setQualitites] = useState([]);

    const updateFilterOnMount = () => {
        const [
            queryCategory,
            queryPriceFrom,
            queryPriceTo,
            queryYearFrom,
            queryYearTo,
            queryMetals,
            queryCountries,
            queryQualities,
            queryText,
        ] = [
                searchParams.get('category'),
                searchParams.get('priceFrom'),
                searchParams.get('priceTo'),
                searchParams.get('yearFrom'),
                searchParams.get('yearTo'),
                searchParams.get('metals'),
                searchParams.get('countries'),
                searchParams.get('qualities'),
                searchParams.get('text'),
            ]
        if (queryCategory) setFilterCategory(queryCategory);
        if (queryPriceFrom) setFilterPriceFrom(queryPriceFrom);
        if (queryPriceTo) setFilterPriceTo(queryPriceTo);
        if (queryYearFrom) setFilterYearFrom(queryYearFrom);
        if (queryYearTo) setFilterYearTo(queryYearTo);
        if (queryMetals) setFilterMetals(queryMetals.split(',').map(e => +e));
        if (queryCountries) setFilterCountries(queryCountries.split(',').map(e => +e));
        if (queryQualities) setFilterQualities(queryQualities.split(',').map(e => +e));
        if (queryText) setFilterText(queryText);
    }

    useEffect(() => {
        (async () => {
            const fetchedCountries = await axios.get(`${host}/api/country`);
            setCountries(fetchedCountries?.data?.data);

            const fetchedMetals = await axios.get(`${host}/api/metal`);
            setMetals(fetchedMetals?.data?.data);

            const fetchedQualities = await axios.get(`${host}/api/quality`);
            setQualitites(fetchedQualities?.data?.data);
            updateFilterOnMount()
        })();

    }, [])
    const generateQueryString = () => {
        return 
    }
    const updateCountriesFilter = (countryId) => {
        const checked = filterCountries.some((e) => e === countryId);
        if (checked) {
            setFilterCountries(
                [...filterCountries].filter((e) => e !== countryId)
            )
        } else {
            setFilterCountries([...filterCountries, countryId])
        }
    }
    const updateQualititesFilter = (qualityId) => {
        const checked = filterQualities.some((e) => e === qualityId);
        if (checked) {
            setFilterQualities(
                [...filterQualities].filter((e) => e !== qualityId)
            )
        } else {
            setFilterQualities([...filterQualities, qualityId])
        }
    }

    const updateMetalsFilter = (metalId) => {
        const checked = filterMetals.some((e) => e === metalId);
        if (checked) {
            setFilterMetals(
                [...filterMetals].filter((e) => e !== metalId)
            )
        } else {
            setFilterMetals([...filterMetals, metalId])
        }
    }
    useEffect(() => {
        setQueryString(encodeQueryData({
            text: filterText,
            category: filterCategory,
            priceFrom: filterPriceFrom,
            priceTo: filterPriceTo,
            yearFrom: filterYearFrom,
            yearTo: filterYearTo,
            countries: filterCountries,
            metals: filterMetals,
            qualities: filterQualities,
        }))
    }, [filterCountries, filterMetals, filterQualities, queryString, filterCategory, filterPriceFrom, filterPriceTo, filterYearFrom, filterYearTo, filterText])
    useEffect(() => {
        onUpdate(queryString)
    }, [queryString])
    return (
        <div>
            <form >
                <div className="grid gap-y-8 px-14 lg:grid-cols-10">
                    <div className="col-span-2">
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                            defaultValue={filterText}
                            onInput={(e) => {
                                setFilterText(e.target.value)
                            }}
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
                <button
                    type="button"
                    className="inline-flex items-center hover:underline px-8 py-6 text-black  active:text-indigo-500"
                    onClick={(e) => { onChangeVisibility(!isVisible) }}
                >
                    <span className="text-sm font-medium"> Advanced Filters </span>
                    {
                        isVisible ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path fill="#000" d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" /></svg>
                    }
                </button>
                <div className={`${!isVisible ? 'hidden' : ''}`}>
                    <div className={`grid grid-cols-1 lg:grid-cols-6`}>
                        <div className="rounded-lg p-2 lg:col-span-3 lg:p-8">

                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden bg-white">
                                <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                                    <span className="text-sm font-medium"> Issuing Country </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="bg-white border-t border-gray-200">


                                    <ul className="p-4 space-y-1 border-t border-gray-200">
                                        {
                                            countriesList.map((country, i) => {
                                                return (
                                                    <li key={i}>
                                                        <label htmlFor={`Country_${country.id}`} className="inline-flex items-center gap-2">
                                                            <input
                                                                className="w-5 h-5 border-gray-300 rounded"
                                                                type="checkbox"
                                                                id={`Country_${country.id}`}
                                                                value={country.id}
                                                                onChange={() => {
                                                                    updateCountriesFilter(country.id);
                                                                    onUpdate(queryString)
                                                                }}
                                                                checked={filterCountries.some(e => e === country.id)}
                                                            />

                                                            <span className="text-sm font-medium text-gray-700">
                                                                {country.name}
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </details>


                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden bg-white my-4">
                                <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                                    <span className="text-sm font-medium"> Metal </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="bg-white border-t border-gray-200">



                                    <ul className="p-4 space-y-1 border-t border-gray-200">
                                        {
                                            metalsList.map((metal, i) => {
                                                return (
                                                    <li key={i}>
                                                        <label htmlFor={`Metal_${i}`} className="inline-flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                id={`Metal_${i}`}
                                                                className="w-5 h-5 border-gray-300 rounded"
                                                                value={metal.id}
                                                                onChange={() => {
                                                                    updateMetalsFilter(metal.id);
                                                                    onUpdate(queryString)
                                                                }}
                                                                checked={filterMetals.some(e => e === metal.id)}
                                                            />

                                                            <span className="text-sm font-medium text-gray-700">
                                                                {metal.name}
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </details>

                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden bg-white my-4">
                                <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                                    <span className="text-sm font-medium"> Quality of the Coin </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="bg-white border-t border-gray-200">



                                    <ul className="p-4 space-y-1 border-t border-gray-200">
                                        {
                                            qualititesList.map((quality, i) => {
                                                return (
                                                    <li key={i}>
                                                        <label htmlFor={`Quality_${i}`} className="inline-flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                id={`Quality_${i}`}
                                                                className="w-5 h-5 border-gray-300 rounded"
                                                                value={quality.id}
                                                                onChange={() => {
                                                                    updateQualititesFilter(quality.id);
                                                                    onUpdate(queryString)
                                                                }}
                                                                
                                                                checked={filterQualities.some(e => e === quality.id)}
                                                            />

                                                            <span className="text-sm font-medium text-gray-700">
                                                                {quality.name}
                                                            </span>
                                                        </label>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </details>

                        </div>
                        <div className="rounded-lg p-8 lg:col-span-3 lg:p-8">
                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden bg-white">
                                <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                                    <span className="text-sm font-medium"> Price </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="bg-white border-t border-gray-200">



                                    <div className="p-4 border-t border-gray-200">
                                        <div className="flex justify-between gap-4">
                                            <label htmlFor="FilterPriceFrom10" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">$</span>

                                                <input
                                                    type="number"
                                                    id="FilterPriceFrom10"
                                                    placeholder="From"
                                                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                                                    style={{ padding: '0.5rem' }}
                                                    onInput={(e) => {
                                                        setFilterPriceFrom(e.target.value);
                                                        onUpdate(queryString)
                                                    }}
                                                    defaultValue={filterPriceFrom}
                                                />
                                            </label>

                                            <label htmlFor="FilterPriceTo11" className="flex items-center gap-2">
                                                <span className="text-sm text-gray-600">$</span>

                                                <input
                                                    type="number"
                                                    id="FilterPriceTo11"
                                                    placeholder="To"
                                                    style={{ padding: '0.5rem' }}
                                                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                                                    onInput={(e) => {
                                                        setFilterPriceTo(e.target.value);
                                                        onUpdate(queryString)
                                                    }}
                                                    defaultValue={filterPriceTo}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </details>

                            <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden bg-white my-4">
                                <summary className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                                    <span className="text-sm font-medium"> Year of issue </span>

                                    <span className="transition group-open:-rotate-180">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="bg-white border-t border-gray-200">



                                    <div className="p-4 border-t border-gray-200">
                                        <div className="flex justify-between gap-4">
                                            <label htmlFor="FilterYearFrom" className="flex items-center gap-2">

                                                <input
                                                    type="number"
                                                    id="FilterYearFrom"
                                                    placeholder="From"
                                                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                                                    style={{ padding: '0.5rem' }}
                                                    onInput={(e) => {
                                                        setFilterYearFrom(e.target.value);
                                                        onUpdate(queryString);
                                                    }}
                                                    defaultValue={filterYearFrom}
                                                />
                                            </label>

                                            <label htmlFor="FilterYearTo" className="flex items-center gap-2">

                                                <input
                                                    type="number"
                                                    id="FilterYearTo"
                                                    placeholder="To"
                                                    className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                                                    style={{ padding: '0.5rem' }}
                                                    onInput={(e) => {
                                                        setFilterYearTo(e.target.value);
                                                        onUpdate(queryString);
                                                    }}
                                                    defaultValue={filterYearTo}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </details>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}