import { useState } from "react";
import { Public } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DeleteConfirmationDialog, Modal, Table } from "@/components";
import { ServersForm } from "./ServersForm";
import { useDesignerGeneral } from "@/context";
import { Server as IServer } from "@/models";
import { useTranslation } from "@/hooks";

export const Servers = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const { servers, actions } = useDesignerGeneral();

  const handleAddOrUpdateServer = (server: IServer) => {
    servers.selectedServer
      ? actions?.updateServer(servers.selectedServer.id!, server)
      : actions?.addNewServer(server);

    setOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "url",
      headerName: "Url",
      width: 300,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
  ];

  const entityName = t("designer.tabsSection.general.menu.servers.entityName");

  return (
    <Box>
      <Box display="flex" flexDirection="column" pb={1}>
        <Typography variant="h4" textTransform="uppercase">
          <Public />{" "}
          {t("designer.tabsSection.general.menu.servers.pluralEntityName")}
        </Typography>
        <Typography variant="body2" mt={1}>
          {t("designer.tabsSection.general.menu.servers.subtitle")}
        </Typography>
      </Box>

      <Table
        entityName={entityName}
        columns={columns}
        rows={servers.filteredList}
        onCreate={() => {
          actions?.selectServer("");
          setOpen(true);
        }}
        onEdit={(id) => {
          actions?.selectServer(id);
          setOpen(true);
        }}
        onDelete={(id) => {
          actions?.selectServer(id);
          setOpenDelete(true);
        }}
        onSearch={() => {}}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={t("catalog.actions.create", { entityName: entityName })}
      >
        <ServersForm onSubmit={handleAddOrUpdateServer} />
      </Modal>

      <DeleteConfirmationDialog
        open={openDelete}
        fullEntityName={entityName}
        entityName={entityName}
        entityValue={servers.selectedServer?.name!}
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={() => {
          actions?.deleteServer(servers.selectedServer?.id!);
          setOpenDelete(false);
        }}
      />
    </Box>
  );
};
