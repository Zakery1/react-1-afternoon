import React, { Component } from 'react';

export default class FilterObject extends Component {
    
    constructor() {
        super();

        this.state = {
            employees: [
                {
                name:'paul', age:20,
                hairColor:'black'
                }, 
                {
                name:'phil', age:30,
                title:'engineer'
                },
                {
                name:'sam',
                age:50,
                favoriteFood:'pizza'
            }
        ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterEmployees(prop) {
        var employees = this.state.employees;
        var filteredEmployees = [];

        for (const i = 0; i < employees.length; i++) {
            if (employees[i].hasOwnProperty(prop)){
                filteredEmployees.push(employees[i]);
            }
        }
        this.setState({filteredEmployees:filteredEmployees});
    }

    


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) }</span>
                <input className="inputLine" onChange={(e) =>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
                <span className="resultBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
            </div>
        )
    }
}