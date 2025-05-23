import About from "@/components/About";
import Banner from "@/components/Banner";
import Abilities from "@/components/abilities";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
    return (
        <main className="min-h-screen w-full bg-[url('/LooperGroup2.png')] bg-no-repeat bg-cover">
            <div className="flex flex-col gap-20 relative z-10">
                <Banner />
                <About />
                <Abilities />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}

