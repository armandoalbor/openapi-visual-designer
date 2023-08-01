import { FC } from "react";
import { Controller } from "react-hook-form";
import {
  FormHelperText,
  MenuItem,
  Select as SelectMUI,
  InputLabel,
  FormControl,
} from "@mui/material";

interface Props {
  id: string;
  name: string;
  control: any;
  options: Record<string, any>[];
  helperText?: string;
  rules?: any;
  errors?: any;
  label?: string;
  disabled?: boolean;
  keyValue?: string;
  keyLabel?: string;
  optionRenderer?: (option: Record<string, any>) => JSX.Element;
}

export const Select: FC<Props> = ({
  id,
  name,
  control,
  rules,
  errors,
  options,
  helperText,
  label = "Native select",
  disabled = false,
  keyValue = "value",
  keyLabel = "label",
  optionRenderer,
}) => {
  if (!control) {
    throw new Error(
      'El parámetro "control" es necesario para el componente Select y no puede ser nulo.'
    );
  }

  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControl
          sx={{ display: "flex" }}
          disabled={disabled}
          error={hasError}
        >
          <InputLabel id={`${id}-label`}>{label}</InputLabel>

          <SelectMUI id={id} labelId={`${id}-label`} label={label} {...field}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option[keyValue]} value={option[keyValue]}>
                {optionRenderer ? optionRenderer(option) : option[keyLabel]}
              </MenuItem>
            ))}
          </SelectMUI>

          {!hasError && !!helperText && (
            <FormHelperText>{helperText}</FormHelperText>
          )}

          {hasError && (
            <FormHelperText error={hasError}>
              {errors && errors[name]?.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
