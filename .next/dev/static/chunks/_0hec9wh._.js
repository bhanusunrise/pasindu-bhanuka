(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/education/EducationCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EducationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function EducationCard({ type, item }) {
    let image;
    let title = "";
    let subtitle;
    let description = "";
    let period = "";
    switch(type){
        case "education":
            image = item.image;
            title = item.institute;
            description = item.description;
            period = `${item.fromYear} - ${item.toYear}`;
            break;
        case "certification":
            image = item.image;
            title = item.name;
            subtitle = item.institute;
            description = item.description;
            period = item.year;
            break;
        case "job":
            title = item.position;
            subtitle = item.organization;
            description = item.description;
            period = `${item.fromYear} - ${item.toYear}`;
            break;
        case "extracurricular":
            title = item.position;
            if (item.organization && item.sport) {
                subtitle = `${item.organization} | ${item.sport}`;
            } else if (item.organization) {
                subtitle = item.organization;
            } else if (item.sport) {
                subtitle = item.sport;
            }
            description = item.description;
            period = `${item.fromYear} - ${item.toYear}`;
            break;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `border border-cream/10 bg-nav/15 p-5 md:p-7 ${image ? "grid gap-5 md:grid-cols-[180px_1fr]" : ""}`,
        children: [
            image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: title,
                    fill: true,
                    className: "object-cover",
                    sizes: "180px"
                }, void 0, false, {
                    fileName: "[project]/components/education/EducationCard.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/education/EducationCard.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-xs uppercase tracking-[0.18em] text-muted",
                        children: period
                    }, void 0, false, {
                        fileName: "[project]/components/education/EducationCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-semibold text-cream",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/education/EducationCard.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm font-medium text-cream/70",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/education/EducationCard.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm leading-6 text-cream/75 md:text-base",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/education/EducationCard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/education/EducationCard.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/education/EducationCard.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c = EducationCard;
var _c;
__turbopack_context__.k.register(_c, "EducationCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const links = [
    {
        label: "Home",
        href: "#home"
    },
    {
        label: "About",
        href: "#about"
    },
    {
        label: "My Work",
        href: "#projects"
    },
    {
        label: "My Journey",
        href: "#education"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 h-[72px] border-b border-cream/10 bg-nav/95 backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: "text-lg font-semibold tracking-[0.18em] text-cream hover:text-muted",
                        children: ">> Pasindu Bhanuka <<"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-7 lg:flex",
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-sm font-medium text-cream hover:text-muted",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Toggle navigation",
                        "aria-expanded": open,
                        onClick: ()=>setOpen((value)=>!value),
                        className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-cream/20 lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-px w-5 bg-cream ${open ? "translate-y-[3.5px] rotate-45" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-px w-5 bg-cream ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Navbar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0 top-[72px] w-full overflow-hidden bg-nav/98 transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${open ? "max-h-96 border-b border-cream/10 opacity-100" : "max-h-0 opacity-0"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col px-5 py-4",
                    children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: ()=>setOpen(false),
                            className: "border-b border-cream/10 py-4 text-cream last:border-b-0 hover:text-muted",
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/components/layout/Navbar.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/layout/Navbar.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Navbar.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Navbar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Navbar, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/projects/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function ProjectCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex w-full flex-col justify-center lg:pr-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-6 aspect-[16/9] overflow-hidden border border-cream",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: project.image,
                    alt: `${project.name} preview`,
                    fill: true,
                    className: "object-cover",
                    // Doubled the target widths (45vw -> 90vw, 100vw -> 200vw) 
                    // to force Next.js to provide high-density Retina assets
                    sizes: "(min-width: 1024px) 90vw, 200vw",
                    quality: 10,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/components/projects/ProjectCard.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex flex-wrap items-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-muted/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted",
                    children: [
                        project.category,
                        " Project"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/projects/ProjectCard.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-4 text-3xl font-semibold text-cream md:text-4xl",
                children: project.name
            }, void 0, false, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mb-5 list-disc space-y-2 pl-5 text-sm leading-6 text-cream/80 md:text-base",
                children: project.description.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item
                    }, item, false, {
                        fileName: "[project]/components/projects/ProjectCard.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            project.techStack?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 grid gap-2 sm:grid-cols-2",
                children: project.techStack.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-cream/10 bg-nav/15 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-[0.16em] text-muted",
                                children: item.purpose
                            }, void 0, false, {
                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-cream",
                                children: item.stack
                            }, void 0, false, {
                                fileName: "[project]/components/projects/ProjectCard.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${item.purpose}-${item.stack}`, true, {
                        fileName: "[project]/components/projects/ProjectCard.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-5 text-sm font-medium",
                children: [
                    project.websiteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: project.websiteUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-cream underline decoration-muted/50 underline-offset-4 hover:text-muted",
                        children: "Website"
                    }, void 0, false, {
                        fileName: "[project]/components/projects/ProjectCard.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this) : null,
                    project.githubUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: project.githubUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-cream underline decoration-muted/50 underline-offset-4 hover:text-muted",
                        children: "GitHub"
                    }, void 0, false, {
                        fileName: "[project]/components/projects/ProjectCard.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            project.seoKeywords?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 text-xs leading-5 text-cream/45",
                children: project.seoKeywords.join(" · ")
            }, void 0, false, {
                fileName: "[project]/components/projects/ProjectCard.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/projects/ProjectCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useStickyProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AboutSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"])(sectionRef);
    const position = progress * (__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutTexts"].length - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: sectionRef,
        className: "section-anchor bg-section-even lg:h-[1000vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 py-20 md:px-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:px-12 lg:py-[72px] xl:px-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid w-full max-w-[1600px] gap-12 lg:grid-cols-[30%_70%] lg:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        side: "left",
                        className: "flex flex-col items-center justify-center gap-6 lg:min-h-[calc(100vh-144px)] lg:pr-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/profile/profile_1.jpeg",
                                alt: "Pasindu Bhanuka",
                                width: 250,
                                height: 250,
                                className: "border-amber-50 border-10"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/AboutSection.tsx",
                                lineNumber: 27,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-center text-4xl font-semibold leading-[0.88] tracking-tight text-cream md:text-4xl lg:text-[clamp(2rem,4vw,5rem)]",
                                children: [
                                    "Pasindu",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/AboutSection.tsx",
                                        lineNumber: 37,
                                        columnNumber: 5
                                    }, this),
                                    "Bhanuka"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/AboutSection.tsx",
                                lineNumber: 35,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/AboutSection.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        side: "right",
                        className: "relative flex min-h-144 items-center lg:min-h-[calc(200vh-144px)] lg:pl-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden w-full lg:block",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutTexts"].map((text, index)=>{
                                    const distance = Math.abs(position - index);
                                    const opacity = Math.max(0, 1 - distance * 1.6);
                                    const translateY = (index - position) * 56;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "absolute left-12 right-0 top-1/2 text-[clamp(2rem,2vw,4.5rem)] font-medium leading-[1.05] text-cream transition-opacity duration-200",
                                        style: {
                                            opacity,
                                            transform: `translateY(calc(-50% + ${translateY}px))`,
                                            pointerEvents: opacity > 0.5 ? "auto" : "none"
                                        },
                                        children: text
                                    }, text, false, {
                                        fileName: "[project]/components/sections/AboutSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/sections/AboutSection.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8 lg:hidden",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aboutTexts"].map((text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-medium leading-tight text-cream md:text-5xl",
                                        children: text
                                    }, text, false, {
                                        fileName: "[project]/components/sections/AboutSection.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/AboutSection.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/AboutSection.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/AboutSection.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/AboutSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/AboutSection.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "dgvgwoRVTaRIp7IyBXMHZKyw2Qw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/EducationSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EducationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$education$2f$EducationCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/education/EducationCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useStickyProgress.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EducationSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"])(sectionRef);
    const groups = [
        {
            id: "education",
            title: "Educational Institutes",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$education$2f$EducationCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "education",
                    item: item
                }, item.id, false, {
                    fileName: "[project]/components/sections/EducationSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this))
        },
        {
            id: "certifications",
            title: "Certifications & Digital Badges",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$education$2f$EducationCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "certification",
                    item: item
                }, item.id, false, {
                    fileName: "[project]/components/sections/EducationSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this))
        },
        {
            id: "job-experience",
            title: "Professional Experience",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jobExperiences"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$education$2f$EducationCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "job",
                    item: item
                }, item.id, false, {
                    fileName: "[project]/components/sections/EducationSection.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this))
        },
        {
            id: "extra-curricular",
            title: "Extracurricular Activities",
            items: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extraCurriculars"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$education$2f$EducationCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "extracurricular",
                    item: item
                }, item.id, false, {
                    fileName: "[project]/components/sections/EducationSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this))
        }
    ];
    const translate = progress * (groups.length - 1) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        ref: sectionRef,
        className: "section-anchor bg-section-even lg:h-[420vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-5 py-10 md:px-8 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-10 xl:px-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid h-full max-w-[1600px] gap-14 lg:grid-cols-[40%_60%] lg:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        side: "left",
                        className: "flex items-center lg:h-[calc(100vh-80px)] lg:pr-14",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-right text-6xl font-semibold leading-[0.88] tracking-tight text-cream md:text-8xl lg:text-[clamp(5rem,8vw,9rem)]",
                            children: [
                                "My",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                "Journey"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/EducationSection.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/EducationSection.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        side: "right",
                        className: "min-w-0 lg:h-[calc(100vh-80px)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden h-full overflow-hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full transition-transform duration-300 ease-in-out",
                                    style: {
                                        transform: `translateY(-${translate}%)`
                                    },
                                    children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-full shrink-0 flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-6 text-2xl font-semibold text-cream",
                                                    children: group.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-[calc(100vh-170px)] space-y-5 overflow-y-auto pr-2",
                                                    children: group.items
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, group.id, true, {
                                            fileName: "[project]/components/sections/EducationSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/EducationSection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/EducationSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-16 lg:hidden",
                                children: groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-6 text-2xl font-semibold text-cream",
                                                children: group.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/EducationSection.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5",
                                                children: group.items
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/EducationSection.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, group.id, true, {
                                        fileName: "[project]/components/sections/EducationSection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/EducationSection.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/EducationSection.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/EducationSection.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/EducationSection.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/EducationSection.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(EducationSection, "dgvgwoRVTaRIp7IyBXMHZKyw2Qw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"]
    ];
});
_c = EducationSection;
var _c;
__turbopack_context__.k.register(_c, "EducationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/HomeSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useStickyProgress.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HomeSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"])(sectionRef);
    const desktopTranslate = progress * (__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSlides"].length - 1) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        ref: sectionRef,
        className: "section-anchor relative bg-section-odd lg:h-[300vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden pt-[72px] lg:sticky lg:top-0 lg:h-screen lg:pt-[72px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden h-[calc(100vh-72px)] transition-transform duration-150 ease-out lg:flex",
                    style: {
                        transform: `translateX(-${desktopTranslate}%)`
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSlides"].map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "relative h-full w-full shrink-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: slide.image,
                                    alt: slide.title,
                                    priority: index === 0,
                                    className: "object-cover",
                                    width: 1280,
                                    height: 540,
                                    sizes: "100vw"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HomeSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 "
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HomeSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full px-8 pb-14 md:px-14 lg:px-20 lg:pb-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-muted font-passage",
                                                children: slide.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HomeSection.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "max-w-5xl text-5xl font-semibold leading-[0.95] text-cream xl:text-7xl 2xl:text-8xl",
                                                children: slide.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HomeSection.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/HomeSection.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HomeSection.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, slide.id, true, {
                            fileName: "[project]/components/sections/HomeSection.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/HomeSection.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSlides"].map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "relative min-h-[72vh] overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: slide.image,
                                    alt: slide.title,
                                    fill: true,
                                    priority: index === 0,
                                    className: "object-cover",
                                    sizes: "100vw"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HomeSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-nav/50"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HomeSection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex min-h-[72vh] items-end px-5 py-10 md:px-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-3 text-xs uppercase tracking-[0.28em] text-muted",
                                                children: slide.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HomeSection.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "max-w-2xl text-4xl font-semibold leading-tight text-cream md:text-6xl",
                                                children: slide.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HomeSection.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/HomeSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HomeSection.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, slide.id, true, {
                            fileName: "[project]/components/sections/HomeSection.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/HomeSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute bottom-5 right-6 hidden text-xs uppercase tracking-[0.2em] text-cream/70 lg:block",
                    children: "Scroll to explore"
                }, void 0, false, {
                    fileName: "[project]/components/sections/HomeSection.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/HomeSection.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/HomeSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(HomeSection, "dgvgwoRVTaRIp7IyBXMHZKyw2Qw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"]
    ];
});
_c = HomeSection;
var _c;
__turbopack_context__.k.register(_c, "HomeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projects$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/projects/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useStickyProgress.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProjectsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Visible area where project cards move.
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Complete vertical project list.
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Individual project elements.
    const projectRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"])(sectionRef);
    const [startTranslate, setStartTranslate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [endTranslate, setEndTranslate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sectionHeight, setSectionHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsSection.useEffect": ()=>{
            const calculatePositions = {
                "ProjectsSection.useEffect.calculatePositions": ()=>{
                    const viewport = viewportRef.current;
                    const track = trackRef.current;
                    const firstProject = projectRefs.current[0];
                    const lastProject = projectRefs.current[__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length - 1];
                    if (!viewport || !track || !firstProject || !lastProject) {
                        return;
                    }
                    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
                    if (!isDesktop) {
                        setStartTranslate(0);
                        setEndTranslate(0);
                        setSectionHeight(null);
                        return;
                    }
                    const viewportHeight = viewport.clientHeight;
                    /*
       * Find the center of the first project relative
       * to the complete project track.
       */ const firstCenter = firstProject.offsetTop + firstProject.offsetHeight / 2;
                    const lastCenter = lastProject.offsetTop + lastProject.offsetHeight / 2;
                    /*
 * FIRST PROJECT
 *
 * Start the first project near the top of the visible
 * project viewport instead of centering the entire card.
 *
 * This is important because the card can be taller than
 * the available viewport.
 */ const topPadding = 24;
                    const firstPosition = topPadding - firstProject.offsetTop;
                    /*
 * FINAL PROJECT
 *
 * The final project must reach the vertical center
 * before the sticky Projects section releases.
 */ const lastPosition = viewportHeight / 2 - lastCenter;
                    setStartTranslate(firstPosition);
                    setEndTranslate(lastPosition);
                    /*
       * Calculate exactly how much vertical scrolling
       * is required to move from the first centered
       * project to the final centered project.
       */ const requiredTravel = Math.abs(lastPosition - firstPosition);
                    /*
       * Sticky section height:
       *
       * viewport height
       * +
       * required internal project travel.
       *
       * Therefore the section releases only after the
       * final project reaches the center.
       */ setSectionHeight(window.innerHeight + requiredTravel);
                }
            }["ProjectsSection.useEffect.calculatePositions"];
            calculatePositions();
            const resizeObserver = new ResizeObserver({
                "ProjectsSection.useEffect": ()=>{
                    calculatePositions();
                }
            }["ProjectsSection.useEffect"]);
            if (viewportRef.current) {
                resizeObserver.observe(viewportRef.current);
            }
            if (trackRef.current) {
                resizeObserver.observe(trackRef.current);
            }
            window.addEventListener("resize", calculatePositions);
            return ({
                "ProjectsSection.useEffect": ()=>{
                    resizeObserver.disconnect();
                    window.removeEventListener("resize", calculatePositions);
                }
            })["ProjectsSection.useEffect"];
        }
    }["ProjectsSection.useEffect"], []);
    /*
   * Interpolate between:
   *
   * first project centered
   *             ↓
   * last project centered
   */ const currentTranslate = startTranslate + (endTranslate - startTranslate) * progress;
    const desktopStyle = {
        "--projects-section-height": sectionHeight ? `${sectionHeight}px` : "1000vh"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: sectionRef,
        style: desktopStyle,
        className: "\n        section-anchor\n        bg-section-odd\n        lg:h-[var(--projects-section-height)]\n      ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n          px-5\n          py-20\n\n          md:px-8\n\n          lg:sticky\n          lg:top-0\n          lg:h-screen\n          lg:px-12\n          lg:py-18\n\n          xl:px-20\n        ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n            mx-auto\n            grid\n            h-full\n            max-w-[1600px]\n            gap-14\n\n            lg:grid-cols-[80%_20%]\n            lg:gap-14\n          ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        side: "left",
                        className: "\n              min-w-0\n\n              lg:h-[calc(100vh-144px)]\n              lg:pr-8\n            ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: viewportRef,
                                className: "\n                relative\n                hidden\n                h-full\n                overflow-hidden\n                lg:block\n              ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: trackRef,
                                    className: "\n                  flex\n                  flex-col\n                  gap-[120px]\n                  will-change-transform\n                ",
                                    style: {
                                        transform: `translateY(${currentTranslate}px)`
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (element)=>{
                                                projectRefs.current[index] = element;
                                            },
                                            className: "\n                        w-full\n                        shrink-0\n                      ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projects$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                project: project
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ProjectsSection.tsx",
                                                lineNumber: 257,
                                                columnNumber: 23
                                            }, this)
                                        }, project.id, false, {
                                            fileName: "[project]/components/sections/ProjectsSection.tsx",
                                            lineNumber: 246,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ProjectsSection.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "\n                space-y-24\n                lg:hidden\n              ",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$projects$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        project: project
                                    }, project.id, false, {
                                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ProjectsSection.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        side: "right",
                        className: "\n              order-first\n              flex\n              items-center\n\n              lg:order-none\n              lg:h-[calc(100vh-144px)]\n              lg:justify-end\n              lg:pl-14\n            ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "\n                text-6xl\n                font-semibold\n                leading-[0.88]\n                tracking-tight\n                text-cream\n\n                md:text-8xl\n\n                lg:text-left\n                lg:text-[clamp(5rem,8vw,9rem)]\n              ",
                            children: [
                                "My",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this),
                                "Work"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ProjectsSection.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/ProjectsSection.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/ProjectsSection.tsx",
            lineNumber: 183,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ProjectsSection.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "QGYsDwHyjf3gDpXbmdGgvBtE3yM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useStickyProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStickyProgress"]
    ];
});
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, side = "up", className = "", delayMs = 0 }) {
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const element = elementRef.current;
            if (!element) {
                return;
            }
            const observer = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.16
            });
            observer.observe(element);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        style: {
            transitionDelay: `${delayMs}ms`
        },
        className: [
            "reveal",
            `reveal-${side}`,
            visible ? "reveal-visible" : "",
            className
        ].join(" "),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Reveal.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Reveal, "mTHZOCINNIt4jIWvoLlKrjSe8J0=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutTexts",
    ()=>aboutTexts,
    "certifications",
    ()=>certifications,
    "contacts",
    ()=>contacts,
    "coverSlides",
    ()=>coverSlides,
    "education",
    ()=>education,
    "extraCurriculars",
    ()=>extraCurriculars,
    "jobExperiences",
    ()=>jobExperiences,
    "projects",
    ()=>projects
]);
const coverSlides = [
    {
        id: "engineering",
        image: "/images/covers/developer_3.jpeg",
        eyebrow: "Software Engineering",
        title: "I build practical digital products."
    },
    {
        id: "projects",
        image: "/images/covers/ct_3.jpeg",
        eyebrow: "Product Thinking",
        title: "From an idea to a working system."
    },
    {
        id: "leadership",
        image: "/images/covers/pm_2.jpeg",
        eyebrow: "Leadership",
        title: "Technology, people and execution."
    }
];
const aboutTexts = [
    "I am Pasindu Bhanuka, a tech enthusiastic problem solver who is interested in building useful products and systems for real-world requirements.",
    "My work combines software engineering, product ideas, project coordination and practical experiments that I learn by actually building things.",
    "I mostly enjoy taking unclear real-world problems, understanding what is actually required and turning them into structured ideas, prototypes and working applications."
];
const projects = [
    {
        id: "portfolio",
        name: "Portfolio",
        image: "/images/projects/portfolio.png",
        category: "Freetime",
        description: [
            "Developed my personal portfolio to showcase my projects, experiences, education and extracurricular activities in one place.",
            "I normally update the website annually with new designs, projects and content improvements.",
            "Mostly focused on performance and user experience while keeping the website simple and modern."
        ],
        websiteUrl: "https://www.pasindubhanuka.com/",
        techStack: [
            {
                purpose: "Frontend",
                stack: "Next.js + TypeScript"
            }
        ],
        seoKeywords: [
            "Pasindu Bhanuka",
            "Pasindu Bhanuka Portfolio",
            "Software Engineer Portfolio"
        ]
    },
    {
        id: "ccm",
        name: "Construction Cost Management Website",
        image: "/images/projects/ccm.webp",
        category: "Client",
        description: [
            "Developed a commercial website for Construction Cost Management (CCM) to build and improve their online presence.",
            "Integrated a content management system so the client can easily update and manage website content without depending on a developer.",
            "Mostly focused on SEO, performance and user experience to make the website easier to find and use."
        ],
        websiteUrl: "https://www.ccmpvtltd.com/",
        seoKeywords: [
            "Construction Cost Management",
            "Quantity Surveying",
            "Project Management"
        ]
    },
    {
        id: "surveysat",
        name: "Surveysat Website",
        image: "/images/projects/surveysat.webp",
        category: "Client",
        description: [
            "Developed a commercial website for Surveysat to improve their online presence and represent their surveying services.",
            "Integrated a content management system so the client can easily manage and update website content when required.",
            "Focused on SEO, performance and user experience while keeping the website professional and easy to navigate."
        ],
        websiteUrl: "https://www.surveysat.lk/",
        seoKeywords: [
            "Land Surveying",
            "GNSS Surveying",
            "Drone Surveying"
        ]
    },
    {
        id: "tuk-tuk nuwaraeliya",
        name: "Tuk Tuk NuwaraEliya Website",
        image: "/images/projects/tuk_tuk.webp",
        category: "Client",
        description: [
            "Initially developed this commercial website for Adventure Tours to create an online presence for the business.",
            "Later the website was updated and rebranded as Tuk Tuk NuwaraEliya based on the direction of the business.",
            "The main goal was to give tourists an easy way to understand their services and discover Tuk Tuk experiences in Nuwara Eliya."
        ],
        websiteUrl: "https://www.tuktuknuwaraeliya.com/",
        seoKeywords: [
            "Tuk Tuk Nuwara Eliya",
            "Nuwara Eliya Tours",
            "Adventure Tours"
        ]
    },
    {
        id: "global-expansia",
        name: "Global Expansia Website",
        image: "/images/projects/global_expansia.webp",
        category: "Volunteer",
        description: [
            "Developed the official event website for Global Expansia 1.0 organized through AIESEC in University of Kelaniya.",
            "Built the website using Python and Streamlit while keeping the application simple enough to support the requirements of the event.",
            "Worked on the technical side of the event while also continuing my responsibilities as a member of the organizing committee."
        ],
        githubUrl: "https://github.com/bhanusunrise/Global-Expansia-1.0",
        techStack: [
            {
                purpose: "Programming Language",
                stack: "Python"
            },
            {
                purpose: "Web Application",
                stack: "Streamlit"
            }
        ],
        seoKeywords: [
            "Global Expansia",
            "AIESEC University of Kelaniya",
            "Streamlit Website"
        ]
    },
    {
        id: "senaka-enterprises-website",
        name: "Senaka Enterprises Website",
        image: "/images/projects/senakaenterprices.webp",
        category: "Client",
        description: [
            "Developed a commercial website for Senaka Enterprises to improve the online presence of the business.",
            "Later updated different parts of the website to improve its design, functionality and overall user experience.",
            "Integrated a content management system so the client can easily manage and update website content without changing the code."
        ],
        websiteUrl: "https://www.senakaenterprises.com/",
        seoKeywords: [
            "Senaka Enterprises",
            "Construction Materials Supplier",
            "Building Construction"
        ]
    },
    {
        id: "akuna-weather-app",
        name: "Akuna - Weather App",
        image: "/images/projects/akuna.png",
        category: "University",
        description: [
            "Developed Akuna as my first cross-platform mobile application using Flutter.",
            "The application connects with WeatherAPI to retrieve real-time weather information and display it through a simple mobile interface.",
            "Developed this project as part of my university studies at the University of Kelaniya and it became one of my first experiences with Flutter development."
        ],
        githubUrl: "https://github.com/bhanusunrise/Akuna-Weather-App",
        techStack: [
            {
                purpose: "Mobile Development",
                stack: "Flutter"
            },
            {
                purpose: "Weather Data",
                stack: "WeatherAPI"
            }
        ],
        seoKeywords: [
            "Akuna Weather App",
            "Flutter Weather App",
            "WeatherAPI"
        ]
    },
    /*
  {
    id: "eventra",
    name: "EVENTRA - Event Notifying App",
    image: "/images/projects/eventra.png",
    category: "University",
    description: [
      "Developed EVENTRA as an Android event notification application for the Mobile Application Development 1 course module.",
      "Worked with the team from requirement gathering to the actual development of the application.",
      "Also took leadership responsibilities during the project while contributing to the technical development with the rest of the team.",
    ],
    githubUrl: "https://github.com/bhanusunrise/EVENTRA-Android-App",
    techStack: [
      {
        purpose: "Platform",
        stack: "Android",
      },
      {
        purpose: "Programming Language",
        stack: "Java",
      },
      {
        purpose: "Database",
        stack: "SQLite",
      },
    ],
    seoKeywords: [
      "EVENTRA",
      "Android Event App",
      "Java Android Project",
    ],
  },*/ {
        id: "gamini-builders-website",
        name: "Gamini Builders Website",
        image: "/images/projects/gamini_builders.webp",
        category: "Client",
        description: [
            "Developed a commercial website for Gamini Builders to improve the online presence of the business.",
            "Later worked on different updates to improve the design, functionality and overall experience of the website.",
            "Integrated a content management system so the client can manage and update website content more easily."
        ],
        websiteUrl: "https://www.gaminibuilders.com/",
        seoKeywords: [
            "Gamini Builders",
            "Construction Materials Supplier",
            "Building Construction"
        ]
    },
    /*
  {
    id: "bhanu-sunrise-solutions",
    name: "Bhanu Sunrise Solutions Website",
    image: "/images/projects/bhanu-sunrise-solutions.png",
    category: "Freetime",
    description: [
      "Developed the official website for Bhanu Sunrise Solutions to represent the business online.",
      "Created the website as the main online platform to introduce the business, its services and related information.",
      "Worked on both web development and database related parts while developing the system.",
    ],
    websiteUrl: "https://www.bhanusunrisesolutions.com/",
    seoKeywords: [
      "Bhanu Sunrise Solutions",
      "Web Development Sri Lanka",
      "Software Solutions",
    ],
  },
  */ /*
  {
    id: "vr-era",
    name: "VR Era | VR Content Management System",
    image: "/images/projects/vr-era.png",
    category: "Hackathon",
    description: [
      "Developed a VR content management system for the PIONEERS Sustainable Innovation Competition.",
      "The competition was organized by the Rotaract Club of the University of Kelaniya and gave us a chance to work with VR based technologies.",
      "I mainly contributed to the backend web development side while working together with the rest of the project team.",
    ],
    techStack: [
      {
        purpose: "Frontend",
        stack: "HTML + CSS + JavaScript",
      },
      {
        purpose: "Backend",
        stack: "PHP + MySQL",
      },
      {
        purpose: "VR Content",
        stack: "A-Frame + Three.js",
      }
    ],
    seoKeywords: [
      "VR Era",
      "VR Content Management",
      "PIONEERS Competition",
    ],
  },
  */ {
        id: "koopi",
        name: "Koopi 1.2",
        image: "/images/projects/coffee_shop.jpeg",
        category: "University",
        description: [
            "Developed Koopi 1.2 as a management system for a coffee shop using Java Swing.",
            "Worked as the team leader while coordinating the project with the other members of the development team.",
            "I was mainly responsible for backend development and worked with MySQL to manage the data of the system."
        ],
        techStack: [
            {
                purpose: "Application",
                stack: "Java Swing"
            },
            {
                purpose: "Programming Language",
                stack: "Java"
            },
            {
                purpose: "Database",
                stack: "MySQL"
            }
        ],
        seoKeywords: [
            "Koopi 1.2",
            "Java Swing Project",
            "Coffee Shop Management System"
        ]
    },
    {
        id: "everything-can-get-in-here",
        name: "Everything Can Get In Here | Personal Blog",
        image: "/images/projects/blog.png",
        category: "University",
        description: [
            "Developed this personal blog for the Problem Solving and Critical Thinking course module at the university.",
            "Used the blog to publish different problems and topics that we discussed as a group during our lectures.",
            "Documented how we approached those problems, shared different ideas and finally reached conclusions through the discussions."
        ],
        websiteUrl: "https://everythingcangetinhere.blogspot.com/?m=1",
        seoKeywords: [
            "Personal Blog",
            "Problem Solving",
            "Critical Thinking"
        ]
    },
    /*
  {
    id: "car-racing-game",
    name: "Car Racing Game",
    image: "/images/projects/car-racing-game.png",
    category: "University",
    description: [
      "Developed a console-based car racing game as a group assessment for the Programming Concepts course module.",
      "The game includes three levels, two enemy cars, a high-score table and background music to make the gameplay more interesting.",
      "Developed the game using C++ and it was one of my early experiences in game development and programming.",
    ],
    githubUrl: "https://github.com/Bhanuka-Rankothge/Programming-Concept/",
    techStack: [
      {
        purpose: "Programming Language",
        stack: "C++",
      },
    ],
    seoKeywords: [
      "Car Racing Game",
      "C++ Game",
      "Console Game",
    ],
  },*/ /*
  {
    id: "starme",
    name: "StarMe Website and Android App",
    image: "/images/projects/starme.png",
    category: "Hackathon",
    description: [
      "Developed StarMe as a web and Android application for the HackX 7.0 Inter University Hackathon.",
      "The idea was created around the economic challenges in Sri Lanka while giving talented people a platform to show their skills to a global audience.",
      "I mainly contributed to backend development while also working on marketing and creative parts of the project.",
    ],
    githubUrl: "https://github.com/Bhanuka-Rankothge/Star-Me-App",
    techStack: [
      {
        purpose: "Platforms",
        stack: "Web",
      },
      {
        purpose: "Development Role",
        stack: "Back-End Development",
      },
    ],
    seoKeywords: [
      "StarMe",
      "HackX 7.0",
      "Hackathon Project",
    ],
  },
  */ /*
  {
    id: "krish-villa-organic",
    name: "Krish Villa Organic Website",
    image: "/images/projects/krish-villa-organic.png",
    category: "Hackathon",
    description: [
      "Developed a website for Krish Villa Organic Company as part of the MISGA Software Competition.",
      "Worked as the team leader of the project while also contributing to the backend development side.",
      "The project was later selected for the NBQSA selection stage, which became an important milestone for our team.",
    ],
    techStack: [
      {
        purpose: "Frontend",
        stack: "HTML",
      },
      {
        purpose: "Backend",
        stack: "PHP",
      },
      {
        purpose: "Database",
        stack: "MySQL",
      },
    ],
    seoKeywords: [
      "Krish Villa Organic",
      "MISGA Competition",
      "NBQSA",
    ],
  },
  */ {
        id: "game-development-video-series",
        name: "Game Development Video Series",
        image: "/images/projects/gdev_series.png",
        category: "Freetime",
        description: [
            "Created a YouTube video series to introduce game development and related concepts in a simple way.",
            "Published the educational content through my Bhanu Sunrise YouTube channel as part of my interest in gaming and technology."
        ],
        websiteUrl: "https://www.youtube.com/playlist?list=PLpWqZTub4k5y-Qm9uUaCUwLiVG7JSEB_7",
        seoKeywords: [
            "Game Development",
            "Game Development Tutorial",
            "Bhanu Sunrise"
        ]
    },
    {
        id: "sinhala-gameplay-review",
        name: "Sinhala Gameplay and Review",
        image: "/images/projects/grev_series.png",
        category: "Freetime",
        description: [
            "Created Sinhala gameplay videos and game reviews based on different video games that I played.",
            "Published the content through the Bhanu Sunrise YouTube channel for the Sinhala gaming audience."
        ],
        websiteUrl: "https://www.youtube.com/playlist?list=PLpWqZTub4k5xgj48ASs9sAUuozIFXc19e",
        seoKeywords: [
            "Sinhala Gaming",
            "Sinhala Game Reviews",
            "Bhanu Sunrise"
        ]
    },
    {
        id: "sinhala-gameplay-streams",
        name: "Sinhala Gameplay and Streams",
        image: "/images/projects/gplay_series.png",
        category: "Freetime",
        description: [
            "Produced Sinhala gameplay videos and live streams through the Bhanu Sunrise YouTube channel.",
            "Maintained a dedicated playlist containing my gaming streams and other gameplay related content."
        ],
        websiteUrl: "https://www.youtube.com/playlist?list=PLpWqZTub4k5w-Sy3N4MJpK6oRsfbmAaEh",
        seoKeywords: [
            "Sinhala Gameplay",
            "Gaming Live Streams",
            "Bhanu Sunrise"
        ]
    },
    {
        id: "kamadasa",
        name: "Kamadasa Video Game",
        image: "/images/projects/kamadasa.webp",
        category: "Freetime",
        description: [
            "Developed the Kamadasa video game for the X'Ban 2018 centenary exhibition held at Bandaranayake College.",
            "Presented the game for five days during the exhibition where visitors were able to directly play and experience the game.",
            "The game contains four different environments with a total of 16 levels, including four levels for each environment.",
            "Developed it as a Sinhala Windows game using Game Maker 8.0 and it became one of my earliest major game development projects."
        ],
        techStack: [
            {
                purpose: "Game Engine",
                stack: "Game Maker 8.0"
            },
            {
                purpose: "Platform",
                stack: "Windows"
            },
            {
                purpose: "Game Structure",
                stack: "4 Environments + 16 Levels"
            },
            {
                purpose: "Language",
                stack: "Sinhala"
            }
        ],
        seoKeywords: [
            "Kamadasa",
            "X'Ban 2018",
            "Sinhala Game"
        ]
    }
];
const education = [
    {
        id: "university-of-kelaniya",
        institute: "University of Kelaniya",
        description: "Bachelor of Science in Information Technology undergraduate with a focus on Computer Software Engineering. Contributed to academic and non-academic projects involving software development, research, innovation, and community initiatives.",
        fromYear: "2022",
        toYear: "2025"
    },
    {
        id: "bandaranayake-college",
        institute: "Bandaranayake College Gampaha",
        description: "Studied Physical Sciences and I.C.T. and completed secondary education at Bandaranayake College Gampaha. Contributed to X'Ban 2018 as a stall organizer and game developer, developing and presenting a video game during the school exhibition.",
        fromYear: "2011",
        toYear: "2019"
    }
];
const certifications = [
    {
        id: "mongodb-schema-optimization",
        image: "/images/certifications/mongo_schema_optimization.png",
        institute: "MongoDB",
        name: "MongoDB Schema Design Optimization Skill Badge",
        description: "This digital credential validates my knowledge of optimizing MongoDB performance using schema design patterns such as single collection and bucket patterns. It also covers how data models can be improved and effectively scaled across sharded clusters.",
        year: "2025"
    },
    {
        id: "mongodb-crud",
        image: "/images/certifications/mongo_crud_operations.png",
        institute: "MongoDB",
        name: "CRUD Operations in MongoDB",
        description: "This digital credential validates my knowledge of performing Create, Read, Update and Delete (CRUD) operations to manage data in MongoDB. It also covers how effective queries can be designed to retrieve data efficiently and how query results can be modified based on different requirements.",
        year: "2025"
    },
    {
        id: "mongodb-pattern-antipattern-advanced",
        image: "/images/certifications/mongo_pattern_and_anti_pattern.png",
        institute: "MongoDB",
        name: "MongoDB Advanced Schema Design Patterns and Anti-patterns Skill Badge",
        description: "This digital credential validates my knowledge of advanced schema design patterns such as approximation and schema versioning. It also covers how schema changes can be managed without downtime and how different antipatterns can impact the overall performance of a database.",
        year: "2025"
    },
    {
        id: "mongodb-pattern-antipattern-basic",
        image: "/images/certifications/mongo_pattern_and_anti_pattern_basic.png",
        institute: "MongoDB",
        name: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
        description: "This digital credential validates my knowledge of schema design patterns such as inheritance and computed patterns. It also covers how common antipatterns can be identified and avoided to improve the overall performance and efficiency of MongoDB databases.",
        year: "2025"
    },
    {
        id: "mongodb-relational-to-document-modeling",
        image: "/images/certifications/mongo_relational_to_document.png",
        institute: "MongoDB",
        name: "From Relational Model (SQL) to MongoDBs Document Model",
        description: "This digital credential validates my knowledge of converting SQL and relational models into MongoDB’s document model. It also covers how data relationships and schema validation can be designed to build efficient applications with well-structured and reliable data models.",
        year: "2025"
    },
    {
        id: "introduction-to-generative-ai",
        image: "/images/certifications/intro_to_gen_ai.png",
        institute: "Google Cloud",
        name: "Introduction to Generative AI",
        description: "This introductory course covers the fundamentals of Generative AI, how it works and how it differs from traditional machine learning methods. It also introduces Google tools that can be used to develop Generative AI applications.",
        year: "2025"
    },
    {
        id: "intro-to-css",
        image: "/images/certifications/intro_to_css_sololearn.png",
        institute: "SoloLearn",
        name: "Introduction to CSS",
        description: "This introductory course covers the fundamentals of CSS and how it is used to design and style modern websites. It also covers how CSS works together with HTML and JavaScript to create responsive layouts and better user experiences across different screen and device sizes.",
        year: "2023"
    },
    {
        id: "intro-to-html",
        image: "/images/certifications/intro_to_html_sololearn.png",
        institute: "SoloLearn",
        name: "Introduction to HTML",
        description: "This introductory course covers the fundamentals of HTML and how it is used as the core structure of web pages. It also provides a beginner-friendly starting point for front-end web development before moving into other technologies such as CSS and JavaScript.",
        year: "2023"
    },
    {
        id: "intro-to-js",
        image: "/images/certifications/intro_to_js_sololearn.png",
        institute: "SoloLearn",
        name: "Introduction to JavaScript",
        description: "This introductory course covers the fundamentals of JavaScript and how it is used to make websites more interactive. It also provides a beginner-friendly introduction to JavaScript programming and how it can be used in modern web development.",
        year: "2023"
    },
    {
        id: "java-intermediate-sololearn",
        image: "/images/certifications/java_intermediate_sololearn.png",
        institute: "SoloLearn",
        name: "Java Intermediate",
        description: "This intermediate course builds on the fundamentals of Java and covers more advanced concepts for developing powerful Java applications. It also focuses on improving Java programming skills that can be used to develop mobile apps, web applications, desktop applications and games.",
        year: "2023"
    },
    {
        id: "intro-to-sql-sololearn",
        image: "/images/certifications/intro_to_sql_sololearn.png",
        institute: "SoloLearn",
        name: "Introduction to SQL",
        description: "This introductory course covers the fundamentals of SQL and how it is used to access and manage data stored in databases. It also covers how SQL can be used to manipulate and work with data for different requirements and applications.",
        year: "2023"
    },
    {
        id: "intro-to-java-sololearn",
        image: "/images/certifications/intro_to_java_sololearn.png",
        institute: "SoloLearn",
        name: "Introduction to Java",
        description: "This introductory course covers the fundamentals of Java and provides a beginner-friendly starting point for Java programming. It also introduces how Java can be used to develop different types of applications including desktop applications, mobile apps and games.",
        year: "2023"
    }
];
const jobExperiences = [
    {
        id: "bhanu-sunrise-web-developer",
        organization: "Bhanu Sunrise Solutions",
        position: "Web Developer",
        description: "Developed SEO and AEO-friendly websites for different businesses with a focus on improving their online presence and search visibility. Also focused on usability and overall digital experience to make the websites easier for users to find, understand and use.",
        fromYear: "2023",
        toYear: "2026"
    },
    {
        id: "aiesec-product-manager",
        organization: "AIESEC in Sri Lanka",
        position: "Product Manager | National Dev Team",
        description: "Worked with cross-functional teams to manage digital products and internal technology projects. This experience also helped me improve my skills in team leadership, collaboration, product delivery and developing digital solutions based on user requirements.",
        fromYear: "2025",
        toYear: "2025"
    },
    {
        id: "aiesec-software-engineer-team-lead",
        organization: "AIESEC in Sri Lanka",
        position: "Software Engineer - Team Lead | National Dev Team",
        description: "Completed my internship by leading software engineering activities within the National Development Team of AIESEC in Sri Lanka. Contributed to the development and improvement of internal digital systems while gaining practical experience in software engineering, teamwork and delivering solutions based on organizational requirements.",
        fromYear: "2024",
        toYear: "2025"
    },
    {
        id: "aiesec-software-developer",
        organization: "AIESEC in Sri Lanka",
        position: "Software Developer | National Dev Team",
        description: "Worked as a member of the National Development Team to develop and upgrade internal systems used by AIESEC in Sri Lanka. This gave me practical experience in working with real-world systems based on the requirements of the organization.",
        fromYear: "2024",
        toYear: "2024"
    }
];
const extraCurriculars = [
    {
        id: "aiesec-greece-web-designer",
        organization: "AIESEC in Greece",
        position: "Web Designer",
        description: "Contributed to web design activities for AIESEC in Greece, applying web development and user-focused design skills in an international organizational environment.",
        fromYear: "2025",
        toYear: "2025"
    },
    {
        id: "aiesec-product-campaign-team-leader",
        organization: "AIESEC in Colombo North",
        position: "Product Campaign Team Leader | iCX | Creative Regiment",
        description: "Led product campaign activities within the Creative Regiment of AIESEC in Colombo North.",
        fromYear: "2024",
        toYear: "2025"
    },
    {
        id: "global-expansia-ocvp",
        organization: "AIESEC in Colombo North",
        position: "Organizing Committee Vice President | E & L | Global Expansia 1.0",
        description: "Maintained the event website and facilitated technical requirements for online sessions and the final event.",
        fromYear: "2024",
        toYear: "2024"
    },
    {
        id: "aiesec-performance-manager",
        organization: "AIESEC in Colombo North",
        position: "Performance Manager | Creative Regiment",
        description: "Maintained performance trackers, analyzed member performance, and supported the Local Board and Local Committee Vice Presidents with performance-related activities.",
        fromYear: "2024",
        toYear: "2024"
    },
    {
        id: "aiesec-er-coordinator",
        organization: "AIESEC in Colombo North",
        position: "ER Coordinator | Incoming Global Volunteer",
        description: "Contributed to external relations activities within the Incoming Global Volunteer function of AIESEC in Colombo North.",
        fromYear: "2024",
        toYear: "2024"
    },
    {
        id: "natcon-business-development",
        organization: "AIESEC in Sri Lanka",
        position: "Core Committee Member | Business Development | NatCon'24",
        description: "Supported partnership hunting, team discussions, partnership acquisition, and negotiation of partnership packages for NatCon'24.",
        fromYear: "2023",
        toYear: "2024"
    },
    {
        id: "aiesec-platform-handler",
        organization: "AIESEC in Colombo North",
        position: "Platforms Handler | Creative Regiment",
        description: "Managed and updated the AIESEC in Colombo North Local Committee Instagram platform.",
        fromYear: "2023",
        toYear: "2024"
    },
    {
        id: "aiesec-igv-member",
        organization: "AIESEC in Colombo North",
        position: "Member | Incoming Global Volunteer",
        description: "Participated as a member of the Incoming Global Volunteer function at AIESEC in Colombo North.",
        fromYear: "2023",
        toYear: "2024"
    },
    {
        id: "university-scrabble",
        organization: "University of Kelaniya",
        sport: "Scrabble",
        position: "Team Member",
        description: "Represented the university in Scrabble activities and competitions. Participated in Fresher's and THE SPELL 2023, played several friendly matches, and achieved 3rd place at the Inter Faculty Scrabble competition.",
        fromYear: "2022",
        toYear: "2024"
    },
    {
        id: "university-karate",
        organization: "University of Kelaniya",
        sport: "Karate",
        position: "Member",
        description: "Participated in Karate activities at the University of Kelaniya.",
        fromYear: "2022",
        toYear: "2023"
    },
    {
        id: "hackx-jr-sponsorship",
        organization: "Department of Industrial Management, Faculty of Science, University of Kelaniya",
        position: "Sponsorship Coordinator | hackX Jr. 2023",
        description: "Handled sponsorship-related responsibilities including creating partnership packages, validating documents, and providing agreed deliverables for the inter-school hackathon.",
        fromYear: "2023",
        toYear: "2023"
    },
    {
        id: "bhanu-sunrise-youtube",
        organization: "Bhanu Sunrise",
        position: "Gaming and Tech YouTuber",
        description: "Created YouTube content primarily focused on gaming and technology through the Bhanu Sunrise channel.",
        fromYear: "2020",
        toYear: "2023"
    },
    {
        id: "xban-2018-game-developer",
        organization: "Bandaranayake College Gampaha",
        position: "Stall Organizer | Game Developer | X'Ban 2018",
        description: "Developed a video game for X'Ban 2018, the school's major exhibition, and presented the game to visitors while also contributing as a stall organizer.",
        fromYear: "2018",
        toYear: "2018"
    },
    {
        id: "hobby-game-development",
        position: "Game Developer | Game Maker 8.0",
        description: "Developed video games as a hobby for more than four years using Game Maker 8.0. Created 2D platformers, racing games, Pacman-style games, pinball-style games, and multiplayer 2D games while also exploring engines such as Godot, Roblox Studio, Unreal Engine, and Construct.",
        fromYear: "2014",
        toYear: "2018"
    }
];
const contacts = [
    {
        label: "Contact No",
        value: "+94 76 201 8348",
        href: "tel:+94762018348"
    },
    {
        label: "Email",
        value: "pasindubhanuka.dev@gmail.com",
        href: "mailto:pasindubhanuka.dev@gmail.com"
    },
    {
        label: "GitHub",
        value: "github.com/bhanusunrise",
        href: "https://github.com/bhanusunrise"
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/pasindu-bhanuka-",
        href: "https://www.linkedin.com/in/pasindu-bhanuka-"
    },
    {
        label: "Instagram",
        value: "@bhanusunrise____",
        href: "https://www.instagram.com/bhanusunrise____"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useStickyProgress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStickyProgress",
    ()=>useStickyProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useStickyProgress(ref, options = {
    desktopOnly: true
}) {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStickyProgress.useEffect": ()=>{
            let frameId = 0;
            const update = {
                "useStickyProgress.useEffect.update": ()=>{
                    const element = ref.current;
                    if (!element) {
                        return;
                    }
                    const desktopOnly = options.desktopOnly ?? true;
                    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
                    if (desktopOnly && !isDesktop) {
                        setProgress(0);
                        return;
                    }
                    const rect = element.getBoundingClientRect();
                    const scrollableDistance = Math.max(element.offsetHeight - window.innerHeight, 1);
                    const travelled = Math.min(Math.max(-rect.top, 0), scrollableDistance);
                    setProgress(travelled / scrollableDistance);
                }
            }["useStickyProgress.useEffect.update"];
            const requestUpdate = {
                "useStickyProgress.useEffect.requestUpdate": ()=>{
                    cancelAnimationFrame(frameId);
                    frameId = requestAnimationFrame(update);
                }
            }["useStickyProgress.useEffect.requestUpdate"];
            update();
            window.addEventListener("scroll", requestUpdate, {
                passive: true
            });
            window.addEventListener("resize", requestUpdate);
            return ({
                "useStickyProgress.useEffect": ()=>{
                    cancelAnimationFrame(frameId);
                    window.removeEventListener("scroll", requestUpdate);
                    window.removeEventListener("resize", requestUpdate);
                }
            })["useStickyProgress.useEffect"];
        }
    }["useStickyProgress.useEffect"], [
        ref,
        options.desktopOnly
    ]);
    return progress;
}
_s(useStickyProgress, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0hec9wh._.js.map