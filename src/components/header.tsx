import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
    return (
        <header className="pt-4 pr-4 pb-2 pl-4 flex justify-between items-center">
            <div className="flex items-center justify-center gap-2 text-white font-bold">
                <img src="../src/assets/Logo.svg" alt="" />
                <span>Daniel</span>
            </div>
            <Sheet>
                <SheetTrigger>
                    <button>
                        <img src="../src/assets/buttonMobile.svg" alt="" />
                    </button>
                </SheetTrigger>

                <SheetContent>
                    
                </SheetContent>
            </Sheet>
        </header>
    );
}