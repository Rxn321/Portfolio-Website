import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";


export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center">
      <div className="relative flex items-center justify-between
        rounded-full bg-white/5 backdrop-blur-xl
        border border-white/10 px-6 md:px-10 py-4 md:py-6
        w-[95%] max-w-4xl">

        <div className="flex items-center text-white/70 hidden md:flex gap-4">
          <a href="#projects" className="hover:text-white transition"><AiOutlineStock size={22}/></a>
        </div>
 {/* Rrm to add fiance project link here*/}

        <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 md:gap-12 text-sm md:text-lg text-white/90">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        
        <div className="flex items-center gap-3 md:gap-4 text-white/70">
          <a href="https://github.com" className="hover:text-white transition"><AiFillGithub size={25}/></a>
          <a href="https://linkedin.com" className="hover:text-white transition"><FaLinkedin size={25}/></a>
          <a href="https://mail.google.com" className="hover:text-white transition"><MdEmail size={25}/></a>
        </div>

      </div>
    </nav>
  )
}