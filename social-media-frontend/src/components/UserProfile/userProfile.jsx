import React from 'react';
import Card from  'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './userProfile.css';

const UserProfile = () => {
    return(
        <div>
            <div className="profile">
            <Card className="profile_card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <div className="container m-2">
                <Card.Title>Nickname</Card.Title>
                <Card.Text>
                I joined MusicApp to: blah blah blah
                </Card.Text>
                </div>
                <ListGroup variant="flush">
                    <Card.Title className="m-2">MUSICAL INTERESTS:</Card.Title>
                    <ListGroup.Item>Rap</ListGroup.Item>
                    <ListGroup.Item>RnB</ListGroup.Item>
                    <ListGroup.Item>Punk Rock</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            </Card>
            
            <Card className="container">
            <Card.Header>FIRST NAME LAST NAME</Card.Header>
            <Card.Body>
                <Card.Title>About me</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente tempora labore beatae blanditiis ex id sed tenetur laudantium incidunt minus consequuntur nulla nihil provident magni, mollitia laboriosam eaque neque veniam!
                </Card.Text>
            </Card.Body>
            <Button variant="outline-dark" className="m-2">Add friend</Button>
            <Button variant="outline-dark" className="m-2">Remove friend</Button>
            </Card>
            </div>

            <footer class="py-3 bg-light">
            <div class="container">
                <p class="text-center">Copyright &copy; MusicApp 2021</p>
            </div>
            </footer>
            </div>
    )
}

export default UserProfile;