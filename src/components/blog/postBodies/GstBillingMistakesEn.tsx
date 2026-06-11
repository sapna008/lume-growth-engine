import { Link } from "react-router-dom";

export function GstBillingMistakesEn() {
  return (
    <div className="blog-post-body space-y-8 text-base leading-relaxed" style={{ color: "#4f4f4f" }}>

      <section className="space-y-4">
        <p>
          GST compliance has a reputation for being complicated, and some of that reputation is earned.
          But the mistakes that most small businesses actually face are not about complex edge cases or
          obscure provisions — they are about a handful of specific, common errors that repeat themselves
          across thousands of retail businesses in India every month. Knowing what these are, and why
          they happen, is most of what you need to avoid them.
        </p>
        <p>
          The consequences of GST billing mistakes range from minor inconveniences — reconciliation
          mismatches that take time to sort out — to more serious problems like notices from the
          tax authority, penalties for incorrect filings, or business customers losing their input
          tax credit claim because your invoice had a formatting error. None of these outcomes are
          inevitable, and most are avoidable with the right understanding and the right tools.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight scroll-mt-24" style={{ color: "#1b181f" }}>
          Mistake 1: Applying the Wrong GST Rate
        </h2>
        <p>
          India&apos;s GST structure has five primary tax slabs — 0%, 5%, 12%, 18%, and 28% — and the
          rate that applies depends on the specific product or service, not its general category.
          Within grocery items alone, you can find products taxed at 0%, 5%, and 12% depending on
          how they are classified. Packaged food items often carry different rates from their loose
          equivalents. Ready-to-eat versus raw ingredients can differ. Branded versus unbranded
          goods sometimes fall into different slabs.
        </p>
        <p>
          For a retailer managing hundreds of SKUs and billing manually or through basic software,
          keeping every product tagged to the correct GST rate is genuinely difficult. The natural
          tendency is to apply a default rate across broad categories and adjust only when a
          discrepancy is noticed. This produces systematic errors that compound over months of filing.
        </p>
        <p>
          A billing system that lets you configure the correct GST rate per product — and applies
          it automatically at checkout — removes this error at the source. The configuration takes
          time upfront but eliminates the ongoing risk entirely.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight scroll-mt-24" style={{ color: "#1b181f" }}>
          Mistake 2: Confusing CGST + SGST with IGST
        </h2>
        <p>
          When you sell to a customer within your own state, GST is split between the central
          government and the state government — half as CGST and half as SGST. When you sell
          to a buyer in a different state, the entire amount goes to the centre as IGST. The
          combined tax rate is the same either way, but how it is split and reported on the
          invoice is different.
        </p>
        <p>
          This mistake comes up most often in B2B transactions. A business customer purchasing
          goods for their own operations needs their supplier&apos;s invoice to show the correct
          tax split — CGST + SGST for intra-state or IGST for inter-state — to successfully
          claim input tax credit. An invoice that shows CGST + SGST for what was actually an
          inter-state transaction creates a mismatch that the buyer&apos;s accountant will flag,
          often requiring a credit note and revised invoice from you.
        </p>
        <p>
          For retailers who primarily sell to end consumers, this is less of an immediate
          concern — but it becomes relevant whenever a business customer asks for a proper
          GST invoice, which happens more often than most small retailers expect.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight scroll-mt-24" style={{ color: "#1b181f" }}>
          Mistake 3: Incomplete or Incorrectly Formatted Invoices
        </h2>
        <p>
          A GST-compliant invoice is not just a receipt with a tax figure added. It must include
          specific fields: your GSTIN, invoice number and date, the buyer&apos;s GSTIN for B2B
          transactions, a description of goods or services, quantity, unit price, applicable HSN
          or SAC code, the tax rate applied, and the tax amount broken out separately from the
          base value.
        </p>
        <p>
          Missing any of these fields — or presenting them in a way that does not meet the format
          requirements — means the invoice is technically non-compliant. For B2B customers, a
          non-compliant invoice cannot be used to claim input tax credit, which puts your customer
          in a difficult position and damages your business relationship. During an audit, incomplete
          records across a large number of transactions can trigger more scrutiny than the individual
          errors would warrant on their own.
        </p>
        <p>
          The fix is straightforward: use billing software that generates compliant invoices by
          default, rather than a general-purpose template where fields can be omitted. The
          structure of a compliant GST invoice should not depend on anyone remembering to
          include the right fields manually.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight scroll-mt-24" style={{ color: "#1b181f" }}>
          Mistake 4: Irregular or Duplicate Invoice Numbering
        </h2>
        <p>
          GST law requires invoices to be numbered in a continuous sequence within a financial year.
          Gaps in numbering — skipped numbers, repeated numbers, or numbering that resets
          mid-year — can raise questions during verification. Duplicate invoice numbers are
          particularly problematic as they create ambiguity in your records and can complicate
          returns reconciliation.
        </p>
        <p>
          Manual billing systems — whether handwritten or managed in basic spreadsheets — are
          especially prone to this error. Invoices get written out of sequence, numbers get
          reused by mistake, and the record becomes inconsistent. A software-based billing
          system that auto-increments invoice numbers eliminates this issue automatically.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight scroll-mt-24" style={{ color: "#1b181f" }}>
          Mistake 5: Not Knowing Your Filing Threshold and Deadlines
        </h2>
        <p>
          Not every registered business has identical GST filing obligations. The composition
          scheme, available to businesses below a certain annual turnover threshold, simplifies
          compliance significantly but comes with restrictions — composition dealers cannot issue
          tax invoices or collect GST from customers in the standard way. Regular registered
          businesses must file GSTR-1 and GSTR-3B returns monthly or quarterly depending on
          their turnover.
        </p>
        <p>
          Missing filing deadlines incurs interest on unpaid tax and a late fee that accumulates
          daily. For businesses operating near a turnover threshold, not knowing whether they have
          crossed into a higher filing obligation can result in missed returns and unexpected
          penalties. These are not minor administrative inconveniences — they can be significant
          costs for a small business.
        </p>
        <p>
          Knowing your obligations and building return filing into a regular monthly routine is the
          most reliable protection. A POS system that generates ready tax summaries at month end
          — showing total sales, total tax collected by rate, and the figures needed for your
          returns — makes this significantly easier than compiling it manually from transaction
          records.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight scroll-mt-24" style={{ color: "#1b181f" }}>
          The Common Thread
        </h2>
        <p>
          Most GST billing mistakes at the small business level are not caused by deliberate
          non-compliance. They happen because billing is done manually, under time pressure, with
          insufficient tools. The shop owner dealing with a queue of ten customers and billing
          by hand cannot simultaneously remember every product&apos;s HSN code, verify the correct
          tax split for each transaction, and maintain a perfectly formatted sequential invoice
          record.
        </p>
        <p>
          This is exactly the problem that purpose-built billing software solves. It does not
          require you to become a GST expert — it applies the compliance requirements consistently,
          automatically, and correctly, regardless of how busy the store is.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight scroll-mt-24" style={{ color: "#1b181f" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1b181f" }}>
              Do I need to charge GST if I am under the registration threshold?
            </h3>
            <p>
              No. Businesses with annual turnover below ₹40 lakh (₹20 lakh for service providers
              and certain states) are not required to register for GST. If you are not registered,
              you cannot charge GST or issue a tax invoice. If your business grows past the threshold,
              registration becomes mandatory and you must begin charging GST from that point forward.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1b181f" }}>
              What is an HSN code and why does it matter?
            </h3>
            <p>
              HSN (Harmonised System of Nomenclature) codes are internationally standardised codes
              that classify products for tax purposes. In India, invoices above a certain value
              must include the correct HSN code for each product. Using the wrong code can result
              in the wrong tax rate being applied and creates discrepancies in filing. Billing
              software that is pre-loaded with HSN codes removes the need to look these up manually.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1b181f" }}>
              How do I correct a GST invoice that has already been issued with an error?
            </h3>
            <p>
              A credit note or debit note is the mechanism for correcting issued invoices under
              GST. A credit note reduces the value of the original invoice; a debit note increases
              it. These should reference the original invoice number and be issued in the same
              tax period where possible. Your accountant or billing software should be able to
              guide you through the specific process for your situation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#1b181f" }}>
              Can I retroactively fix past GST errors?
            </h3>
            <p>
              Yes, to a limited extent. Amendments to GSTR-1 returns can be made in the subsequent
              month&apos;s filing for certain types of errors. More significant corrections may require
              specific adjustments and, in some cases, payment of the differential tax plus interest.
              It is always better to catch errors early — monthly review of your filed returns
              against your billing records helps identify discrepancies before they become more
              difficult to unwind.
            </p>
          </div>
        </div>
      </section>

      <section
        className="rounded-xl border border-[#146fb5]/20 bg-[#146fb5]/[0.06] p-6 sm:p-8 space-y-4"
        aria-labelledby="blog-cta-heading-gst"
      >
        <h2 id="blog-cta-heading-gst" className="text-xl font-bold" style={{ color: "#1b181f" }}>
          GST compliance built into every bill, automatically.
        </h2>
        <p>
          <Link
            to="/products"
            className="font-semibold text-[#146fb5] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#146fb5] rounded-sm"
          >
            Lume POS
          </Link>{" "}
          applies correct GST rates, formats invoices to spec, and generates tax summaries ready
          for filing — so you can focus on running your store.
        </p>
      </section>

    </div>
  );
}
