import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid } from "@mui/material";
import { Save } from "@mui/icons-material";
import { TextField } from "@/components";
import { useTranslation } from "@/hooks";
import { useDesignerGeneral } from "@/context";

interface FormValues {
  name: string;
  url: string;
  description: string;
}

interface Props {
  onSubmit: (server: FormValues) => void;
}

export const ServersForm: FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { servers } = useDesignerGeneral();

  const form = useForm<FormValues>({
    defaultValues: {
      name: servers.selectedServer?.name || "",
      url: servers.selectedServer?.url || "",
      description: servers.selectedServer?.description || "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} p={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            id="server-name"
            label={t("form.inputs.name.label")}
            placeholder={t("form.inputs.name.placeholder")}
            helperText={t("form.inputs.name.helper")}
            control={control}
            errors={errors}
            rules={{
              required: t("form.errors.required"),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="url"
            id="server-url"
            label={t("form.inputs.url.label")}
            placeholder={t("form.inputs.url.placeholder")}
            helperText={t("form.inputs.url.helper")}
            control={control}
            errors={errors}
            rules={{
              required: t("form.errors.required"),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            id="server-description"
            label={t("form.inputs.description.label")}
            placeholder={t("form.inputs.description.placeholder")}
            helperText={t("form.inputs.description.helper")}
            control={control}
            errors={errors}
            multiline
            rows={2}
          />
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="end">
            <Button
              type="submit"
              color="primary"
              size="large"
              startIcon={<Save />}
            >
              {t("actions.save")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
