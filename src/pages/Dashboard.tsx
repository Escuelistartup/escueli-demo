import { useNavigate } from "react-router-dom";
import { sampleTasks } from "@/data/sampleData";
import { categoryConfig } from "@/lib/categories";

const statusColor = (status: string) => {
  if (status === "Done") return "bg-primary text-primary-foreground";
  if (status === "Pending") return "bg-accent text-accent-foreground";
  return "bg-border text-foreground";
};

const Dashboard = () => {
  const navigate = useNavigate();

  const categories = Object.keys(categoryConfig);
  const grouped = categories
    .map((cat) => ({
      category: cat,
      tasks: sampleTasks.filter((t) => t.category === cat),
    }))
    .filter((g) => g.tasks.length > 0);

  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <h1 className="text-3xl font-display mb-1">Everything is handled.</h1>
      <p className="text-muted-foreground mb-8">Here's what's going on with your family.</p>

      {grouped.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-xl font-display mb-2">Nothing pending.</p>
          <p className="text-muted-foreground">Your family is covered.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(({ category, tasks }) => {
            const config = categoryConfig[category];
            const Icon = config?.icon;
            return (
              <div key={category}>
                <div className="flex items-center gap-2 mb-3">
                  {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
                  <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {category}
                  </h2>
                </div>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <button
                      key={task.id}
                      onClick={() => navigate(`/task/${task.id}`)}
                      className="w-full bg-card rounded-lg p-5 text-left transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-medium text-base">{task.name}</h3>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${statusColor(task.status)}`}
                        >
                          {task.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {task.memberName} · {task.lastAction}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
