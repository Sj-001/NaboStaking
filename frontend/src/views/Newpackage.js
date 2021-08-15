/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
// react plugin for creating notifications over the dashboard
// import NotificationAlert from "react-notification-alert";
import axios from "axios";
import { Container, Form, Input, Grid, Button, Dropdown } from 'semantic-ui-react';
import { flattenDiagnosticMessageText } from "typescript";


// function Notifica

class Newpackage extends Component {
    state = {
        database: [],
        loading: false,
        amountTypeRange: true,
        returnTypeLifetime: true,
        capitalBack: false,
        statusactive: false,
        featured: false,
        planName: '',
        minimumAmount: '',
        maximumAmount: '',
        amount: '',
        interest: '',
        every: '',
        HowManyTimes: '',
    }


    savedatabase = () => {
        this.setState({ loading: true });
        console.log('hey');
        const { planName, minimumAmount, maximumAmount,
            amount, every, interest, HowManyTimes } = this.state;


        console.log(every);

        const doc = {
            planName,
            amountType: (this.state.amountTypeRange ? "Range" : "Fixed"),
            minimumAmount,
            maximumAmount,
            amount,
            every,
            interest,
            returnFor: (this.state.returnTypeLifetime ? "Lifetime" : "Period"),
            capitalBack: (this.state.capitalBack ? "Yes" : "No"),
            status: (this.state.statusactive ? "Active" : "Disable"),
            Featured: (this.state.featured ? "Yes" : "No"),
            HowManyTimes
        };


        axios.post('http://localhost:3001/packages/add', doc)
            .then(res => console.log(res.data));





        this.state.database.push(doc);
        console.log(this.state.database);
        this.setState({ loading: false });

    }







    render() {

        const database = [];


        const timeOptions = [
            { key: 1, text: 'Hour', value: 1 },
            { key: 2, text: 'Day', value: 2 },
            { key: 3, text: 'Week', value: 3 },
            { key: 4, text: 'Month', value: 4 },
            { key: 5, text: 'Year', value: 5 }
        ]

        return (
            <div className="content">
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                ></link>

                <Container>
                    <h3 style={{ color: "white" }}>Create new plan</h3>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Form>
                                    <Form.Field>
                                        <label style={{ color: "white" }}>Plan Name</label>
                                        <Input value={this.state.planName} onChange={event => this.setState({ planName: event.target.value })} />
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form.Field>
                                    <label style={{ color: "white" }}>Amount Type</label>
                                </Form.Field>

                                <Button content={this.state.amountTypeRange ? "Range" : "Fixed"}
                                    onClick={() => this.setState({ amountTypeRange: !this.state.amountTypeRange })}
                                    positive={this.state.amountTypeRange}
                                    negative={!this.state.amountTypeRange}
                                    fluid />

                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form>
                                    <Form.Field>
                                        <label style={{ color: "white" }}>Minimum Amount</label>
                                        <Input
                                            value={this.state.minimumAmount}
                                            label='$' labelPosition="right"
                                            onChange={event => this.setState({ minimumAmount: event.target.value })}
                                        />
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form.Field>
                                    <label style={{ color: "white" }}>Maximum Amount</label>
                                    <Input
                                        value={this.state.maximumAmount}
                                        label='$' labelPosition="right"
                                        onChange={event => this.setState({ maximumAmount: event.target.value })} />
                                </Form.Field>
                            </Grid.Column>

                            {
                                !this.state.amountTypeRange ?
                                    <Grid.Column width={4} >
                                        <Form.Field>
                                            <label style={{ color: "white", marginTop: "10px" }}> Amount</label>
                                            <Input
                                                value={this.state.amount}
                                                onChange={event => this.setState({ amount: event.target.value })}
                                                label='$' labelPosition="right" />
                                        </Form.Field>
                                    </Grid.Column>
                                    :
                                    null

                            }


                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Form>
                                    <Form.Field>
                                        <label style={{ color: "white" }}>Return / Interest</label>
                                        <Input
                                            value={this.state.interest}
                                            onChange={event => this.setState({ interest: event.target.value })}
                                            label='%' labelPosition="right" />
                                    </Form.Field>
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form.Field>
                                    <label style={{ color: "white" }}>Every</label>
                                </Form.Field>
                                <Dropdown
                                    selection
                                    onChange={(e, { value }) => this.setState({ every: timeOptions[value - 1].text })}
                                    value={this.state.every}
                                    options={timeOptions} selection fluid />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form>
                                    <Form.Field>
                                        <label style={{ color: "white" }}>Return For</label>
                                        {/* <Input label='wei' labelPosition="right" /> */}
                                    </Form.Field>
                                    <Button content={this.state.returnTypeLifetime ? "Lifetime" : "Period"}
                                        onClick={() => this.setState({ returnTypeLifetime: !this.state.returnTypeLifetime })}
                                        positive={!this.state.returnTypeLifetime}
                                        negative={this.state.returnTypeLifetime}
                                        fluid />
                                </Form>
                            </Grid.Column>

                            {
                                !this.state.returnTypeLifetime ?
                                    <Grid.Column width={4} >
                                        <Form.Field>
                                            <label style={{ color: "white", marginTop: "10px" }}> How many times</label>
                                            <Input
                                                onChange={event => this.setState({ HowManyTimes: event.target.value })}
                                                label='$' labelPosition="right" />
                                        </Form.Field>
                                    </Grid.Column>
                                    :
                                    null

                            }

                            <Grid.Column width={4}>
                                <Form.Field>
                                    <label style={{ color: "white" }}>Capital Back</label>
                                    {/* <Input label='wei' labelPosition="right" /> */}
                                </Form.Field>
                                <Button content={this.state.capitalBack ? "Yes" : "No"}
                                    style={{ marginTop: "5px" }}
                                    onClick={() => this.setState({ capitalBack: !this.state.capitalBack })}
                                    positive={this.state.capitalBack}
                                    negative={!this.state.capitalBack}
                                    fluid />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Form>
                                    <Form.Field>
                                        <label style={{ color: "white" }}>Status</label>
                                        {/* <Input label='wei' labelPosition="right" /> */}
                                    </Form.Field>
                                    <Button content={this.state.statusactive ? "Active" : "Disable"}
                                        style={{ marginTop: "5px" }}
                                        onClick={() => this.setState({ statusactive: !this.state.statusactive })}
                                        positive={this.state.statusactive}
                                        negative={!this.state.statusactive}
                                        fluid />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Form.Field>
                                    <label style={{ color: "white" }}>Featured</label>
                                    {/* <Input label='wei' labelPosition="right" /> */}
                                </Form.Field>
                                <Button content={this.state.featured ? "Yes" : "No"}
                                    style={{ marginTop: "5px" }}
                                    onClick={() => this.setState({ featured: !this.state.featured })}
                                    positive={this.state.featured}
                                    negative={!this.state.featured}
                                    fluid />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Button content="Save" primary fluid onClick={this.savedatabase}
                                loading={this.state.loading} />
                        </Grid.Row>

                    </Grid>




                </Container>

            </div>
        );
    }
}

export default Newpackage;
