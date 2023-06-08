import { ChevronRight, ChevronLeft } from "@mui/icons-material";

const ShowIcon = ({ state }) => {
  return state ? <ChevronRight /> : <ChevronLeft />;
};

export default ShowIcon;
