import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Grid } from "@mui/material";
import { Save } from "@mui/icons-material";
import { RichTextEditor, TextField } from "@/components";
import { useTranslation } from "@/hooks";

interface FormValues {
  name: string;
  version: string;
  description: string;
  terms: string;
  logo: string;
}

export const DetailsForm = () => {
  const { t } = useTranslation();

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      version: "",
      description: "",
      terms: "",
      logo: "",
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  const onChangeDescriptionEditor = (content: string) => {
    setValue("description", content, { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4} p={2}>
        <Grid item xs={6} md={9}>
          <TextField
            name="name"
            id="api-details-name"
            label={t("form.inputs.apiName.label")}
            placeholder={t("form.inputs.apiName.placeholder")}
            helperText={t("form.inputs.apiName.helper")}
            control={control}
            errors={errors}
            rules={{
              required: t("form.errors.required"),
            }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            name="version"
            id="api-details-version"
            label={t("form.inputs.apiVersion.label")}
            placeholder={t("form.inputs.apiVersion.placeholder")}
            helperText={t("form.inputs.apiVersion.helper")}
            control={control}
            errors={errors}
            rules={{
              required: t("form.errors.required"),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RichTextEditor
            id="api-details-desciption"
            placeholder={t("form.inputs.apiDescription.placeholder")}
            onChange={onChangeDescriptionEditor}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="terms"
            id="api-details-terms"
            label={t("form.inputs.apiTerms.label")}
            placeholder={t("form.inputs.apiTerms.placeholder")}
            helperText={t("form.inputs.apiTerms.helper")}
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="logo"
            id="api-details-logo"
            label={t("form.inputs.apiLogo.label")}
            placeholder={t("form.inputs.apiLogo.placeholder")}
            helperText={t("form.inputs.apiLogo.helper")}
            control={control}
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
