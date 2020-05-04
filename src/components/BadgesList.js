import React from 'react';
import './styles/BadgesList.css';
import BadgesListItem from './BadgeListItem';
import { Link } from 'react-router-dom';

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);
    React.useMemo(() => {

        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        })

        setFilteredBadges(result)

    }, [badges, query]);

    return { setQuery, filteredBadges }
}

function BadgesList(props) {
    const badges = props.badges;
    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if (filteredBadges.length === 0) {

        return (
            <div>

                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text"
                        className="form-control"
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                        value={query}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link to="/badges/new"> Create new Badge</Link>
            </div>
        )

    }
    return (
        <div className="BadgesList__container mb-5">
            <div className="form-group ">
                <label>Filter Badges</label>
                <input type="text"
                    className="form-control mr-2"
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    value={query}
                />
            </div>
            <ul className="BadgesList__wrapper mb-6">
                {
                    filteredBadges.map(badge =>
                        <li key={badge.id} className="BadgeList__item">
                            <Link className="text-reset text-decoration-none"
                                to={`badges/${badge.id}`}>
                                <BadgesListItem badge={badge} />
                            </Link>


                        </li>
                    )
                }
            </ul>
        </div>
    );
}


export default BadgesList;