export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Freebies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Help and Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Help and Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Knowledge Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sponsorships</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Join Our Community</h3>
            <p className="text-sm mb-4">We build modern web tools to help you jump-start your daily business work.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>All Rights Reserved by XSAVY GmbH • bomps.app</p>
        </div>
      </div>
    </footer>
  );
};
