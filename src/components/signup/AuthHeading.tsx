 interface AuthHeadingProps{
     heading : string,
     paragraph  : string    
 }
export default  function AuthHeading({heading , paragraph} : AuthHeadingProps){
    return(
        <>
          <h1 className="text-2xl font-bold text-[#F1352B] font-Inter">{heading}</h1>
                <p className="text-sm text-[#999999] tracking-wider">{paragraph}</p>
                </>
        
        
    )
}