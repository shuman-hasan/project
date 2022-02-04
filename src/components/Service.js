import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button, Table} from 'reactstrap';

function Service() {
  return <div className='container'>
            <div className='row'>
                <div className='col-12 p-4'>
                    <h2>Our Services</h2>
                </div>
              <div className='col-md-3'>
                 <div>
                <Card
                >
                    <CardBody>
                    <CardTitle tag="h5">
                        Graphic Design
                    </CardTitle>
                   
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button className='btn-info'>
                        Know More
                    </Button>
                    </CardBody>
                </Card>
             </div>
          </div>
          <div className='col-md-3'>
          <div>
                <Card
                >
                    <CardBody>
                    <CardTitle tag="h5">
                        Web Development
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button className='btn-info'>
                    Know More
                    </Button>
                    </CardBody>
                </Card>
             </div>
          </div>

          <div className='col-md-3'>
          <div>
                <Card
                >
                    <CardBody>
                    <CardTitle tag="h5">
                        Digital Marketing
                    </CardTitle>
                  
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button className='btn-info'>
                    Know More
                    </Button>
                    </CardBody>
                </Card>
             </div>
          </div>

          <div className='col-md-3'>
          <div>
                <Card
                >
                    <CardBody>
                    <CardTitle tag="h5">
                        Content Writing
                    </CardTitle>
                    
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button className='btn-info'>
                    Know More
                    </Button>
                    </CardBody>
                </Card>
             </div>
          </div>

            <div className='col-md-12 p-5'>
            <Table dark>
     <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>
            </div>


      </div>
  </div>;
}

export default Service;
