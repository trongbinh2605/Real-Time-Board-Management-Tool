import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../constants";

interface Card {
  id: string;
  title: string;
}

interface CardComponentProps {
  card: Card;
  index: number;
  listId: string;
  moveCard: (
    dragIndex: number,
    hoverIndex: number,
    sourceListId: string,
    targetListId: string
  ) => void;
  onClick: () => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  card,
  index,
  listId,
  moveCard,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { type: ItemTypes.CARD, id: card.id, listId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: { id: string; listId: string; index: number }, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceListId = item.listId;
      const targetListId = listId;

      if (dragIndex === hoverIndex && sourceListId === targetListId) return;

      const hoverRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverRect.bottom - hoverRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;

      const hoverClientY = clientOffset.y - hoverRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex, sourceListId, targetListId);

      item.index = hoverIndex;
      item.listId = targetListId;
    },
  });

  drag(drop(ref));

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "#1A1D20",
        borderRadius: "2px",
        p: "8px 12px",
        mb: "8px",
        cursor: "pointer",
        opacity: isDragging ? 0.5 : 1,
        border: "1px solid #9095A1",
      }}
      onClick={onClick}
    >
      <Typography sx={{ color: "#BDC1CA", fontSize: 12 }}>
        {card.title}
      </Typography>
    </Box>
  );
};

export default CardComponent;
