
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyForm from '@/components/admin/PropertyForm';
import PropertyList from '@/components/admin/PropertyList';

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
                <PropertyForm
                  formData={formData}
                  setFormData={setFormData}
                  uploadedImages={uploadedImages}
                  setUploadedImages={setUploadedImages}
                  onSubmit={handleSubmit}
                  onReset={resetForm}
                  isEditing={!!editingProperty}
                  onFileUploaded={handleFileUploaded}
                  onRemoveImage={removeUploadedImage}
                />
              </CardContent>
            </Card>

            {/* Properties List */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Properties</CardTitle>
                <CardDescription>Manage your property listings</CardDescription>
              </CardHeader>
              <CardContent>
                <PropertyList
                  properties={properties}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
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
