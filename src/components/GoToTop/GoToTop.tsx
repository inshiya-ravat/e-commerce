import Button from "@mui/material/Button";
import Top from "../../assets/Top";

const GoToTop = () => {
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Button
      onClick={goToTop}
      sx={{
        borderRadius: "50%",
        position: "fixed",
        bottom: "2%",
        right: "2%",
      }}
      variant="contained"
    >
      <Top />
    </Button>
  );
};

export default GoToTop;
