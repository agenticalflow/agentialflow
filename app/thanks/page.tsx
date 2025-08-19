import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Link from "next/link"

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AgenticalFlow</span>
          </div>
          <Button asChild variant="outline" size="sm" className="cursor-pointer bg-transparent">
            <Link href="/">חזרה לעמוד הראשי</Link>
          </Button>
        </div>
      </header>

      {/* Thank You Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">נחמד להכיר אותך.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            ניצור איתך קשר בשעות הקרובות
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 cursor-pointer">
            <Link href="/">חזרה לעמוד הראשי</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AgenticalFlow</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2">מעבדת AI בוטיק לעסקים קטנים ובינוניים</p>
              <p className="text-sm text-muted-foreground">© 2025 AgenticalFlow. כל הזכויות שמורות.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
