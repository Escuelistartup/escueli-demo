import { useParams, useNavigate } from "react-router-dom";
import { sampleTasks } from "@/data/sampleData";
import { ArrowLeft, FileText } from "lucide-react";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = sampleTasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-muted-foreground">Task not found.</p>
      </div>
    );
  }

  const statusColor =
    task.status === "Done"
      ? "bg-primary text-primary-foreground"
      : task.status === "Pending"
        ? "bg-accent text-accent-foreground"
        : "bg-border text-foreground";

  return (
    <div className="min-h-screen pb-24 px-6 pt-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-muted-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back</span>
      </button>

      <div className="flex items-start justify-between gap-3 mb-2">
        <h1 className="text-2xl font-display leading-tight">{task.name}</h1>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap mt-1 ${statusColor}`}>
          {task.status}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-8">{task.memberName} · {task.category}</p>

      {/* What we did */}
      <section className="mb-8">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">What we did</h2>
        <p className="text-base leading-relaxed">{task.whatWeDid}</p>
      </section>

      {/* What's next */}
      <section className="mb-8">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">What's next</h2>
        <p className="text-base leading-relaxed">{task.whatsNext}</p>
      </section>

      {/* Documents */}
      {task.documents.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Documents</h2>
          <div className="space-y-2">
            {task.documents.map((doc) => (
              <div key={doc} className="flex items-center gap-3 bg-card rounded-lg px-4 py-3">
                <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Timeline */}
      <section className="mb-8">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Timeline</h2>
        <div className="space-y-4">
          {task.timeline.map((entry, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                {i < task.timeline.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
              </div>
              <div className="pb-4">
                <p className="text-xs text-muted-foreground mb-0.5">{entry.date}</p>
                <p className="text-sm">{entry.action}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {task.status !== "Done" && (
        <button className="w-full bg-primary text-primary-foreground rounded-lg min-h-[52px] font-body font-medium text-base">
          Mark as complete
        </button>
      )}
    </div>
  );
};

export default TaskDetail;
