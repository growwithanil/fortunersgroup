import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Fortuners Group" },
      { name: "description", content: "Refund and cancellation terms for bookings and payments made with Fortuners Group." },
      { property: "og:title", content: "Refund & Cancellation Policy — Fortuners Group" },
      { property: "og:description", content: "Refund and cancellation terms at Fortuners Group." },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <section className="pt-32 pb-24 container-x max-w-4xl">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Legal</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-10">Refund & Cancellation Policy</h1>

      <div className="space-y-8 text-foreground/75 leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">1. Booking Amount</h2>
          <p>All bookings with Fortuners Group are subject to the terms of the Application Form and the Agreement to Sell executed between the purchaser and the company.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">2. Cancellation by Purchaser</h2>
          <p>In the event of cancellation by the purchaser, the refund will be processed as per the terms of the executed booking agreement. Applicable deductions may include administrative charges, GST paid to authorities, brokerage, and any other statutory levies.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">3. Processing Timeline</h2>
          <p>Refunds, once approved, will be processed within 60 to 90 working days from receipt of the cancellation request along with all required documents.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">4. Mode of Refund</h2>
          <p>Refunds will be issued to the original mode of payment or via bank transfer to the account of the primary purchaser only.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">5. Non-refundable Charges</h2>
          <p>Certain charges — including GST paid to the government, stamp duty, registration fees, and third-party service charges — are non-refundable.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">6. Queries</h2>
          <p>For queries related to refunds and cancellations, please contact <a href="mailto:enquiries@fortunersgroup.com" className="text-[#b89968] hover:underline">enquiries@fortunersgroup.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
