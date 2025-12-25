const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} StyleVibe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
