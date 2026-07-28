import { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import data from "../data/logements.json"

const Carousel = () => {

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
        <div>
            <img src={logement.pictures[index]} alt="Image Random" />
            <button id='prevBtn' onClick={decrement}><FaArrowLeft /></button>
            <button id='nextBtn' onClick={increment}><FaArrowRight /></button>
        </div>
    )
}

export default Carousel