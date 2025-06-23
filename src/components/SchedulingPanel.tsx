
import { useState } from "react";
import { Play, Settings, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface SchedulingPanelProps {
  onScheduleExecute: () => void;
}

const SchedulingPanel = ({ onScheduleExecute }: SchedulingPanelProps) => {
  const [schedulingMode, setSchedulingMode] = useState("FRESH_SCHEDULE");
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const handleExecuteScheduling = () => {
    setIsRunning(true);
    onScheduleExecute();
    
    // Simulate scheduling process
    setTimeout(() => {
      setIsRunning(false);
      toast({
        title: "Scheduling Complete",
        description: "Successfully scheduled 1,247 participants in 342 sessions",
      });
    }, 3000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-600" />
          Auto-Scheduling Engine
        </CardTitle>
        <CardDescription>
          AI-powered training session scheduling and optimization
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Scheduling Mode
            </label>
            <Select value={schedulingMode} onValueChange={setSchedulingMode}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FRESH_SCHEDULE">Fresh Schedule</SelectItem>
                <SelectItem value="INCREMENTAL_SCHEDULE">Incremental</SelectItem>
                <SelectItem value="OPTIMIZE_EXISTING">Optimize Existing</SelectItem>
                <SelectItem value="FILL_GAPS">Fill Gaps</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span>1,247 participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Next 90 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>15 trainers</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-gray-500" />
              <span>8 rooms</span>
            </div>
          </div>
        </div>

        {isRunning && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Processing participants...</span>
              <span>67%</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>
        )}

        <div className="flex gap-2">
          <Button 
            onClick={handleExecuteScheduling} 
            disabled={isRunning}
            className="flex-1"
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Scheduling..." : "Execute Scheduling"}
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        <div className="pt-2 border-t">
          <div className="flex items-center justify-between text-sm">
            <span>Last Run:</span>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-600 border-green-200">
                Success
              </Badge>
              <span className="text-gray-500">2 hours ago</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchedulingPanel;
