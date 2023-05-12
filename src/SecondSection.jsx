import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Styles/style.css'

const SecondSection = () => {
    return (
        <div className='mt-4'>

            {/* <h2 className='text-center text-primary'>RECIPES</h2>
            <h3 className='text-center text-primary'>FEATURED RECIPES</h3> */}
            <img src="/public/images/recipe.png" className='w-100 zoom' alt="" />

            <Row xs={1} md={2} className="g-3">
                <Col>
                    <Card className='w-75 zoom'>
                        <div ><Card.Img variant="top" src="/public/images/food1.png" className='w-100 view overlay zoom' /></div>
                        <Card.Body>
                            <Card.Title>Goalondo Steamer Curry</Card.Title>
                            {/* <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-75  zoom'>
                        <Card.Img variant="top" src="/public/images/food2.png" />
                        <Card.Body>
                            <Card.Title>Beef Kalabhuna</Card.Title>
                            {/* <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-75  zoom'>
                        <Card.Img variant="top" src="/public/images/food3.png" />
                        <Card.Body>
                            <Card.Title>Kachci Biryani</Card.Title>
                            {/* <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-75  zoom'>
                        <Card.Img variant="top" src="/public/images/food4.png" />
                        <Card.Body>
                            <Card.Title>Mezbani Mangsho</Card.Title>
                            {/* <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-75  zoom'>
                        <Card.Img variant="top" src="/public/images/food5.png" />
                        <Card.Body>
                            <Card.Title>Dhakai Chicken Roast</Card.Title>
                            {/* <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='w-75  zoom'>
                        <Card.Img variant="top" src="/public/images/food6.png" />
                        <Card.Body>
                            <Card.Title>Doyra Kolar Chorchori</Card.Title>
                            {/* <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <div className='mt-4 mb-4'><img src="/public/images/philocopy.png" className='w-100 zoom' alt="" /></div>
            <div className='row row-cols-1 row-cols-lg-3'>
                <div className='col '><p>This blog resembles the pages of a glossy food magazine with a fleet of stylists making sure every bite looks impossibly scrumptious. But behind the scenes, there’s just one incredible couple, Amy and Dylan Jameson. The division of labor is simple:</p></div>
                <div className='col'><p>She cooks and blogs; he photographs. The result elevates whole-food ingredients to epic proportions. Sandwiches, noodles, green salads, and other divine dishes have earned the attention of many in the food world, including magazine, which named Good Food.</p></div>
                <div className='col'>One of the best original recipe blogs. The blog below contain out-of-this-world recipes, insightful posts on diet trends, and realistic tips to help you eat smarter—whether you’re Paleo, vegetarian, gluten-free, or just happen to love food.</div>
            </div>
        </div >
    );
};

export default SecondSection;