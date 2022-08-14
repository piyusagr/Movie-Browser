import Hero from "./hero";

const SearchView = ({ keyword, searchResults }) => {
    const title = `yoe are searching for ${keyword}`;
    return (
        <>
            <Hero text={title} />

        </>
    )
}


export default SearchView;