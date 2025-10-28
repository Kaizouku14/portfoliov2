import { MAIN_STACK } from "@/data/data";
import { Folder, Tree, File } from "./ui/file-tree";

const TechStackTree = () => {
  return (
    <div className="bg-background relative flex w-96 flex-col items-center justify-center overflow-hidden rounded-lg border p-4">
      <Tree
        className="bg-background overflow-hidden rounded-md p-2"
        initialSelectedId="1"
        initialExpandedItems={["0", "1", "2", "3", "4", "5"]}
      >
        <Folder element="Tech Stack" value="0" isSelectable={false}>
          {Object.entries(MAIN_STACK).map(([category, techs], index) => (
            <Folder key={index} element={category} value={`${index + 1}`} isSelectable={false}>
              {techs.map((tech, techIndex) => (
                <File key={techIndex} value={`${index + 1}-${techIndex + 1}`} isSelect={false}>
                  <p>{tech}</p>
                </File>
              ))}
            </Folder>
          ))}
        </Folder>
      </Tree>
    </div>
  );
};

export default TechStackTree;
