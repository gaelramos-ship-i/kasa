import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logements from './Logements'

import '../styles/home.scss'
import '../styles/logements.scss'

const Home = () => {
    return (
        <>
            <header>
                <a href="/">Kasa</a>
                <Navbar />
            </header>

            <main>
                <section id='home'>
                    <div>
                        <h1>Trouvez votre logement idéal</h1>
                        <p>Découvrez des hébergements uniques et vivez comme un local partout dans le monde</p>
                    </div>
                </section>

                <Logements />
            </main>

            <Footer />
        </>
    )
}

export default Home