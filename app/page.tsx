import ExamList from "@/components/ExamList";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TelegramCard from "@/components/TelegramCard";
import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TelegramCard />
      <ExamList />
      <Footer />
    </div>
  );
}
