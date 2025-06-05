import Button from "@mui/material/Button";

interface LoadingComponent {
  text: string;
}

export default function LoadingComponent({text}: LoadingComponent) {
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