import { motion } from "framer-motion";
import Image from "next/image";
import HoveredProject from "./HoveredProject";
import Indicators from "./Indicators";
import SelectedProject from "./SelectedProject";

interface InterfaceProps {
  itemsCount: number;
}

const Interface: React.FC<InterfaceProps> = ({ itemsCount }) => {
  return (
    <>
      {/* SELECTED PROJECT */}
      {/* <SelectedProject /> */}

      {/* HOVERED PROJECT */}
      <HoveredProject />

      {/* INDICATORS */}
      <Indicators itemsCount={itemsCount} />
    </>
  );
};

export default Interface;
