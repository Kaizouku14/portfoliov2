import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectCardProps } from "@/interface/project";
import Image from "next/image";

const ProjectInfoDialog = ({ data }: { data: ProjectCardProps }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-6 border border-border rounded-2xl ">
          <Image
            src={data.image}
            alt={data.name}
            height={60}
            width={60}
            className="h-50 w-full border-border border rounded-2xl object-cover
              transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl h-140">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{data.name}</DialogTitle>
          <DialogDescription>{data.description}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2"></div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInfoDialog;
