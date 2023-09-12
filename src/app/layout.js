

export const metadata = {//define um objeto chamado metadata
  title: 'Register users',//define o título de uma página ou de algum componente específico.
  description: 'Project for class PTAC',//fornece uma descrição ou contexto adicional sobre o objeto ou componente ao qual esses metadados se aplicam.
}

export default function RootLayout({ children }) {//
  return (
    <html lang="pt-br">{/*define a lingua*/}
      <body>{children}</body>
      {/* 
      Qualquer conteúdo que você deseje renderizar nas páginas do seu aplicativo
      (como componentes, texto, imagens, etc.) será inserido dentro deste elemento
      <body> quando você usar o componente RootLayout.
      */}
    </html>
  )
}
