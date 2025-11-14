import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Showcase } from './components/Showcase'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import Vision from './components/Vision'
import ExpertProfile from './components/ExpertProfile'
import StaffStats from './components/StaffStats'
import Commit from './components/Commit'
import ClientsPartners from './components/ClientsPartners'
import ContactInfo from './components/ContactInfo'
import FounderProfile from './components/FounderProfile'
import { FloatButton } from './components/FloatButton'
const App = () => {
    return (
        <div className="flex flex-col font-NotoSerif min-h-screen overflow-x-hidden w-full bg-orange-400">
            <Header />
            <Hero />
            <main className="flex flex-col items-center w-full">
                <About />
                <Vision />
                <Features />
                <Stats />
                <Showcase />
                <FounderProfile />
                <ExpertProfile />
                {/* <Testimonials /> */}
                <StaffStats />
                <Commit />
                {/* <ClientsPartners /> */}
                <CTA />
                <ContactInfo />
            </main>
            <Footer />
            <FloatButton />
        </div>
    )
}

export default App


