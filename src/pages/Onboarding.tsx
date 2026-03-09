import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, GraduationCap, Zap, Shield, FileText, MoreHorizontal, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { key: "Healthcare", icon: Heart, label: "Healthcare" },
  { key: "Schools", icon: GraduationCap, label: "Schools" },
  { key: "Utilities", icon: Zap, label: "Utilities" },
  { key: "Insurance", icon: Shield, label: "Insurance" },
  { key: "Government Paperwork", icon: FileText, label: "Gov. Paperwork" },
  { key: "Other", icon: MoreHorizontal, label: "Other" },
];

const relationships = ["Mom", "Dad", "Grandparent", "Sibling", "Other"];
const languages = ["Spanish", "Vietnamese", "Tagalog", "Hindi", "Mandarin", "Korean", "Other"];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");

  const totalSteps = 5;

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const canProceed = () => {
    if (step === 0) return userName.trim() && userEmail.trim();
    if (step === 1) return name.trim() && relationship;
    if (step === 2) return true;
    if (step === 3) return selectedCategories.length > 0;
    if (step === 4) return language;
    return true;
  };

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
    else setStep(totalSteps);
  };

  // Confirmation screen
  if (step === totalSteps) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center bg-background">
        <h1 className="text-4xl font-display mb-4 text-foreground">We're on it.</h1>
        <p className="text-muted-foreground text-lg font-body mb-12">
          Your family is in good hands.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-primary-foreground rounded-lg px-8 min-h-[52px] font-body font-medium text-base"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col px-6 pt-12 pb-8 bg-background">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-12">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i <= step ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="flex-1">
        {step === 0 && (
          <div>
            <h1 className="text-3xl font-display mb-2 text-foreground">Let's get you set up.</h1>
            <p className="text-muted-foreground font-body mb-8">
              You're the one managing this. Next, we'll add the family member you're helping.
            </p>

            <label className="block text-sm font-medium font-body mb-2 text-foreground">Your name</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Alex García"
              className="w-full rounded-lg border border-input bg-background px-4 min-h-[52px] text-base mb-6 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <label className="block text-sm font-medium font-body mb-2 text-foreground">Your email</label>
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="alex@example.com"
              type="email"
              className="w-full rounded-lg border border-input bg-background px-4 min-h-[52px] text-base mb-6 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 className="text-3xl font-display mb-2 text-foreground">Who needs support?</h1>
            <p className="text-muted-foreground font-body mb-8">Add a family member you help with tasks.</p>

            <label className="block text-sm font-medium font-body mb-2 text-foreground">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. María García"
              className="w-full rounded-lg border border-input bg-background px-4 min-h-[52px] text-base mb-6 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <label className="block text-sm font-medium font-body mb-2 text-foreground">Relationship</label>
            <Select value={relationship} onValueChange={setRelationship}>
              <SelectTrigger className="w-full min-h-[52px] rounded-lg font-body">
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                {relationships.map((r) => (
                  <SelectItem key={r} value={r} className="font-body">
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-3xl font-display mb-2 text-foreground">
              Anything we should know about {name || "them"}?
            </h1>
            <p className="text-muted-foreground font-body mb-8">
              Account numbers, insurance info, doctor names — anything helps. You can always add more later.
            </p>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any details here..."
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base min-h-[160px] font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-3xl font-display mb-2 text-foreground">What do they need help with?</h1>
            <p className="text-muted-foreground font-body mb-8">Select all that apply.</p>

            <div className="grid grid-cols-2 gap-3">
              {categories.map(({ key, icon: Icon, label }) => {
                const selected = selectedCategories.includes(key);
                return (
                  <button
                    key={key}
                    onClick={() => toggleCategory(key)}
                    className={`flex flex-col items-center justify-center gap-3 p-5 min-h-[120px] rounded-lg border text-center font-body transition-colors relative ${
                      selected
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-input text-foreground"
                    }`}
                  >
                    {selected && (
                      <Check className="w-4 h-4 absolute top-3 right-3" />
                    )}
                    <Icon className="w-6 h-6 shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h1 className="text-3xl font-display mb-2 text-foreground">How do we reach them?</h1>
            <p className="text-muted-foreground font-body mb-8">We'll use this to help communicate.</p>

            <label className="block text-sm font-medium font-body mb-2 text-foreground">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 000-0000"
              type="tel"
              className="w-full rounded-lg border border-input bg-background px-4 min-h-[52px] text-base mb-6 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <label className="block text-sm font-medium font-body mb-2 text-foreground">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Optional"
              type="email"
              className="w-full rounded-lg border border-input bg-background px-4 min-h-[52px] text-base mb-6 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <label className="block text-sm font-medium font-body mb-2 text-foreground">Preferred language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full min-h-[52px] rounded-lg font-body">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((l) => (
                  <SelectItem key={l} value={l} className="font-body">
                    {l}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {step === 2 ? (
        <div className="flex gap-3 mt-8">
          <button
            onClick={handleNext}
            className="flex-1 border border-input text-foreground rounded-lg min-h-[52px] font-body font-medium text-base transition-opacity"
          >
            Skip for now
          </button>
          <button
            onClick={handleNext}
            className="flex-1 bg-primary text-primary-foreground rounded-lg min-h-[52px] font-body font-medium text-base transition-opacity"
          >
            Save & Continue
          </button>
        </div>
      ) : (
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className="w-full bg-primary text-primary-foreground rounded-lg min-h-[52px] font-body font-medium text-base mt-8 disabled:opacity-40 transition-opacity"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default Onboarding;
