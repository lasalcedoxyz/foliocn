import { AppHeader } from "@/components/navigation/AppHeader"
import { Button } from "@/components/ui/button"

export default function AssetsIndex(){
    return (
        <div className="flex flex-col gap-3">
            <AppHeader 
                pageTitle="Assets"
                actions={[
                    <Button>New</Button>
                ]}
            />
        </div>
    )
}