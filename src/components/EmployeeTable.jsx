import React, { Component } from "react";
import { Table } from "react-bootstrap";

const tableStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#666",
};

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          items: response.results,
          loading: true,
        })
      );
  }

  render() {
    var { items, loading } = this.state;
    if (!loading) {
      return <div>Currently loading, may take a few moments.</div>;
    } else {
      return (
        <div className="container" style={tableStyle}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Picture</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
              </tr>
            </thead>
            {items.map((item) => (
              <tbody>
                <tr>
                  <td>
                    <img src={item.picture.medium} alt={item.name.first} />
                  </td>
                  <td>{item.location.street.number}</td>
                  <td>
                    {item.name.first}&nbsp;{item.name.last}
                  </td>
                  <td>{item.email}</td>
                  <td>
                    {item.location.city},&nbsp;{item.location.state}
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      );
    }
  }
}

export default EmployeeTable;
