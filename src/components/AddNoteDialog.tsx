import { CreateNoteSchema, createNoteSchema } from "@/lib/validation/note";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface AddNoteDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AddNoteDialog = ({ isOpen, setIsOpen }: AddNoteDialogProps) => {
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
  });

  async function onSubmit(input: CreateNoteSchema) {
    alert(input);
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNoteDialog;
