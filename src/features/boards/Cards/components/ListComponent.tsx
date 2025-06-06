import React, { useRef } from "react";
import { Box, Typography, IconButton, Button, TextField } from "@mui/material";
import { useDrag, useDrop } from "react-dnd";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import AddTemplateIcon from "@/components/common/Icons/AddTemplateIcon";
import CardComponent from "../components/CardComponent";
import { ItemTypes } from "../constants";

interface Card {
  id: string;
  title: string;
}

interface List {
  id: string;
  title: string;
  cards: Card[];
}

interface DragItem {
  type: string;
  id: string;
  listId: string;
  index: number;
}

interface ListComponentProps {
  list: List;
  index: number;
  moveList: (dragIndex: number, hoverIndex: number) => void;
  moveCard: (
    dragIndex: number,
    hoverIndex: number,
    sourceListId: string,
    targetListId: string
  ) => void;
  onCardClick: (card: Card) => void;
  addingCardToListId: string | null;
  newCardTitle: string;
  setNewCardTitle: (title: string) => void;
  setAddingCardToListId: (id: string | null) => void;
  handleAddCard: (listId: string) => void;
}

const ListComponent: React.FC<ListComponentProps> = ({
  list,
  index,
  moveList,
  moveCard,
  onCardClick,
  addingCardToListId,
  newCardTitle,
  setNewCardTitle,
  setAddingCardToListId,
  handleAddCard,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.LIST,
      item: { type: ItemTypes.LIST, id: list.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [list.id, index]
  );

  const [, drop] = useDrop(
    () => ({
      accept: [ItemTypes.CARD, ItemTypes.LIST],
      hover(item: DragItem, monitor) {
        if (!ref.current) return;

        if (item.type === ItemTypes.LIST) {
          const dragIndex = item.index;
          const hoverIndex = index;

          if (dragIndex === hoverIndex) return;

          const hoverBoundingRect = ref.current.getBoundingClientRect();
          const hoverMiddleX =
            (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
          const clientOffset = monitor.getClientOffset();
          if (!clientOffset) return;
          const hoverClientX = clientOffset.x - hoverBoundingRect.left;

          if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return;
          if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return;

          moveList(dragIndex, hoverIndex);
          item.index = hoverIndex;
        } else if (item.type === ItemTypes.CARD) {
          const dragIndex = item.index;
          const sourceListId = item.listId;
          const targetListId = list.id;

          if (list.cards.length === 0) {
            moveCard(dragIndex, 0, sourceListId, targetListId);
            item.index = 0;
            item.listId = targetListId;
          }
        }
      },
    }),
    [index, list.id, list.cards.length]
  );

  drag(drop(ref));

  return (
    <Box
      ref={ref}
      sx={{
        width: "272px",
        minWidth: "272px",
        height: "fit-content",
        minHeight: "32px",
        backgroundColor: "#0E0F05",
        borderRadius: "2px",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
          paddingX: "8px",
          minHeight: "32px",
        }}
      >
        <Typography
          sx={{
            color: "#BDC1CA",
            fontSize: "13px",
            fontWeight: 400,
          }}
        >
          {list.title}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: list.cards.length > 0 ? "1 1 auto" : "0 0 auto",
          marginBottom: "8px",
          overflowY: "auto",
          paddingX: "4px",
          minHeight: list.cards.length > 0 ? "50px" : "0px",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#00000033",
            borderRadius: "2px",
          },
        }}
      >
        {list.cards.map((card, cardIndex) => (
          <CardComponent
            key={card.id}
            card={card}
            index={cardIndex}
            listId={list.id}
            moveCard={moveCard}
            onClick={() => onCardClick(card)}
          />
        ))}
      </Box>

      {addingCardToListId === list.id && (
        <Box
          sx={{
            borderRadius: "8px",
            padding: "6px",
            marginBottom: "8px",
          }}
        >
          <TextField
            multiline
            placeholder="Enter a title for this card..."
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            autoFocus
            fullWidth
            sx={{
              marginBottom: "8px",
              "& textarea::placeholder": {
                textAlign: "center",
                fontSize: "12px",
                color: "#BDC1CA",
              },
              "& textarea": {
                paddingY: 0,
                color: "#BDC1CA",
              },
              "& .MuiInputBase-root": {
                backgroundColor: "#1A1D20",
              },
            }}
          />
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Button
              variant="contained"
              onClick={() => handleAddCard(list.id)}
              sx={{
                textTransform: "none",
                backgroundColor: "#0079bf",
                fontSize: "14px",
                boxShadow: "none",
              }}
            >
              Add card
            </Button>
            <IconButton
              size="small"
              onClick={() => {
                setAddingCardToListId(null);
                setNewCardTitle("");
              }}
              sx={{ color: "#6b778c" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      )}

      {addingCardToListId !== list.id && (
        <Box
          onClick={() => setAddingCardToListId(list.id)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 8px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <AddIcon sx={{ color: "#6b778c", fontSize: "18px" }} />
            <Typography sx={{ color: "#9095A1", fontSize: "13px" }}>
              Add a card
            </Typography>
          </Box>
          <AddTemplateIcon />
        </Box>
      )}
    </Box>
  );
};

export default ListComponent;
