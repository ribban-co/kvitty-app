// Relations that load the receipts (underlag) linked to a bank transaction or journal entry.
// `fileUrl` on each file is a public URL that can be downloaded directly.
export const withReceipts = {
  attachments: true,
  inboxAttachmentLinks: {
    with: {
      inboxAttachment: {
        with: {
          extraction: { columns: { rawText: false } },
        },
      },
    },
  },
} as const;
