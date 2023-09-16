import Sidebar from "@/components/movies/Sidebar"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-black flex">
      <div className="w-[14rem]">
        <Sidebar />
      </div>
      <main className="w-[80%] mx-auto">
       {children}
      </main>
    </div>
  )
}