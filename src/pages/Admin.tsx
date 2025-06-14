import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FileUpload from '@/components/FileUpload';
import { Trash2, Edit, X } from 'lucide-react';
import { majorIndianCities, formatIndianCurrency } from '@/utils/indiaData';

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image_url?: string;
  has_virtual_tour?: boolean;
  property_type?: string;
  description?: string;
}

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [properties, setProperties] = useState<Property[]>([]);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    image_url: '',
    property_type: '',
    description: '',
    has_virtual_tour: false,
  });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchProperties();
    }
  }, [isAdmin]);

  const fetchProperties = async () => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch properties",
        variant: "destructive",
      });
    } else {
      setProperties(data || []);
    }
  };

  const handleFileUploaded = (url: string) => {
    setUploadedImages(prev => [...prev, url]);
    if (!formData.image_url) {
      setFormData(prev => ({ ...prev, image_url: url }));
    }
  };

  const removeUploadedImage = (urlToRemove: string) => {
    setUploadedImages(prev => prev.filter(url => url !== urlToRemove));
    if (formData.image_url === urlToRemove) {
      const nextImage = uploadedImages.find(url => url !== urlToRemove);
      setFormData(prev => ({ ...prev, image_url: nextImage || '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const propertyData = {
      title: formData.title,
      price: parseInt(formData.price),
      location: formData.location,
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseFloat(formData.bathrooms),
      sqft: parseInt(formData.sqft),
      image_url: formData.image_url || null,
      property_type: formData.property_type || null,
      description: formData.description || null,
      has_virtual_tour: formData.has_virtual_tour,
      created_by: user!.id,
    };

    let error;
    if (editingProperty) {
      const { error: updateError } = await supabase
        .from('properties')
        .update(propertyData)
        .eq('id', editingProperty.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from('properties')
        .insert([propertyData]);
      error = insertError;
    }

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: editingProperty ? "Property updated successfully!" : "Property created successfully!",
      });
      resetForm();
      fetchProperties();
    }
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setFormData({
      title: property.title,
      price: property.price.toString(),
      location: property.location,
      bedrooms: property.bedrooms.toString(),
      bathrooms: property.bathrooms.toString(),
      sqft: property.sqft.toString(),
      image_url: property.image_url || '',
      property_type: property.property_type || '',
      description: property.description || '',
      has_virtual_tour: property.has_virtual_tour || false,
    });
    setUploadedImages(property.image_url ? [property.image_url] : []);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete property",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Property deleted successfully!",
        });
        fetchProperties();
      }
    }
  };

  const resetForm = () => {
    setEditingProperty(null);
    setUploadedImages([]);
    setFormData({
      title: '',
      price: '',
      location: '',
      bedrooms: '',
      bathrooms: '',
      sqft: '',
      image_url: '',
      property_type: '',
      description: '',
      has_virtual_tour: false,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-realestate-blue mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Form */}
            <Card>
              <CardHeader>
                <CardTitle>{editingProperty ? 'Edit Property' : 'Add New Property'}</CardTitle>
                <CardDescription>
                  {editingProperty ? 'Update property details' : 'Fill in the details to add a new property'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="Villa">Villa</SelectItem>
                          <SelectItem value="Independent House">Independent House</SelectItem>
                          <SelectItem value="Builder Floor">Builder Floor</SelectItem>
                          <SelectItem value="Penthouse">Penthouse</SelectItem>
                          <SelectItem value="Plot">Plot</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
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
                    onFileUploaded={handleFileUploaded}
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
                              onClick={() => removeUploadedImage(url)}
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
                      {editingProperty ? 'Update Property' : 'Add Property'}
                    </Button>
                    {editingProperty && (
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Properties List */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Properties</CardTitle>
                <CardDescription>Manage your property listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {properties.map((property) => (
                    <div key={property.id} className="border rounded-lg p-4 flex justify-between items-start">
                      <div className="flex space-x-4">
                        {property.image_url && (
                          <img
                            src={property.image_url}
                            alt={property.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                        )}
                        <div>
                          <h3 className="font-semibold">{property.title}</h3>
                          <p className="text-sm text-gray-600">{property.location}</p>
                          <p className="text-sm font-medium">{formatIndianCurrency(property.price)}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(property)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(property.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {properties.length === 0 && (
                    <p className="text-gray-500 text-center py-8">No properties added yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
