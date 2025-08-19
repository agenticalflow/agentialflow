"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Zap, TrendingUp, Users, Clock, Shield, MessageCircle, BarChart3, FileText, Wrench } from "lucide-react"
import { useState, useEffect } from "react"

export default function AgenticalFlowLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "התקנו בוט באתר שעזר ללקוחות למצוא את מה שהם מחפשים, והגדלנו מכירות בכ-12% תוך פחות מחודשיים",
      author: "יובל",
      title: "בעל חנות 'קכשקוש' למוצרי חיות מחמד",
    },
    {
      text: "AgenticalFlow יצרו עבורנו מערכת שרודפת אחר לקוחות חייבים. הפסקנו להתעסק בגביה כמעט לחלוטין",
      author: "שחר מ.",
      title: "בעל סטודיו 'מרחב' לעיצוב פנים",
    },
    {
      text: "AgenticalFlow בנו עבורנו בוט מבוסס מאניצ'ט שהגדיל את מספר הלקוחות החוזרים בכ-20%",
      author: "רויטל כ.",
      title: "Botanical, קוסמטיקה טבעית",
    },
    {
      text: "חסכנו כ-15 שעות עבודה שבועיות הודות למערכת ניהול מלאי שמבצעת הזמנות אוטומטיות לפי הצורך",
      author: "רונית",
      title: "בעלת חנות אופנת נשים 'סיגליות' בחדרה",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000) // Changed from 4000ms to 6000ms (6 seconds)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const removeWatermark = () => {
      // Remove by ID pattern (v0-built-with-button-*)
      const watermarkElements = document.querySelectorAll('[id^="v0-built-with-button-"]')
      watermarkElements.forEach((element) => {
        element.remove()
      })

      // Remove by content and positioning (fallback)
      const fixedElements = document.querySelectorAll('div[style*="position: fixed"]')
      fixedElements.forEach((element) => {
        const style = element.getAttribute("style") || ""
        const hasBottomRight = style.includes("bottom:") && style.includes("right:")
        const hasV0Content =
          element.textContent?.includes("Built with") ||
          element.querySelector('svg[viewBox="0 0 147 70"]') ||
          element.textContent?.includes("v0")

        if (hasBottomRight && hasV0Content) {
          element.remove()
        }
      })
    }

    // Run immediately
    removeWatermark()

    // Run periodically to catch dynamically added watermarks
    const interval = setInterval(removeWatermark, 1000)

    // Run on DOM changes
    const observer = new MutationObserver(removeWatermark)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  const scrollToServices = () => {
    document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
  }

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
          <Button variant="outline" size="sm" onClick={scrollToContact} className="cursor-pointer bg-transparent">
            צור קשר
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/abstract-network-connections.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            עסק קטן?
            <br />
            <span className="text-primary">הגיע הזמן להתייעל בגדול</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            אנחנו AgenticalFlow - סטודיו AI בוטיק המתמחה בשילוב פתרונות בינה מלאכותית לעסקים קטנים ובינוניים. נעזור לכם
            לחסוך זמן, להפחית עלויות ולהגדיל רווחים.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 cursor-pointer" onClick={scrollToContact}>
              קבלו ייעוץ חינם עכשיו
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent cursor-pointer"
              onClick={scrollToServices}
            >
              למד עוד על השירותים
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">למה עסקים בוחרים ב-AgenticalFlow?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">חיסכון בזמן ובהוצאות</h3>
                <p className="text-muted-foreground">אוטומציה חכמה של תהליכים חוזרים שחוסכת לכם שעות עבודה כל יום</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">שירות אישי ומותאם</h3>
                <p className="text-muted-foreground">מספיק עם הפתרונות גנריים - אנחנו בונים בדיוק מה שהעסק שלכם צריך</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">ללא סיכון טכנולוגי</h3>
                <p className="text-muted-foreground">אנחנו מטפלים בכל הטכנולוגיה - אתם מתמקדים בעסק</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">איך אנחנו עוזרים לעסק שלכם?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-accent flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">אוטומציה של שירות לקוחות</h3>
                    <p className="text-muted-foreground">צ'אטבוטים חכמים שנותנים מענה אמיתי ומגוון 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-accent flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">אנליזת נתונים מתקדמת</h3>
                    <p className="text-muted-foreground">הבנת התנהגות לקוחות וזיהוי הזדמנויות עסקיות</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <FileText className="w-8 h-8 text-accent flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">אוטומציה של תהליכי משרד ומלאי</h3>
                    <p className="text-muted-foreground">הזמנות אוטומטיות ,מחשבונים, חשבוניות חכמות ועוד</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Wrench className="w-8 h-8 text-accent flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">פתרונות מותאמים אישית</h3>
                    <p className="text-muted-foreground">ספרו לנו מה אתם עושים ואנחנו נמצא דרך לחסוך לכם זמן וכסף</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">התחלה מהירה</h3>
              <p className="text-muted-foreground mb-6">תנו לנו 2-5 שבועות ויש לכם מוצר מוטמע ומוכן לשימוש </p>
              <div className="bg-card rounded-lg p-4 min-h-[100px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2 transition-all duration-500">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="text-sm font-semibold">
                    - {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentTestimonial
                        ? "bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">מי אנחנו</h2>

          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/290330541_10227325185612743_8919686910836398078_n.jpg-Rd8lEvrcfNoNqpQ3uKOUHZURIhxjGK.jpeg"
                  alt="Team member"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">ג'וליאן-דוד פדר</h3>
              <p className="text-sm text-muted-foreground">
                יזם, איש מוצר ותוכן
                <br />
                עם רקע בעולמות הפינטק, התקשורת וגיוס הון
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gal-Vfl6nc9SVC2WBtC80RulOyGBbD1WsG.jpeg"
                  alt="Team member"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">גל ברכה</h3>
              <p className="text-sm text-muted-foreground">
                מנהל טכנולוגיה, מפתח ואמן קוד
                <br />
                אחרי שני אקזיטים בתחום האד-טק והטכנולוגיה הרפואית
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              אנחנו צוות קטן ומיומן, עם ניסיון מצטבר של קרוב ל־30 שנה בפיתוח ואפיון מוצר בתחומים וסקטורים מגוונים - החל
              מטכנולוגיה פיננסית וכלה ב-Gaming.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              אנו באים מעולם הסטארט-אפים ומתודולוגיות ה-Lean ולמדנו, לעיתים בדרך הקשה, כיצד לייצר פתרונות חכמים ויעילים
              בתקציבים צנועים ולו"ז דחק.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              כצוות בעל רקע יזמי, האתגרים שעומדים בפני עסקים הקטנים מוכרים לנו היטב, ונשמח להתגמש עבורכם. אנחנו יודעים
              שהזמן שלכם שווה כסף ואנחנו לא מתכוונים לבזבז אותו.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">מוכנים להתחיל? בואו נדבר!</h2>
            <p className="text-xl text-muted-foreground">
              קבלו שעה ייעוץ חינם ותגלו איך AI יכול לקחת את העסק שלכם קדימה
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form action="https://formsubmit.co/julian.d.feder@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="מעוניין בשיחת ייעוץ" />

                <div>
                  <label className="block text-sm font-medium mb-2">
                    אמייל <span className="text-red-500">*</span>
                  </label>
                  <Input type="email" name="email" placeholder="email@example.com" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">שם</label>
                    <Input name="name" placeholder="השם שלכם" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">טלפון</label>
                    <Input name="phone" placeholder="050-1234567" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">ספרו לנו על העסק (אופציונלי)</label>
                  <Textarea name="message" placeholder="איזה תחום? כמה עובדים? מה הבעיות הכי גדולות שלכם?" rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6 cursor-pointer">
                  שלחו בקשה לייעוץ חינם
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  נחזור אליכם תוך 24 שעות • ללא התחייבות • ייעוץ ראשון חינם לגמרי
                </p>
              </form>
            </CardContent>
          </Card>
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
