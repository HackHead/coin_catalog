import { Link } from "react-router-dom";

export function CoinCard({id, img, name, subtitle}){
    return (
        <div className="rounded-lg p-8 lg:col-span-2 lg:p-8 flex">
            <img src={img} width="150"/>
            <div className="block px-4">
                <Link to={`/coin/${id}`} target="_blank" className="hover:underline">
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{name}</h3>
                </Link>

                <p className="mt-2 max-w-sm text-gray-700 italic" style={{ letterSpacing: '0.04rem' }}>
                    {subtitle}...
                </p>
            </div>

        </div>
    );
}