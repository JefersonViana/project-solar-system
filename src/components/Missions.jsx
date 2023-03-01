// import PropTypes from 'prop-types';
import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (
          <li key={ name }>
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          </li>
        ))}
      </div>
    );
  }
}

// Missions.propTypes = {
//   headline: PropTypes.string.isRequired,
// };

export default Missions;
