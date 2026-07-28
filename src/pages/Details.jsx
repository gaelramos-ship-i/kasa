import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import data from "../data/logements.json"
import '../styles/details.scss'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Details = () => {

    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    const logement = data.find((item) => item.id === id)
    const images = logement.pictures

    const [index, setIndex] = useState(0)

    function increment() {
        setIndex((index) => {
            const newIndex = index + 1

            if (newIndex > images.length - 1) {
                return 0
            }

            return newIndex
        });
    }

    function decrement() {
        setIndex((index) => {
            const newIndex = index - 1

            if (newIndex < 0) {
                return images.length - 1
            }

            return newIndex
        })
    }

    return (
        <>
            <header>
                <div>
                    <a href="/">Kasa</a>
                    <Navbar />
                </div>
            </header>

            <main>
                <section id='details'>
                    <div>
                        <img src={logement.pictures[index]} alt="Image Random" />
                        <button id='prevBtn' onClick={decrement}><FaArrowLeft />
                        </button>
                        <button id='nextBtn' onClick={increment}><FaArrowRight />
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Details