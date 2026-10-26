import { AppHeader } from "@/components/navigation/AppHeader"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LucidePlus } from "lucide-react"

export default function ApplicationsIndex() {
  return (
    <div className="flex flex-col px-4 gap-6">
      <AppHeader
        parentPage="Home"
        pageTitle="Applications"
        actions={
          <CreateApplicationDialog />
        }
      />
    </div>
  )
}

function CreateApplicationDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <LucidePlus />
          New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create New Application</DialogTitle>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col h-20 justify-items-center place-content-center border">
            <p>Paste URL</p>
          </div>
          <div className="flex flex-col h-20 justify-items-center place-content-center border">
            <p> URL</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
