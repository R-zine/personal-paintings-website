import MenuItem from "./components/MenuItem";
import { LandingPage } from "./components/LandingStyles";

export const Landing = () => {
  return (
    <div style={LandingPage}>
      <MenuItem color="blue" />
      <MenuItem color="orange" />
      <MenuItem color="purple" />
      <MenuItem color="green" />
    </div>
  );
};
