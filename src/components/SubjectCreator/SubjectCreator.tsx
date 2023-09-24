import PlusIcon from '../../assets/icons/plus-icon.svg';
import Button from '../Button/Button';

import './SubjectCreator.scss';

type SubjectCreatorChildProps = {
  data: {
    id: number;
    template: string;
    startTime: string;
    endTime: string;
  };
}

export default function SubjectCreator({ data: { startTime, endTime } }: SubjectCreatorChildProps) {
  return (
    <section className="SubjectCreator">
      <section className="add-subject">
        <div className="time-wrapper">
          <span className="time">
            {startTime}
            -
            {endTime}
          </span>
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
