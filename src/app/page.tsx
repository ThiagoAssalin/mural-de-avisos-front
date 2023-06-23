import Header from "@/components/header/header";
import Posts from "@/components/posts/posts";


export default function Home() {
  return (
    <main className="bg-indigo-950 h-screen text-white">
      <Header/>
      <div className=" w-full p-3 " >
        <h2>Meu Mural</h2>
        <Posts/>
      </div>
    </main>
  )
}
