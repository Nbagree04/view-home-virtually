
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="bg-realestate-blue py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Property</h1>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Browse our extensive collection of properties with immersive virtual tours.
        </p>
        <div className="max-w-xl mx-auto relative">
          <Input
            type="text"
            placeholder="Search by location, title or features..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-black"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-realestate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SearchHeader;
