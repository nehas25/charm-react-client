import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DressCard(props) {
    return(
        <Link to={`/dresses/${props.dress._id}`}>
            <Col className="mb-4">
                <Card>
                    {/* <Card.Img variant="top" src={`${props.dress.imgUrls[0]}`} fluid="true" /> */}
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + `${props.dress.imgUrls[0]}`} fluid="true" />
                    <Card.Text className="dress-card-content">{props.dress.name}</Card.Text>
                </Card>
            </Col>
        </Link>
    )
}

export default DressCard;