import React from "react";
import { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({history}) => {
	const { heroeId } = useParams(),
		hero = useMemo(() => getHeroById(heroeId), [heroeId]);

	if (!hero) return <Redirect to="/" />;

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
    
    const handleReturn = () => {

        if(history.length <= 2) {
            history.push('/')
        } else {
            history.goBack();
        }

    }

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img className="img-thumbnail animate__animated animate__fadeInLeft" src={`/assets/img/${id}.jpg`} alt={superhero} />
			</div>
			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group mt-4">
					<li className="list-group-item">
						<b>Alter ego: {alter_ego}</b>
					</li>
                    <li className="list-group-item">
						<b>Publisher: {publisher}</b>
					</li>
                    <li className="list-group-item">
						<b>First appearance: {first_appearance}</b>
					</li>
				</ul>

                <h5 className="mt-5">Characters</h5>
                <p>{characters}</p>

                <button onClick={handleReturn} className="btn btn-outline-info">Regresar</button>
			</div>
		</div>
	);
};
