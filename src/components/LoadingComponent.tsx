import Button from "@mui/material/Button";

interface loadingComponent {
  text: string;
}

export default function LoadingComponent({text}: loadingComponent) {
  return (
    <Button
      loading
      loadingPosition="end"
      variant="outlined"
    >
      {text}
    </Button>
  );
}