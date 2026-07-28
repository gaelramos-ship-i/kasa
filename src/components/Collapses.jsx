import { useState } from "react"

import { FaArrowDown, FaArrowUp, FaBolt, FaFire, FaMountain, FaShower, FaSnowflake, FaTemperatureHigh, FaTree, FaWater } from "react-icons/fa";
import { FaChildren, FaFireBurner, FaPersonSwimming } from "react-icons/fa6";
import { FiTv } from "react-icons/fi";
import { IoWifiSharp } from "react-icons/io5";
import { MdCoffeeMaker, MdDeck, MdDryCleaning, MdElevator, MdLocalLaundryService, MdOutdoorGrill, } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";

import data from "../data/logements.json"

import { Collapse } from 'react-collapse'


const Collapses = () => {

    const url = new URL(window.location.href)
    const id = url.searchParams.get("id")

    const logement = data.find((item) => item.id === id)

    const [desc, setDesc] = useState(false)
    const [equip, setEquip] = useState(false)

    const equips = logement.equipments

    const icons = {
        Wifi: <IoWifiSharp />,
        Télévision: <FiTv />,
        TV: <FiTv />,
        Cuisine: <TbToolsKitchen2 />,
        Kitchenette: <TbToolsKitchen2 />,
        "Cuisine moderne": <TbToolsKitchen2 />,
        "Cuisine équipée": <TbToolsKitchen2 />,
        Climatisation: <FaSnowflake />,
        Chauffage: <FaTemperatureHigh />,
        "Machine à laver": <MdLocalLaundryService />,
        Jardin: <FaTree />,
        Barbecue: <MdOutdoorGrill />,
        Cheminée: <FaFire />,
        "Poêle à bois": <FaFireBurner />,
        "Eau chaude": <FaShower />,
        "Toilettes sèches": <FaWater />,
        "Machine à café": <MdCoffeeMaker />,
        Piscine: <FaPersonSwimming />,
        "Lave-vaisselle": <MdDryCleaning />,
        Sauna: <FaMountain />,
        Ascenseur: <MdElevator />,
        "Jeux enfants": <FaChildren />,
        Terrasse: <MdDeck />,
        Electricité: <FaBolt />,
    }

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
                            <p key={equip}>{icons[equip]}{equip}</p>
                        ))}
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Collapses