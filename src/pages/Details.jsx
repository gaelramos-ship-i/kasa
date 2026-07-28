import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from "../data/logements.json"
import Carousel from '../components/Carousel'
import Collapses from "../components/Collapses"

import '../styles/details.scss'
import '../styles/collapses.scss'
import '../styles/carousel.scss'

import { CiLocationOn } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Details = () => {

    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    const logement = data.find((item) => item.id === id)
    const tags = logement.tags

    return (
        <>
            <header>
                <div>
                    <a href="/">Kasa</a>
                    <Navbar />
                    <RxHamburgerMenu />
                </div>
            </header>

            <main>
                <section id='details'>
                    <div>
                        <Carousel />
                        <h1>{logement.title}</h1>
                        <div className="location">
                            <CiLocationOn />
                            <p>{logement.location}</p>
                        </div>
                        <div className="tags">
                            {tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <div id='identity'>
                            <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
                            <div>
                                <h2>{logement.host.name}</h2>
                                <p>Hôte depuis 3 ans</p>
                            </div>
                        </div>
                        <Collapses />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Details