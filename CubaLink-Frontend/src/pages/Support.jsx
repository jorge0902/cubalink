export default function SupportPage() {
  return (
    <main className="min-h-screen bg-surface pt-16">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="font-display-lg text-display-lg text-primary mb-6">
          Soporte
        </h1>
        
        <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-on-surface-variant mb-4">
            Esta sección está en desarrollo. Próximamente encontrarás recursos de ayuda, preguntas frecuentes y contacto con el equipo de soporte.
          </p>
          
          <div className="border border-outline-variant rounded-xl p-4 mb-4">
            <p className="text-sm text-on-surface">
              <strong>¿En qué puedo ayudarte?</strong>
            </p>
            <ul className="mt-2 space-y-2 text-sm text-on-surface-variant">
              <li>• Preguntas sobre cómo usar la app</li>
              <li>• Reportar problemas técnicos</li>
              <li>• Soporte para publicaciones</li>
            </ul>
          </div>
          
          <p className="text-xs text-outline">
            * En construcción
          </p>
        </div>
      </div>
    </main>
  )
}