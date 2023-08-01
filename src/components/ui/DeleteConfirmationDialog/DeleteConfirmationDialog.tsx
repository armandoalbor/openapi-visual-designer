import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Modal } from "@/components";
import { useTranslation } from "@/hooks";
import { Delete, Report } from "@mui/icons-material";

interface Props {
  open: boolean;
  entityName: string;
  fullEntityName: string;
  entityValue: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmationDialog: FC<Props> = ({
  open,
  entityName,
  fullEntityName,
  entityValue,
  onCancel,
  onConfirm,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      maxWidth="sm"
      open={open}
      title={t("catalog.actions.delete", { entityName: fullEntityName })}
      onClose={onCancel}
    >
      <>
        <Box sx={{ mb: 1, textAlign: "center" }}>
          <Report color="warning" sx={{ fontSize: 48 }} />
        </Box>

        <Typography
          sx={{ textAlign: "center", px: 4 }}
          dangerouslySetInnerHTML={{
            __html: t("catalog.actions.deleteConfirmationMessage", {
              entityName,
              itemValue: entityValue,
            }),
          }}
        />

        <Box display="flex" justifyContent="flex-end" mt={4} gap={2}>
          <Button color="inherit" onClick={onCancel}>
            {t("components.button.cancel")}
          </Button>
          <Button color="primary" onClick={onConfirm} startIcon={<Delete />}>
            {t("components.button.confirmDelete")}
          </Button>
        </Box>
      </>
    </Modal>
  );
};
