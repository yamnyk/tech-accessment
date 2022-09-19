import React from "react";
import { Avatar, Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { selectCount } from "../cardListSlice";
import { useAppSelector } from "../../../app/hooks";

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  const { current } = useAppSelector(selectCount);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={current !== null}>
      <Box sx={{ p: 4, maxWidth: "50vw", width: "100%" }}>
        {current !== null && (
          <>
            <Box
              sx={{
                width: "320px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                mb: 2,
              }}
            >
              <Avatar>
                <img src={current.thumbnail} alt="thumbnail" />
              </Avatar>

              <DialogTitle sx={{ fontSize: 16 }} color="text.secondary">
                {current.name}
              </DialogTitle>
            </Box>
            <Typography sx={{ mt: 0.5 }} color="text.secondary">
              Age: {current.age}
            </Typography>
            <Typography sx={{ mt: 0.5 }} color="text.secondary">
              Weight: {current.weight}
            </Typography>
            <Typography sx={{ mt: 0.5 }} color="text.secondary">
              Height: {current.height}
            </Typography>
            <Typography sx={{ mt: 0.5 }} color="text.secondary">
              Hair color: {current.hair_color}
            </Typography>
            <Typography sx={{ mt: 0.5 }} color="text.secondary" variant="body2">
              Professions: {current.professions.join(", ")}
            </Typography>
            <Typography sx={{ mt: 0.5 }} color="text.secondary" variant="body2">
              Friends: {current.friends.join(", ")}
            </Typography>
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default Modal;
