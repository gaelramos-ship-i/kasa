import { CiLocationOn } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";
import { LiaStar } from "react-icons/lia";

const LogementCard = ({ title, location, picture, tags, id, rating }) => (
    <article className="logement-card">
        <a href={`/details?id=${id}`} >
            <img src={picture} alt={title} />
            <h3>{title}</h3>
            <div className="location">
                <CiLocationOn />
                <p>{location}</p>
            </div>
            <div className="tags">
                {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((index) => {
                    const star = index <= rating;
                    const StarBorder = star ? LiaStarSolid : LiaStar;

                    return (
                        <StarBorder
                            key={index}
                            className={star ? "star" : "star empty"}
                        />
                    );
                })}
                <p>({parseFloat(rating).toFixed(1)})</p>
            </div>
        </a>
    </article>
);

export default LogementCard;