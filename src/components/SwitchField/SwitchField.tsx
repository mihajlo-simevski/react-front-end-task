import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import LinkIcon from '../../assets/icons/link-icon.svg';

import './SwitchField.scss';

type SwitchFieldProps = {
  requiredAttendance: boolean | undefined;
};

export default function SwitchField({ requiredAttendance }: SwitchFieldProps) {
  const [expanded, setExpanded] = useState(requiredAttendance);

  const toggleAccordion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const paragraphColor = {
    color: expanded ? '#175FFF' : '#000',
    fontWeight: expanded ? '700' : '400',
    fontSize: '1.4rem',
  };

  return (
    <section className="SwitchField">
      <Accordion expanded={expanded}>
        <AccordionSummary
          aria-controls="custom-accordion-content"
          id="custom-accordion-header"
        >
          <Switch checked={expanded} onClick={toggleAccordion} />
          <p style={paragraphColor}>Required attendance</p>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Attendance tracking QR code
            <img src={LinkIcon} alt="link icon" />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
