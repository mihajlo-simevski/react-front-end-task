import ChangeIcon from '../../assets/icons/change-icon.svg';
import Button from '../Button/Button';
import SwitchField from '../SwitchField/SwitchField';

import './SubjectTemplate.scss';

export default function SubjectTemplate() {
  return (
    <section className="SubjectTemplate">
      <div className="subject-wrapper">
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
    </section>
  );
}
