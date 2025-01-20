import { getAvailableNewsYears } from "@/lib/news";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header>
    <nav>
      <ul></ul>
    </nav>
  </header>;
  )

}
