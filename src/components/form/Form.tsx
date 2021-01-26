import React, { useEffect, useState, useCallback } from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';

type Form = {
  title: string;
  content: HTMLElement;
  buttons: HTMLElement;
  openForm: boolean;
};

const Form = ({ title, content, buttons, openForm }: Form) => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    setOpen(true);
  }, [openForm, setOpen]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>{buttons}</DialogActions>
    </Dialog>
  );
};

Form.displayName = 'Form';

export default React.memo(Form);
