import { Zap, Shield, Globe, Layers, Code, BarChart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with edge computing and global CDN distribution."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with built-in authentication and encryption."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with automatic scaling and zero configuration."
  },
  {
    icon: Layers,
    title: "Modern Stack",
    description: "Built on cutting-edge technology for the best developer experience."
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Intuitive APIs and comprehensive documentation for rapid development."
  },
  {
    icon: BarChart,
    title: "Analytics Built-in",
    description: "Real-time insights and metrics to understand your application."
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            A complete platform with all the tools and features you need to create, deploy, and scale modern applications.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-lg border border-border bg-card p-6 transition-colors hover:border-muted-foreground/50"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
