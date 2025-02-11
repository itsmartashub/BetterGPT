export default [
    {
        url: "https://chatgpt.com/*",
        urlPatterns: ["*://*/backend-*/conversation*"],
        selector:
            "body > div.flex.h-full.w-full.flex-col > div > div.relative.flex.h-full.w-full.flex-row.overflow-hidden > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.composer-parent.flex.h-full.flex-col.focus-visible\\:outline-0 > div.flex-1.overflow-hidden.\\@container\\/thread > div > div > div > div > article> div > div > div > div > div > div > div > div > div.whitespace-pre-wrap",
    },
    {
        url: "https://claude.ai/*",
        urlPatterns: ["*://claude.ai/api*"],
        selector:
            "body > div.flex.min-h-screen.w-full > div > div > div.relative.flex.w-full.flex-1.overflow-x-hidden.overflow-y-scroll.pt-6.md\\:pr-8 > div.relative.mx-auto.flex.h-full.w-full.max-w-3xl.flex-1.flex-col.md\\:px-2 > div.flex-1.flex.flex-col.gap-3.px-4.max-w-3xl.mx-auto.w-full.pt-1 div > div > div.flex.flex-row.gap-2 > div.font-user-message.grid.grid-cols-1.gap-2.py-0\\.5.text-\\[0\\.9375rem\\].leading-6 > p",
    },
];
