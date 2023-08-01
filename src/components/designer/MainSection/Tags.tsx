import { useState } from "react";
import { Style } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DeleteConfirmationDialog, Modal, Table, Tag } from "@/components";
import { TagsForm } from "./TagsForm";
import { useDesignerGeneral } from "@/context";
import { Tag as ITag } from "@/models";
import { useTranslation } from "@/hooks";

export const Tags = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const { tags, actions } = useDesignerGeneral();

  const handleAddOrUpdateTag = (tag: ITag) => {
    tags.selectedTag
      ? actions?.updateTag(tags.selectedTag.id!, tag)
      : actions?.addNewTag(tag);

    setOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: "label",
      headerName: "Label",
      width: 250,
    },
    {
      field: "totalItems",
      headerName: "Items",
    },
    {
      field: "color",
      headerName: "Color",
      width: 150,
      renderCell: (params) => (
        <>
          <Box
            sx={{
              mr: 1,
              width: 16,
              height: 16,
              borderRadius: 1,
              backgroundColor: params.row.color,
            }}
          />
          {params.row.color}
        </>
      ),
    },
    {
      field: "",
      headerName: "Preview",
      renderCell: ({ row }) => (
        <Tag label={row.label} customColor={row.color} size="small" />
      ),
      width: 250,
    },
  ];

  const entityName = t("designer.tabsSection.general.menu.tags.entityName");

  return (
    <Box>
      <Box display="flex" flexDirection="column" pb={1}>
        <Typography variant="h4" textTransform="uppercase">
          <Style />{" "}
          {t("designer.tabsSection.general.menu.tags.pluralEntityName")}
        </Typography>
        <Typography variant="body2" mt={1}>
          {t("designer.tabsSection.general.menu.tags.subtitle")}
        </Typography>
      </Box>

      <Table
        entityName={entityName}
        columns={columns}
        rows={tags.filteredList}
        onCreate={() => {
          actions?.selectTag("");
          setOpen(true);
        }}
        onEdit={(id) => {
          actions?.selectTag(id);
          setOpen(true);
        }}
        onDelete={(id) => {
          actions?.selectTag(id);
          setOpenDelete(true);
        }}
        onSearch={() => {}}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={t("catalog.actions.create", { entityName: entityName })}
      >
        <TagsForm onSubmit={handleAddOrUpdateTag} />
      </Modal>

      <DeleteConfirmationDialog
        open={openDelete}
        fullEntityName={entityName}
        entityName={entityName}
        entityValue={tags.selectedTag?.label!}
        onCancel={() => {
          setOpenDelete(false);
        }}
        onConfirm={() => {
          actions?.deleteTag(tags.selectedTag?.id!);
          setOpenDelete(false);
        }}
      />
    </Box>
  );
};
