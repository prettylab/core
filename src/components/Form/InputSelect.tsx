"use client";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  options: Array<any>;
  label?: string;
  rules?: any;
  required?: boolean;
};

export default function InputSelect({
  name,
  options = [],
  label,
  rules = {},
  required = false,
  ...props
}: Props & Partial<SelectProps>) {
  const { control } = useFormContext();

  const combinedRules = {
    ...rules,
    ...(required && { required: true }),
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={combinedRules}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          <InputLabel error={!!error}>{label}</InputLabel>
          <Select {...field} label={label} error={!!error} {...props}>
            {options.map((item: any) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {!!error && (
            <FormHelperText error={!!error}>{error?.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
