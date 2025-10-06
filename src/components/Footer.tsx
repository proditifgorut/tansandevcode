const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {currentYear} Tansan Devcode. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
