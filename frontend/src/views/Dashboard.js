import React, { Component } from 'react';


import { Container, Form, Input, Grid, Button, Dropdown } from 'semantic-ui-react';



class Dashboard extends Component {

  render() {
    return (

      <div className="content" >
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        ></link>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <Form>
                  <Form.Field>
                    <label style={{ color: "white" }}>Plan Name</label>
                    <Input />
                  </Form.Field>
                </Form>
              </Grid.Column>

              <Grid.Column width={5}>
                <Form>
                  <Form.Field>
                    <label style={{ color: "white" }}>Plan Name</label>
                    <Input />
                  </Form.Field>
                </Form>
              </Grid.Column>

              <Grid.Column width={5}>
                <Form>
                  <Form.Field>
                    <label style={{ color: "white" }}>Plan Name</label>
                    <Input />
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={5}>
                <Button content="something" fluid />
              </Grid.Column>

              <Grid.Column width={5}>
                <Button content="something" fluid />
              </Grid.Column>

              <Grid.Column width={5}>
                <Button content="something" fluid />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={5}>
                <Form.Field>
                  <label style={{ color: "white" }}>Address</label>
                  <Input />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={10}>
                <Button content="Staking Balance" primary fluid />
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Container>
      </div>


    );
  }
}


export default Dashboard;