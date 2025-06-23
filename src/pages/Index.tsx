
import { useState } from "react";
import { Calendar, Users, BookOpen, BarChart3, Settings, Bell, QrCode, Download, Plus, TrendingUp, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationHeader from "@/components/NavigationHeader";
import MetricsCard from "@/components/MetricsCard";
import SchedulingPanel from "@/components/SchedulingPanel";
import TrainingChart from "@/components/TrainingChart";
import RecentSessions from "@/components/RecentSessions";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [userRole, setUserRole] = useState<"admin" | "scheduler" | "trainer" | "trainee">("admin");
  const { toast } = useToast();

  const handleRoleChange = (role: "admin" | "scheduler" | "trainer" | "trainee") => {
    setUserRole(role);
    toast({
      title: "Role Changed",
      description: `Switched to ${role.charAt(0).toUpperCase() + role.slice(1)} view`,
    });
  };

  const handleScheduleExecution = () => {
    toast({
      title: "Auto-Scheduler Started",
      description: "Executing FRESH_SCHEDULE mode for 1,247 participants...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <NavigationHeader userRole={userRole} onRoleChange={handleRoleChange} />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            TrainingHub 360 - Enterprise Edition
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Healthcare Training
            <span className="text-blue-600"> Management System</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Automated training coordination, scheduling, and compliance management for 6,000+ healthcare professionals across multiple facilities.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricsCard
            title="Active Trainees"
            value="6,247"
            change="+12%"
            changeType="positive"
            icon={Users}
            description="Total enrolled participants"
          />
          <MetricsCard
            title="Completion Rate"
            value="87.3%"
            change="+5.2%"
            changeType="positive"
            icon={BarChart3}
            description="This quarter"
          />
          <MetricsCard
            title="Sessions Today"
            value="24"
            change="6 completed"
            changeType="neutral"
            icon={Calendar}
            description="18 remaining"
          />
          <MetricsCard
            title="Compliance Score"
            value="94.1%"
            change="+2.1%"
            changeType="positive"
            icon={BookOpen}
            description="EHR certification compliance"
          />
        </div>

        {/* Role-based Dashboard Content */}
        <Tabs value={userRole} onValueChange={(value) => handleRoleChange(value as any)} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[400px] mx-auto">
            <TabsTrigger value="admin">Administrator</TabsTrigger>
            <TabsTrigger value="scheduler">Scheduler</TabsTrigger>
            <TabsTrigger value="trainer">Trainer</TabsTrigger>
            <TabsTrigger value="trainee">Trainee</TabsTrigger>
          </TabsList>

          {/* Administrator Dashboard */}
          <TabsContent value="admin" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Training Progress Analytics
                  </CardTitle>
                  <CardDescription>
                    Completion rates by department and training classification
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TrainingChart />
                </CardContent>
              </Card>
              
              <SchedulingPanel onScheduleExecute={handleScheduleExecution} />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-red-800">Room TR-Alpha Unavailable</p>
                      <p className="text-sm text-red-600">Equipment maintenance scheduled</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-amber-800">Prerequisites Overdue</p>
                      <p className="text-sm text-amber-600">127 participants need LMS completion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-blue-800">Scheduling Complete</p>
                      <p className="text-sm text-blue-600">Auto-scheduler processed 342 users</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Training Course
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Bulk Import Users
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    System Configuration
                  </Button>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Resource Utilization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Trainer Capacity</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Room Utilization</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Equipment Usage</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Scheduler Dashboard */}
          <TabsContent value="scheduler" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Session Calendar
                  </CardTitle>
                  <CardDescription>
                    Upcoming training sessions this week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <div key={day} className="font-medium text-gray-500 py-2">{day}</div>
                    ))}
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div key={i} className={`
                        h-8 flex items-center justify-center text-xs rounded
                        ${i === 15 ? 'bg-blue-100 text-blue-800 font-medium' : 
                          i === 16 || i === 18 ? 'bg-green-100 text-green-800' :
                          'hover:bg-gray-100'}
                      `}>
                        {i > 6 && i < 28 ? i - 6 : ''}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <SchedulingPanel onScheduleExecute={handleScheduleExecution} />
            </div>
            
            <RecentSessions />
          </TabsContent>

          {/* Trainer Dashboard */}
          <TabsContent value="trainer" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    Today's Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <p className="font-medium">MEDITECH Clinical Module</p>
                      <p className="text-sm text-gray-600">Room TR-Alpha • 9:00 AM - 12:00 PM</p>
                      <p className="text-sm text-blue-600">12/15 participants checked in</p>
                    </div>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">EHR Advanced Workflows</p>
                      <p className="text-sm text-gray-600">Room TR-Beta • 2:00 PM - 5:00 PM</p>
                      <p className="text-sm text-gray-500">8 participants enrolled</p>
                    </div>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-green-600" />
                    QR Check-In
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Scan QR code in training room to check in</p>
                  <Button className="w-full">
                    Open Camera Scanner
                  </Button>
                </CardContent>
              </Card>
            </div>

            <RecentSessions />
          </TabsContent>

          {/* Trainee Dashboard */}
          <TabsContent value="trainee" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    My Training Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>EHR Clinical Training</span>
                        <span className="text-green-600 font-medium">Completed</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Advanced Workflows</span>
                        <span className="text-blue-600 font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>System Administration</span>
                        <span className="text-gray-500">Not Started</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">EHR Advanced Workflows</p>
                      <Badge className="bg-blue-600">Tomorrow</Badge>
                    </div>
                    <p className="text-sm text-gray-600">June 24, 2025 • 2:00 PM - 5:00 PM</p>
                    <p className="text-sm text-gray-600">Room TR-Beta • Dr. Sarah Johnson</p>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Prerequisites Complete
                      </Badge>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">System Administration</p>
                      <Badge variant="outline">June 28</Badge>
                    </div>
                    <p className="text-sm text-gray-600">June 28, 2025 • 9:00 AM - 12:00 PM</p>
                    <p className="text-sm text-gray-600">Room TR-Alpha • John Smith</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-purple-600" />
                  My Certificates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">EHR Clinical Certification</p>
                      <Badge className="bg-green-600">Completed</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Issued: June 15, 2025</p>
                    <Button size="sm" variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  <div className="border border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">More certificates will appear here as you complete training</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
