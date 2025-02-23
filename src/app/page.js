import HeroSection from "../components/Section/Hero/HeroSection";
// import Footer from "@/components/Section/Common/Footer";

export default function Home() {
return ( <div className = "min-h-screen flex flex-col">
    <main className = "flex-grow">
        <HeroSection />
    </main>
    {/* <Footer /> */}
</div>
);
}
