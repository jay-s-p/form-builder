import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

const Droppable = ({ children, id }: { children: ReactNode, id:string }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
