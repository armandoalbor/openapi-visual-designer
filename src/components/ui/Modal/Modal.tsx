import { forwardRef, ReactElement, Ref, FC } from "react";
import {
  Slide,
  DialogProps,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Close } from "@mui/icons-material";
import { useTranslation } from "@/hooks";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props extends DialogProps {
  open: boolean;
  title: string;
  withActions?: boolean;
  onClose: () => void;
  onAccept?: () => void;
}

export const Modal: FC<Props> = ({
  open,
  title,
  onClose,
  onAccept,
  children,
  withActions,
  ...otherProps
}) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      // keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      {...otherProps}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>

      {withActions && (
        <DialogActions sx={{ py: 3, px: 4, pt: 6 }}>
          {onClose && (
            <Button
              sx={{ mr: 0 }}
              size="large"
              color="inherit"
              onClick={onClose}
            >
              {t("components.button.cancel")}
            </Button>
          )}

          {onAccept && (
            <Button color="primary" size="large" onClick={onAccept}>
              {t("components.button.confirm")}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};
