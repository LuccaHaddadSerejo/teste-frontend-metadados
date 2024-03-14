import { ChangeEvent } from "react";
import { StyledInput } from "./style";

interface iInputProps {
  id?: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
  inputVariation?: string;
  value?: string;
  hidden?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  inputVariation,
  value,
  hidden,
  onChange,
}: iInputProps) => {
  return (
    <StyledInput inputVariation={inputVariation}>
      <div>
        <label hidden={hidden} htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
    </StyledInput>
  );
};

export default Input;
