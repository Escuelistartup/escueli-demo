import { Task, Notification, Member } from "@/types/escueli";

export const sampleMembers: Member[] = [
  {
    id: "m1",
    name: "María García",
    relationship: "Mother",
    phone: "(555) 012-3456",
    email: "maria@email.com",
    preferredLanguage: "Spanish",
    categories: ["Healthcare", "Insurance", "Government Paperwork"],
  },
  {
    id: "m2",
    name: "Tomás García",
    relationship: "Father",
    phone: "(555) 012-3457",
    email: "",
    preferredLanguage: "Spanish",
    categories: ["Utilities", "Government Paperwork"],
  },
];

export const sampleTasks: Task[] = [
  {
    id: "t1",
    memberId: "m1",
    memberName: "María",
    category: "Healthcare",
    name: "Annual physical scheduled",
    status: "Done",
    lastAction: "Appointment confirmed for March 15",
    whatWeDid: "Called Dr. Patel's office and scheduled the annual physical. Confirmed insurance coverage with Aetna.",
    whatsNext: "Remind María the morning of the appointment. Bring insurance card and photo ID.",
    documents: ["Insurance_Card.pdf", "Referral_Letter.pdf"],
    timeline: [
      { date: "Mar 1", action: "Called clinic to request appointment" },
      { date: "Mar 3", action: "Verified insurance coverage with Aetna" },
      { date: "Mar 5", action: "Appointment confirmed for March 15" },
    ],
  },
  {
    id: "t2",
    memberId: "m1",
    memberName: "María",
    category: "Insurance",
    name: "Health insurance renewal",
    status: "In Progress",
    lastAction: "Renewal form submitted online",
    whatWeDid: "Downloaded renewal application. Filled in personal details and current coverage info.",
    whatsNext: "Waiting for confirmation email. Follow up if no response by March 10.",
    documents: ["Renewal_Application.pdf"],
    timeline: [
      { date: "Feb 20", action: "Received renewal notice in mail" },
      { date: "Feb 25", action: "Completed renewal form online" },
    ],
  },
  {
    id: "t3",
    memberId: "m2",
    memberName: "Tomás",
    category: "Utilities",
    name: "Electric bill autopay setup",
    status: "Pending",
    lastAction: "Account number located",
    whatWeDid: "Found the Con Edison account number from the last paper bill.",
    whatsNext: "Set up autopay through the online portal. Need bank routing number.",
    documents: ["Last_Bill_Feb.pdf"],
    timeline: [
      { date: "Mar 2", action: "Located account number from paper bill" },
    ],
  },
  {
    id: "t4",
    memberId: "m2",
    memberName: "Tomás",
    category: "Government Paperwork",
    name: "Green card renewal application",
    status: "Pending",
    lastAction: "Gathered required documents",
    whatWeDid: "Collected passport photos, current green card copy, and proof of address.",
    whatsNext: "Fill out Form I-90. File online or mail to USCIS.",
    documents: ["Passport_Photos.jpg", "Current_GreenCard.pdf", "Proof_of_Address.pdf"],
    timeline: [
      { date: "Feb 28", action: "Gathered passport photos and documents" },
    ],
  },
  {
    id: "t5",
    memberId: "m1",
    memberName: "María",
    category: "Government Paperwork",
    name: "Social Security statement request",
    status: "Done",
    lastAction: "Statement received",
    whatWeDid: "Created my Social Security account online and downloaded the statement.",
    whatsNext: "No further action needed. Statement filed.",
    documents: ["SS_Statement_2025.pdf"],
    timeline: [
      { date: "Feb 10", action: "Created online SSA account" },
      { date: "Feb 10", action: "Downloaded annual statement" },
      { date: "Feb 12", action: "Filed statement for records" },
    ],
  },
];

export const sampleNotifications: Notification[] = [
  {
    id: "n1",
    message: "Your mom's annual physical was confirmed for March 15.",
    date: "Mar 5",
  },
  {
    id: "n2",
    message: "The insurance renewal application was submitted.",
    date: "Feb 25",
  },
  {
    id: "n3",
    message: "We found your dad's electric bill account number.",
    date: "Mar 2",
  },
  {
    id: "n4",
    message: "María's Social Security statement was downloaded and filed.",
    date: "Feb 12",
  },
  {
    id: "n5",
    message: "We caught a missed payment notice. It's handled.",
    date: "Feb 8",
  },
];
