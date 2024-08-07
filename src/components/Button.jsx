const Button = ( {text, path="#", isDownload=false} ) => {
    return ( 
        <a href={path} download={isDownload} target="_blank" className="bg-secondary_black border dark:border-secondary_black dark:border-primary_white hover:bg-primary_blue text-primary_white px-4 py-2 inline-block rounded text-sm transition hover:-translate-y-0.5 animate-pulse" >{text}</a>
     );
}
 
export default Button;