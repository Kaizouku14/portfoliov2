import { MAIN_STACK } from "@/data/data";
import { Folder, Tree, File } from "./ui/file-tree";
import { motion } from "framer-motion";

const TechStackTree = () => {
  return (
    <motion.div
      className="flex md:w-96 flex-col items-center justify-center p-4 border-none"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Tree className="p-2" initialExpandedItems={["0", "1", "2", "3", "4", "5"]}>
        <Folder element="Tech Stack" value="0" isSelectable={false}>
          {Object.entries(MAIN_STACK).map(([category, techs], index) => (
            <Folder key={index} element={category} value={`${index + 1}`} isSelectable={false}>
              {techs.map((tech, techIndex) => (
                <File
                  fileIcon={<tech.icon className="size-4" />}
                  key={techIndex}
                  value={`${index + 1}-${techIndex + 1}`}
                  isSelect={false}
                >
                  <p>{tech.name}</p>
                </File>
              ))}
            </Folder>
          ))}
        </Folder>
      </Tree>
    </motion.div>
  );
};

export default TechStackTree;
