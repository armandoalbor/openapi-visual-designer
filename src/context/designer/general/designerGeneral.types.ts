import { Tag, Server } from "@/models/designer";

export interface State {
  isLoading: boolean;
  tags: {
    list: Tag[];
    filteredList: Tag[];
    selectedTag?: Tag;
    searchTerm: string;
  };
  servers: {
    list: Server[];
    filteredList: Server[];
    selectedServer?: Server;
    searchTerm: string;
  };
}

export interface Actions {
  addNewTag: (tag: Tag) => void;
  updateTag: (tagId: string, updatedTag: Tag) => void;
  deleteTag: (tagId: string) => void;
  selectTag: (tagId: string) => void;
  searchTag: (search: string) => void;

  addNewServer: (server: Server) => void;
  updateServer: (serverId: string, updatedServer: Server) => void;
  deleteServer: (serverId: string) => void;
  selectServer: (serverId: string) => void;
  searchServer: (search: string) => void;
}

export interface ContextType extends State {
  actions?: Actions;
}
