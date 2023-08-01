import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Grid } from "@mui/material";
import { Save } from "@mui/icons-material";
import { Select, TextField } from "@/components";
import { useTranslation } from "@/hooks";
import { useDesignerGeneral } from "@/context";

interface FormValues {
  label: string;
  description: string;
  color: string;
}

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

interface Props {
  onSubmit: (tag: FormValues) => void;
}

export const TagsForm: FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const { tags } = useDesignerGeneral();

  const form = useForm<FormValues>({
    defaultValues: {
      label: tags.selectedTag?.label || "",
      description: tags.selectedTag?.description || "",
      color: tags.selectedTag?.color
        ? colors
            .find((colorItem) => colorItem.color === tags.selectedTag?.color)
            ?.id.toString()
        : "",
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
        <Grid item xs={12} md={6}>
          <TextField
            name="label"
            id="tag-label"
            label={t("form.inputs.tagLabel.label")}
            placeholder={t("form.inputs.tagLabel.placeholder")}
            helperText={t("form.inputs.tagLabel.helper")}
            control={control}
            errors={errors}
            rules={{
              required: t("form.errors.required"),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            name="color"
            id="tag-description"
            label={t("form.inputs.tagColor.label")}
            helperText={t("form.inputs.tagColor.helper")}
            options={colors}
            keyLabel="name"
            keyValue="id"
            control={control}
            errors={errors}
            rules={{
              required: t("form.errors.required"),
            }}
            optionRenderer={(option) => (
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    mr: 1,
                    width: 16,
                    height: 16,
                    backgroundColor: option.color,
                    borderRadius: 1,
                  }}
                />
                {option.name}
              </Box>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            id="tag-description"
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
