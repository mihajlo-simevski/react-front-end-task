import ChangeIcon from '../../assets/icons/change-icon.svg';
import EditIcon from '../../assets/icons/edit-icon.svg';
import OptionIcon from '../../assets/icons/option-icon.svg';
import RectangleIcon from '../../assets/icons/rectangle-icon.svg';
import Button from '../Button/Button';
import SwitchField from '../SwitchField/SwitchField';

import './SubjectTemplate.scss';

export default function SubjectTemplate() {
  return (
    <section className="SubjectTemplate">
      <div className="subject-wrapper">
        <div>
          <p className="subject-time">
            <span className="subject-theme-circle" />
            8:30 - 10:15
          </p>
          <section className="subject-cover">
            <Button variant="primary" type="button">
              <img src={ChangeIcon} alt="change cover icon" />
              Change Subject Image
            </Button>
          </section>
          <SwitchField />
        </div>
      </div>
      <div className="content-wrapper">
        <div className="subject-title">
          <figure>
            <figcaption>Subject title</figcaption>
            <div>
              <img src={RectangleIcon} alt="rectangle icon" />
              <h1>Some subject title</h1>
              <img src={EditIcon} alt="edit icon" />
            </div>
          </figure>
          <div className="option">
            <img src={OptionIcon} alt="rectangle icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
