// /*!

// =========================================================
// * Black Dashboard React v1.2.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/black-dashboard-react
// * Copyright 2020 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
import { Tab } from "bootstrap";
import React, { Component } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Table, Button } from 'semantic-ui-react';
import Newpackage from "./Newpackage";
import axios from 'axios';




class Icons extends Component {

  state = {
    packages: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/packages/').then(
      response => {
        if (response.data.length > 0) {
          this.setState({
            packages: response.data.map(pack => {
              return (
                <tr key={pack._id}>
                  <td>{pack.planName}</td>
                  <td>{pack.minimumAmount}</td>
                  <td>{pack.status}</td>
                  <td className="text-center">$36,738</td>
                </tr>
              );
            })
          });

        }
      });

  }


  onAddPackage = () => {
    this.props.history.push('/admin/packages/new');
  }





  render() {
    const { Header, Row, Headercell, Body } = Table;
    return (

      <div className="content">



        <h3>Manage plans</h3>

        <button style={{
          backgroundColor: "DodgerBlue",
          border: "2px solid white",
          padding: "12px 16px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          float: "right",
          marginBottom: "20px",
          marginRight: "60px",
          borderRadius: "20px",


          hover: {
            backgroundColor: "RoyalBlue"
          }
        }}

          onClick={this.onAddPackage}

        >Add plans</button>

        <Table className="tablesorter" responsive style={{ marginTop: "10px" }}>
          <thead className="text-primary">
            <tr>
              <th>Name</th>
              <th>InvestmentLimit</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.packages}
          </tbody>
        </Table>
      </div >



    );

  }
}

export default Icons;

