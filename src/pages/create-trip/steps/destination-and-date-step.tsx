import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStep{
    isGuestsInputOpen: boolean
    closeGuestsInput: ()=> void
    openGuestsInput: ()=> void  
}

export function DestinationAndDateStep({isGuestsInputOpen,closeGuestsInput,openGuestsInput}:DestinationAndDateStep ){
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5 text-zinc-400" />
          <input
            disabled={isGuestsInputOpen}
            type="text"
            placeholder="para onde voce vai?"
            className="bg-transparent text-lg placeholder-zinc-400 flex-1"
          />
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <input
            disabled={isGuestsInputOpen}
            type="text"
            placeholder="Quando?"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          />
        </div>
        {/* barrinha antes do botao */}
        <div className="w-px h-6 bg-zinc-800" />

        {isGuestsInputOpen ? (
          <button
            onClick={closeGuestsInput}
            className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 outline-none"
          >
            Altetar Local / Data
            <Settings2 className="size-5" />
          </button>
        ) : (
          <button
            onClick={openGuestsInput}
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 outline-none"
          >
            Continuar
            <ArrowRight className="size-5" />
          </button>
        )}
      </div>
    )
}