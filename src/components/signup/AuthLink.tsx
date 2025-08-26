import Link from "next/link";

interface AuthLinkProps{
    text: string,
    link: string,
    path : string
 }
export default function AuthLink({text , link , path} : AuthLinkProps) {
    return(
        <>
      <span className="text-[#999999] font-medium" > {text} </span>  
                  < Link  href={`/${path}`}> <button
                    type="button"
                    className="text-[#F1352B] hover:text-red-600 font-medium"
                  >
                    {link}
                  </button>
                  </Link>
                  </>

    )
}