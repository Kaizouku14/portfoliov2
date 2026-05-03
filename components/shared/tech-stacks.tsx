"use client";

import { MAIN_STACK } from "@/data";
import { Folder, Tree, File } from "@/components/ui/file-tree";
import { AnimateItem } from "@/components/shared/animate-element";

const TechStackTree = () => {
  const expandedItems = ["root", "1", "2", "3"];

  return (
    <AnimateItem
      className="flex md:w-96 w-75 flex-col shrink-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      direction="left"
      distance={50}
      duration={0.7}
    >
      <Tree
        className="p-3 flex items-center "
        initialExpandedItems={expandedItems}
        indicator
      >
        <Folder element="Tech Stack" value="root" isSelectable={false}>
          {Object.entries(MAIN_STACK).map(([category, techs], index) => (
            <Folder
              key={category}
              element={category}
              value={String(index + 1)}
            >
              {techs.map((tech) => (
                <File
                  key={tech.name}
                  fileIcon={<tech.icon className="size-3.5 shrink-0 text-muted-foreground" />}
                  value={`${index + 1}-${tech.name}`}
                  isSelectable={false}
                >
                  <span className="text-xs text-foreground/65">{tech.name}</span>
                </File>
              ))}
            </Folder>
          ))}
        </Folder>
      </Tree>
    </AnimateItem>
  );
};

export default TechStackTree;
