
import { Bell, Settings, User, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationHeaderProps {
  userRole: "admin" | "scheduler" | "trainer" | "trainee";
  onRoleChange: (role: "admin" | "scheduler" | "trainer" | "trainee") => void;
}

const NavigationHeader = ({ userRole, onRoleChange }: NavigationHeaderProps) => {
  const getRoleDisplayName = (role: string) => {
    const roleNames = {
      admin: "Administrator",
      scheduler: "Training Scheduler", 
      trainer: "Trainer/SME",
      trainee: "Healthcare Professional"
    };
    return roleNames[role as keyof typeof roleNames];
  };

  const getRoleBadgeColor = (role: string) => {
    const colors = {
      admin: "bg-red-600",
      scheduler: "bg-purple-600",
      trainer: "bg-orange-600", 
      trainee: "bg-blue-600"
    };
    return colors[role as keyof typeof colors];
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TrainingHub 360</h1>
                <p className="text-xs text-gray-500">Aga Khan University Hospital</p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sessions</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Reports</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help</a>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Role Demo Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <Badge className={`mr-2 ${getRoleBadgeColor(userRole)}`}>
                    {userRole.toUpperCase()}
                  </Badge>
                  Switch Role
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Demo: Switch User Role</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onRoleChange("admin")}>
                  <Badge className="mr-2 bg-red-600">ADMIN</Badge>
                  Administrator
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("scheduler")}>
                  <Badge className="mr-2 bg-purple-600">SCHED</Badge>
                  Training Scheduler
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("trainer")}>
                  <Badge className="mr-2 bg-orange-600">TRAIN</Badge>
                  Trainer/SME
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onRoleChange("trainee")}>
                  <Badge className="mr-2 bg-blue-600">USER</Badge>
                  Healthcare Professional
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 border-2 border-white">
                3
              </Badge>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium">Dr. Sarah Ahmed</p>
                    <p className="text-xs text-gray-500">{getRoleDisplayName(userRole)}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div>
                    <p className="font-medium">Dr. Sarah Ahmed</p>
                    <p className="text-sm text-gray-500">{getRoleDisplayName(userRole)}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
