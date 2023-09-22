import Button from '../Button/Button';
import PlusIcon from '../../assets/icons/plus-icon.svg';

import './SubjectCreator.scss';

export default function SubjectCreator() {
  return (
    <section className="SubjectCreator">
      <section className="add-subject">
        <div className="time-wrapper">
          <span className="time">7:00 - 8:30 </span>
          <span className="time-divider" />
          <span className="time-gap"> 2h 45m gap</span>
        </div>
        <Button variant="secondary" type="button">
          <img src={PlusIcon} alt="plus icon" />
          Add a subject here
        </Button>
      </section>
    </section>
  );
}
