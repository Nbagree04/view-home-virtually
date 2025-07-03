
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FileUpload from '@/components/FileUpload';
import { X } from 'lucide-react';
import { majorIndianCities } from '@/utils/indiaData';
import { propertyTypes } from '@/data/propertyTypes';

interface PropertyFormData {
  title: string;
  price: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  image_url: string;
  property_type: string;
  description: string;
  has_virtual_tour: boolean;
}

interface PropertyFormProps {
  formData: PropertyFormData;
  setFormData: (data: PropertyFormData) => void;
  uploadedImages: string[];
  setUploadedImages: (images: string[]) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  isEditing: boolean;
  onFileUploaded: (url: string) => void;
  onRemoveImage: (url: string) => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({
  formData,
  setFormData,
  uploadedImages,
  onSubmit,
  onReset,
  isEditing,
  onFileUploaded,
  onRemoveImage
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price (₹)</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="property_type">Property Type</Label>
          <Select
            value={formData.property_type}
            onValueChange={(value) => setFormData({...formData, property_type: value})}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Select
          value={formData.location}
          onValueChange={(value) => setFormData({...formData, location: value})}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            {majorIndianCities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Input
            id="bedrooms"
            type="number"
            value={formData.bedrooms}
            onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Input
            id="bathrooms"
            type="number"
            step="0.5"
            value={formData.bathrooms}
            onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sqft">Square Feet</Label>
          <Input
            id="sqft"
            type="number"
            value={formData.sqft}
            onChange={(e) => setFormData({...formData, sqft: e.target.value})}
            required
          />
        </div>
      </div>

      <FileUpload
        onFileUploaded={onFileUploaded}
        acceptedTypes="image/*,video/*"
        maxFileSize={10}
        multiple={true}
      />

      {uploadedImages.length > 0 && (
        <div className="space-y-2">
          <Label>Uploaded Media</Label>
          <div className="grid grid-cols-2 gap-2">
            {uploadedImages.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-20 object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => onRemoveImage(url)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-3 w-3" />
                </button>
                {formData.image_url === url && (
                  <div className="absolute bottom-1 left-1 bg-green-500 text-white text-xs px-1 rounded">
                    Primary
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows={3}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="has_virtual_tour"
          checked={formData.has_virtual_tour}
          onChange={(e) => setFormData({...formData, has_virtual_tour: e.target.checked})}
        />
        <Label htmlFor="has_virtual_tour">Has Virtual Tour</Label>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="bg-realestate-teal hover:bg-realestate-blue">
          {isEditing ? 'Update Property' : 'Add Property'}
        </Button>
        {isEditing && (
          <Button type="button" variant="outline" onClick={onReset}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default PropertyForm;
