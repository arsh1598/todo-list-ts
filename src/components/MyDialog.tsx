import React, {useState} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

interface MyDialogProps {
  open: boolean;
  onClose: () => void;
  handleEdit: (id: number, updatedTask:string) => void;
  id: number;
}

const MyDialog: React.FC<MyDialogProps> = ({ open, onClose, handleEdit, id}) => {
  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    handleEdit(id, text);
    setText('');
    onClose();
  };
  const [text, setText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update your task</DialogTitle>
      <DialogContent>
        <form>
          <label>
            Task:
            <input type="text" value={text} onChange={handleChange} />
          </label>
        </form>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} style={{ position: "absolute", left: "8px" }}>
          Close
        </button>
        <button onClick={handleSave}>Save</button>
      </DialogActions>
    </Dialog>
  );
};
export default MyDialog;
