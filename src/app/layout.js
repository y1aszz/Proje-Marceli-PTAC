
import styles from "./login.css"

export const metadata = {//define um objeto chamado metadata
  title: 'Register users',//define o título de uma página ou de algum componente específico.
  description: 'Project for class PTAC',//fornece uma descrição ou contexto adicional sobre o objeto ou componente ao qual esses metadados se aplicam.
}

export default function RootLayout({ children }) {//
  return (
    <html lang="pt-br">
      <body className={styles.login}>
        <div className="Lay">
        {children}
        </div>
      </body>
      </html>
  )
}
