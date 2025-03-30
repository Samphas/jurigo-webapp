
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function JurigoApp() {
  const [messages, setMessages] = useState([
    { sender: 'jurigo', text: 'Jag är här, Samir. Vad behöver du just nu?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    const userMessage = { sender: 'du', text: input.trim() }
    setMessages([...messages, userMessage])
    setInput('')

    setTimeout(() => {
      const reply = { sender: 'jurigo', text: 'Ditt meddelande är mottaget. Jag analyserar och återkommer med strategi.' }
      setMessages(prev => [...prev, reply])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Jurigo – Spartan Companion</h1>
      <div className="space-y-2 max-h-[60vh] overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <Card key={index} className={msg.sender === 'jurigo' ? 'bg-gray-800' : 'bg-gray-700'}>
            <CardContent>
              <p><strong>{msg.sender === 'jurigo' ? 'Jurigo' : 'Du'}:</strong> {msg.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Skriv till Jurigo..."
          className="flex-1"
        />
        <Button onClick={handleSend}>Skicka</Button>
      </div>
    </div>
  )
}
