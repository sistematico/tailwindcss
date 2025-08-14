import Link from "next/link";

export default function StickyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Sticky Layout</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/">Início</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
      <footer className="sticky bottom-0">
        <div className="flex justify-center p-4">
          <h2 className="text-xl font-semibold">Sticky Footer</h2>
        </div>
      </footer>
    </div>
  );
}
