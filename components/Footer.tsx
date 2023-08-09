import Image from "next/image";
export default function Footer(){
    return (
        <footer id="footer" className="h-[200px] w-full bg-slate-400 mt-12 flex flex-col justify-center items-center">
            <div className="w-[50px]"><Image 
                src="/k_logo_main_theme.png" 
                alt="logo of two triangles and circle underneath" 
                width={400}
                height={1111}
            /></div>
            <h5 className="text-light-text">Keegan Anglim {new Date().getFullYear()}</h5>
        </footer>
    )
}