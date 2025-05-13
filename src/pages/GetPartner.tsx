
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { getDogs } from "@/services/dogService";
import { Dog } from "@/types/dog";

const GetPartner = () => {
  const navigate = useNavigate();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Load dogs from the local storage
    const loadedDogs = getDogs();
    setDogs(loadedDogs);
  }, []);

  const handleAdoptClick = (dog: Dog) => {
    setSelectedDog(dog);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button variant="link" className="p-0" onClick={() => navigate("/")}>
            <h1 className="text-2xl font-bold text-primary">Dog Rescue System</h1>
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => navigate("/give-partner")}>
              List a Dog
            </Button>
            <Button variant="outline" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Dogs Available for Adoption</h1>
        
        {dogs.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-3">No dogs listed yet</h2>
            <p className="text-gray-600 mb-6">Be the first to list a dog for adoption!</p>
            <Button onClick={() => navigate("/give-partner")}>
              List a Dog
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogs.map((dog) => (
              <Card key={dog.id} className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{dog.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div>
                      <span className="font-medium">Breed:</span> {dog.breed}
                    </div>
                    <div>
                      <span className="font-medium">Age:</span> {dog.age}
                    </div>
                    <div>
                      <span className="font-medium">Gender:</span> {dog.gender}
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-3">{dog.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleAdoptClick(dog)}
                  >
                    Adopt Me
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Adoption Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Contact Information</DialogTitle>
            <DialogDescription>
              {selectedDog && `Get in touch to adopt ${selectedDog.name}`}
            </DialogDescription>
          </DialogHeader>

          {selectedDog && (
            <div className="grid grid-cols-[100px_1fr] gap-4 items-start">
              <img 
                src={selectedDog.image} 
                alt={selectedDog.name} 
                className="w-24 h-24 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{selectedDog.name}</h3>
                <p className="text-sm text-gray-500">{selectedDog.breed}, {selectedDog.age}</p>
              </div>
              
              <div className="col-span-2 border-t pt-4 mt-2">
                <h4 className="font-semibold mb-2">Contact Details:</h4>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {selectedDog.contactName}</p>
                  <p><span className="font-medium">Phone:</span> {selectedDog.contactPhone}</p>
                  <p><span className="font-medium">Email:</span> {selectedDog.contactEmail}</p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="mt-4">
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GetPartner;
