import { Server, Tag } from "@/models/designer";
import { createAction } from "@/utils";

export enum Types {
  SET_TAGS = "designer/general/setTags",
  SET_FILTERED_TAGS = "designer/general/setFilteredTags",
  SET_SEARCH_TAG = "designer/general/setSearchTag",
  SET_SELECTED_TAG = "designer/general/setSelectedTag",
  SET_SERVERS = "designer/general/setServers",
  SET_FILTERED_SERVERS = "designer/general/setFilteredServers",
  SET_SEARCH_SERVER = "designer/general/setSearchServer",
  SET_SELECTED_SERVER = "designer/general/setSelectedServer",
}

export const reducerActions = {
  setTags: createAction<Types, Tag[]>(Types.SET_TAGS),
  setFilteredTags: createAction<Types, Tag[]>(Types.SET_FILTERED_TAGS),
  setSearchTag: createAction<Types, string>(Types.SET_SEARCH_TAG),
  setSelectedTag: createAction<Types, Tag>(Types.SET_SELECTED_TAG),
  setServers: createAction<Types, Server[]>(Types.SET_SERVERS),
  setFilteredServers: createAction<Types, Server[]>(Types.SET_FILTERED_SERVERS),
  setSearchServer: createAction<Types, string>(Types.SET_SEARCH_SERVER),
  setSelectedServer: createAction<Types, Server>(Types.SET_SELECTED_SERVER),
};
