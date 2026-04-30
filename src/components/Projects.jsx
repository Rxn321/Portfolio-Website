import rocket1 from "../assets/rocket-1.jpg"
import rocket2 from "../assets/meAndRocket.jpg"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-24">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >

        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-semibold">Portfolio Website</h3>
            <p className="text-white/60 text-sm mt-2">
              Developed a personal portfolio website using React and Tailwind CSS to showcase my projects and skills, 
              featuring responsive design and smooth animations with Framer Motion.
            </p>
{/*tags*/}
            <div className="flex gap-2 flex-wrap mt-3">
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                You are here { "\u{1F4CD}" }
              </span>
            </div>
          </motion.div>

          <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-semibold">Portfolio Optimization</h3>
            <p className="text-white/60 text-sm mt-2">
              Python-based data analysis project for portfolio optimization using historical stock data to evaluate risk and returns and improve investment decisions.
              So i can stop losing money on stocks.
            </p>
{/*tags*/}
            <div className="flex gap-2 flex-wrap mt-3">
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                Python
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                Data Analysis
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                Optimization
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-semibold">UBC Rocket</h3>
            <p className="text-white/60 text-sm mt-2">
              Worked on the UBC Rocket team using SolidWorks & fusion 360 for CAD design and applied machining techniques including 
              CNC, lathe, waterjet and milling, along with 3D printing and engineering analysis.
            </p>
{/*tags*/}
            <div className="flex gap-2 flex-wrap mt-3">
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                CAD
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                FEA
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                Manufacturing
              </span>
            </div>
{/* images */} 
            <div className="grid grid-cols-3 gap-2 mt-4"> 
              <div className="w-24 h-24 border-2 border-white/40 rounded-lg overflow-hidden hover:scale-250 transition"> 
                <img src={rocket1} className="w-24 h-24 object-cover" /> 
              </div> 
              <div className="w-24 h-24 border-2 border-white/40 rounded-lg overflow-hidden hover:scale-250 transition"> 
              <img src={rocket2} className="w-24 h-24 object-cover" /> 
              </div>
              <div className="w-24 h-24 border-2 border-white/40 rounded-lg overflow-hidden hover:scale-250 transition"> 
                <img src={rocket1} className="w-24 h-24 object-cover" /> 
              </div> 
            </div>
          </motion.div>

          <motion.div variants={item} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-semibold">...</h3>
            <p className="text-white/60 text-sm mt-2">in progress</p>
{/*tags*/}
            <div className="flex gap-2 flex-wrap mt-3">
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                
              </span>
            </div>
{/* images */} 
            <div className="grid grid-cols-3 gap-2 mt-4"> 
              <div className="w-24 h-24 border-2 border-white/40 rounded-lg overflow-hidden hover:scale-250 transition"> 
                <img src={rocket1} className="w-24 h-24 object-cover" /> 
              </div> 
              <div className="w-24 h-24 border-2 border-white/40 rounded-lg overflow-hidden hover:scale-250 transition"> 
              <img src={rocket1} className="w-24 h-24 object-cover" /> 
              </div>
              <div className="w-24 h-24 border-2 border-white/40 rounded-lg overflow-hidden hover:scale-250 transition"> 
                <img src={rocket1} className="w-24 h-24 object-cover" /> 
              </div> 
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

{/*add personal pics for projects and link to project*/}