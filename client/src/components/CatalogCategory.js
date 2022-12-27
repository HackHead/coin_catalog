export default function CatalogCategory(props) {
    return (
        <article className="category">
            <h2 className="category__title">{props.title} coins</h2>
            <div className="category__link-wrapper">
                <a href="https://www.example.com">Show All</a>
            </div>
            <div className="category__thumb">
                <div className="dummy-picture"></div>
            </div>
        </article>
    );
}
