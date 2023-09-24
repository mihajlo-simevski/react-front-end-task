import {
  FormControl, InputBase, InputLabel,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
    fontSize: 13,
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '42%',
    left: '1rem',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#000',
    borderRadius: '50%',
    transform: 'translateY(-50%)',
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '0.1rem solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 15,
    width: 'auto',
    padding: '1rem 4rem',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: ['Lato', 'sans-serif'].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    '&::placeholder': {
      left: 20,
    },
  },
}));

type InputProps = {
  label: string;
  defaultValue: string;
};

export default function Input({
  label,
  defaultValue = 'Default Value',
}: InputProps) {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor="bootstrap-input">
        {label}
      </InputLabel>
      <BootstrapInput defaultValue={defaultValue} id="bootstrap-input" />
    </FormControl>
  );
}
