
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Edit2, Bell, Shield, Key, User, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { UserContext, UserContextType } from "../App";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const userContext = useContext(UserContext) as UserContextType;
  const { user, updateUser } = userContext;
  
  const [formData, setFormData] = useState({
    firstName: user.name.split(' ')[0] || '',
    lastName: user.name.split(' ').slice(1).join(' ') || '',
    email: user.email,
    phone: user.phone,
    bio: user.bio
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSaveChanges = () => {
    // Combine first and last name
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    
    // Update user context
    updateUser({
      name: fullName,
      email: formData.email,
      phone: formData.phone,
      bio: formData.bio
    });
    
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  // Get first letter of first and last name for avatar fallback
  const getInitials = () => {
    const nameParts = user.name.split(' ');
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`;
    }
    return nameParts[0][0] || 'U';
  };

  return (
    <div className="container mx-auto max-w-4xl py-6">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">My Profile</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-xl">{getInitials()}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <Button variant="outline" size="sm" className="mt-4">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/settings")}>
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/settings/notifications")}>
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/settings/privacy")}>
                  <EyeOff className="h-4 w-4 mr-2" />
                  Privacy
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/settings/security")}>
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Level</span>
                    <span className="font-medium">{user.level}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Coins Earned</span>
                    <span className="font-medium">{user.coins} 🪙</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Challenges Completed</span>
                    <span className="font-medium">
                      {userContext.completedChallenges.length}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    value={formData.firstName} 
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    value={formData.lastName} 
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  value={formData.phone} 
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input 
                  id="bio" 
                  className="h-24" 
                  value={formData.bio} 
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
