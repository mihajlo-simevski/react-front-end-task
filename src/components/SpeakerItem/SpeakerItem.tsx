import AnnaAvatar from '../../assets/images/anna-smith_avatar.png';
import WriteIcon from '../../assets/icons/write-icon.svg';

import './SpeakerItem.scss';

export default function SpeakerItem() {
  return (
    <div className="SpeakerItem">
      <div className="speaker-info">
        <img src={AnnaAvatar} alt="avatar" />
        <p>Anna Smith</p>
      </div>
      <div className="speaker-edit">
        <span className="subject-theme-circle" />
        <img src={WriteIcon} alt="write icon" />
      </div>
    </div>
  );
}
