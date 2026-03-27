"use client";

import { MAIN_STACK } from "@/data";
import { Folder, Tree, File } from "@/components/ui/file-tree";
import { AnimateItem } from "@/components/shared/animate-element";

const TechStackTree = () => {
  const expandedItems = ["root", "1", "2", "3", "4"];

  return (
    <AnimateItem
      className="flex md:w-96 flex-col items-center justify-center p-4 border-none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      direction="left"
      distance={50}
      duration={0.7}
    >
      <Tree className="p-2" initialExpandedItems={expandedItems}>
        <Folder element="Tech Stack" value="root" isSelectable={false}>
          {Object.entries(MAIN_STACK).map(([category, techs], index) => (
            <Folder key={category} element={category} value={String(index + 1)}>
              {techs.map((tech) => (
                <File
                  key={tech.name}
                  fileIcon={<tech.icon className="size-4" />}
                  value={`${index + 1}-${tech.name}`}
                  isSelectable={false}
                >
                  <p>{tech.name}</p>
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
