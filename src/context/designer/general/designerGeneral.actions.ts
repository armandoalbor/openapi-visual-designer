import { v4 as uuid } from "uuid";
import { Server, Tag } from "@/models/designer";
import { Actions, State } from "./designerGeneral.types";
import { reducerActions } from "./designerGeneral.constants";
import { useEffect } from "react";

const colors = [
  {
    id: 1,
    name: "Success",
    color: "#00d431",
  },
  {
    id: 2,
    name: "Info",
    color: "#208cfe",
  },
  {
    id: 3,
    name: "Warning",
    color: "#f5cd07",
  },
  {
    id: 4,
    name: "Error",
    color: "#f54040",
  },
  {
    id: 5,
    name: "Purple",
    color: "#bb00ff",
  },
];

const useActions = (state: State, dispatch: any): Actions => {
  useEffect(() => {
    dispatch(reducerActions.setFilteredTags(state.tags.list));
  }, [state.tags.list]);

  const addNewTag = (tag: Tag) => {
    dispatch(
      reducerActions.setTags([
        ...state.tags.list,
        {
          ...tag,
          id: uuid(),
          color:
            colors.find((colorItem) => colorItem.id === Number(tag.color))
              ?.color || "#000",
          totalItems: 0,
          items: [],
        },
      ])
    );
  };

  const updateTag = (tagId: string, updatedTag: Tag) => {
    const updatedTags = state.tags.list.map((tag) => {
      if (tag.id === tagId)
        return {
          ...tag,
          ...updatedTag,
          color:
            colors.find(
              (colorItem) => colorItem.id === Number(updatedTag.color)
            )?.color || "#000",
        };

      return tag;
    });

    dispatch(reducerActions.setTags(updatedTags));

    dispatch(reducerActions.setSelectedTag(undefined));
  };

  const deleteTag = (tagId: string) => {
    dispatch(
      reducerActions.setTags(state.tags.list.filter((tag) => tag.id !== tagId))
    );
  };

  const selectTag = (tagId: string) => {
    dispatch(
      reducerActions.setSelectedTag(
        state.tags.list.find((tag) => tag.id === tagId)
      )
    );
  };

  const searchTag = (search: string) => {
    const searchTerm = search.toLowerCase().trim();

    dispatch(reducerActions.setSearchTag(search));

    dispatch(
      reducerActions.setFilteredTags(
        state.tags.list.filter((tag) =>
          tag.label.toLowerCase().trim().includes(searchTerm)
        )
      )
    );
  };

  const addNewServer = (server: Server) => {
    dispatch(
      reducerActions.setServers([
        ...state.servers.list,
        {
          ...server,
          id: uuid(),
        },
      ])
    );
  };

  const updateServer = (serverId: string, updatedServer: Server) => {
    const updatedServers = state.servers.list.map((server) => {
      if (server.id === serverId)
        return {
          ...server,
          ...updatedServer,
        };

      return server;
    });

    dispatch(reducerActions.setServers(updatedServers));

    dispatch(reducerActions.setSelectedServer(undefined));
  };

  const deleteServer = (serverId: string) => {
    dispatch(
      reducerActions.setServers(
        state.servers.list.filter((server) => server.id !== serverId)
      )
    );
  };

  const selectServer = (serverId: string) => {
    dispatch(
      reducerActions.setSelectedServer(
        state.servers.list.find((server) => server.id === serverId)
      )
    );
  };

  const searchServer = (search: string) => {
    const searchTerm = search.toLowerCase().trim();

    dispatch(reducerActions.setSearchServer(search));

    dispatch(
      reducerActions.setFilteredServers(
        state.servers.list.filter((server) =>
          server.name.toLowerCase().trim().includes(searchTerm)
        )
      )
    );
  };

  return {
    addNewTag,
    updateTag,
    deleteTag,
    selectTag,
    searchTag,

    addNewServer,
    updateServer,
    deleteServer,
    selectServer,
    searchServer,
  };
};

export { useActions };
