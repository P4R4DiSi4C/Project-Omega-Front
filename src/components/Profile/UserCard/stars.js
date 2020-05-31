import React from 'react';


// icons
import Icon from '../../Icon';

export default ({stars_nb}) => {
    const stars_to_display = [];
    const missing_stars = [];

    for (var i=0; i < stars_nb; i++) {
        stars_to_display.push(<Icon key={i} icon={['fa', 'star']}/>);
    }
    
    for (i=0; i < 5-stars_nb; i++) {
        missing_stars.push(<Icon key={i} icon={['far', 'star']}/>  );
    }

    return (
        <div>
            {stars_to_display}
            {missing_stars}
        </div>
    )
};

