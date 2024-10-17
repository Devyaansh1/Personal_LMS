import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type GlassSheetProps = {
    children: React.ReactNode
    trigger: React.ReactNode
    className?: string
    triggerClass?: string
}

const GlassSheet: React.FC<GlassSheetProps> = ({
    children,
    trigger,
    className,
    triggerClass,
}) => {
    return (
        <Sheet>
            <SheetTrigger className={cn(triggerClass)} asChild>
                {trigger}
            </SheetTrigger>
            <SheetContent
                className={cn(
                    "bg-clip-padding backdrop-filter backdrop---blur_safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray",
                    className,
                )}
            >
                {children}
            </SheetContent>
        </Sheet>
    )
}

export default GlassSheet
