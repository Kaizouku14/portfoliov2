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
import { Safari } from "./ui/safari";
import { AvatarCircles } from "./ui/avatar-circles";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectInfoDialog = ({ data }: { data: ProjectCardProps }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-4 border border-border rounded-2xl cursor-pointer hover:border-foreground/20 transition-colors">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-6xl h-auto md:max-h-[90vh] overflow-hidden p-0" showCloseButton={false}>
        <div className="grid md:grid-cols-2 gap-0 h-full">
          <div className=" bg-muted/30 p-6 flex items-center justify-center">
            <div className="w-full max-w-2xl relative ">
              {data.video ? (
                <Safari url={data.link} videoSrc={data.video} />
              ) : (
                <Safari url={data.link} imageSrc={data.image} />
              )}
              {data.collaborators && data.collaborators.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <AvatarCircles avatarUrls={data.collaborators} className="absolute left-1 bottom-1" />
                </motion.div>
              )}
            </div>
          </div>

          <motion.div
            className="flex flex-col p-8 overflow-y-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <DialogHeader className="space-y-4 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <DialogTitle className="text-3xl font-bold">{data.name}</DialogTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <DialogDescription className="text-base leading-relaxed">{data.description}</DialogDescription>
              </motion.div>
            </DialogHeader>

            <motion.div
              className="flex flex-col gap-4 mt-8 flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="rounded-md gap-2 px-3 py-1.5" variant="outline">
                      <tech.icon className="size-4" />
                      <span className="text-sm">{tech.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link href={data.github} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="gap-2">
                    <Github className="size-4" />
                    GitHub
                  </Button>
                </motion.div>
              </Link>
              {data.link && (
                <Link href={data.link} target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="default" className="gap-2">
                      <ExternalLink className="size-4" />
                      Live Demo
                    </Button>
                  </motion.div>
                </Link>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}>
              <DialogFooter className="mt-8 pt-6 border-t">
                <DialogClose asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button type="button" variant="ghost">
                      Close
                    </Button>
                  </motion.div>
                </DialogClose>
              </DialogFooter>
            </motion.div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectInfoDialog;
