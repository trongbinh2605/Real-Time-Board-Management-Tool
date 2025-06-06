import React, { useState } from "react";
import { Box, Button, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import BoardHeader from "./components/BoardHeader";
import BoardSidebar from "./components/BoardSidebar";
import ListComponent from "./components/ListComponent";
import CardDetailsModal from "./components/CardDetailsModal";
import InviteMembersModal from "./components/InviteMembersModal";

interface Card {
  id: string;
  title: string;
}

interface List {
  id: string;
  title: string;
  cards: Card[];
}

interface User {
  id: string;
  name: string;
}

interface CardDetails extends Card {
  description?: string;
  comments?: Array<{
    id: string;
    text: string;
    user: User;
    createdAt: string;
  }>;
  attachments?: Array<{
    id: string;
    name: string;
    url: string;
  }>;
  labels?: Array<{
    id: string;
    color: string;
    text: string;
  }>;
}

const initialLists: List[] = [
  {
    id: "1",
    title: "To do",
    cards: [
      { id: "1", title: "Project planning" },
      { id: "2", title: "Kickoff meeting" },
    ],
  },
  {
    id: "2",
    title: "Doing",
    cards: [],
  },
  {
    id: "3",
    title: "Done",
    cards: [{ id: "3", title: "Kickoff meeting" }],
  },
];

const users: User[] = [
  { id: "1", name: "User 1" },
  { id: "2", name: "User 2" },
  { id: "3", name: "User 3" },
  { id: "4", name: "User 4" },
];

const Cards: React.FC = () => {
  const [lists, setLists] = useState<List[]>(initialLists);
  const [addingCardListId, setAddingCardListId] = useState<string | null>(null);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [addingList, setAddingList] = useState(false);
  const [newListTitle, setNewListTitle] = useState("");
  const [selectedCard, setSelectedCard] = useState<CardDetails | null>(null);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  const moveCard = (
    dragIdx: number,
    hoverIdx: number,
    fromListId: string,
    toListId: string
  ) => {
    setLists((prev) => {
      const newState = prev.map((list) => ({
        ...list,
        cards: [...list.cards],
      }));
      const fromList = newState.find((l) => l.id === fromListId);
      const toList = newState.find((l) => l.id === toListId);
      if (!fromList || !toList) return prev;
      const card = fromList.cards[dragIdx];
      if (!card) return prev;
      fromList.cards.splice(dragIdx, 1);
      toList.cards.splice(hoverIdx, 0, card);
      return newState;
    });
  };

  const moveList = (dragIdx: number, hoverIdx: number) => {
    setLists((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(dragIdx, 1);
      copy.splice(hoverIdx, 0, moved);
      return copy;
    });
  };

  const handleAddCard = (listId: string) => {
    if (!newCardTitle.trim()) return;
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: [
                ...list.cards,
                { id: Date.now().toString(), title: newCardTitle.trim() },
              ],
            }
          : list
      )
    );
    setNewCardTitle("");
    setAddingCardListId(null);
  };

  const handleAddList = () => {
    if (!newListTitle.trim()) return;
    setLists((prev) => [
      ...prev,
      { id: Date.now().toString(), title: newListTitle.trim(), cards: [] },
    ]);
    setNewListTitle("");
    setAddingList(false);
  };

  const handleCardClick = (card: Card) => {
    const details: CardDetails = {
      ...card,
      description:
        "This is a sample description for the card. You can edit this description to add more details about the task.",
      comments: [
        {
          id: "1",
          text: "This is looking great!",
          user: users[0],
          createdAt: "2025-06-06T10:00:00Z",
        },
      ],
      attachments: [{ id: "1", name: "document.pdf", url: "#" }],
      labels: [{ id: "1", color: "#61bd4f", text: "Priority" }],
    };
    setSelectedCard(details);
  };

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 64px)", width: "100%" }}>
      <BoardSidebar users={users} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: "calc(100vw - 228px)",
        }}
      >
        <BoardHeader onInviteClick={() => setInviteModalOpen(true)} />
        <Box
          sx={{
            flex: 1,
            p: "12px",
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            overflowY: "hidden",
            height: "calc(100% - 64px)",
            bgcolor: "#ffffff",
          }}
        >
          {lists.map((list, idx) => (
            <ListComponent
              key={list.id}
              list={list}
              index={idx}
              moveList={moveList}
              moveCard={moveCard}
              onCardClick={handleCardClick}
              addingCardToListId={addingCardListId}
              newCardTitle={newCardTitle}
              setNewCardTitle={setNewCardTitle}
              setAddingCardToListId={setAddingCardListId}
              handleAddCard={handleAddCard}
            />
          ))}

          <Box sx={{ width: 272, minWidth: 272 }}>
            {addingList ? (
              <Box sx={{ bgcolor: "#0E0F05", borderRadius: 2, p: 1 }}>
                <TextField
                  multiline
                  placeholder="Enter list title..."
                  value={newListTitle}
                  onChange={(e) => setNewListTitle(e.target.value)}
                  autoFocus
                  fullWidth
                  sx={{
                    mb: 1,
                    "& textarea::placeholder": {
                      textAlign: "center",
                      fontSize: 12,
                      color: "#BDC1CA",
                    },
                    "& textarea": {
                      py: 0,
                      color: "#BDC1CA",
                    },
                    "& .MuiInputBase-root": {
                      bgcolor: "#1A1D20",
                    },
                  }}
                />
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    onClick={handleAddList}
                    sx={{
                      textTransform: "none",
                      bgcolor: "#0079bf",
                      fontSize: 14,
                      boxShadow: "none",
                    }}
                  >
                    Add list
                  </Button>
                  <IconButton
                    size="small"
                    onClick={() => {
                      setAddingCardListId(null);
                      setNewCardTitle("");
                    }}
                    sx={{ color: "#6b778c" }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            ) : (
              <Box
                onClick={() => setAddingList(true)}
                sx={{
                  height: 42,
                  bgcolor: "#A16081",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  px: 1.5,
                  cursor: "pointer",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AddIcon sx={{ color: "#9095A1", fontSize: 20 }} />
                  <span style={{ color: "#fff", fontSize: 13 }}>
                    Add another list
                  </span>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        <CardDetailsModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
        <InviteMembersModal
          open={inviteModalOpen}
          onClose={() => setInviteModalOpen(false)}
        />
      </Box>
    </Box>
  );
};

export default Cards;
