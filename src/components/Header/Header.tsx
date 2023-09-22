import ChangeIcon from '../../assets/icons/change-icon.svg';
import DropDownIcon from '../../assets/icons/dropdown-icon.svg';
import EditIcon from '../../assets/icons/edit-icon.svg';
import ThreeDotsIcon from '../../assets/icons/three-dots-icon.svg';

import Button from '../Button/Button';
import NavigationBar from '../NavigationBar/NavigationBar';

import './Header.scss';

export default function Header() {
  return (
    <header className="Header">
      <section className="header-wrapper">
        <div className="button-wrapper">
          <Button variant="primary" type="button">
            <img src={ChangeIcon} alt="change cover icon" />
            Change Program Cover
          </Button>
        </div>
        <section className="header-content-wrapper">
          <section className="header-content">
            <section className="header-title">
              <figure>
                <figcaption>Program title</figcaption>
                <div>
                  <h1>NYC Conference</h1>
                  <img src={EditIcon} alt="edit icon" />
                </div>
              </figure>
            </section>
            <section className="header-status">
              <div className="status-label">STATUS</div>
              <div className="status-content">
                <img src={ThreeDotsIcon} alt="three dots icon" />
                <div>Upcoming</div>
                <img src={DropDownIcon} alt="edit icon" />
              </div>
            </section>
          </section>
          <NavigationBar />
        </section>
      </section>
    </header>
  );
}
