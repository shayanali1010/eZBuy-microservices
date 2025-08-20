 interface PrimaryBtnProps {
  text: string;
}
 export  default function PrimaryBtn({text}: PrimaryBtnProps) { 
  return (
      <button
                  type="submit"
                  className="px-10 h-12 bg-slate-700 hover:bg-slate-800 text-white font-medium mt-6 rounded-md"
                >
                 {text}
                </button>
  )
}