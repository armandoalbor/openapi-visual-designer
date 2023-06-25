import { ChangeEvent, FC, FormEventHandler } from "react";
import { Controller, Control, FieldValues } from "react-hook-form";
import { BaseTextFieldProps, TextField as TextFieldMUI } from "@mui/material";

interface Props extends BaseTextFieldProps {
  name: string;
  rules?: any;
  errors?: any;
  control: Control<FieldValues | any, any>;
  onChange?:
    | ChangeEvent<HTMLInputElement>
    | FormEventHandler<HTMLInputElement | HTMLDivElement>;
}

export const TextField: FC<Props> = ({
  name,
  label,
  placeholder,
  rules,
  errors,
  control,
  onChange,
  ...otherProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextFieldMUI
          label={label}
          placeholder={placeholder}
          // @ts-ignore
          onChangeCapture={onChange}
          error={!!(errors && errors[name])}
          helperText={errors && errors[name]?.message}
          {...field}
          {...otherProps}
        />
      )}
    />
  );
};

{
  /* <Controller
        name="iceCreamType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      /> */
}
