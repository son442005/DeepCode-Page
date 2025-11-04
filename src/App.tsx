import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Showcase } from './components/Showcase'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import  Vision from './components/Vision'
import ExpertProfile from './components/ExpertProfile'
import StaffStats from './components/StaffStats'
import Commit from './components/Commit'
import ClientsPartners from './components/ClientsPartners'
import ContactInfo from './components/ContactInfo'
const App = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <Header />
            <main className=" max-w-7xl mx-auto">
                <Hero />
                <About />
                <Vision />
                <Features />
                <Stats />
                <Showcase />
                <ExpertProfile />
                {/* <Testimonials /> */}
                <StaffStats />
                <Commit />
                <ClientsPartners/>
                <CTA />
                <ContactInfo />
            </main>
            <Footer />
        </div>
    )
}

export default App


