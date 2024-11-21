import Footer from "./footer"
import Navbar from "./nabvar"

export const LayoutPageWrapper = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}