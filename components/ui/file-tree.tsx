"use client";

import React, { createContext, forwardRef, useCallback, useContext, useEffect, useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type TreeViewElement = {
  id: string;
  name: string;
  isSelectable?: boolean;
  children?: TreeViewElement[];
};

type TreeContextProps = {
  selectedId: string | undefined;
  expandedItems: string[] | undefined;
  indicator: boolean;
  handleExpand: (id: string) => void;
  selectItem: (id: string) => void;
  setExpandedItems?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  direction: "rtl" | "ltr";
};

const TreeContext = createContext<TreeContextProps | null>(null);

const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a TreeProvider");
  }
  return context;
};

type Direction = "rtl" | "ltr" | undefined;

type TreeViewProps = {
  initialSelectedId?: string;
  indicator?: boolean;
  elements?: TreeViewElement[];
  initialExpandedItems?: string[];
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Tree = forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      className,
      elements,
      initialSelectedId,
      initialExpandedItems,
      children,
      indicator = true,
      openIcon,
      closeIcon,
      dir,
      ...props
    },
    ref,
  ) => {
    const [selectedId, setSelectedId] = useState<string | undefined>(initialSelectedId);
    const [expandedItems, setExpandedItems] = useState<string[] | undefined>(initialExpandedItems);

    const selectItem = useCallback((id: string) => {
      setSelectedId(id);
    }, []);

    const handleExpand = useCallback((id: string) => {
      setExpandedItems((prev) => {
        if (prev?.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...(prev ?? []), id];
      });
    }, []);

    const expandSpecificTargetedElements = useCallback((elements?: TreeViewElement[], selectId?: string) => {
      if (!elements || !selectId) return;
      const findParent = (currentElement: TreeViewElement, currentPath: string[] = []) => {
        const isSelectable = currentElement.isSelectable ?? true;
        const newPath = [...currentPath, currentElement.id];
        if (currentElement.id === selectId) {
          if (isSelectable) {
            setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
          } else {
            if (newPath.includes(currentElement.id)) {
              newPath.pop();
              setExpandedItems((prev) => [...(prev ?? []), ...newPath]);
            }
          }
          return;
        }
        if (isSelectable && currentElement.children && currentElement.children.length > 0) {
          currentElement.children.forEach((child) => {
            findParent(child, newPath);
          });
        }
      };
      elements.forEach((element) => {
        findParent(element);
      });
    }, []);

    useEffect(() => {
      if (initialSelectedId) {
        expandSpecificTargetedElements(elements, initialSelectedId);
      }
    }, [initialSelectedId, elements, expandSpecificTargetedElements]);

    const direction = dir === "rtl" ? "rtl" : "ltr";

    return (
      <TreeContext.Provider
        value={{
          selectedId,
          expandedItems,
          handleExpand,
          selectItem,
          setExpandedItems,
          indicator,
          openIcon,
          closeIcon,
          direction,
        }}
      >
        <div className={cn("size-full", className)}>
          <ScrollArea ref={ref} className="relative h-full px-2" dir={dir as Direction}>
            <AccordionPrimitive.Root
              {...props}
              type="multiple"
              defaultValue={expandedItems}
              value={expandedItems}
              className="flex flex-col gap-1"
              onValueChange={(value) => setExpandedItems((prev) => [...(prev ?? []), value[0]])}
              dir={dir as Direction}
            >
              {children}
            </AccordionPrimitive.Root>
          </ScrollArea>
        </div>
      </TreeContext.Provider>
    );
  },
);

Tree.displayName = "Tree";

const TreeIndicator = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { direction } = useTree();

    return (
      <div
        dir={direction}
        ref={ref}
        className={cn(
          "bg-border/50 absolute left-1.5 h-full w-px rounded-full py-3 duration-300 ease-in-out hover:bg-border/80 rtl:right-1.5",
          className,
        )}
        {...props}
      />
    );
  },
);

TreeIndicator.displayName = "TreeIndicator";

type FolderProps = {
  expandedItems?: string[];
  element: string;
  isSelectable?: boolean;
  isSelect?: boolean;
  /** Per-folder Tailwind text color class — e.g. "text-sky-400/90" */
  accentColor?: string;
} & React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;

const Folder = forwardRef<HTMLDivElement, FolderProps & React.HTMLAttributes<HTMLDivElement>>(
  ({ className, element, value, isSelectable = true, isSelect, accentColor, children, ...props }, ref) => {
    const { direction, handleExpand, expandedItems, indicator, setExpandedItems, openIcon, closeIcon } = useTree();
    const isExpanded = expandedItems?.includes(value);
    const iconClass = cn("size-4 shrink-0 transition-colors", accentColor ?? "text-muted-foreground");

    return (
      <AccordionPrimitive.Item {...props} value={value} ref={ref} className="relative h-full overflow-hidden">
        <AccordionPrimitive.Trigger
          className={cn(
            "flex w-full items-center gap-1.5 rounded-md px-1.5 py-1 text-sm transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40",
            className,
            {
              "bg-muted": isSelect && isSelectable,
              "cursor-pointer": isSelectable,
              "cursor-not-allowed opacity-80": !isSelectable,
            },
          )}
          disabled={!isSelectable}
          onClick={() => handleExpand(value)}
        >
          {isExpanded
            ? (openIcon ?? <FolderOpenIcon className={iconClass} />)
            : (closeIcon ?? <FolderIcon className={iconClass} />)}
          <span className={cn("font-medium", accentColor)}>{element}</span>
        </AccordionPrimitive.Trigger>
        <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down relative h-full overflow-hidden text-sm">
          {element && indicator && <TreeIndicator aria-hidden="true" />}
          <AccordionPrimitive.Root
            dir={direction}
            type="multiple"
            className="ml-5 flex flex-col gap-0.5 py-0.5 rtl:mr-5"
            defaultValue={expandedItems}
            value={expandedItems}
            onValueChange={(value) => {
              setExpandedItems?.((prev) => [...(prev ?? []), value[0]]);
            }}
          >
            {children}
          </AccordionPrimitive.Root>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    );
  },
);

Folder.displayName = "Folder";

const File = forwardRef<
  HTMLButtonElement,
  {
    value: string;
    handleSelect?: (id: string) => void;
    isSelectable?: boolean;
    isSelect?: boolean;
    fileIcon?: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ value, className, isSelectable = true, isSelect, fileIcon, children, ...props }, ref) => {
  const { direction, selectedId, selectItem } = useTree();
  const isSelected = isSelect ?? selectedId === value;
  return (
    <button
      ref={ref}
      type="button"
      disabled={!isSelectable}
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-muted/30 rtl:pr-0 rtl:pl-2",
        {
          "bg-muted/60": isSelected && isSelectable,
        },
        isSelectable ? "cursor-pointer" : "cursor-default",
        direction === "rtl" ? "rtl" : "ltr",
        className,
      )}
      onClick={() => selectItem(value)}
      {...props}
    >
      {fileIcon ?? <FileIcon className="size-3.5 text-muted-foreground" />}
      {children}
    </button>
  );
});

File.displayName = "File";

const CollapseButton = forwardRef<
  HTMLButtonElement,
  {
    elements: TreeViewElement[];
    expandAll?: boolean;
  } & React.HTMLAttributes<HTMLButtonElement>
>(({ elements, expandAll = false, children, ...props }, ref) => {
  const { expandedItems, setExpandedItems } = useTree();

  const expendAllTree = useCallback(
    (elements: TreeViewElement[]) => {
      const expandTree = (element: TreeViewElement) => {
        const isSelectable = element.isSelectable ?? true;
        if (isSelectable && element.children && element.children.length > 0) {
          setExpandedItems?.((prev) => [...(prev ?? []), element.id]);
          element.children.forEach(expandTree);
        }
      };

      elements.forEach(expandTree);
    },
    [setExpandedItems],
  );

  const closeAll = useCallback(() => {
    setExpandedItems?.([]);
  }, [setExpandedItems]);

  useEffect(() => {
    console.log(expandAll);
    if (expandAll) {
      expendAllTree(elements);
    }
  }, [expandAll, expendAllTree, elements]);

  return (
    <Button
      variant={"ghost"}
      className="absolute right-2 bottom-1 h-8 w-fit p-1"
      onClick={expandedItems && expandedItems.length > 0 ? closeAll : () => expendAllTree(elements)}
      ref={ref}
      {...props}
    >
      {children}
      <span className="sr-only">Toggle</span>
    </Button>
  );
});

CollapseButton.displayName = "CollapseButton";

export { CollapseButton, File, Folder, Tree, type TreeViewElement };
