
import { Calendar, Clock, MapPin, Users, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const RecentSessions = () => {
  const sessions = [
    {
      id: 1,
      course: "MEDITECH Clinical Module",
      trainer: "Dr. Sarah Johnson",
      room: "Training Room Alpha",
      date: "June 23, 2025",
      time: "9:00 AM - 12:00 PM",
      participants: { enrolled: 15, checkedIn: 12, completed: 10 },
      status: "in-progress",
      classification: "CU"
    },
    {
      id: 2,
      course: "EHR Advanced Workflows",
      trainer: "John Smith",
      room: "Training Room Beta",
      date: "June 23, 2025",
      time: "2:00 PM - 5:00 PM",
      participants: { enrolled: 8, checkedIn: 0, completed: 0 },
      status: "scheduled",
      classification: "SME"
    },
    {
      id: 3,
      course: "System Administration",
      trainer: "Maria Garcia",
      room: "Training Room Gamma",
      date: "June 22, 2025",
      time: "10:00 AM - 1:00 PM",
      participants: { enrolled: 12, checkedIn: 12, completed: 12 },
      status: "completed",
      classification: "SU"
    },
    {
      id: 4,
      course: "End User Training",
      trainer: "Dr. Ahmed Khan",
      room: "Training Room Alpha",
      date: "June 22, 2025",
      time: "2:00 PM - 4:00 PM",
      participants: { enrolled: 25, checkedIn: 23, completed: 21 },
      status: "completed",
      classification: "EU"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-600">In Progress</Badge>;
      case "scheduled":
        return <Badge variant="outline">Scheduled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getClassificationColor = (classification: string) => {
    const colors = {
      CU: "bg-red-100 text-red-800",
      SME: "bg-orange-100 text-orange-800",
      SU: "bg-green-100 text-green-800",
      EU: "bg-blue-100 text-blue-800"
    };
    return colors[classification as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          Recent Training Sessions
        </CardTitle>
        <CardDescription>
          Overview of recent and upcoming training sessions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="space-y-1">
                  <h4 className="font-semibold text-gray-900">{session.course}</h4>
                  <p className="text-sm text-gray-600">{session.trainer}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getClassificationColor(session.classification)}>
                    {session.classification}
                  </Badge>
                  {getStatusBadge(session.status)}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{session.room}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{session.participants.enrolled} enrolled</span>
                  </div>
                  {session.participants.checkedIn > 0 && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>{session.participants.checkedIn} checked in</span>
                    </div>
                  )}
                  {session.participants.completed > 0 && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{session.participants.completed} completed</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  {session.status === "scheduled" && (
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  )}
                  {session.status === "in-progress" && (
                    <Button size="sm">
                      Manage Session
                    </Button>
                  )}
                  {session.status === "completed" && (
                    <Button size="sm" variant="outline">
                      View Report
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 mt-4 border-t">
          <Button variant="outline" className="w-full">
            View All Sessions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentSessions;
