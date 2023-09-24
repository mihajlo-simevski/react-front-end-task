import WriteIcon from '../../assets/icons/write-icon.svg';

import './SpeakerItem.scss';

type SpeakerItemChildProps = {
  speaker: {
    name: string;
    url: string;
  };
};

export default function SpeakerItem({ speaker: { name, url } }: SpeakerItemChildProps) {
  return (
    <div className="SpeakerItem">
      <div className="speaker-info">
        <img src={url} alt="avatar" />
        <p>{name}</p>
      </div>
      <div className="speaker-edit">
        <span className="subject-theme-circle" />
        <img src={WriteIcon} alt="write icon" />
      </div>
    </div>
  );
}
