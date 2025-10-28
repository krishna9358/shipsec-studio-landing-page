"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "./ui/animated-list"


interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "Authentication Check",
    description: "Multi-factor authentication enabled for all admin accounts",
    time: "Critical",
    icon: "🔐",
    color: "#FF3D71",
  },
  {
    name: "API Security",
    description: "Rate limiting and input validation implemented",
    time: "High",
    icon: "🛡️",
    color: "#FFB800",
  },
  {
    name: "Data Encryption",
    description: "All sensitive data encrypted at rest and in transit",
    time: "Critical",
    icon: "🔒",
    color: "#00C9A7",
  },
  {
    name: "Access Control",
    description: "Role-based access control implemented",
    time: "High",
    icon: "👥",
    color: "#1E86FF",
  },
  {
    name: "Audit Logging",
    description: "Security events logging and monitoring enabled",
    time: "Medium",
    icon: "📝",
    color: "#818CF8",
  },
  {
    name: "Backup Strategy",
    description: "Regular automated backups configured",
    time: "High",
    icon: "💾",
    color: "#F472B6",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-3 sm:p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        {/* <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div> */}
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-base font-semibold">{name}</span>
            <span className="mx-2">·</span>
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full font-medium",
              time === "Critical" && "bg-red-100 text-red-700",
              time === "High" && "bg-amber-100 text-amber-700",
              time === "Medium" && "bg-blue-100 text-blue-700"
            )}>
              {time}
            </span>
          </figcaption>
          <p className="text-sm font-normal text-slate-600 dark:text-white/60 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[300px] w-full flex-col overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm p-4",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}
