module.exports = [
"[project]/rexpharma/app/pharmaceutical/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PharmaceuticalList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rexpharma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rexpharma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const categories = [
    {
        key: "tablets",
        label: "Tablets",
        products: [
            {
                code: "RXF 001",
                name: "Amlodipine 5mg + Losartan Potassium 50mg Tablets",
                dose: "Tablets",
                pack: "10x10's",
                status: "Dossier Available"
            },
            {
                code: "RXF 002",
                name: "Amoxycillin 500mg + Clavulanic Acid 125mg Tablets",
                dose: "Tablets",
                pack: "10x10's",
                status: "Dossier Available"
            },
            {
                code: "RXF 003",
                name: "Atorvastatin 10mg + Ezetimibe 10mg Tablets",
                dose: "Tablets",
                pack: "10x10's",
                status: "As per requirements"
            },
            {
                code: "RXF 004",
                name: "Metformin 500mg SR + Glimepiride 1mg Tablets",
                dose: "Tablets",
                pack: "10x10's",
                status: "As per requirements"
            }
        ]
    },
    {
        key: "capsules",
        label: "Capsules",
        products: [
            {
                code: "RXF 101",
                name: "Esomeprazole 40mg (EC) + Domperidone 30mg (SR)",
                dose: "Capsules",
                pack: "10x10's",
                status: "As per requirements"
            },
            {
                code: "RXF 102",
                name: "Diclofenac 50mg (EC) + Serratiopeptidase 15mg",
                dose: "Capsules",
                pack: "10x10's",
                status: "As per requirements"
            }
        ]
    },
    {
        key: "external",
        label: "External Preparations",
        products: [
            {
                code: "RXF 201",
                name: "Clotrimazole 1% + Beclomethasone 0.025% Cream",
                dose: "Cream",
                pack: "15g/30g",
                status: "As per requirements"
            },
            {
                code: "RXF 202",
                name: "Diclofenac Diethylamine 2% Gel",
                dose: "Gel",
                pack: "15g/30g",
                status: "As per requirements"
            }
        ]
    },
    {
        key: "syrups",
        label: "Syrups",
        products: [
            {
                code: "RXF 301",
                name: "Ambroxol 30mg + Guaifenesin 50mg per 5ml",
                dose: "Syrup",
                pack: "60-100ml",
                status: "As per requirements"
            }
        ]
    },
    {
        key: "dry-syrups",
        label: "Dry Syrups",
        products: [
            {
                code: "RXF 401",
                name: "Amoxycillin 125mg + Clavulanic Acid 31.25mg per 5ml",
                dose: "Dry Syrup",
                pack: "30ml/50ml",
                status: "As per requirements"
            },
            {
                code: "RXF 402",
                name: "Cefixime 50mg per 5ml",
                dose: "Dry Syrup",
                pack: "30ml/50ml",
                status: "As per requirements"
            }
        ]
    },
    {
        key: "liquid-injections",
        label: "Liquid Injections",
        products: [
            {
                code: "RXF 501",
                name: "Ondansetron 2mg/ml Injection",
                dose: "Liquid Injection",
                pack: "Amp/Vial",
                status: "As per requirements"
            }
        ]
    },
    {
        key: "dry-injections",
        label: "Dry Injections",
        products: [
            {
                code: "RXF 601",
                name: "Ceftriaxone (as sodium) 1g + Sulbactam 500mg",
                dose: "Dry Injection",
                pack: "Vial",
                status: "As per requirements"
            }
        ]
    },
    {
        key: "eye-drops",
        label: "Eye Drops",
        products: [
            {
                code: "RXF 701",
                name: "Moxifloxacin 0.5% w/v Eye Drops",
                dose: "Eye Drops",
                pack: "5ml/10ml",
                status: "Dossier Available"
            }
        ]
    }
];
function PharmaceuticalList() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(categories[0].key);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const activeCategory = categories.find((c)=>c.key === activeTab);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!search.trim()) return activeCategory.products;
        const q = search.toLowerCase();
        return activeCategory.products.filter((p)=>p.name.toLowerCase().includes(q));
    }, [
        activeCategory,
        search
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1180px] mx-auto px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-display text-[clamp(1.9rem,3.4vw,2.6rem)]",
                            children: "List of Pharmaceutical Formulations We Offer"
                        }, void 0, false, {
                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full md:w-72",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value),
                                    placeholder: "Enter product name",
                                    className: "w-full border border-ink/15 rounded-full pl-5 pr-11 py-3 text-sm focus:outline-none focus:border-teal"
                                }, void 0, false, {
                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 24 24",
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "7",
                                            stroke: "currentColor",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65",
                                            stroke: "currentColor",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 mb-8 border-b border-ink/10 pb-4",
                    children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActiveTab(c.key);
                                setSearch("");
                            },
                            className: `px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors ${activeTab === c.key ? "bg-ink text-paper" : "bg-paper-dim text-ink-soft hover:text-ink"}`,
                            children: c.label
                        }, c.key, false, {
                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto border border-ink/10 rounded-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-paper-dim text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3.5 font-semibold whitespace-nowrap",
                                            children: "Product Code"
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3.5 font-semibold",
                                            children: "Generic Name of Product"
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3.5 font-semibold whitespace-nowrap",
                                            children: "Dosage Form"
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3.5 font-semibold whitespace-nowrap",
                                            children: "Pack Size"
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-5 py-3.5 font-semibold whitespace-nowrap",
                                            children: "Dossier Status"
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    filtered.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: i % 2 === 0 ? "bg-paper" : "bg-paper-dim/40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 font-mono text-xs text-ink-soft whitespace-nowrap",
                                                    children: p.code
                                                }, void 0, false, {
                                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5",
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 whitespace-nowrap",
                                                    children: p.dose
                                                }, void 0, false, {
                                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 whitespace-nowrap",
                                                    children: p.pack
                                                }, void 0, false, {
                                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-5 py-3.5 whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs px-2.5 py-1 rounded-full ${p.status === "Dossier Available" ? "bg-teal/10 text-teal-deep" : "bg-ink/5 text-ink-soft"}`,
                                                        children: p.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p.code, true, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)),
                                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rexpharma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 5,
                                            className: "px-5 py-8 text-center text-ink-soft",
                                            children: "No products match your search."
                                        }, void 0, false, {
                                            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rexpharma/app/pharmaceutical/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/rexpharma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/rexpharma/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=rexpharma_0kjxj1c._.js.map