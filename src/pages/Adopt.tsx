
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Adopt = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">Dog Rescue System</Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Adoption Center</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Get Partner Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Adopt a Dog</h3>
              <p className="text-gray-600 mb-6">
                Browse through our list of dogs looking for a loving home. Find your perfect companion.
              </p>
              <Button asChild className="w-full">
                <Link to="/get-partner">Find Dogs</Link>
              </Button>
            </div>
          </div>

          {/* Give Partner Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"></path>
                <path d="M12 6v8"></path>
                <path d="M8 10h8"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">List a Dog for Adoption</h3>
              <p className="text-gray-600 mb-6">
                Help a dog find a loving home by listing them in our system. Share their story and photos.
              </p>
              <Button asChild className="w-full">
                <Link to="/give-partner">List a Dog</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Dog Rescue System | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Adopt;
