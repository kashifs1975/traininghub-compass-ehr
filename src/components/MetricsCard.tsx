
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description: string;
}

const MetricsCard = ({ title, value, change, changeType, icon: Icon, description }: MetricsCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getChangeIcon = () => {
    if (changeType === "positive") {
      return <TrendingUp className="w-3 h-3" />;
    } else if (changeType === "negative") {
      return <TrendingDown className="w-3 h-3" />;
    }
    return null;
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <div className={`flex items-center gap-1 text-sm ${getChangeColor()}`}>
              {getChangeIcon()}
              <span>{change}</span>
            </div>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
