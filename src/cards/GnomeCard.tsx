import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

import Entity from "../types/Entity";
import { useAppDispatch } from "../app/hooks";
import { makeChoice } from "../features/cards-list/cardListSlice";

type GnomeCardProps = {
  entity: Entity;
};

export default function GnomeCard({ entity }: GnomeCardProps) {
  const { name, age, thumbnail } = entity;
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mb: 2,
          }}
        >
          <Avatar>
            <img src={thumbnail} alt="thumbnail" />
          </Avatar>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ fontSize: 16 }} color="text.secondary">
              {name}
            </Typography>
            <Typography sx={{ mt: 0.5 }} color="text.secondary">
              Age: {age}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2">
          professions: {entity.professions.join(", ")}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => dispatch(makeChoice(entity))}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
