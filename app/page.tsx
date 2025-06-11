import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Image from "next/image";
import SplashCursor from "@/components/ui/SplashCursor";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
        <SplashCursor />
        <div className="max-w-7xl w-full main-content">
            <FloatingNav navItems={navItems}/>
            <Hero/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>
    </main>
    );
}

