export interface Member {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email: string;
  preferredLanguage: string;
  categories: string[];
}

export interface Task {
  id: string;
  memberId: string;
  memberName: string;
  category: string;
  name: string;
  status: "Pending" | "In Progress" | "Done";
  lastAction: string;
  whatWeDid: string;
  whatsNext: string;
  documents: string[];
  timeline: { date: string; action: string }[];
}

export interface Notification {
  id: string;
  message: string;
  date: string;
}
