import { useState } from "react";
import LogementCard from "../components/LogementCard";
import data from "../data/logements.json";

const Logements = () => {
    const [logements] = useState(data);
    
    return (
        <section id="logements">
            <div className="logement-list">
                {logements.map((logement) => (
                    <LogementCard
                        key={logement.id}
                        picture={logement.pictures[0]}
                        title={logement.title}
                        location={logement.location}
                        tags={logement.tags}
                        rating={logement.rating}
                    />
                ))}
            </div>
        </section>
    );
};

export default Logements;