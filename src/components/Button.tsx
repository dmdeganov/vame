'use client';
import React from 'react';
import {Button as MaterialButton, CircularProgress} from '@mui/material';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, onClick, disabled, className, type, loading, ...rest}) => {
  return (
    <MaterialButton
      variant="outlined"
      disabled={disabled}
      onClick={onClick}
      className={`button${className ? ` ${className}` : ''}`}
      endIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}
      type={type}
      sx={{
        width: 'min-content',
        borderRadius: '12px',
        minWidth: '220px',
        fontWeight: 400,
        textTransform: 'Capitalize',
        height: '64px',
        padding: '16px 32px',
        display: 'flex',
        placeItems: 'center',
        fontSize: '16px',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        color: '#fff',
        lineHeight: 1,
        overflow: 'hidden',
        '&:before': {
          content: "''",
          zIndex: -1,
          height: '100%',
          width: '100%',
          position: 'absolute',
          opacity: 0,
          background: 'linear-gradient(267deg, #7c368d 4.04%, #753384 28.77%, #aa419e 72.29%, #83357a 99%)',
          transition: 'opacity 0.4s',
        },
        '&.Mui-disabled': {
          color: 'rgba(255, 255, 255, 0.10)',
          '&:before': {
            background: 'rgba(255, 255, 255, 0.20)',
          },
        },
        '&.button--white-on-hover': {
          '&:hover': {
            color: '#111',
          },
          '&:before': {
            background: '#fff',
          },
        },

        '&:hover, &.button--filled': {
          borderColor: 'transparent',
          '&:before': {
            opacity: 1,
          },
        },
        '&.button--black': {
          color: '#111111',
          border: '1px solid rgba(17, 17, 17, 0.5)',
        },
        '&.button--purple': {
          color: '#7e378f',
          border: '1px solid #7e378f',
          '&:hover': {
            color: '#fff',
          },
        },
      }}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
