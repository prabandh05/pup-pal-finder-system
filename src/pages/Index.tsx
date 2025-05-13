
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Dog Rescue System</h1>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2">
                <span>Welcome, {user.name}</span>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    localStorage.removeItem("user");
                    setUser(null);
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Furry Friend</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Our dog rescue system connects loving homes with dogs in need.
            Give a dog a second chance or find your perfect companion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/adopt">Adoption Center</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Adopt Feature */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Adopt a Dog</h3>
              <p className="text-gray-600 mb-6">
                Browse through available dogs and find your perfect companion.
              </p>
              <Button asChild>
                <Link to="/get-partner">Get a Partner</Link>
              </Button>
            </div>

            {/* Give a Dog Feature */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M9 18V5l-5 5"></path>
                  <path d="M14 18h5"></path>
                  <path d="M16 9h3"></path>
                  <path d="M20 6h-3"></path>
                  <path d="M20 12h-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Give a Dog a Home</h3>
              <p className="text-gray-600 mb-6">
                Help a dog find a loving home by listing them in our system.
              </p>
              <Button asChild>
                <Link to="/give-partner">Give a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Dog Rescue System | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
