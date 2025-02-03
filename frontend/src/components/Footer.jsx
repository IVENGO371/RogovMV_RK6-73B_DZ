export default function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className="footer-block">Рогов Матвей РК6-73Б. ©{currentYear} Все парава защищены.</footer>;
}
