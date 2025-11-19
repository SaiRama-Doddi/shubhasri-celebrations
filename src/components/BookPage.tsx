import { InlineWidget } from "react-calendly";

export default function BookPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <InlineWidget
        url="https://calendly.com/shubhashricelebrations1/30min"
        styles={{
          height: "100vh",
          width: "100%",
        }}
      />
    </div>
  );
}
