import { Row } from 'react-bootstrap';
import DressCard from './DressCard';

function CardsContainer(props) {
    const dresses = props.dressesArr.map((dress) => {
        return <DressCard key={dress._id} dress={dress} />
    });

    return(
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
            {dresses}
        </Row>
    )
}

export default CardsContainer;