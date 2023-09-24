import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import './TextArea.scss';

const defaultPlaceholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

type TextAreaProps = {
  label: string;
  value?: string;
  placeholder: string;
};
export default function TextArea({
  label,
  value,
  placeholder = defaultPlaceholder,
}: TextAreaProps) {
  return (
    <div className="TextArea">
      <FormLabel>{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        minRows={4}
        value={value || defaultPlaceholder}
      />
    </div>
  );
}
