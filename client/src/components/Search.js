export function Search() {
    return (
        <div className="search">
            <form className="search__form">
                <label htmlFor="search-input">Input Field</label>
                <div className="search__item-group">
                    <input type="text" id="search-input" className="search__field"/>
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
}