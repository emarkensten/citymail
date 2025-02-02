"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, Info, Zap, Package, Share2, CheckSquare, Building2 } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, memo } from "react"

const PackageJourney = memo(function PackageJourney() {
  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Paketets resa</h2>

      <div className="space-y-6 relative">
        <div className="flex gap-4">
          <div className="bg-[#E8F5EA] p-2 rounded-full w-9 h-9 flex items-center justify-center z-10">
            <CheckSquare className="h-5 w-5 text-[#008731]" />
          </div>
          <div>
            <div className="font-medium">Årsta</div>
            <div className="text-sm text-gray-600">Igår 16:48</div>
            <div className="text-sm">Paketet har ankommit till terminal</div>
          </div>
        </div>

        <div className="absolute left-[18px] top-[16px] bottom-[56px] w-[2px] border-l-2 border-dashed border-[#008731] z-0"></div>

        <div className="flex gap-4">
          <div className="bg-[#E8F5EA] p-2 rounded-full w-9 h-9 flex items-center justify-center z-10">
            <Building2 className="h-5 w-5 text-[#008731]" />
          </div>
          <div>
            <div className="font-medium">Citymail</div>
            <div className="text-sm text-gray-600">26 jan 18:40</div>
            <div className="text-sm">Paketet har aviserats, men ännu inte lämnats in till Citymail</div>
          </div>
        </div>
      </div>

      <button className="text-[#008731] font-medium mt-4">Visa mer</button>
    </div>
  )
})

const Footer = memo(function Footer() {
  return (
    <footer className="bg-[#004D1A] text-white p-4 text-center">
      <p className="mb-2">
        Undrar du över något?{" "}
        <Link href="#" className="underline">
          Kontakta oss
        </Link>
      </p>
      <p className="mb-2">
        Information om Citymail hittar du på{" "}
        <Link href="https://citymail.se" className="underline">
          citymail.se
        </Link>
      </p>
      <div className="flex justify-center gap-4">
        <Link href="#" className="underline">
          Integritetspolicy
        </Link>
        <Link href="#" className="underline">
          Cookies
        </Link>
      </div>
    </footer>
  )
})

export default function DeliveryPage() {
  const [email, setEmail] = useState("")
  const [termsAccepted, setTermsAccepted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00873130] to-transparent">
      <div className="mx-auto max-w-[500px]">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          <Link href="#" className="text-[#008731]">
            <Globe className="h-6 w-6" />
          </Link>
          <div className="w-[42px]">
            <Image
              src="/assets/images/citymail-logo.svg"
              alt="Citymail"
              width={42}
              height={40}
              className="w-full"
              priority
            />
          </div>
          <Link href="#" className="text-[#008731]">
            <Info className="h-6 w-6" />
          </Link>
        </header>

        {/* Main Content */}
        <main className="px-4 pb-20">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Ditt paket från Meds apotek levereras snart!</h1>
            <p className="text-lg">
              <span className="text-[#D85E16] font-medium">På väg</span> levereras tor 6 feb
            </p>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Leveransinformation</h2>
            <div className="mb-2 font-medium">Hemleverans</div>
            <p>Ditt paket levereras till Rosenlundsgatan 29A</p>
            <p>Levereras torsdag 6 februari runt 13:00</p>
          </div>

          {/* Delivery Alternatives */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Leveransalternativ</h2>

            <div className="space-y-0 divide-y divide-gray-200">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Zap className="h-6 w-6 text-[#008731]" />
                      <div>
                        <div className="font-medium">Tidigarelägg din leverans</div>
                        <div className="text-sm">19 kr</div>
                        <div className="text-sm text-gray-600">Tidigast imorgon</div>
                      </div>
                    </div>
                    <div className="text-[#008731]">›</div>
                  </button>
                </SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-3xl pt-6">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold flex items-center gap-2">
                      <Zap className="h-6 w-6 text-[#008731]" />
                      Tidigarelägg din leverans
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold">19 kr</span>
                    </div>
                    <p>Paketet kan levereras den 31 jan istället.</p>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-base font-medium">
                        Ange e-postadress
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="test@mail.se"
                        className="w-full"
                      />
                      <p className="text-sm text-gray-600">Vi behöver din email för att kunna maila ett kvitto</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={termsAccepted}
                        onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                      />
                      <label htmlFor="terms" className="text-sm">
                        Jag godkänner{" "}
                        <Link href="#" className="text-[#008731] underline">
                          köp och leveransvillkoren
                        </Link>
                      </label>
                    </div>
                    <Button className="w-full bg-[#008731] hover:bg-[#007029]" disabled={!email || !termsAccepted}>
                      Betala 19 kr med swish
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Package className="h-6 w-6 text-[#008731]" />
                      <div>
                        <div className="font-medium">Byt leveranssätt</div>
                        <div className="text-sm">29-39 kr</div>
                        <div className="text-sm text-gray-600">Byt till ombud eller paketbox</div>
                      </div>
                    </div>
                    <div className="text-[#008731]">›</div>
                  </button>
                </SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-3xl pt-6">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold">Välj leveransalternativ</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-0 divide-y divide-gray-200">
                    <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Package className="h-6 w-6 text-[#008731]" />
                        <div>
                          <div className="font-medium">Paketskåp</div>
                          <div className="text-sm">29 kr</div>
                          <div className="text-sm text-gray-600">Levereras om 1-2 arbetsdagar</div>
                        </div>
                      </div>
                      <div className="text-[#008731]">›</div>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-[#008731]" />
                        <div>
                          <div className="font-medium">Ombud</div>
                          <div className="text-sm">39 kr</div>
                          <div className="text-sm text-gray-600">Levereras om 1-2 arbetsdagar</div>
                        </div>
                      </div>
                      <div className="text-[#008731]">›</div>
                    </button>
                  </div>
                </SheetContent>
              </Sheet>

              <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Share2 className="h-6 w-6 text-[#008731]" />
                  <div>
                    <div className="font-medium">Dela din leverans</div>
                    <div className="text-sm text-gray-600">Låt någon annan följa ditt paket</div>
                  </div>
                </div>
                <div className="text-[#008731]">›</div>
              </button>
            </div>
          </div>

          {/* Package Journey */}
          <PackageJourney />

          {/* Package Information */}
          <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Paketinformation</h2>
            <div className="font-medium">Paket</div>
            <div>Spårningsnummer</div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

