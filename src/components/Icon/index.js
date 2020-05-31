// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default Styled(FontAwesomeIcon)`
    color:${props => props.theme.main}
`;