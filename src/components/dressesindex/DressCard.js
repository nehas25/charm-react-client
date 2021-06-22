import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DressCard(props) {
    return(
        <Link to={`/dresses/${props.dress._id}`}>
            <Col className="mb-4">
                <Card>
                    <Card.Img variant="top" src={`${props.dress.imgUrls[0]}`} fluid="true" />
                    <Card.Title>{props.dress.name}</Card.Title>
                </Card>
            </Col>
        </Link>
    )
}

export default DressCard;