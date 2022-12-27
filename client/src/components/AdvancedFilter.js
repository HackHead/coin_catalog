import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
export function AdvancedFilter({ onUpdate }) {

    // Адрес по которому можно получить доступ к API. 
    // По умолчанию - http://localhost:7000. Изменить можно в файле .env
    const host = process.env.REACT_APP_SERVER_HOST;


    const [searchParams, setSearchParams] = useSearchParams();
    const [filterParams, setFilterParams] = useState({
        text: null,
        category: null,
        priceFrom: null,
        priceTo: null,
        yearFrom: null,
        yearTo: null,
        countries: [],
        metals: [],
        qualities: []
    });

    const [countries, setCountries] = useState([]);
    const [metals, setMetals] = useState([]);
    const [qualitites, setQualitites] = useState([]);
    const navigate = useNavigate();


    const updateFilter = (e, target) => {
        const value = e.target.value;
        const checked = e.target.checked;
        const newState = Object.assign({}, filterParams);
        if (checked) {
            newState[target].push(value);
        } else {
            newState[target] = newState[target].filter((item) => item !== value)
        }
        setFilterParams(newState)
    }
    const updateSingleFilter = (e, target) => {
        const value = e.target.value;
        const newState = Object.assign({}, filterParams);
        newState[target] = value;
        setFilterParams(newState)
    }
    const updateFilterOnMount = () => {
        const newState = Object.assign({}, filterParams);

        if (searchParams.get('category')) newState.category = searchParams.get('category');
        if (searchParams.get('priceFrom')) newState.priceFrom = searchParams.get('priceFrom');
        if (searchParams.get('priceTo')) newState.priceTo = searchParams.get('priceTo');
        if (searchParams.get('yearFrom')) newState.yearFrom = searchParams.get('yearFrom');
        if (searchParams.get('yearTo')) newState.yearTo = searchParams.get('yearTo');
        if (searchParams.get('metals')) newState.metals = searchParams.get('metals').split(',');
        if (searchParams.get('countries')) newState.countries = searchParams.get('countries').split(',');
        if (searchParams.get('qualities')) newState.qualities = searchParams.get('qualities').split(',');
        setFilterParams(newState)

    }
    // Функция которая генерирует query строку на основание выбраных параметров поиска
    const encodeQueryData = (data) => {
        const ret = [];
        for (let d in data) {
            if (data[d]) ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        };

        return ret.join('&');
    }
    const submitForm = (e) => {
        e.preventDefault();
        const query = encodeQueryData(filterParams);
        console.log(query)
        // navigate(`/catalog?${navigate}`)
    }
    // Получаем возможные варианты стран, металлов и качества чеканки монет
    useEffect(() => {
        (async () => {
            const fetchedCountries = await axios.get(`${host}/api/country`);
            setCountries(fetchedCountries?.data?.data);

            const fetchedMetals = await axios.get(`${host}/api/metal`);
            setMetals(fetchedMetals?.data?.data);

            const fetchedQualities = await axios.get(`${host}/api/quality`);
            setQualitites(fetchedQualities?.data?.data);
        })();

        updateFilterOnMount();
    }, [])

    useEffect(() => {
        onUpdate(encodeQueryData(filterParams))
    }, [filterParams]);

    return (
        <div>
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
                                        countries.map((country, i) => {
                                            return (
                                                <li key={i}>
                                                    <label htmlFor={`Country_${country.id}`} className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id={`Country_${country.id}`}
                                                            className="w-5 h-5 border-gray-300 rounded"
                                                            value={country.id}
                                                            onChange={(e) => updateFilter(e, 'countries')}
                                                            checked={filterParams.countries.some(e => e === `${country.id}`)}
                                                            data-x={country.id}
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
                                        metals.map((metal, i) => {
                                            return (
                                                <li key={i}>
                                                    <label htmlFor={`Metal_${i}`} className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id={`Metal_${i}`}
                                                            className="w-5 h-5 border-gray-300 rounded"
                                                            value={metal.id}
                                                            onChange={(e) => updateFilter(e, 'metals')}
                                                            checked={filterParams.metals.some(e => e == `${metal.id}`)}

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
                                        qualitites.map((quality, i) => {
                                            return (
                                                <li key={i}>
                                                    <label htmlFor={`Quality_${i}`} className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id={`Quality_${i}`}
                                                            className="w-5 h-5 border-gray-300 rounded"
                                                            value={quality.id}
                                                            onChange={(e) => updateFilter(e, 'qualities')}
                                                            checked={filterParams.qualities.some(e => e === `${quality.id}`)}
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
                                                onInput={(e) => updateSingleFilter(e, 'priceFrom')}
                                                value={searchParams.get('priceFrom') ? searchParams.get('priceFrom') : ''}
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
                                                onInput={(e) => updateSingleFilter(e, 'priceTo')}
                                                value={searchParams.get('priceTo') ? searchParams.get('priceTo') : ''}
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
                                        <label htmlFor="FilterYearOfIssueFrom12" className="flex items-center gap-2">

                                            <input
                                                type="number"
                                                id="FilterYearOfIssueFrom12"
                                                placeholder="From"
                                                className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                                                style={{ padding: '0.5rem' }}
                                                onInput={(e) => updateSingleFilter(e, 'yearFrom')}
                                                value={searchParams.get('yearFrom') ? searchParams.get('yearFrom') : ''}
                                            />
                                        </label>

                                        <label htmlFor="FilterPriceTo13" className="flex items-center gap-2">

                                            <input
                                                type="number"
                                                id="FilterPriceTo13"
                                                placeholder="To"
                                                className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                                                style={{ padding: '0.5rem' }}
                                                onInput={(e) => updateSingleFilter(e, 'yearTo')}
                                                value={searchParams.get('yearTo') ? searchParams.get('yearTo') : ''}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </details>


                    </div>
                </div>
        </div>

    );
}