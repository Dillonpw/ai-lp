export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="font-title flex items-center justify-between border-b-4 border-black bg-emerald-500 p-4">
      <a href="#">LOGO</a>
      {children}
      <a
        className="rounded-md border-2 bg-black p-2 text-white hover:border-black hover:bg-white hover:text-emerald-500"
        href="#"
      >
        CTA
      </a>
    </header>
  );
}
