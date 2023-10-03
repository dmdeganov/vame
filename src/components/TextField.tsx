import React from 'react';
import {TextField as MUITextField} from '@mui/material';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  ref: null;
  type?: string,
  multiline?: boolean;
  minRows?:number;
}

const TextField: React.FC<InputProps> = ({label, className = '', error = false, helperText = '', value, onChange, multiline, minRows, type}) => {
  return (
    <MUITextField
      error={error}
      helperText={helperText}
      fullWidth
      className={className}
      sx={muiTextFieldFloatLabelSx}
      label={label}
      value={value}
      onChange={onChange}
      multiline={multiline}
      minRows={minRows}
      type={type || 'text'}
    />
  );
};

export default TextField;

export const muiTextFieldFloatLabelSx = {
  '&': {
    width: '100%',
  },

  '& input': {
    border: '1px solid transparent',
    borderRadius: '12px !important',
    height: '66px',
    padding: '25.5px 24px 16px',
    boxSizing: 'border-box',
    fontSize: '16px',
    color: '#fff',
    transition: 'border-color 0.3s',
    overflow: 'hidden'
  },
  'label.MuiInputLabel-root': {
    transform: 'translate(24px, 20px) scale(1)',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  'label.MuiInputLabel-shrink': {
    transform: 'translate(24px, 8px) scale(0.625);',
  },

  '& fieldset': {
    top: 0,
    borderRadius: '12px',
    border: '1px solid',
    borderColor: 'rgba(255, 255, 255, 0.20)',
    transition: 'border-color 0.3s',
    legend: {
      display: 'none',
    },
    // border: '1px solid #fff',
    // display: 'none',
  },
  'label.MuiInputLabel-shrink:not(.Mui-focused) + .MuiInputBase-root': {
    '& fieldset': {
      borderColor: '#7E378F',
    },
  },
  '.MuiInputBase-root:hover': {
    '& fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
  '.MuiInputBase-root.Mui-focused': {
    '& fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '#fff',
      borderWidth: '1px',
    },
  },

  '.MuiInputBase-input': {
    fontSize: '16px',
    lineHeight: '120%',
  },
  '.MuiInputBase-multiline': {
    padding: '28px 24px 16px',
  },
  '& label.MuiFormLabel-root': {},
  '& label, & label.Mui-disabled ': {
    fontSize: '16px',
  },
  textarea: {
    color: '#fff',
  },
  '& label.Mui-focused.Mui-error ': {
    color: '#d32f2f',
  },
  '& p.Mui-error': {
    fontSize: '12px',
  },
  // '& .MuiInputBase-formControl': {
  //   color: 'var(--on-surface)',
  //   '.MuiInputBase-input': {
  //     padding: '0 0 8px',
  //   },
  //   '.MuiInputBase-input.Mui-disabled': {
  //     color: 'var(--on-surface)',
  //     WebkitTextFillColor: 'var(--on-surface-low)',
  //   },
  //   '&::after': {
  //     borderBottomWidth: '1px',
  //   },
  //   '&:not(.Mui-disabled, .Mui-error)::before': {
  //     borderBottom: '1px solid var(--input-underline)',
  //   },
  //   '&:not(.Mui-disabled, .Mui-error)::after': {
  //     borderBottom: '1px solid var(--input-underline-focus)',
  //   },
  //   '&:hover:not(.Mui-disabled, .Mui-error):before': {
  //     borderBottom: '1px solid var(--input-underline)',
  //   },
  // },
  // '.MuiInputBase-root.MuiInput-root.MuiInput-underline.Mui-disabled': {
  //   '&::before': {
  //     borderBottomColor: 'var(--input-underline-disabled)',
  //     borderBottomStyle: 'solid',
  //   },
  // },
};
