interface PolicySection {
  title: string;
  paragraphs: string[];
}

export interface Policy {
  path: string;
  title: string;
  summary: string;
  sections: PolicySection[];
}

export const POLICIES: Policy[] = [
  {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions',
    summary: 'How orders, custom designs and 3D printing services work at Purple Cube.',
    sections: [
      {
        title: 'Enquiries and order confirmation',
        paragraphs: [
          'Browsing, selecting a design or sending an enquiry does not place a paid order. Before you pay, Purple Cube will confirm the design, dimensions, material, finish, quantity, total price, payment terms and estimated dispatch or delivery schedule in writing.',
          'An order is confirmed when the studio accepts it in writing and the agreed payment is received. Any advance, balance payment and quotation validity will be stated in your quotation. Please keep your order confirmation.',
        ],
      },
      {
        title: 'Pricing and payment',
        paragraphs: [
          'Custom printing is quoted according to the approved specification. Your quotation will identify the total payable and any applicable taxes, design fees, finishing charges and shipping costs. Extra work or changes require your approval before additional charges apply.',
          'Use only payment details confirmed by the studio. A price enquiry or website image does not guarantee stock, a fixed price or immediate availability.',
        ],
      },
      {
        title: 'Personalisation and design approval',
        paragraphs: [
          'Check names, spelling, photographs, colours, dimensions and design previews carefully before approving production. Please supply clear reference images and the intended use of the item. Photographic miniatures are artistic interpretations; exact photographic likeness cannot be guaranteed.',
          'Changes requested after approval may affect cost and delivery time. The studio will explain what can still be changed and obtain your agreement before proceeding.',
        ],
      },
      {
        title: '3D printing characteristics and intended use',
        paragraphs: [
          'Layer lines, support marks and small finish variations are characteristics of 3D printing. Screen colours and reference images may differ from the finished material. These variations do not excuse a defective item or a material departure from your approved specification.',
          'Tell us if your project requires exact tolerances, heat resistance, outdoor use, food contact, load bearing or another specialist application. Suitability must be agreed before ordering; decorative items should not be assumed suitable for these uses. Keep small parts away from young children.',
        ],
      },
      {
        title: 'Customer photos, files and permissions',
        paragraphs: [
          'Only submit photos, artwork, logos and 3D files that you own or have permission to use, including the necessary permission from people shown in photographs. You retain your rights in your submitted content and permit Purple Cube to use it to assess, fulfil and support your order.',
          'Supplying a file does not transfer its copyright to the studio. Sharing customer photos or identifiable custom work for marketing requires separate permission. Ownership and permitted reuse of newly commissioned design files should be agreed in the quotation.',
        ],
      },
      {
        title: 'Production, shipping and delays',
        paragraphs: [
          'Production time depends on design approval, material availability and order size. Delivery estimates and shipping arrangements will be confirmed with your order. Tell us about an event deadline before payment so the studio can confirm whether it can meet it.',
          'If an agreed schedule cannot be met, the studio will explain the delay and discuss your options, including cancellation or refund where applicable. A delay does not remove your statutory consumer rights.',
        ],
      },
      {
        title: 'Cancellations, returns and support',
        paragraphs: [
          'Contact the studio promptly to request a cancellation or change. The Return & Exchange Policy explains standard items, personalised work, faults, return shipping and refunds. Any order-specific exception must be disclosed and agreed before payment and cannot reduce rights provided by law.',
          'These terms apply to orders accepted under this version. Later updates do not retrospectively change an existing order. Nothing here excludes rights or remedies available under applicable Indian consumer law. For an order query or complaint, use Contact the studio below and include your order reference.',
        ],
      },
    ],
  },
  {
    path: '/return-exchange-policy',
    title: 'Return & Exchange Policy',
    summary: 'Clear next steps for standard products, personalised orders and items that arrive with a problem.',
    sections: [
      {
        title: 'Standard products: seven-day returns',
        paragraphs: [
          'For a standard, non-personalised product, request a change-of-mind return or exchange within seven calendar days of delivery. The item must be unused, unmodified and complete with its accessories and packaging. Inspection needed to identify a fault does not by itself invalidate a fault claim.',
          'Contact the studio before sending anything back. After return instructions are provided, send the item within seven calendar days, or another period agreed in writing. Exchange availability and any price difference will be confirmed before you proceed.',
        ],
      },
      {
        title: 'Personalised and made-to-order items',
        paragraphs: [
          'Photo miniatures, name-personalised gifts, customer-file prints and products made to an approved custom specification are created for your order. Once production begins, these items are not eligible for change-of-mind returns or exchanges.',
          'This does not affect your rights if an item is faulty, damaged, incorrect, materially different from the agreed specification or otherwise covered by applicable consumer law. Approval of a preview does not excuse a printing error made by the studio.',
        ],
      },
      {
        title: 'Damaged, faulty or incorrect items',
        paragraphs: [
          'Please report a problem as soon as you notice it, ideally within seven calendar days of delivery. Include your order reference, a description and clear photos of the item and packaging where available. An unboxing video is helpful if you have one, but is not required to raise a claim.',
          'The studio will assess the issue and arrange the appropriate remedy, which may include repair, replacement, exchange or refund in accordance with your rights. Reporting after seven days does not automatically exclude a genuine defect or other statutory claim.',
        ],
      },
      {
        title: 'Cancelling or changing an order',
        paragraphs: [
          'A standard order can be cancelled before dispatch for a refund. For a custom order, contact the studio before production starts. Any completed design work or other non-recoverable cost can only be deducted if it was disclosed and agreed before payment; the studio will provide an itemised explanation.',
          'Once custom production has begun, a change-of-mind cancellation may not be possible. The studio will explain the production status and any remaining options. Different rights may apply if the studio cannot fulfil the order, misses an agreed delivery schedule or supplies faulty work.',
        ],
      },
      {
        title: 'Return shipping and item condition',
        paragraphs: [
          'For an accepted damaged, faulty or incorrect-item claim, Purple Cube will arrange or cover reasonable return shipping. For a change-of-mind return or exchange, you pay return shipping and any agreed replacement delivery cost; the studio will confirm these costs before you proceed.',
          'Use suitable protective packaging and keep your courier receipt. Do not send a return to an address from a parcel label without confirming it with the studio. Damage caused by misuse, heat exposure contrary to care instructions or unauthorised modification is assessed separately from manufacturing faults.',
        ],
      },
      {
        title: 'Refund method and timing',
        paragraphs: [
          'The studio will confirm the approved refund amount and any agreed deductions in writing. For a change-of-mind return, the standard item price is refundable; an original delivery charge is only excluded if it was separately disclosed before payment. A fault remedy will not be reduced by a change-of-mind deduction.',
          'Approved refunds will be initiated to the original payment method within seven business days of approval and receipt of a return where a return is reasonably required, or sooner where required by law. Your bank or payment provider may take additional time to show the credit. Store credit is not substituted for a refund without your agreement.',
        ],
      },
      {
        title: 'How to get help',
        paragraphs: [
          'Use Contact the studio below to raise a return, exchange or cancellation request. Have your order reference, delivery date and a short description ready. The studio will confirm the next steps and the return address where needed.',
          'Consumer complaints will be acknowledged within 48 hours and addressed within one month. Nothing in this policy limits remedies available under applicable Indian consumer law.',
        ],
      },
    ],
  },
];
