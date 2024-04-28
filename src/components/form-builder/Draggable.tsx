import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';
import { ReactNode } from "react";

const Draggable = ({ children, id }: { children: ReactNode; id: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  )
}
