import { sampleNotifications } from "@/data/sampleData";
import { Check } from "lucide-react";

const Notifications = () => {
  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <h1 className="text-3xl font-display mb-8">Updates</h1>

      {sampleNotifications.length === 0 ? (
        <p className="text-muted-foreground text-center mt-20">No updates yet.</p>
      ) : (
        <div className="space-y-1">
          {sampleNotifications.map((n) => (
            <div key={n.id} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base leading-relaxed">{n.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{n.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
