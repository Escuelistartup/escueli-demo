import { Heart, GraduationCap, Zap, Shield, FileText } from "lucide-react";

export const categoryConfig: Record<string, { icon: React.ComponentType<any>; label: string }> = {
  Healthcare: { icon: Heart, label: "Healthcare" },
  Schools: { icon: GraduationCap, label: "Schools" },
  Utilities: { icon: Zap, label: "Utilities" },
  Insurance: { icon: Shield, label: "Insurance" },
  "Government Paperwork": { icon: FileText, label: "Government Paperwork" },
};
