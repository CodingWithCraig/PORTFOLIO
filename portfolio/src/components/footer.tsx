import '../componentStyles/footer.css';


export default function Footer() {
   const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p>&copy; {currentYear} Craig Hlongwani. All rights reserved.</p>
        </footer>

    )
}