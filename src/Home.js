import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <h3> News & Updates </h3>
          <ul>
            <li><strong>Singlewire Software Opens New Headquarters in Madison</strong></li>
            <li>Singlewire Software opens new headquarters to support growing team working on InformaCast emergency
              notification software.
            </li>
            <br />
            <li><strong>NEWS: Singlewire Software Releases InformaCast Fusion for Enhanced Emergency Communications</strong></li>
            <li>Singlewire Software, a leading mass notification technology developer, releases InformaCast Fusion, its
              new cloud-based emergency notification system.
            </li>
            <br />
            <li><strong>Singlewire Releases InformaCast 11.5.1 Update</strong></li>
            <li>Singlewire Releases InformaCast 11.5.1 Update, improving the best platform for emergency notification.
              This update offers a number of new performance, security and management features, and provides expanded
              support options.
            </li>
            <br />
            <li><strong>InformaCast Mobile Launches Conference Call Collaboration</strong></li>
            <li>Bring together up to 40 people in one conference call to help manage an emergency situation, using
              InformaCast Mobile.
            </li>
            <br />
            <li><strong>Paging Gateway Updates Feature Optimized Operating System</strong></li>
            <li>Updates include a new operating system, improved reliability, and the ability to upgrade your Paging
              Gateways across the network from your InformaCast server.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;