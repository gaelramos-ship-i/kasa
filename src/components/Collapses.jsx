import { useState } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import data from "../data/logements.json"

import { Collapse } from 'react-collapse'



const Collapses = () => {

    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    const logement = data.find((item) => item.id === id)

    const [desc, setDesc] = useState(false)
    const [equip, setEquip] = useState(false)

    const equips = logement.equipments

    return (
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
    )
}

export default Collapses