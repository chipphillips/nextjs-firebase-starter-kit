import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Copy } from 'lucide-react'

const colorPalette = {
  primary: [
    { name: 'Red', hex: '#F15A4E' },
    { name: 'Blue', hex: '#2274EA' },
    { name: 'Navy', hex: '#0F416E' },
  ],
  secondary: [
    { name: 'Bright Blue', hex: '#2274EA' },
    { name: 'Teal', hex: '#30C9CA' },
    { name: 'Yellow', hex: '#E1E934' },
    { name: 'Dark', hex: '#1E1E1E' },
    { name: 'Green', hex: '#229973' },
    { name: 'Light Blue', hex: '#B1DDF6' },
    { name: 'Darker Blue', hex: '#006BA6' },
    { name: 'Light Gray', hex: '#F5F5F5' },
  ],
  font: [
    { name: 'Dark', hex: '#1E1E1E' },
  ],
  blueVariations: [
    { name: 'Light Blue', hex: '#B3D4FC' },
    { name: 'Sky Blue', hex: '#69A9F7' },
    { name: 'Medium Blue', hex: '#2274EA' },
    { name: 'Dark Blue', hex: '#0F416E' },
    { name: 'Navy Blue', hex: '#0A2C4A' },
    { name: 'Very Light Blue', hex: '#E6F0FD' },
  ],
  redVariations: [
    { name: 'Light Pink', hex: '#FFC4C0' },
    { name: 'Salmon Pink', hex: '#FF8E85' },
    { name: 'Coral Red', hex: '#F15A4E' },
    { name: 'Bright Red', hex: '#E62E20' },
    { name: 'Dark Red', hex: '#B01E13' },
  ],
}

const ColorSection = ({ title, colors }: { title: string; colors: { name: string; hex: string }[] }) => {
  const [isOpen, setIsOpen] = useState(true)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          <span className="sr-only">{isOpen ? 'Collapse' : 'Expand'} {title}</span>
        </Button>
      </div>
      {isOpen && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-md shadow-md mb-2"
                style={{ backgroundColor: color.hex }}
                aria-label={`${color.name} color swatch`}
              ></div>
              <Label className="text-sm font-medium">{color.name}</Label>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500 mr-2">{color.hex}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0"
                  onClick={() => copyToClipboard(color.hex)}
                  aria-label={`Copy ${color.name} hex code`}
                >
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy color hex code</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default function ColorPalette() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Constructiv AI Color Palette</h1>
      <ColorSection title="Primary Colors" colors={colorPalette.primary} />
      <ColorSection title="Secondary Colors" colors={colorPalette.secondary} />
      <ColorSection title="Font Colors" colors={colorPalette.font} />
      <ColorSection title="Blue Variations" colors={colorPalette.blueVariations} />
      <ColorSection title="Red Variations" colors={colorPalette.redVariations} />
    </div>
  )
}