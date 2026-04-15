import { EBikesCatalog } from "@/components/EBikesCatalog";

export default function EBikesPage() {
  return (
    <main className="min-h-screen bg-inner-glow overflow-x-hidden selection:bg-white/30 selection:text-white pt-24">
      <EBikesCatalog />
    </main>
  );
}
