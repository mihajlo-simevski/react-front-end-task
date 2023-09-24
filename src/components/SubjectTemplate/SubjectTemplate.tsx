import H1Input from '@mui/joy/Input';
import { SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import ChangeIcon from '../../assets/icons/change-icon.svg';
import EditIcon from '../../assets/icons/edit-icon.svg';
import OptionIcon from '../../assets/icons/option-icon.svg';
import PlusIcon from '../../assets/icons/plus-icon.svg';
import RectangleIcon from '../../assets/icons/rectangle-icon.svg';
import { updateHeader } from '../../store/subjectTemplateSlice';
import Button from '../Button/Button';
import Input from '../Input/Input';
import SpeakerItem from '../SpeakerItem/SpeakerItem';
import SwitchField from '../SwitchField/SwitchField';
import TextArea from '../TextArea/TextArea';

import './SubjectTemplate.scss';

type SubjectTemplateChildProps = {
  data: {
    id: number;
    template: string;
    startTime: string;
    endTime: string;
    requiredAttendance?: boolean;
    subjectTitle?: string;
    description?: string;
    speakers?: {
      id: number;
      name: string;
      url: string;
    }[];
  };
};

export default function SubjectTemplate({
  data: {
    id,
    startTime,
    endTime,
    requiredAttendance,
    subjectTitle,
    description,
    speakers,
  },
}: SubjectTemplateChildProps) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState('');

  const handleEditIconClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    dispatch(
      updateHeader({
        id,
        subjectTitle: editedText,
      })
    );
  };

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEditedText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      (e.target as HTMLElement).blur();
    }
  };

  return (
    <section className="SubjectTemplate">
      <div className="subject-wrapper">
        <div>
          <p className="subject-time">
            <span className="subject-theme-circle" />
            {startTime}
            -
            {endTime}
          </p>
          <section className="subject-cover">
            <Button variant="primary" type="button">
              <img src={ChangeIcon} alt="change cover icon" />
              Change Subject Image
            </Button>
          </section>
          <SwitchField requiredAttendance={!!requiredAttendance} />
        </div>
      </div>
      <div className="content-wrapper">
        <div className="subject-title">
          <figure>
            <figcaption>Subject title</figcaption>
            <div>
              <img src={RectangleIcon} alt="rectangle icon" />
              {isEditing ? (
                <H1Input
                  type="text"
                  autoFocus
                  value={editedText}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                  onKeyUp={handleKeyPress}
                />
              ) : (
                <>
                  <h2>{subjectTitle}</h2>
                  <button type="button" onClick={handleEditIconClick}>
                    <img src={EditIcon} alt="edit icon" />
                  </button>
                </>
              )}
            </div>
          </figure>
          <div className="option">
            <img src={OptionIcon} alt="rectangle icon" />
          </div>
        </div>
        <div className="subject-time-range">
          <Input defaultValue="12:00" label="Subject start time" />
          <Input defaultValue="14:00" label="Subject end time" />
        </div>
        <div>
          <TextArea
            label="Subject description"
            value={description}
            placeholder=""
          />
        </div>
        <div className="subject-speakers">
          <h2>Speaker(s)</h2>
          <div className="list-of-speakers">
            {speakers?.map((speaker) => (
              <SpeakerItem key={speaker.id} speaker={speaker} />
            ))}
            <div className="button-wrapper">
              <Button variant="secondary" type="button">
                <img src={PlusIcon} alt="plus icon" />
                Add a subject here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
