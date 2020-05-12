import React from 'react';

// libs
import Flex from '../../Flex';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({stars_nb}) => {
    const stars_to_display = [];
    const missing_stars = [];

    for (var i=0; i < stars_nb; i++) {
        stars_to_display.push(<FontAwesomeIcon icon={['fa', 'star']} size="lg" color="#f7cc2f"/>);
    }
    
    for (i=0; i < 5-stars_nb; i++) {
        missing_stars.push(<FontAwesomeIcon icon={['far', 'star']} size="lg" color="#f7cc2f"/>  );
    }

    return (
        <Flex percentage="100%" align="center">
            {stars_to_display}
            {missing_stars}
        </Flex>
    )
};

