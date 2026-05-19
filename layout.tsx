import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground">
              <span className="text-sm font-bold text-background">A</span>
            </div>
            <span className="text-lg font-semibold">Acme</span>
          </Link>
        </div>
        
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>
        
        <h1 className="text-2xl font-bold">Authentication Error</h1>
        <p className="mt-2 text-muted-foreground">
          Something went wrong during authentication. Please try again.
        </p>
        
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/auth/login">
            <Button className="w-full">
              Try again
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Go home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
