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
      <DialogContent className="w-full max-w-lg">
        <DialogTitle>Create New Application</DialogTitle>
        <div className="grid grid-cols-2 gap-3">
          <div className="cursor-pointer flex h-20 justify-center items-center border rounded-md">
            <p>Paste URL</p>
          </div>
          <div className="cursor-pointer flex h-20 justify-center items-center border rounded-md">
            <p>Enter Manually</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
