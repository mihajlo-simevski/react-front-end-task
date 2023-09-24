import { useDispatch } from 'react-redux';
import PlusIcon from '../../assets/icons/plus-icon.svg';
import Button from '../Button/Button';

import { updateSubjectTemplateItem } from '../../store/subjectTemplateSlice';
import './SubjectCreator.scss';

type SubjectCreatorChildProps = {
  data: {
    id: number;
    template: string;
    startTime: string;
    endTime: string;
  };
};

// eslint-disable-next-line max-len
export default function SubjectCreator({ data: { id, startTime, endTime } }: SubjectCreatorChildProps) {
  const dispatch = useDispatch();

  const blankSubject = {
    id,
    template: 'SubjectTemplate',
    startTime: '8:00',
    endTime: '10:15',
    requiredAttendance: false,
    subjectTitle: 'Some subject title',
    description: 'Lorem Ipsum',
    speakers: [
      {
        id: 1,
        name: 'Anna Smith',
        url: '/images/anna-smith_avatar.png',
      },
    ],
  };

  // eslint-disable-next-line no-unused-vars
  const handleClick = () => {
    dispatch(
      updateSubjectTemplateItem({
        id,
        newItem: blankSubject,
      })
    );
  };
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
        <Button variant="secondary" type="button" onClick={handleClick}>
          <img src={PlusIcon} alt="plus icon" />
          Add a subject here
        </Button>
      </section>
    </section>
  );
}
