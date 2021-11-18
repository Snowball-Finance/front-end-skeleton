import { CircularProgress, styled } from "@mui/material";
import Button, { ButtonProps } from '@mui/material/Button'
import { FC } from "react";

type CommonButtonProps = {
  isLoading?: boolean,
  height?: number,
  width?: number,

}

export type SnowButtonProps = ButtonProps & CommonButtonProps


export const SnowButton: FC<SnowButtonProps> = ({ ...props }) => {
  const { isLoading, children } = props
  return (
    <StyledButton {...props} >
      {
        isLoading ?
          <CircularProgress size={props.size ?? "small"} /> :
          children
      }
    </StyledButton>
  )
}


const StyledButton = styled(Button)<SnowButtonProps>(({ height, width, theme }) => ({
  ...(height && { height }),
  ...(width && { width }),
}))