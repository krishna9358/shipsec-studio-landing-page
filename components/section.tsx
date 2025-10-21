import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-24 container mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </section>
  );
}
