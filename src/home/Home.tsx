import Banner from "../banner/Banner"
import Collections from "../collections/Collections"
import Collections2 from "../collections2/Collections2"
import Header from "../header/Header"
const Home = () => {
    return (
        <div>
            <Header />
            <Collections />
            <Banner />
            <Collections2 />
        </div>
    )
}

export default Home