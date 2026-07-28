import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import data from "../data/logements.json"

import '../styles/details.scss'

import { FaArrowRight, FaArrowLeft, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Collapse } from 'react-collapse'

import { useState } from 'react'

const Details = () => {

    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    const logement = data.find((item) => item.id === id)
    const images = logement.pictures
    const tags = logement.tags
    const equips = logement.equipments

    const [index, setIndex] = useState(0)
    const [desc, setDesc] = useState(false)
    const [equip, setEquip] = useState(false)

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
                        <button id='prevBtn' onClick={decrement}><FaArrowLeft /></button>
                        <button id='nextBtn' onClick={increment}><FaArrowRight /></button>
                    </div>
                    <div>
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
                        <div id='collapse'>
                            <div className='styleCollapse'>
                                <div onClick={() => setDesc(!desc)}>
                                    <p>Description</p>
                                    {!desc ? <FaArrowDown /> : <FaArrowUp />}
                                </div>
                                <Collapse isOpened={desc}>
                                    <div>
                                        <p>{logement.description}</p>
                                    </div>
                                </Collapse>
                            </div>
                            <div className='styleCollapse'>
                                <div onClick={() => setEquip(!equip)}>
                                    <p>Équipements</p>
                                    {!equip ? <FaArrowDown /> : <FaArrowUp />}
                                </div>
                                <Collapse isOpened={equip}>
                                    <div className='grid'>
                                        {equips.map((equip) => (
                                            <p key={equip}>{equip}</p>
                                        ))}
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Details