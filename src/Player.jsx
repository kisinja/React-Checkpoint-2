import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '1rem' }}>
            <div style={{ width: '100%', height: '100%' }}>
                <Card.Img variant="top" src={imageUrl} id='player-img' />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

// Default props
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown Nationality",
    jerseyNumber: 0,
    age: 0,
    imageUrl: "https://via.placeholder.com/150"
};

export default Player;
