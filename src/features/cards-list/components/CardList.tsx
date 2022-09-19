import React, { useEffect, useMemo } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchAllCards, makeChoice, selectCount } from "../cardListSlice";
import GnomeCard from "../../../cards/GnomeCard";
import Modal from "./ Modal";

function CardList() {
  const dispatch = useAppDispatch();
  const { value: cards } = useAppSelector(selectCount);
  const mappedCards = useMemo(
    () => cards.map((card) => <GnomeCard key={card.id} entity={card} />),
    [cards]
  );

  const handleModalClose = () => {
    dispatch(makeChoice(null));
  };

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  return (
    <>
      {cards.length === 0 && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {cards.length > 0 && (
        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {mappedCards}
        </Box>
      )}
      <Modal onClose={handleModalClose} />
    </>
  );
}

export default CardList;
