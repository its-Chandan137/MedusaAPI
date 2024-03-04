import { Header } from './Header'
import PropTypes from "prop-types";

 
 export const Layout = ({children}) => {
   return (
     <div>
        <Header/>
        <main style={{minHeight: "100vh"}}>{children}</main>
        <h2>Footer</h2>
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.isRequired,
 }