
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Bell, Shield, User, EyeOff, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { tab = "account" } = useParams();
  const { toast } = useToast();

  const handleLogout = () => {
    // In a real app, this would clear auth tokens, session data, etc.
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/auth");
  };

  const handleSaveChanges = (section: string) => {
    toast({
      title: "Settings updated",
      description: `Your ${section} settings have been updated successfully.`,
    });
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
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue={tab} className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <TabsList className="flex flex-col h-auto bg-transparent space-y-1">
              <TabsTrigger 
                value="account" 
                className="w-full justify-start px-3 data-[state=active]:bg-muted/50"
                onClick={() => navigate("/settings")}
              >
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="w-full justify-start px-3 data-[state=active]:bg-muted/50"
                onClick={() => navigate("/settings/notifications")}
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="privacy" 
                className="w-full justify-start px-3 data-[state=active]:bg-muted/50"
                onClick={() => navigate("/settings/privacy")}
              >
                <EyeOff className="h-4 w-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className="w-full justify-start px-3 data-[state=active]:bg-muted/50"
                onClick={() => navigate("/settings/security")}
              >
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              
              <Separator className="my-2" />
              
              <Button 
                variant="destructive" 
                size="sm" 
                className="justify-start" 
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </Button>
            </TabsList>
          </div>
          
          <div className="w-full md:w-3/4">
            <TabsContent value="account" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account details and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="janedoe" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select 
                      id="language" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      defaultValue="en"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing">Marketing emails</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new features and updates
                      </p>
                    </div>
                    <Switch id="marketing" defaultChecked />
                  </div>
                  
                  <Button onClick={() => handleSaveChanges("account")}>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Configure how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications on your device
                      </p>
                    </div>
                    <Switch id="push" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch id="email" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="achievements">Achievement Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when you earn badges or achievements
                      </p>
                    </div>
                    <Switch id="achievements" defaultChecked />
                  </div>
                  
                  <Button onClick={() => handleSaveChanges("notification")}>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Manage your privacy preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="profile-visible">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to other users
                      </p>
                    </div>
                    <Switch id="profile-visible" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-sharing">Data Sharing</Label>
                      <p className="text-sm text-muted-foreground">
                        Share anonymous usage data to improve the app
                      </p>
                    </div>
                    <Switch id="data-sharing" defaultChecked />
                  </div>
                  
                  <Button onClick={() => handleSaveChanges("privacy")}>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your account security
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                  
                  <Button onClick={() => handleSaveChanges("security")}>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;
