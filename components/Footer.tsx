import Link from "next/link";
import Image from "next/image";
export default function Footer(){
    return (
        <footer id="footer" className="h-[200px] w-full flex flex-col justify-center items-center">
            <Link href="/">
                <div className="w-[50px]"><Image 
                    src="/k_logo_main_theme.png" 
                    alt="logo of two triangles and circle underneath" 
                    width={400}
                    height={1111}
                /></div></Link>
            <h5 className="text-light-text ">Keegan Anglim {new Date().getFullYear()}</h5>
        </footer>
    )
}