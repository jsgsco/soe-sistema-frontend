import Carrousel from '../../../Carrousel'
import Navbar from '../../../Navbar/Navbar'

import './Home.sass'

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <Navbar />
                <Carrousel />
            </div>
        </div>
    )
}

export default Home
