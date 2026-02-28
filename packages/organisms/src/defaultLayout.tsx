import { Header } from "@repo/organisms/header";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <footer>
        footer section Here
      </footer>
    </div>
  )
}
