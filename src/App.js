import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return <div>Wrap some text</div>;
  }

  getMorningGreeting() {
    return <div>Good Morning</div>;
  }

  getEveningGreeting() {
    return <div>Good Evening</div>;
  }

  showCompany(name, revenue) {
    return (
      <div>
        <p id={name}>
          This is the company: {name} and it makes revenue of {revenue}
        </p>
      </div>
    );
  }

  getClassName(temperature) {
    return (
      <div>
        {temperature < 15 ? (
          <div id="weatherBox" class="freezing"></div>
        ) : temperature > 15 && temperature < 30 ? (
          <div id="weatherBox" class="fair"></div>
        ) : (
          <div id="weatherBox" class="hell-scape"></div>
        )}
      </div>
    );
  }

  render() {
    let companies = [
      { name: 'Tesla', revenue: 140 },
      { name: 'Microsoft', revenue: 300 },
      { name: 'Google', revenue: 600 },
    ];

    return (
      <div>
        <div className="ex-space">
          <h4 className="ex-title">Spot-check 1</h4>
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>
        <div className="ex-space">
          <h4 className="ex-title">Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() > 12
              ? this.getEveningGreeting()
              : this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              <p>text</p>,
              this.getMorningGreeting(),
              this.getEveningGreeting(),
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map((p) => this.showCompany(p.name, p.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {
            this.getClassName(10)
        
            }
            <div> {this.getClassName(20)}
           </div>
           <div> {this.getClassName(40)}
           </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
