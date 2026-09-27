module.exports = [
"[project]/components/CareerCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareerCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const FAMILY_ICONS = {
    "Software Engineering": {
        icon: "💻",
        tint: "bg-teal-tint text-teal",
        border: "border-teal/30"
    },
    "Data & Analytics": {
        icon: "📊",
        tint: "bg-gold-tint text-gold-deep",
        border: "border-gold/30"
    },
    "Cybersecurity": {
        icon: "🛡️",
        tint: "bg-coral-tint text-coral",
        border: "border-coral/30"
    },
    "Machine Learning & AI": {
        icon: "🤖",
        tint: "bg-mint-tint text-mint",
        border: "border-mint/30"
    },
    "Infrastructure & Cloud": {
        icon: "☁️",
        tint: "bg-surface-2 text-ink",
        border: "border-line"
    },
    "IT Support & Operations": {
        icon: "⚙️",
        tint: "bg-surface-2 text-ink-2",
        border: "border-line"
    },
    "IT Business & Product": {
        icon: "📈",
        tint: "bg-gold-tint text-gold-deep",
        border: "border-gold/30"
    },
    "Health IT": {
        icon: "🏥",
        tint: "bg-teal-tint text-teal",
        border: "border-teal/30"
    }
};
function formatCurrency(val) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(val);
}
function CareerCard({ field, isSelected, onSelect, onDrillDown }) {
    const theme = FAMILY_ICONS[field.job_family] || {
        icon: "🎯",
        tint: "bg-surface-2 text-ink",
        border: "border-line"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `glass-card p-5 lg:p-6 grid gap-4 transition-all duration-200 border-2 ${isSelected ? "border-gold ring-2 ring-gold/40 shadow-lg scale-[1.01]" : `${theme.border} hover:border-gold`}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `grid place-items-center w-12 h-12 rounded-2xl text-2xl ${theme.tint}`,
                                children: theme.icon
                            }, void 0, false, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-lg font-bold text-ink leading-tight",
                                        children: field.job_family
                                    }, void 0, false, {
                                        fileName: "[project]/components/CareerCard.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-ink-3",
                                        children: [
                                            field.historical_alumni_count.toLocaleString(),
                                            " alumni placed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CareerCard.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block rounded-full bg-gold-tint px-2.5 py-1 text-xs font-bold text-gold-deep",
                                children: [
                                    field.match_score,
                                    "% match"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-1.5 bg-surface-2 rounded-full mt-1.5 ml-auto overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gold rounded-full",
                                    style: {
                                        width: `${Math.min(100, field.match_score * 2.5)}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerCard.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CareerCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 p-3 rounded-xl bg-surface-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-ink-3 block font-medium",
                                children: "Median Starting Salary"
                            }, void 0, false, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-base font-bold text-teal",
                                children: formatCurrency(field.median_starting_salary)
                            }, void 0, false, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-ink-3 block font-medium",
                                children: "Historical Placement"
                            }, void 0, false, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-base font-bold text-ink",
                                children: [
                                    field.historical_alumni_count,
                                    " grads"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CareerCard.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            field.entry_roles && field.entry_roles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-semibold text-ink-3 uppercase tracking-wide",
                        children: "Common Entry Roles"
                    }, void 0, false, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: field.entry_roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-lg bg-surface border border-line px-2 py-1 text-xs font-medium text-ink-2",
                                children: role
                            }, role, false, {
                                fileName: "[project]/components/CareerCard.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CareerCard.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 pt-2 border-t border-line",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onDrillDown(field),
                        className: "press flex-1 rounded-full border border-teal text-teal hover:bg-teal-tint px-3 py-2 text-xs font-bold transition-colors text-center",
                        children: "🔍 View Career Insights"
                    }, void 0, false, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onSelect(field),
                        className: `press rounded-full px-4 py-2 text-xs font-bold transition-all ${isSelected ? "bg-gold text-on-gold font-bold shadow-sm" : "bg-surface border border-line hover:border-gold text-ink"}`,
                        children: isSelected ? "✓ Selected Target" : "Select Target"
                    }, void 0, false, {
                        fileName: "[project]/components/CareerCard.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CareerCard.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CareerCard.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CareerInsightsModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareerInsightsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function formatCurrency(val) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(val);
}
function CareerInsightsModal({ isOpen, onClose, insights, loading, error, onSelectAndRoadmap }) {
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on Escape or click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleKey = (e)=>{
            if (e.key === "Escape") onClose();
        };
        const handleClick = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKey);
        document.addEventListener("mousedown", handleClick);
        return ()=>{
            document.removeEventListener("keydown", handleKey);
            document.removeEventListener("mousedown", handleClick);
        };
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "career-insights-title",
        className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: modalRef,
            className: "w-full max-w-3xl my-auto rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-2xl glass-strong pop relative max-h-[90vh] overflow-y-auto grid gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onClose,
                    className: "absolute top-4 right-4 p-2 text-ink-3 hover:text-ink rounded-full hover:bg-surface-2 transition-colors z-10",
                    "aria-label": "Close career insights modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CareerInsightsModal.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CareerInsightsModal.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16 text-center grid gap-4 place-items-center animate-pulse",
                    "aria-busy": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full border-4 border-gold border-t-transparent animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl font-bold text-ink",
                                    children: "Analyzing Historical Alumni Data..."
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-ink-2 max-w-sm",
                                    children: "Querying PostgreSQL database (~140k records) for salary benchmarks, top employers, and course mappings."
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md h-8 bg-surface-2 rounded-xl mt-4"
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md h-28 bg-surface-2 rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CareerInsightsModal.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-12 text-center grid gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full bg-coral-tint text-coral grid place-items-center mx-auto text-xl font-bold",
                            children: "!"
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display text-xl font-bold text-coral",
                            children: "Failed to Load Career Insights"
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-ink-2 max-w-md mx-auto",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "press mx-auto rounded-full bg-surface border border-line px-5 py-2 text-sm font-semibold hover:bg-surface-2",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CareerInsightsModal.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this) : insights ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-line pb-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-3 py-1 uppercase tracking-wide",
                                                children: "Historical Insights"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CareerInsightsModal.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "career-insights-title",
                                                className: "font-display text-2xl sm:text-3xl font-bold text-ink mt-1.5",
                                                children: insights.job_family
                                            }, void 0, false, {
                                                fileName: "[project]/components/CareerInsightsModal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-ink-2",
                                                children: "Verified employment metrics & course mappings from UMBC alumni."
                                            }, void 0, false, {
                                                fileName: "[project]/components/CareerInsightsModal.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CareerInsightsModal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onSelectAndRoadmap(insights.job_family),
                                        className: "press rounded-full bg-gold px-5 py-2.5 font-bold text-on-gold hover:bg-gold-soft shadow-md text-sm",
                                        children: "🚀 Build Roadmap for This Field →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CareerInsightsModal.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CareerInsightsModal.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        insights.salary_benchmarks && insights.salary_benchmarks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            "aria-labelledby": "salary-benchmarks-title",
                            className: "grid gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: "salary-benchmarks-title",
                                            className: "font-display text-lg font-bold text-ink flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "💵"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                " Salary Benchmarks by Seniority"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-ink-3",
                                            children: "Median vs 75th Percentile"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: insights.salary_benchmarks.map((bench)=>{
                                        const maxSal = 200000;
                                        const medianPct = Math.min(100, bench.median / maxSal * 100);
                                        const p75Pct = Math.min(100, bench["75th_percentile"] / maxSal * 100);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-line bg-surface-2 p-3 grid gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-ink",
                                                            children: [
                                                                bench.seniority,
                                                                " Level"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4 font-mono text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-teal font-semibold",
                                                                    children: [
                                                                        "Median: ",
                                                                        formatCurrency(bench.median)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-ink-2",
                                                                    children: [
                                                                        "75th %ile: ",
                                                                        formatCurrency(bench["75th_percentile"])
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-2.5 bg-bg rounded-full overflow-hidden relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-teal/40 rounded-full absolute left-0",
                                                            style: {
                                                                width: `${p75Pct}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-teal rounded-full absolute left-0",
                                                            style: {
                                                                width: `${medianPct}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, bench.seniority, true, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "glass-card p-4 grid gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-sm font-bold text-ink flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                " Top Hiring Regions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1.5",
                                            children: insights.top_regions?.map((reg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-surface border border-line px-3 py-1 text-xs font-semibold text-ink-2",
                                                    children: reg
                                                }, reg, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "glass-card p-4 grid gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-sm font-bold text-ink flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "🏢"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                " Top Hiring Employers"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1.5",
                                            children: insights.top_employers?.map((emp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-surface border border-line px-3 py-1 text-xs font-semibold text-ink-2",
                                                    children: emp
                                                }, emp, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        insights.in_demand_skills && insights.in_demand_skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-base font-bold text-ink flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⚡"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        " High In-Demand Skills"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: insights.in_demand_skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-gold-tint text-gold-deep border border-gold/30 px-3 py-1 text-xs font-bold",
                                            children: skill
                                        }, skill, false, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this),
                        insights.relevant_umbc_courses && insights.relevant_umbc_courses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "grid gap-3 border-t border-line pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-base font-bold text-ink flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🎓"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this),
                                        " Matching UMBC Catalog Courses"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid sm:grid-cols-2 gap-3",
                                    children: insights.relevant_umbc_courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-line bg-surface-2 p-3.5 grid gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs font-bold text-teal bg-teal-tint px-2 py-0.5 rounded",
                                                        children: course.course_id
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CareerInsightsModal.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-sm text-ink",
                                                    children: course.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1 mt-1",
                                                    children: course.teaches_skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-medium bg-surface border border-line px-2 py-0.5 rounded text-ink-3",
                                                            children: [
                                                                "✓ ",
                                                                s
                                                            ]
                                                        }, s, true, {
                                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, course.course_id, true, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 238,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 232,
                            columnNumber: 15
                        }, this),
                        insights.historical_experience_pathways && insights.historical_experience_pathways.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "grid gap-3 border-t border-line pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-base font-bold text-ink flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔬"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this),
                                        " Proven Campus Research & Internship Pathways"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: insights.historical_experience_pathways.map((exp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between rounded-xl bg-bg border border-line p-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-ink",
                                                            children: exp.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-ink-3",
                                                            children: exp.organization
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-mint-tint text-mint text-xs font-bold px-2.5 py-1 shrink-0",
                                                    children: exp.type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `${exp.title}-${exp.organization}-${idx}`, true, {
                                            fileName: "[project]/components/CareerInsightsModal.tsx",
                                            lineNumber: 269,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 263,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-end gap-3 pt-4 border-t border-line",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "press rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:bg-surface-2",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onSelectAndRoadmap(insights.job_family),
                                    className: "press rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-on-gold hover:bg-gold-soft shadow-md",
                                    children: [
                                        "Build Roadmap for ",
                                        insights.job_family,
                                        " →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CareerInsightsModal.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CareerInsightsModal.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/CareerInsightsModal.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CareerInsightsModal.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/programs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// UMBC programs, minors and focus areas used by setup, the program browser and the planner.
// NOTE: compiled for the hackathon demo. Names and degree types should be checked against
// the UMBC catalog (catalog.umbc.edu) before launch; requirements change every year.
__turbopack_context__.s([
    "areaOf",
    ()=>areaOf,
    "areas",
    ()=>areas,
    "colleges",
    ()=>colleges,
    "experienceOptions",
    ()=>experienceOptions,
    "focusAreas",
    ()=>focusAreas,
    "getProgram",
    ()=>getProgram,
    "levelLabels",
    ()=>levelLabels,
    "minors",
    ()=>minors,
    "programs",
    ()=>programs,
    "yearsByLevel",
    ()=>yearsByLevel
]);
const CNMS = "Natural & Mathematical Sciences";
const COEIT = "Engineering & Information Technology";
const CAHSS = "Arts, Humanities & Social Sciences";
const ERICKSON = "Erickson School of Aging Studies";
const GRAD = "Graduate School";
// Helper keeps the big list below readable.
function p(id, name, degree, level, college, family, summary, careers, skills) {
    return {
        id,
        name,
        degree,
        level,
        college,
        family,
        summary,
        careers,
        skills
    };
}
const programs = [
    // ---------- Undergraduate: computing & engineering ----------
    p("cs-bs", "Computer Science", "B.S.", "undergrad", COEIT, "computing", "Algorithms, systems, and software, with electives in AI, security, data science and graphics.", [
        "Software Engineer",
        "Machine Learning Engineer",
        "Data Scientist",
        "Security Engineer",
        "Health Informatics Developer",
        "UX Engineer"
    ], [
        "Programming (Python, Java, C)",
        "Data structures & algorithms",
        "Git",
        "Testing",
        "Databases"
    ]),
    p("cmpe-bs", "Computer Engineering", "B.S.", "undergrad", COEIT, "engineering", "Where hardware meets software: embedded systems, digital design, and networks.", [
        "Embedded Systems Engineer",
        "Hardware Engineer",
        "Medical Device Engineer",
        "Robotics Engineer",
        "FPGA Engineer"
    ], [
        "C/C++",
        "Digital logic",
        "Microcontrollers",
        "Circuit analysis",
        "Signal processing"
    ]),
    p("is-bs", "Information Systems", "B.S.", "undergrad", COEIT, "computing", "Technology in organizations: databases, analytics, HCI, and systems design.", [
        "Data Analyst",
        "Business Analyst",
        "UX Researcher",
        "Health IT Analyst",
        "Product Manager",
        "Cybersecurity Analyst"
    ], [
        "SQL",
        "Data analysis",
        "Systems analysis",
        "UX research",
        "Project management"
    ]),
    p("bta-bs", "Business Technology Administration", "B.S.", "undergrad", COEIT, "business", "Business fundamentals combined with information technology management.", [
        "IT Project Manager",
        "Business Analyst",
        "Operations Analyst",
        "Technology Consultant"
    ], [
        "Project management",
        "Business analysis",
        "Spreadsheets & SQL",
        "Communication"
    ]),
    p("me-bs", "Mechanical Engineering", "B.S.", "undergrad", COEIT, "engineering", "Design, thermal-fluid systems, mechanics, and manufacturing.", [
        "Mechanical Design Engineer",
        "Biomedical Device Engineer",
        "Aerospace Engineer",
        "Manufacturing Engineer",
        "Energy Systems Engineer"
    ], [
        "CAD (SolidWorks)",
        "MATLAB",
        "Statics & dynamics",
        "Thermodynamics",
        "Prototyping"
    ]),
    p("che-bs", "Chemical Engineering", "B.S.", "undergrad", COEIT, "engineering", "Chemical and biological process engineering, with a strong biotech track.", [
        "Process Engineer",
        "Bioprocess Engineer",
        "Pharmaceutical Engineer",
        "Environmental Engineer"
    ], [
        "Process design",
        "Thermodynamics",
        "Lab safety",
        "MATLAB / Python",
        "Bioprocessing"
    ]),
    // ---------- Undergraduate: sciences & math ----------
    p("bio-bs", "Biological Sciences", "B.S./B.A.", "undergrad", CNMS, "life-science", "Cell biology, genetics, ecology, and physiology with extensive lab and research options.", [
        "Research Technician",
        "Physician (pre-med)",
        "Genetic Counselor",
        "Biotech Associate",
        "Public Health Scientist"
    ], [
        "Lab techniques",
        "Experimental design",
        "Scientific writing",
        "R or Python",
        "Statistics"
    ]),
    p("bioinf-bs", "Bioinformatics and Computational Biology", "B.S.", "undergrad", CNMS, "life-science", "Biology plus computing to analyze genomes, proteins, and biomedical data.", [
        "Bioinformatics Analyst",
        "Computational Biologist",
        "Genomics Data Scientist",
        "Biomedical Research Programmer"
    ], [
        "Python / R",
        "Genomics tools",
        "Statistics",
        "Molecular biology",
        "Linux command line"
    ]),
    p("bchm-bs", "Biochemistry and Molecular Biology", "B.S.", "undergrad", CNMS, "life-science", "The chemistry of life: proteins, enzymes, and molecular mechanisms.", [
        "Biochemist",
        "Pharmaceutical Scientist",
        "Physician (pre-med)",
        "Clinical Lab Scientist"
    ], [
        "Biochemical assays",
        "Protein chemistry",
        "Lab techniques",
        "Data analysis"
    ]),
    p("chem-bs", "Chemistry", "B.S./B.A.", "undergrad", CNMS, "physical-science", "Analytical, organic, physical, and inorganic chemistry with research opportunities.", [
        "Analytical Chemist",
        "Pharmaceutical Chemist",
        "Materials Scientist",
        "Forensic Chemist",
        "Chemistry Teacher"
    ], [
        "Instrumentation",
        "Synthesis",
        "Lab safety",
        "Data analysis",
        "Technical writing"
    ]),
    p("phys-bs", "Physics", "B.S./B.A.", "undergrad", CNMS, "physical-science", "Mechanics, electromagnetism, quantum, and atmospheric and astrophysics research.", [
        "Physicist",
        "Data Scientist",
        "Optical Engineer",
        "Medical Physicist",
        "Atmospheric Scientist"
    ], [
        "Mathematical modeling",
        "Python",
        "Experimental physics",
        "Data analysis"
    ]),
    p("math-bs", "Mathematics", "B.S./B.A.", "undergrad", CNMS, "math", "Pure and applied mathematics, with options in actuarial science and education.", [
        "Data Scientist",
        "Actuary",
        "Operations Research Analyst",
        "Math Teacher",
        "Quantitative Analyst"
    ], [
        "Proof writing",
        "Linear algebra",
        "Modeling",
        "Python / MATLAB",
        "Statistics"
    ]),
    p("stat-bs", "Statistics", "B.S.", "undergrad", CNMS, "math", "Probability, statistical modeling, and data analysis.", [
        "Statistician",
        "Biostatistician",
        "Data Scientist",
        "Actuary",
        "Survey Analyst"
    ], [
        "R",
        "SAS / Python",
        "Regression",
        "Experimental design",
        "Data visualization"
    ]),
    p("envs-bs", "Environmental Science", "B.S.", "undergrad", CAHSS, "physical-science", "Earth systems, ecology, and environmental data, with GIS and field work.", [
        "Environmental Scientist",
        "GIS Analyst",
        "Conservation Scientist",
        "Environmental Consultant"
    ], [
        "GIS",
        "Field methods",
        "Data analysis",
        "Environmental policy"
    ]),
    // ---------- Undergraduate: social sciences & psychology ----------
    p("psyc-ba", "Psychology", "B.A./B.S.", "undergrad", CAHSS, "psychology", "Behavior and mental processes: clinical, developmental, social, cognitive, and I/O psychology.", [
        "Clinical Psychologist",
        "Licensed Therapist (LPC/LCSW)",
        "School Counselor",
        "UX Researcher",
        "HR / I-O Specialist",
        "Research Coordinator"
    ], [
        "Research methods",
        "Statistics (SPSS/R)",
        "Active listening",
        "Scientific writing",
        "Ethics"
    ]),
    p("econ-ba", "Economics", "B.A.", "undergrad", CAHSS, "social-science", "Markets, policy, and data-driven economic analysis.", [
        "Economic Analyst",
        "Policy Analyst",
        "Financial Analyst",
        "Data Analyst",
        "Consultant"
    ], [
        "Econometrics",
        "Excel",
        "Stata / R",
        "Economic modeling",
        "Writing"
    ]),
    p("fin-econ-ba", "Financial Economics", "B.A.", "undergrad", CAHSS, "business", "Economics focused on financial markets, investment, and corporate finance.", [
        "Financial Analyst",
        "Investment Analyst",
        "Risk Analyst",
        "Banking Associate"
    ], [
        "Financial modeling",
        "Excel",
        "Econometrics",
        "Accounting basics"
    ]),
    p("posi-ba", "Political Science", "B.A.", "undergrad", CAHSS, "social-science", "Government, law, public policy, and international relations.", [
        "Policy Analyst",
        "Legislative Aide",
        "Attorney (pre-law)",
        "Campaign Manager",
        "Foreign Service Officer",
        "Intelligence Analyst"
    ], [
        "Policy analysis",
        "Research & writing",
        "Public speaking",
        "Data analysis"
    ]),
    p("soci-ba", "Sociology", "B.A.", "undergrad", CAHSS, "social-science", "Society, inequality, health, and communities, with strong research methods.", [
        "Social Researcher",
        "Program Evaluator",
        "Community Organizer",
        "Public Health Analyst"
    ], [
        "Survey research",
        "Qualitative interviews",
        "Statistics",
        "Writing"
    ]),
    p("sowk-ba", "Social Work", "B.A. (BSW)", "undergrad", CAHSS, "health", "Accredited social work practice with field placements in the community.", [
        "Licensed Clinical Social Worker",
        "School Social Worker",
        "Case Manager",
        "Medical Social Worker"
    ], [
        "Case management",
        "Counseling skills",
        "Advocacy",
        "Cultural humility"
    ]),
    p("gls-ba", "Global Studies", "B.A.", "undergrad", CAHSS, "social-science", "Interdisciplinary study of global issues, cultures, and international affairs.", [
        "International Development Specialist",
        "Foreign Service Officer",
        "NGO Program Manager"
    ], [
        "Cross-cultural communication",
        "Foreign language",
        "Research",
        "Policy analysis"
    ]),
    p("geog-ba", "Geography", "B.A./B.S.", "undergrad", CAHSS, "social-science", "People, places, and spatial data, with GIS and urban planning.", [
        "GIS Analyst",
        "Urban Planner",
        "Environmental Planner",
        "Cartographer"
    ], [
        "GIS (ArcGIS/QGIS)",
        "Spatial analysis",
        "Remote sensing",
        "Planning"
    ]),
    p("envst-ba", "Environmental Studies", "B.A.", "undergrad", CAHSS, "social-science", "Environmental policy, justice, and sustainability.", [
        "Sustainability Coordinator",
        "Environmental Policy Analyst",
        "Environmental Educator"
    ], [
        "Policy analysis",
        "Community engagement",
        "GIS basics",
        "Writing"
    ]),
    // ---------- Undergraduate: health ----------
    p("ehs-bs", "Emergency Health Services", "B.S.", "undergrad", CAHSS, "health", "Paramedicine, emergency management, and health administration.", [
        "Paramedic",
        "Emergency Manager",
        "Physician Assistant (pre-PA)",
        "Public Health Preparedness Specialist"
    ], [
        "Emergency medical care",
        "Incident command",
        "Health systems",
        "Leadership"
    ]),
    p("happ-ba", "Health Administration and Public Policy", "B.A.", "undergrad", CAHSS, "health", "How health systems are organized, financed, and improved.", [
        "Health Services Manager",
        "Health Policy Analyst",
        "Public Health Program Coordinator",
        "Hospital Administrator"
    ], [
        "Health policy",
        "Data analysis",
        "Program management",
        "Writing"
    ]),
    p("mgas-ba", "Management of Aging Services", "B.A.", "undergrad", ERICKSON, "health", "Leadership and business of services for older adults.", [
        "Senior Living Administrator",
        "Aging Services Manager",
        "Care Coordinator"
    ], [
        "Management",
        "Gerontology",
        "Finance basics",
        "Policy"
    ]),
    // ---------- Undergraduate: humanities ----------
    p("mcs-ba", "Media and Communication Studies", "B.A.", "undergrad", CAHSS, "humanities", "Media, culture, digital communication, and production.", [
        "Communications Specialist",
        "Social Media Manager",
        "Journalist",
        "UX Writer",
        "Public Relations Specialist"
    ], [
        "Writing",
        "Content strategy",
        "Video/audio production",
        "Audience research"
    ]),
    p("engl-ba", "English", "B.A.", "undergrad", CAHSS, "humanities", "Literature, writing, rhetoric, and communication and technology.", [
        "Technical Writer",
        "Editor",
        "Content Designer",
        "Teacher",
        "Attorney (pre-law)"
    ], [
        "Writing & editing",
        "Critical analysis",
        "Research",
        "Rhetoric"
    ]),
    p("hist-ba", "History", "B.A.", "undergrad", CAHSS, "humanities", "Historical research, public history, and museum work.", [
        "Historian",
        "Archivist",
        "Museum Educator",
        "Attorney (pre-law)",
        "Teacher"
    ], [
        "Archival research",
        "Writing",
        "Argumentation",
        "Digital humanities"
    ]),
    p("phil-ba", "Philosophy", "B.A.", "undergrad", CAHSS, "humanities", "Logic, ethics, and big questions, excellent preparation for law and tech ethics.", [
        "Attorney (pre-law)",
        "Ethics & Policy Analyst",
        "AI Ethics Researcher",
        "Consultant"
    ], [
        "Logic",
        "Argumentation",
        "Ethics",
        "Writing"
    ]),
    p("mll-ba", "Modern Languages, Linguistics & Intercultural Communication", "B.A.", "undergrad", CAHSS, "humanities", "Languages, linguistics, and communication across cultures.", [
        "Translator / Interpreter",
        "Computational Linguist",
        "International Business Associate",
        "Language Teacher"
    ], [
        "Foreign languages",
        "Linguistic analysis",
        "Intercultural communication"
    ]),
    p("gwst-ba", "Gender, Women's, and Sexuality Studies", "B.A.", "undergrad", CAHSS, "humanities", "Gender and sexuality across cultures, policy, and health.", [
        "Advocacy Coordinator",
        "Diversity & Inclusion Specialist",
        "Policy Analyst",
        "Nonprofit Manager"
    ], [
        "Research",
        "Advocacy",
        "Writing",
        "Community engagement"
    ]),
    p("afst-ba", "Africana Studies", "B.A.", "undergrad", CAHSS, "humanities", "History, cultures, and politics of Africa and the African diaspora.", [
        "Community Development Specialist",
        "Educator",
        "Policy Analyst",
        "Attorney (pre-law)"
    ], [
        "Research",
        "Writing",
        "Cultural analysis",
        "Public speaking"
    ]),
    p("asian-ba", "Asian Studies", "B.A.", "undergrad", CAHSS, "humanities", "Languages, cultures, and societies of Asia.", [
        "International Relations Specialist",
        "Translator",
        "Global Business Associate"
    ], [
        "Language skills",
        "Cultural analysis",
        "Research"
    ]),
    p("amst-ba", "American Studies", "B.A.", "undergrad", CAHSS, "humanities", "American culture, media, and communities.", [
        "Museum Professional",
        "Cultural Programs Manager",
        "Journalist"
    ], [
        "Cultural analysis",
        "Oral history",
        "Writing"
    ]),
    p("ancs-ba", "Ancient Studies", "B.A.", "undergrad", CAHSS, "humanities", "The ancient Mediterranean world: languages, history, and archaeology.", [
        "Archaeologist",
        "Museum Curator",
        "Teacher",
        "Attorney (pre-law)"
    ], [
        "Latin / Greek",
        "Archaeological methods",
        "Research"
    ]),
    p("inds-ba", "Interdisciplinary Studies", "B.A.", "undergrad", CAHSS, "humanities", "Design your own major around a question no single department covers.", [
        "Depends on your design: e.g. Health Equity Specialist, Tech Policy Analyst, Social Entrepreneur"
    ], [
        "Self-directed learning",
        "Research",
        "Synthesis across fields"
    ]),
    // ---------- Undergraduate: arts ----------
    p("art-ba", "Visual Arts", "B.A./B.F.A.", "undergrad", CAHSS, "arts", "Studio art, graphic design, animation, photography, and interactive media.", [
        "Graphic Designer",
        "UX/UI Designer",
        "Animator",
        "Art Director",
        "Illustrator"
    ], [
        "Adobe Creative Suite",
        "Figma",
        "Typography",
        "Motion design",
        "Portfolio development"
    ]),
    p("musc-ba", "Music", "B.A.", "undergrad", CAHSS, "arts", "Performance, composition, music technology, and education.", [
        "Music Educator",
        "Audio Engineer",
        "Composer",
        "Arts Administrator"
    ], [
        "Performance",
        "Music technology",
        "Theory",
        "Teaching"
    ]),
    p("danc-ba", "Dance", "B.A.", "undergrad", CAHSS, "arts", "Performance, choreography, and dance in the community.", [
        "Dancer",
        "Choreographer",
        "Dance Educator",
        "Arts Administrator"
    ], [
        "Choreography",
        "Performance",
        "Teaching",
        "Production"
    ]),
    p("thtr-ba", "Theatre", "B.A.", "undergrad", CAHSS, "arts", "Acting, design and production, and theatre studies.", [
        "Actor",
        "Stage Manager",
        "Production Designer",
        "Arts Administrator"
    ], [
        "Performance",
        "Design & tech",
        "Collaboration",
        "Project management"
    ]),
    // ---------- Undergraduate: other ----------
    p("tlst-bs", "Translational Life Science Technology", "B.S.", "undergrad", CNMS, "life-science", "Hands-on biotechnology for industry, offered at the Universities at Shady Grove.", [
        "Biotech Manufacturing Associate",
        "Quality Control Analyst",
        "Research Associate"
    ], [
        "GMP / lab techniques",
        "Quality systems",
        "Cell culture",
        "Data recording"
    ]),
    // ---------- Graduate (master's) ----------
    p("cs-ms", "Computer Science", "M.S.", "grad", COEIT, "computing", "Advanced study in AI, systems, security, and theory, with thesis and non-thesis options.", [
        "Senior Software Engineer",
        "ML Engineer",
        "Research Scientist",
        "Security Engineer"
    ], [
        "Advanced algorithms",
        "Machine learning",
        "Systems",
        "Research"
    ]),
    p("ds-mps", "Data Science", "M.P.S.", "grad", COEIT, "computing", "Professional program in data analysis, machine learning, and data engineering.", [
        "Data Scientist",
        "Machine Learning Engineer",
        "Data Engineer",
        "Analytics Manager"
    ], [
        "Python",
        "Machine learning",
        "Big data tools",
        "SQL",
        "Communication"
    ]),
    p("cyber-mps", "Cybersecurity", "M.P.S.", "grad", COEIT, "computing", "Applied security: defense, forensics, risk, and policy.", [
        "Security Analyst",
        "Penetration Tester",
        "Security Architect",
        "GRC Analyst"
    ], [
        "Network security",
        "Incident response",
        "Risk management",
        "Forensics"
    ]),
    p("is-ms", "Information Systems", "M.S.", "grad", COEIT, "computing", "Data science, HCI, health IT, and information management.", [
        "Data Analyst",
        "Health IT Specialist",
        "UX Researcher",
        "IT Manager"
    ], [
        "Data analytics",
        "Database design",
        "HCI",
        "Project management"
    ]),
    p("hcc-ms", "Human-Centered Computing", "M.S.", "grad", COEIT, "computing", "Design and evaluation of technology around people: UX, accessibility, and assistive tech.", [
        "UX Researcher",
        "UX Designer",
        "Accessibility Specialist",
        "Product Designer"
    ], [
        "User research",
        "Prototyping (Figma)",
        "Usability testing",
        "Accessibility (WCAG)"
    ]),
    p("engm-ms", "Engineering Management", "M.S.", "grad", COEIT, "engineering", "Leadership, project management, and operations for engineers.", [
        "Engineering Manager",
        "Program Manager",
        "Operations Manager"
    ], [
        "Project management",
        "Leadership",
        "Finance for engineers",
        "Systems thinking"
    ]),
    p("syse-ms", "Systems Engineering", "M.S.", "grad", COEIT, "engineering", "Designing and integrating complex systems across their life cycle.", [
        "Systems Engineer",
        "Requirements Engineer",
        "Defense Systems Engineer"
    ], [
        "Requirements",
        "Modeling (SysML)",
        "Integration & test",
        "Risk"
    ]),
    p("ee-ms", "Electrical Engineering", "M.S.", "grad", COEIT, "engineering", "Communications, signal processing, photonics, and microelectronics.", [
        "Electrical Engineer",
        "Signal Processing Engineer",
        "RF Engineer",
        "Biomedical Imaging Engineer"
    ], [
        "Signal processing",
        "Circuit design",
        "MATLAB",
        "Communications"
    ]),
    p("me-ms", "Mechanical Engineering", "M.S.", "grad", COEIT, "engineering", "Advanced mechanics, thermal-fluids, and biomechanics research.", [
        "Research Engineer",
        "Biomechanics Engineer",
        "Design Engineer"
    ], [
        "Finite element analysis",
        "CFD",
        "Experimental methods"
    ]),
    p("cbe-ms", "Chemical and Biochemical Engineering", "M.S.", "grad", COEIT, "engineering", "Bioprocess engineering, biopharmaceuticals, and advanced materials.", [
        "Bioprocess Engineer",
        "Process Development Scientist",
        "Research Engineer"
    ], [
        "Bioprocessing",
        "Process modeling",
        "Lab research"
    ]),
    p("biotech-mps", "Biotechnology", "M.P.S.", "grad", CNMS, "life-science", "Science plus management for the biotech industry.", [
        "Biotech Project Manager",
        "Regulatory Affairs Specialist",
        "Quality Manager"
    ], [
        "Regulatory affairs",
        "Project management",
        "Bioprocess basics"
    ]),
    p("stat-ms", "Statistics", "M.S.", "grad", CNMS, "math", "Statistical theory and applied statistics, including biostatistics.", [
        "Statistician",
        "Biostatistician",
        "Data Scientist"
    ], [
        "Statistical modeling",
        "R / SAS",
        "Experimental design"
    ]),
    p("amath-ms", "Applied Mathematics", "M.S.", "grad", CNMS, "math", "Numerical analysis, differential equations, and mathematical modeling.", [
        "Applied Mathematician",
        "Quantitative Analyst",
        "Operations Research Analyst"
    ], [
        "Numerical methods",
        "Modeling",
        "Scientific computing"
    ]),
    p("gis-mps", "Geographic Information Systems", "M.P.S.", "grad", CAHSS, "social-science", "Professional GIS: spatial analysis, remote sensing, and geospatial programming.", [
        "GIS Analyst",
        "Geospatial Developer",
        "Remote Sensing Analyst"
    ], [
        "ArcGIS / QGIS",
        "Python for GIS",
        "Spatial databases"
    ]),
    p("io-mps", "Industrial/Organizational Psychology", "M.P.S.", "grad", CAHSS, "psychology", "Psychology applied to the workplace: selection, training, and organizational development.", [
        "I-O Psychology Consultant",
        "People Analytics Specialist",
        "Training & Development Manager"
    ], [
        "Assessment design",
        "People analytics",
        "Survey design",
        "Consulting"
    ]),
    p("mpp", "Public Policy", "M.P.P.", "grad", CAHSS, "social-science", "Policy analysis, evaluation, and management, with health and education tracks.", [
        "Policy Analyst",
        "Program Evaluator",
        "Government Analyst",
        "Nonprofit Director"
    ], [
        "Policy analysis",
        "Program evaluation",
        "Statistics",
        "Memo writing"
    ]),
    p("epa-ma", "Economic Policy Analysis", "M.A.", "grad", CAHSS, "social-science", "Applied economics and econometrics for public and private policy.", [
        "Economist",
        "Policy Analyst",
        "Research Analyst"
    ], [
        "Econometrics",
        "Stata / R",
        "Cost-benefit analysis"
    ]),
    p("soc-ma", "Applied Sociology", "M.A.", "grad", CAHSS, "social-science", "Sociological research applied to health, work, and communities.", [
        "Research Analyst",
        "Program Evaluator",
        "Community Health Researcher"
    ], [
        "Research design",
        "Statistics",
        "Qualitative methods"
    ]),
    p("mat", "Teaching", "M.A.T.", "grad", CAHSS, "education", "Teacher certification for early childhood, elementary, and secondary education.", [
        "K-12 Teacher",
        "STEM Teacher",
        "Instructional Coach"
    ], [
        "Lesson planning",
        "Classroom management",
        "Assessment"
    ]),
    p("icc-ma", "Intercultural Communication", "M.A.", "grad", CAHSS, "humanities", "Language, culture, and communication in global contexts.", [
        "International Program Manager",
        "Diversity Trainer",
        "Language Specialist"
    ], [
        "Intercultural communication",
        "Research",
        "Training design"
    ]),
    p("ttl-ma", "Texts, Technologies, and Literature", "M.A.", "grad", CAHSS, "humanities", "Literature and writing in a digital age.", [
        "Content Strategist",
        "Technical Writer",
        "Digital Humanities Specialist"
    ], [
        "Writing",
        "Digital tools",
        "Research"
    ]),
    p("idia-mfa", "Intermedia and Digital Arts", "M.F.A.", "grad", CAHSS, "arts", "Experimental art across animation, interactive media, and emerging technology.", [
        "Interactive Media Artist",
        "Creative Technologist",
        "Art Professor"
    ], [
        "Interactive media",
        "Animation",
        "Creative coding"
    ]),
    p("mgas-ma", "Management of Aging Services", "M.A.", "grad", ERICKSON, "health", "Leadership in the aging services industry.", [
        "Aging Services Executive",
        "Senior Living Administrator"
    ], [
        "Leadership",
        "Finance",
        "Policy"
    ]),
    // ---------- Doctoral ----------
    p("cs-phd", "Computer Science", "Ph.D.", "phd", COEIT, "computing", "Original research in AI, security, systems, and theory.", [
        "Research Scientist",
        "Professor",
        "AI Research Engineer"
    ], [
        "Research",
        "Publishing",
        "Advanced ML / systems"
    ]),
    p("hcc-phd", "Human-Centered Computing", "Ph.D.", "phd", COEIT, "computing", "Research on how people use and are affected by technology.", [
        "UX Research Scientist",
        "Professor",
        "Accessibility Researcher"
    ], [
        "Research methods",
        "Publishing",
        "Study design"
    ]),
    p("is-phd", "Information Systems", "Ph.D.", "phd", COEIT, "computing", "Research in data science, health informatics, and HCI.", [
        "Research Scientist",
        "Professor",
        "Health Informatics Researcher"
    ], [
        "Research",
        "Data science",
        "Publishing"
    ]),
    p("psyc-phd", "Human Services Psychology", "Ph.D.", "phd", CAHSS, "psychology", "Clinical, community, and behavioral medicine psychology research and practice.", [
        "Clinical Psychologist",
        "Health Psychologist",
        "Community Psychologist",
        "Professor"
    ], [
        "Clinical assessment",
        "Therapy",
        "Research",
        "Grant writing"
    ]),
    p("bio-phd", "Biological Sciences", "Ph.D.", "phd", CNMS, "life-science", "Research in molecular, cellular, and ecological biology.", [
        "Research Scientist",
        "Professor",
        "Biotech R&D Scientist"
    ], [
        "Research",
        "Publishing",
        "Grant writing"
    ]),
    p("pubpol-phd", "Public Policy", "Ph.D.", "phd", CAHSS, "social-science", "Research on policy design and evaluation.", [
        "Policy Researcher",
        "Professor",
        "Senior Government Analyst"
    ], [
        "Causal inference",
        "Research",
        "Publishing"
    ]),
    p("atph-phd", "Atmospheric Physics", "Ph.D.", "phd", CNMS, "physical-science", "Research on climate, aerosols, and remote sensing.", [
        "Atmospheric Scientist",
        "Climate Researcher",
        "NASA Research Scientist"
    ], [
        "Remote sensing",
        "Scientific computing",
        "Research"
    ]),
    p("llc-phd", "Language, Literacy and Culture", "Ph.D.", "phd", CAHSS, "education", "Interdisciplinary research on language, literacy, and culture in society.", [
        "Professor",
        "Education Researcher",
        "Policy Researcher"
    ], [
        "Qualitative research",
        "Theory",
        "Publishing"
    ]),
    p("aging-phd", "Gerontology", "Ph.D.", "phd", ERICKSON, "health", "Research on aging, offered with the University of Maryland, Baltimore.", [
        "Gerontology Researcher",
        "Professor",
        "Aging Policy Analyst"
    ], [
        "Research",
        "Epidemiology",
        "Policy"
    ])
];
const minors = [
    "Computer Science",
    "Information Systems",
    "Human-Centered Computing",
    "Cybersecurity",
    "Data Science",
    "Mathematics",
    "Statistics",
    "Physics",
    "Chemistry",
    "Biology",
    "Psychology",
    "Sociology",
    "Economics",
    "Political Science",
    "Philosophy",
    "Entrepreneurship",
    "Public Health",
    "Geography",
    "Media and Communication Studies",
    "Writing",
    "History",
    "Linguistics",
    "Gender, Women's, and Sexuality Studies",
    "Africana Studies",
    "Asian Studies",
    "Visual Arts",
    "Music",
    "Dance",
    "Theatre",
    "Education"
];
const focusAreas = [
    {
        id: "healthcare",
        label: "Healthcare & biomedical",
        icon: "🩺"
    },
    {
        id: "data-ai",
        label: "Data science & AI",
        icon: "🤖"
    },
    {
        id: "ux",
        label: "UX / human-centered design",
        icon: "🎨"
    },
    {
        id: "security",
        label: "Cybersecurity",
        icon: "🔐"
    },
    {
        id: "software",
        label: "Software & product",
        icon: "💻"
    },
    {
        id: "research",
        label: "Research & grad school",
        icon: "🔬"
    },
    {
        id: "clinical",
        label: "Clinical & counseling",
        icon: "🧠"
    },
    {
        id: "premed",
        label: "Pre-med / health professions",
        icon: "🏥"
    },
    {
        id: "policy",
        label: "Government & public policy",
        icon: "🏛️"
    },
    {
        id: "law",
        label: "Law & pre-law",
        icon: "⚖️"
    },
    {
        id: "business",
        label: "Business & entrepreneurship",
        icon: "📈"
    },
    {
        id: "finance",
        label: "Finance & economics",
        icon: "💵"
    },
    {
        id: "education",
        label: "Teaching & education",
        icon: "🍎"
    },
    {
        id: "environment",
        label: "Environment & sustainability",
        icon: "🌱"
    },
    {
        id: "media",
        label: "Media, arts & communication",
        icon: "🎬"
    },
    {
        id: "community",
        label: "Nonprofit & community impact",
        icon: "🤝"
    },
    {
        id: "hardware",
        label: "Hardware, robotics & devices",
        icon: "🔧"
    },
    {
        id: "global",
        label: "International & global",
        icon: "🌍"
    }
];
const experienceOptions = [
    "None yet, just starting",
    "Personal projects",
    "Club or organization member",
    "Leadership role",
    "Part-time job",
    "Internship",
    "Undergraduate research",
    "Volunteering",
    "Hackathon",
    "Teaching or tutoring"
];
const levelLabels = {
    undergrad: "Undergraduate",
    grad: "Master's",
    phd: "Doctoral"
};
const yearsByLevel = {
    undergrad: [
        "Freshman",
        "Sophomore",
        "Junior",
        "Senior"
    ],
    grad: [
        "First year",
        "Second year"
    ],
    phd: [
        "Year 1",
        "Year 2",
        "Year 3",
        "Year 4",
        "Year 5"
    ]
};
function getProgram(id) {
    return programs.find((x)=>x.id === id);
}
const colleges = Array.from(new Set(programs.map((x)=>x.college)));
const areas = [
    "STEM",
    "Arts & Humanities",
    "Social & Behavioral Sciences",
    "Health & Human Services",
    "Business",
    "Education"
];
const familyArea = {
    computing: "STEM",
    engineering: "STEM",
    "life-science": "STEM",
    "physical-science": "STEM",
    math: "STEM",
    "social-science": "Social & Behavioral Sciences",
    psychology: "Social & Behavioral Sciences",
    humanities: "Arts & Humanities",
    arts: "Arts & Humanities",
    health: "Health & Human Services",
    business: "Business",
    education: "Education"
};
function areaOf(p) {
    return familyArea[p.family];
}
}),
"[project]/lib/plan.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Plan types + the built-in (no-AI) planner. The AI route in app/api/plan returns the same shape.
__turbopack_context__.s([
    "PlanSchema",
    ()=>PlanSchema,
    "ProfileSchema",
    ()=>ProfileSchema,
    "RESOURCE_LINKS",
    ()=>RESOURCE_LINKS,
    "buildBuiltinPlan",
    ()=>buildBuiltinPlan,
    "finalizePlan",
    ()=>finalizePlan,
    "isAllowedUrl",
    ()=>isAllowedUrl,
    "isJobTitle",
    ()=>isJobTitle,
    "itemKinds",
    ()=>itemKinds,
    "usajobsSearchUrl",
    ()=>usajobsSearchUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/programs.ts [app-ssr] (ecmascript)");
;
;
const itemKinds = [
    "Class",
    "Project",
    "Experience",
    "Internship",
    "Skill",
    "Career"
];
const ProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    level: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "undergrad",
        "grad",
        "phd"
    ]),
    programIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1).max(2),
    minors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(3),
    focusIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(4),
    customFocus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200),
    careerGoal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(300),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    experience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500)
});
const PlanSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    headline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    careerTargets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        why: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        searchKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    keySkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    years: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(itemKinds),
            detail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        resources: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            why: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    }))
});
function finalizePlan(body, generatedBy) {
    const id = `p${Date.now().toString(36)}`;
    return {
        ...body,
        id,
        createdAt: new Date().toISOString(),
        generatedBy,
        years: body.years.map((y, yi)=>({
                ...y,
                items: y.items.map((it, ii)=>({
                        ...it,
                        id: `${id}-y${yi}-i${ii}`
                    })),
                resources: y.resources.filter((r)=>isAllowedUrl(r.url))
            }))
    };
}
const RESOURCE_LINKS = {
    careerCenter: {
        name: "UMBC Career Center & Handshake",
        url: "https://careers.umbc.edu"
    },
    research: {
        name: "UMBC Undergraduate Research (URCAD)",
        url: "https://ur.umbc.edu"
    },
    shriver: {
        name: "Shriver Center (internships & service)",
        url: "https://shriver.umbc.edu"
    },
    catalog: {
        name: "UMBC Catalog (official requirements)",
        url: "https://catalog.umbc.edu"
    },
    clubs: {
        name: "myUMBC Groups (clubs & orgs)",
        url: "https://my.umbc.edu/groups"
    },
    gradSchool: {
        name: "UMBC Graduate School",
        url: "https://gradschool.umbc.edu"
    },
    hackumbc: {
        name: "hackUMBC",
        url: "https://hackumbc.org"
    },
    ooh: {
        name: "BLS Occupational Outlook Handbook",
        url: "https://www.bls.gov/ooh/"
    },
    onet: {
        name: "O*NET OnLine career explorer",
        url: "https://www.onetonline.org"
    },
    usajobs: {
        name: "USAJOBS (federal jobs & internships)",
        url: "https://www.usajobs.gov"
    },
    pathways: {
        name: "Federal Pathways internships",
        url: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/students/"
    }
};
const ALLOWED_HOSTS = [
    "umbc.edu",
    "hackumbc.org",
    "bls.gov",
    "onetonline.org",
    "usajobs.gov",
    "nih.gov",
    "nsf.gov",
    "apa.org",
    "aamc.org",
    "kaggle.com",
    "github.com"
];
function isAllowedUrl(url) {
    try {
        const h = new URL(url).hostname;
        return url.startsWith("https://") && ALLOWED_HOSTS.some((a)=>h === a || h.endsWith("." + a));
    } catch  {
        return false;
    }
}
function usajobsSearchUrl(keyword) {
    return `https://www.usajobs.gov/Search/Results?k=${encodeURIComponent(keyword)}`;
}
const it = (kind, title, detail)=>({
        kind,
        title,
        detail
    });
// What students in each family of majors typically do at each stage.
const familyStages = {
    computing: [
        [
            it("Class", "Intro programming sequence (e.g. CMSC 201/202)", "Build the foundation every later course assumes."),
            it("Skill", "Set up GitHub and commit weekly", "Employers look at activity; small consistent commits count."),
            it("Experience", "Attend hackUMBC or a club build night", "Low-pressure way to ship something with a team.")
        ],
        [
            it("Class", "Data structures & discrete math", "Core for technical interviews and upper-level electives."),
            it("Experience", "Join a club project team or research group", "Team experience is the #1 thing internship interviewers ask about."),
            it("Career", "Get your résumé reviewed at the Career Center", "Aim for one page with 2-3 projects.")
        ],
        [
            it("Internship", "Apply to 20+ summer internships (Aug-Oct)", "Big companies and federal programs recruit early in the fall."),
            it("Skill", "Weekly technical interview practice", "Two problems a week beats cramming."),
            it("Class", "Upper-level electives in your focus area", "Pick the electives that match your target career.")
        ],
        [
            it("Career", "Apply to full-time roles or grad school in the fall", "Most offers for new grads go out Oct-Feb."),
            it("Project", "Capstone or portfolio centerpiece", "One polished project you can demo in 2 minutes."),
            it("Experience", "Mentor a first-year student", "Leadership stories strengthen interviews.")
        ]
    ],
    engineering: [
        [
            it("Class", "Calculus, physics, and intro engineering design", "These gate most sophomore engineering courses."),
            it("Experience", "Join an engineering team (robotics, SAE-style, EWB)", "Hands-on building is what employers look for."),
            it("Skill", "Learn CAD or a programming language for your field", "SolidWorks, MATLAB, or C are common starting points.")
        ],
        [
            it("Class", "Core engineering sciences (statics, circuits, thermo)", "Keep your GPA strong here; it matters for co-ops."),
            it("Career", "Build a résumé and project portfolio", "Photos and short write-ups of what you built."),
            it("Internship", "Apply for co-ops or summer engineering internships", "Defense, energy, and med-device companies hire sophomores and juniors.")
        ],
        [
            it("Class", "Technical electives + lab courses", "Choose electives aligned with your target industry."),
            it("Career", "Consider the FE exam timeline", "Many engineers take the FE exam near graduation."),
            it("Experience", "Research with a faculty lab", "Great if you are considering grad school.")
        ],
        [
            it("Project", "Senior design capstone", "Treat it like your first job: document everything."),
            it("Career", "Apply to full-time roles (fall)", "Use career fairs and your internship network."),
            it("Skill", "Professional communication & design reviews", "Practice presenting technical trade-offs.")
        ]
    ],
    "life-science": [
        [
            it("Class", "Intro biology and chemistry sequence", "These are prerequisites for nearly everything else."),
            it("Skill", "Learn to read a research paper", "Start with review articles in your interest area."),
            it("Career", "Email 3 faculty about their research", "Short, specific emails get replies.")
        ],
        [
            it("Class", "Genetics, cell biology, or organic chemistry", "The core of the major; form a study group."),
            it("Experience", "Join a research lab", "Commit 8-10 hrs/week for at least two semesters."),
            it("Skill", "Learn basic R or Python for data", "Biology is increasingly computational.")
        ],
        [
            it("Internship", "Apply to summer research programs (REUs, NIH SIP)", "Deadlines are often December-February."),
            it("Experience", "Present a poster at URCAD", "UMBC's undergraduate research showcase each spring."),
            it("Class", "Upper-level lab course in your focus", "Builds techniques you can list on your résumé.")
        ],
        [
            it("Project", "Honors thesis or independent research", "A strong signal for grad and professional schools."),
            it("Career", "Apply to grad school, professional school, or industry roles", "Start applications the summer before."),
            it("Career", "Ask your research mentor for a recommendation letter", "Give them 4+ weeks and your résumé.")
        ]
    ],
    "physical-science": [
        [
            it("Class", "Calculus and intro sequence for the major", "Math fluency makes everything else easier."),
            it("Skill", "Python for scientific computing", "NumPy and plotting show up in every lab."),
            it("Experience", "Join the department club", "Meet upper-level students and faculty.")
        ],
        [
            it("Class", "Core major courses + first lab-intensive course", "Keep a lab notebook you'd be proud to show."),
            it("Experience", "Start undergraduate research", "Ask faculty whose papers interest you."),
            it("Career", "Build a résumé with lab skills", "List instruments and methods specifically.")
        ],
        [
            it("Internship", "Apply to REUs, NASA, NIST, or industry internships", "Many deadlines are in the winter."),
            it("Experience", "Present research at URCAD or a conference", "Practice explaining your work to non-experts."),
            it("Class", "Advanced electives aligned with your goal", "Choose depth over breadth now.")
        ],
        [
            it("Project", "Senior research project or thesis", "Aim for a result you can present."),
            it("Career", "Apply to grad programs or jobs", "Research experience is key for both."),
            it("Career", "Line up recommendation letters", "Ask early; share your goals.")
        ]
    ],
    math: [
        [
            it("Class", "Calculus sequence and intro proofs", "Proof writing is the big shift from high school math."),
            it("Skill", "Learn Python or R", "Pair math with computing for more career options."),
            it("Experience", "Join a math or actuarial club", "Find study partners for tougher courses.")
        ],
        [
            it("Class", "Linear algebra and probability", "The two most career-relevant math courses."),
            it("Experience", "Try a modeling competition or research project", "Great résumé material."),
            it("Career", "Explore actuarial, data, teaching, and research paths", "Talk to alumni in each.")
        ],
        [
            it("Internship", "Apply to analytics, actuarial, or research internships", "Actuarial exams (P/FM) help for insurance roles."),
            it("Class", "Statistics, numerical methods, or optimization electives", "Match electives to your target career."),
            it("Project", "Data analysis project with a real dataset", "Publish the notebook on GitHub.")
        ],
        [
            it("Career", "Apply to jobs or grad school", "Quantitative roles recruit in the fall."),
            it("Project", "Senior capstone or independent study", "Showcase applied math."),
            it("Experience", "Tutor at the Learning Resources Center", "Teaching deepens mastery.")
        ]
    ],
    "social-science": [
        [
            it("Class", "Intro courses and a research methods course", "Methods classes unlock research roles."),
            it("Experience", "Join a club tied to your interest (debate, Model UN, advocacy)", "Builds public speaking and network."),
            it("Skill", "Build strong academic writing habits", "Visit the Writing Center with your first big paper.")
        ],
        [
            it("Class", "Statistics for social science", "Quantitative skills set you apart."),
            it("Experience", "Volunteer or work with a local organization", "The Shriver Center connects students to community partners."),
            it("Career", "Informational interviews with 3 professionals", "Ask what they wish they knew as students.")
        ],
        [
            it("Internship", "Internship in government, nonprofit, or research", "Consider Annapolis, D.C., or Baltimore City programs."),
            it("Experience", "Research assistant for a faculty project", "Great for grad school and policy careers."),
            it("Class", "Advanced seminar in your focus", "Write a paper you can use as a writing sample.")
        ],
        [
            it("Project", "Senior thesis or capstone research", "Doubles as a writing sample for jobs and grad school."),
            it("Career", "Apply to jobs, fellowships, or grad/law school", "Many fellowships have fall deadlines."),
            it("Career", "Prepare for the GRE or LSAT if needed", "Plan test dates around application deadlines.")
        ]
    ],
    psychology: [
        [
            it("Class", "Intro Psychology and Research Methods", "Research methods is the gateway to upper-level courses."),
            it("Experience", "Join Psychology Club or Psi Chi", "Meet students who are already in labs."),
            it("Skill", "Learn APA-style writing", "You'll use it in nearly every psychology course.")
        ],
        [
            it("Class", "Statistics for psychology", "Needed for research positions and grad school."),
            it("Experience", "Join a faculty research lab as an RA", "Most psychology grad programs expect research experience."),
            it("Experience", "Volunteer in a helping role (crisis line, mentoring)", "Shows commitment to working with people.")
        ],
        [
            it("Internship", "Clinical or applied internship / practicum", "Hospitals, schools, and community mental-health settings."),
            it("Class", "Upper-level electives in your specialty", "e.g., abnormal, developmental, health, or I-O psychology."),
            it("Experience", "Present research at URCAD", "Posters are a strong grad-school signal.")
        ],
        [
            it("Project", "Honors thesis or independent study", "Especially important for Ph.D. applicants."),
            it("Career", "Apply to grad programs (M.A., M.S.W., Psy.D., Ph.D.) or jobs", "Deadlines are often December."),
            it("Career", "Prepare for the GRE if your programs require it", "Many programs are now GRE-optional; check each.")
        ]
    ],
    humanities: [
        [
            it("Class", "Intro courses + a writing-intensive course", "Writing is the core professional skill here."),
            it("Experience", "Join a publication, club, or cultural organization", "Build a portfolio from day one."),
            it("Skill", "Start a writing or content portfolio", "Save your best work in one place.")
        ],
        [
            it("Class", "Language study or digital humanities course", "Languages and digital skills widen your options."),
            it("Experience", "Work or volunteer with a museum, archive, or nonprofit", "Hands-on work makes your degree concrete."),
            it("Career", "Explore careers: publishing, law, UX writing, education", "Talk to alumni via LinkedIn.")
        ],
        [
            it("Internship", "Internship in communications, publishing, education, or cultural orgs", "Many are paid through federal or campus programs."),
            it("Class", "Advanced seminar in your focus area", "Produce a strong writing sample."),
            it("Experience", "Study abroad or a global program", "Especially valuable for language majors.")
        ],
        [
            it("Project", "Senior thesis, portfolio, or public project", "Show employers what you can create."),
            it("Career", "Apply to jobs, fellowships, or grad/law school", "Start in early fall."),
            it("Skill", "Polish your portfolio website", "A simple site with your best 5 pieces.")
        ]
    ],
    arts: [
        [
            it("Class", "Foundation studio or performance courses", "Build technique and critique skills."),
            it("Experience", "Show or perform your work on campus", "Get comfortable sharing work early."),
            it("Skill", "Start documenting your work", "Photograph or record everything you make.")
        ],
        [
            it("Class", "Intermediate studio + digital tools course", "Digital skills open design and media careers."),
            it("Experience", "Join or start a collaborative project", "Collaborations lead to references and credits."),
            it("Career", "Build an online portfolio", "Quality over quantity.")
        ],
        [
            it("Internship", "Internship at a studio, agency, theater, or arts org", "Baltimore has a strong arts and design scene."),
            it("Experience", "Enter a juried show, festival, or competition", "Deadlines are listed by arts councils."),
            it("Class", "Advanced courses in your specialty", "Develop a recognizable body of work.")
        ],
        [
            it("Project", "Senior exhibition, recital, or capstone production", "Treat it as a professional launch."),
            it("Career", "Apply to jobs, residencies, or M.F.A. programs", "Portfolio deadlines are often in winter."),
            it("Skill", "Learn freelancing basics: contracts & pricing", "Many arts careers include freelance work.")
        ]
    ],
    health: [
        [
            it("Class", "Intro courses in health, biology, or social systems", "Check prerequisites for your target program."),
            it("Experience", "Volunteer in a health or community setting", "Direct patient or client contact is valued."),
            it("Career", "Shadow a professional in your target role", "Confirms your interest early.")
        ],
        [
            it("Class", "Core major courses + statistics", "Data skills matter across health careers."),
            it("Experience", "Get certified (CPR, EMT, CNA, Mental Health First Aid)", "Opens paid clinical or community work."),
            it("Career", "Meet with pre-health or career advising", "Map out prerequisites and timelines.")
        ],
        [
            it("Internship", "Field placement or health internship", "Hospitals, public health departments, and nonprofits."),
            it("Experience", "Leadership role in a health-related organization", "Shows initiative and teamwork."),
            it("Class", "Upper-level courses in policy, management, or practice", "Align with your target role.")
        ],
        [
            it("Project", "Capstone or community health project", "Measure an outcome you can talk about."),
            it("Career", "Apply to jobs, licensure steps, or graduate programs", "Check licensure requirements for your state."),
            it("Career", "Secure recommendation letters", "Supervisors from placements are ideal.")
        ]
    ],
    business: [
        [
            it("Class", "Intro economics, accounting, and business courses", "Foundations for everything else."),
            it("Experience", "Join a business, finance, or entrepreneurship club", "Case competitions build real skills."),
            it("Skill", "Get fluent in Excel", "Pivot tables, lookups, and charts.")
        ],
        [
            it("Class", "Statistics and finance/management core", "Quantitative confidence stands out."),
            it("Experience", "Start or join a small venture or case competition", "UMBC's entrepreneurship programs can help."),
            it("Career", "Build your LinkedIn and network with alumni", "Aim for 2 coffee chats a month.")
        ],
        [
            it("Internship", "Summer internship in finance, consulting, or tech", "Many firms recruit juniors in the fall."),
            it("Skill", "Learn SQL or a BI tool (Tableau, Power BI)", "Data skills are in demand in every business role."),
            it("Class", "Electives in your focus area", "Finance, analytics, or management.")
        ],
        [
            it("Career", "Convert your internship or apply for full-time roles", "Return offers are the most common path."),
            it("Project", "Capstone or consulting project with a real client", "Great interview story."),
            it("Career", "Consider certifications (e.g., CAPM, SHRM, CFA Level I)", "Pick one aligned with your role.")
        ]
    ],
    education: [
        [
            it("Class", "Intro education and content-area courses", "Check certification course requirements early."),
            it("Experience", "Tutor or mentor students", "The Learning Resources Center and local schools need tutors."),
            it("Career", "Decide on grade level and subject area", "Observe classrooms at different levels.")
        ],
        [
            it("Class", "Educational psychology and methods courses", "Learn how students learn."),
            it("Experience", "Classroom observation hours", "Required for most certification pathways."),
            it("Skill", "Build lesson-planning skills", "Save your best lesson plans in a portfolio.")
        ],
        [
            it("Internship", "Student teaching / internship placement", "Your most important experience; plan the timing."),
            it("Career", "Prepare for Praxis or other licensure exams", "Schedule them before your final year."),
            it("Class", "Content-area methods + inclusive teaching", "Serving all learners is essential.")
        ],
        [
            it("Career", "Apply for teaching positions (spring hiring season)", "Maryland districts hire heavily in spring."),
            it("Project", "Teaching portfolio with evidence of student learning", "Used in interviews."),
            it("Experience", "Join a professional association", "Find mentors and job leads.")
        ]
    ]
};
// Focus-area add-ons by stage: project ideas, internships, and skills specific to the student's direction.
const focusModules = {
    healthcare: [
        [
            it("Skill", "Learn basic medical terminology & HIPAA", "Speaks the language of healthcare teams.")
        ],
        [
            it("Project", "Health data project using a public dataset", "e.g., analyze CDC or CMS data on a health question you care about.")
        ],
        [
            it("Internship", "Health-sector internship (Johns Hopkins, UMMS, NIH, FDA, CMS)", "Maryland has one of the densest health ecosystems in the U.S.")
        ],
        [
            it("Project", "Capstone with a clinical or public-health partner", "Solve a real problem for patients or providers.")
        ]
    ],
    "data-ai": [
        [
            it("Skill", "Python + pandas fundamentals", "The toolkit for nearly all data work.")
        ],
        [
            it("Project", "Kaggle-style analysis with a clear question", "Publish the notebook and a short write-up.")
        ],
        [
            it("Internship", "Data analytics or ML internship", "Also look at federal data roles (Census Bureau, SSA, NIH).")
        ],
        [
            it("Project", "End-to-end ML project deployed as a web app", "Shows you can go from data to a working product.")
        ]
    ],
    ux: [
        [
            it("Skill", "Learn Figma and basic design principles", "Free tutorials + redesign an app you use daily.")
        ],
        [
            it("Project", "Usability test of a campus website or app", "Recruit 5 students, write up findings and a redesign.")
        ],
        [
            it("Internship", "UX research or design internship", "Build a case-study portfolio first.")
        ],
        [
            it("Project", "Accessibility-focused design case study", "Apply WCAG guidelines; a strong differentiator.")
        ]
    ],
    security: [
        [
            it("Experience", "Join the cybersecurity club and play CTFs", "Capture-the-flag events build practical skills.")
        ],
        [
            it("Skill", "Networking and Linux fundamentals", "Prep for Security+ if you want a certification.")
        ],
        [
            it("Internship", "Security internship (federal, defense, or industry)", "Many Maryland roles require U.S. citizenship and clearance.")
        ],
        [
            it("Project", "Home lab or vulnerability research write-up", "Document what you broke and how you'd defend it.")
        ]
    ],
    software: [
        [
            it("Project", "Build and ship a small web app", "Something a friend actually uses.")
        ],
        [
            it("Project", "Team project with real users (club or hackathon)", "Practice code review and Git workflows.")
        ],
        [
            it("Internship", "Software engineering internship", "Apply broadly: big tech, startups, government, and banks.")
        ],
        [
            it("Project", "Open-source contribution", "Start with documentation or good-first-issues.")
        ]
    ],
    research: [
        [
            it("Experience", "Attend a research talk or lab meeting", "See what research actually looks like.")
        ],
        [
            it("Experience", "Join a lab and aim for a semester-long project", "Ask for a defined question you can own.")
        ],
        [
            it("Internship", "Summer research program (REU / NIH / national labs)", "Apply broadly; acceptance rates vary.")
        ],
        [
            it("Project", "First-author poster or paper", "Present at URCAD or a national conference.")
        ]
    ],
    clinical: [
        [
            it("Experience", "Volunteer with a crisis line or peer support program", "Builds listening skills and confirms fit.")
        ],
        [
            it("Experience", "Research assistant in a clinical psychology lab", "Critical for clinical Ph.D. applications.")
        ],
        [
            it("Internship", "Practicum at a hospital, clinic, or community mental-health center", "Ask your department about approved sites.")
        ],
        [
            it("Career", "Compare paths: Ph.D., Psy.D., M.S.W., LPC master's", "Each leads to licensure differently; talk to professionals in each.")
        ]
    ],
    premed: [
        [
            it("Career", "Meet with pre-health advising", "Map prerequisites and a timeline.")
        ],
        [
            it("Experience", "Clinical hours (scribe, EMT, CNA, hospital volunteer)", "Most programs expect hundreds of hours.")
        ],
        [
            it("Career", "MCAT / GRE / DAT prep plan", "Give yourself 3-4 months of focused study.")
        ],
        [
            it("Career", "Primary applications (AMCAS / CASPA etc.)", "Submit early in the cycle.")
        ]
    ],
    policy: [
        [
            it("Experience", "Attend a city council or state legislative hearing", "Annapolis is close; watch policy happen.")
        ],
        [
            it("Project", "Write a 2-page policy memo on an issue you care about", "A great writing sample.")
        ],
        [
            it("Internship", "Legislative or agency internship (Annapolis, D.C., federal)", "Also look at federal Pathways internships.")
        ],
        [
            it("Project", "Program evaluation or policy research capstone", "Use real data from a public agency.")
        ]
    ],
    law: [
        [
            it("Experience", "Join mock trial, debate, or pre-law society", "Builds argumentation and public speaking.")
        ],
        [
            it("Career", "Shadow or interview attorneys in 2 practice areas", "Find the area that fits you.")
        ],
        [
            it("Internship", "Internship at a law office, court, or legal nonprofit", "Paralegal-style work is valuable.")
        ],
        [
            it("Career", "LSAT prep and law school applications", "Apply in the fall for the next year.")
        ]
    ],
    business: [
        [
            it("Experience", "Enter a pitch or case competition", "Great practice working under pressure.")
        ],
        [
            it("Project", "Launch a small side venture or campus service", "Track revenue or users.")
        ],
        [
            it("Internship", "Business, consulting, or startup internship", "Startups give broad responsibility early.")
        ],
        [
            it("Project", "Business plan or consulting project for a real client", "Use it as a portfolio piece.")
        ]
    ],
    finance: [
        [
            it("Skill", "Personal finance + Excel modeling basics", "Build a simple budget and investment model.")
        ],
        [
            it("Experience", "Join an investment or finance club", "Manage a paper portfolio.")
        ],
        [
            it("Internship", "Finance internship (banking, asset management, federal agencies)", "T. Rowe Price and other Baltimore firms recruit locally.")
        ],
        [
            it("Career", "Pursue a certification (e.g., CFA Level I, FMVA)", "Signals commitment.")
        ]
    ],
    education: [
        [
            it("Experience", "Tutor or mentor K-12 students", "Local schools and after-school programs need volunteers.")
        ],
        [
            it("Project", "Design a mini-lesson or learning resource", "Test it with real learners.")
        ],
        [
            it("Internship", "Education internship or summer teaching program", "Also consider educational technology companies.")
        ],
        [
            it("Career", "Certification and licensure planning", "Check Maryland State Department of Education requirements.")
        ]
    ],
    environment: [
        [
            it("Experience", "Join a sustainability or environmental club", "Campus projects make great résumé lines.")
        ],
        [
            it("Skill", "Learn GIS basics", "Mapping skills are used across environmental careers.")
        ],
        [
            it("Internship", "Environmental internship (EPA, NOAA, DNR, nonprofits)", "The Chesapeake Bay region has many opportunities.")
        ],
        [
            it("Project", "Field or data project on a local environmental issue", "Present findings to a community group.")
        ]
    ],
    media: [
        [
            it("Experience", "Write, film, or design for a campus outlet", "Get published early.")
        ],
        [
            it("Project", "Create a content series or short film", "Show consistency and voice.")
        ],
        [
            it("Internship", "Media, marketing, or communications internship", "Agencies, newsrooms, museums, and nonprofits.")
        ],
        [
            it("Project", "Portfolio website with case studies", "Explain your process, not just the result.")
        ]
    ],
    community: [
        [
            it("Experience", "Volunteer through the Shriver Center", "Find a cause you care about.")
        ],
        [
            it("Project", "Organize a small community event or drive", "Leadership plus measurable impact.")
        ],
        [
            it("Internship", "Nonprofit internship or AmeriCorps program", "Learn how nonprofits run.")
        ],
        [
            it("Project", "Community-based capstone with a local partner", "Evaluate the impact you made.")
        ]
    ],
    hardware: [
        [
            it("Project", "Arduino or Raspberry Pi mini-project", "Start with a sensor that measures something useful.")
        ],
        [
            it("Experience", "Join robotics or a maker space team", "Build with others.")
        ],
        [
            it("Internship", "Hardware, robotics, or medical device internship", "Maryland has strong defense and med-device employers.")
        ],
        [
            it("Project", "Prototype a device that solves a real problem", "Document design iterations with photos.")
        ]
    ],
    global: [
        [
            it("Skill", "Commit to a language sequence", "Consistency matters more than speed.")
        ],
        [
            it("Experience", "Study abroad or a virtual exchange", "Plan finances and credits early.")
        ],
        [
            it("Internship", "Internship with an international org or embassy", "Also look at State Department student programs.")
        ],
        [
            it("Career", "Apply to fellowships (Fulbright, Gilman, Boren)", "Prestigious scholarships advising can help.")
        ]
    ]
};
function stageFor(yearIndex, total) {
    if (total <= 2) return yearIndex === 0 ? 1 : 3;
    const r = yearIndex / (total - 1);
    return r < 0.25 ? 0 : r < 0.5 ? 1 : r < 0.85 ? 2 : 3;
}
const themes = [
    "Explore & build foundations",
    "Build skills & experience",
    "Get real-world experience",
    "Launch your career"
];
function buildBuiltinPlan(profile) {
    const progs = profile.programIds.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProgram"]).filter(Boolean);
    const main = progs[0];
    const yearNames = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yearsByLevel"][profile.level];
    const focus = profile.focusIds.map((f)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusAreas"].find((x)=>x.id === f)).filter(Boolean);
    const goal = profile.careerGoal.trim() && profile.careerGoal !== "Not sure yet" ? profile.careerGoal.trim() : main.careers[0];
    const levelName = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelLabels"][profile.level];
    const targets = careerTargetsFor(profile, main, goal);
    const role = targets[0]?.title ?? main.careers[0];
    const years = yearNames.map((name, yi)=>{
        const stage = stageFor(yi, yearNames.length);
        const items = [];
        if (profile.level === "phd") {
            items.push(...phdStage(yi, main));
        } else {
            items.push(...familyStages[main.family][stage]);
            // Second major adds its core courses.
            if (progs[1]) items.push(it("Class", `${progs[1].name}: core ${stage < 2 ? "intro" : "upper-level"} requirement`, "Plan double-major courses with both advisors so nothing conflicts."));
        }
        for (const f of profile.focusIds)focusModules[f]?.[stage]?.forEach((x)=>items.push(x));
        // Minors: one course per year until finished.
        profile.minors.forEach((m, mi)=>{
            if (yi <= 2 && (yi + mi) % 2 === 0) items.push(it("Class", `${m} minor course`, `Space minor courses out so they don't crowd your ${main.name} requirements.`));
        });
        if (profile.customFocus && stage >= 1) {
            items.push(it("Project", `Project that combines ${main.name} with ${profile.customFocus}`, "Pick a small, specific problem where both fields meet."));
        }
        if (stage === 2) items.push(it("Career", `Informational interviews with 2 people working as a ${role}`, "Ask how they got there and what skills matter most."));
        const resources = [];
        const R = RESOURCE_LINKS;
        if (stage === 0) resources.push({
            ...R.catalog,
            why: "Check exact course requirements for your program."
        }, {
            ...R.clubs,
            why: "Find clubs related to your goals."
        });
        if (stage === 1) resources.push({
            ...R.careerCenter,
            why: "Résumé reviews and Handshake job listings."
        }, {
            ...R.research,
            why: "Find research opportunities and URCAD."
        });
        if (stage === 2) resources.push({
            ...R.shriver,
            why: "Internships, service-learning, and community placements."
        }, {
            ...R.pathways,
            why: "Paid federal internships for students."
        });
        if (stage === 3) resources.push({
            ...R.usajobs,
            why: "Federal roles related to your goal."
        }, {
            ...R.ooh,
            why: "Salary and job-outlook data."
        });
        if (profile.level !== "undergrad" && yi === 0) resources.push({
            ...R.gradSchool,
            why: "Funding, policies, and professional development."
        });
        return {
            label: `Year ${yi + 1} · ${name}`,
            theme: themes[stage],
            items: dedupe(items).slice(0, 10),
            resources
        };
    });
    const focusText = [
        ...focus.map((f)=>f.label.toLowerCase()),
        profile.customFocus
    ].filter(Boolean).join(", ");
    return {
        headline: `${progs.map((x)=>`${x.name} (${x.degree})`).join(" + ")} → ${role}`,
        summary: `A ${yearNames.length}-year ${levelName.toLowerCase()} plan toward ${isJobTitle(goal) ? goal : `your goal: “${goal}”`}${focusText ? `, focused on ${focusText}` : ""}${profile.minors.length ? `, with a minor in ${profile.minors.join(" and ")}` : ""}. Built from typical UMBC pathways; confirm course requirements with your advisor.`,
        careerTargets: targets,
        keySkills: uniq([
            ...main.skills,
            ...progs[1]?.skills ?? []
        ]).slice(0, 8),
        years
    };
}
// Job titles that match each focus area; used when the student's goal is a sentence, not a title.
const focusJobs = {
    healthcare: {
        title: "Health Informatics Specialist",
        keyword: "health informatics",
        hint: /health|medical|biomed|clinical/i
    },
    "data-ai": {
        title: "Data Scientist",
        keyword: "data scientist",
        hint: /data|machine learning|ml|analytics|statistic/i
    },
    ux: {
        title: "UX Researcher",
        keyword: "user experience",
        hint: /ux|design|user/i
    },
    security: {
        title: "Cybersecurity Specialist",
        keyword: "cybersecurity",
        hint: /secur|cyber/i
    },
    software: {
        title: "Software Developer",
        keyword: "software developer",
        hint: /software|developer/i
    },
    research: {
        title: "Research Scientist",
        keyword: "research scientist",
        hint: /research/i
    },
    clinical: {
        title: "Clinical Psychologist",
        keyword: "clinical psychologist",
        hint: /clinical|therap|counsel|social worker/i
    },
    premed: {
        title: "Medical Officer",
        keyword: "medical officer",
        hint: /physician|pre-med|medic/i
    },
    policy: {
        title: "Policy Analyst",
        keyword: "policy analyst",
        hint: /policy|government|legislat/i
    },
    law: {
        title: "Paralegal / Legal Specialist",
        keyword: "paralegal",
        hint: /law|attorney|legal/i
    },
    business: {
        title: "Management Analyst",
        keyword: "management analyst",
        hint: /business|manag|consult/i
    },
    finance: {
        title: "Financial Analyst",
        keyword: "financial analyst",
        hint: /financ|invest|bank/i
    },
    education: {
        title: "Education Program Specialist",
        keyword: "education specialist",
        hint: /teach|educat/i
    },
    environment: {
        title: "Environmental Scientist",
        keyword: "environmental scientist",
        hint: /environment|climate|sustain/i
    },
    media: {
        title: "Public Affairs Specialist",
        keyword: "public affairs",
        hint: /media|communicat|writ|design/i
    },
    community: {
        title: "Program Coordinator",
        keyword: "program coordinator",
        hint: /community|nonprofit|advoca/i
    },
    hardware: {
        title: "Electronics Engineer",
        keyword: "electronics engineer",
        hint: /hardware|device|robot|embedded/i
    },
    global: {
        title: "Foreign Affairs Officer",
        keyword: "foreign affairs",
        hint: /international|global|foreign/i
    }
};
function isJobTitle(goal) {
    return goal.trim().split(/\s+/).length <= 5 && goal !== "Not sure yet";
}
// A goal like "Clinical Psychologist" is already a job title; a sentence becomes titles from the focus areas.
function careerTargetsFor(profile, main, goal) {
    const clean = (t)=>t.replace(/\(.*?\)/g, "").trim();
    const isTitle = isJobTitle(goal);
    const out = [];
    if (isTitle) out.push({
        title: goal,
        why: "Your stated goal.",
        searchKeyword: clean(goal)
    });
    for (const f of profile.focusIds){
        const j = focusJobs[f];
        if (!j) continue;
        // Prefer a career from the student's own program that fits this focus (e.g. CS + healthcare -> Health Informatics Developer).
        const fromProgram = main.careers.find((c)=>j.hint.test(c) && !out.some((o)=>o.title === c));
        const title = fromProgram ?? j.title;
        if (!out.some((o)=>o.title === title)) {
            out.push({
                title,
                why: `Combines ${main.name} with your ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusAreas"].find((x)=>x.id === f)?.label.toLowerCase()} focus.`,
                searchKeyword: fromProgram ? clean(fromProgram) : j.keyword
            });
        }
    }
    for (const c of main.careers){
        if (out.length >= 4) break;
        if (!out.some((o)=>o.title === c)) out.push({
            title: c,
            why: `A common path for ${main.name} graduates.`,
            searchKeyword: clean(c)
        });
    }
    return out.slice(0, 4);
}
function phdStage(yi, main) {
    const s = [
        [
            it("Class", "Core doctoral coursework", "Build the theory and methods your research needs."),
            it("Experience", "Lab rotations or meet with 3+ potential advisors", "Fit with your advisor matters most."),
            it("Career", "Apply for fellowships (e.g., NSF GRFP)", "Fall deadlines; ask for feedback on drafts.")
        ],
        [
            it("Class", "Finish coursework and qualifying exam prep", "Form a study group with your cohort."),
            it("Project", `First research project in ${main.name}`, "Aim for a conference paper or poster."),
            it("Skill", "Scientific writing and peer review", "Offer to review for workshops.")
        ],
        [
            it("Project", "Dissertation proposal", "Define the questions you'll answer."),
            it("Internship", "Research internship in industry, government, or a national lab", "Summer internships broaden options after the Ph.D."),
            it("Experience", "Teach or mentor undergraduates", "Valuable for academic job applications.")
        ],
        [
            it("Project", "Publish 1-2 papers from your dissertation", "Target venues your field respects."),
            it("Experience", "Present at a national conference", "Network with future employers and collaborators."),
            it("Career", "Decide: academia, industry, government, or nonprofit", "Talk to alumni in each.")
        ],
        [
            it("Project", "Write and defend your dissertation", "Set a timeline with your committee."),
            it("Career", "Apply to postdocs, faculty, or industry roles", "Start 12 months before you finish."),
            it("Career", "Prepare job talk and research statement", "Practice with your lab.")
        ]
    ];
    return s[Math.min(yi, s.length - 1)];
}
function dedupe(items) {
    const seen = new Set();
    return items.filter((x)=>seen.has(x.title) ? false : (seen.add(x.title), true));
}
function uniq(xs) {
    return Array.from(new Set(xs));
}
}),
"[project]/app/start/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Start
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CareerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CareerCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CareerInsightsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CareerInsightsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/plan.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const MAJORS_DATA = {
    "Computer Science": [
        "Data Science",
        "Software Engineering",
        "Artificial Intelligence",
        "Cybersecurity",
        "General"
    ],
    "Information Systems": [
        "Business Analytics",
        "Cybersecurity Management",
        "Health Information Technology",
        "Software Development",
        "General"
    ]
};
const INTEREST_OPTIONS = [
    "Machine Learning",
    "Data Engineering",
    "Cybersecurity",
    "Cloud & DevOps",
    "Software Engineering",
    "Web & Full-Stack",
    "Health IT & Biomedical",
    "Systems Architecture",
    "Database Design"
];
function QuestionnaireContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { user, isAuthenticated, isGuest, openLoginModal, targetJobFamily, setTargetJobFamily } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    // State for Major & Track
    const [major, setMajor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Computer Science");
    const [track, setTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Data Science");
    const [targetInterests, setTargetInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "Machine Learning",
        "Data Engineering"
    ]);
    // Recommendations state
    const [recommendations, setRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingRecs, setLoadingRecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recsError, setRecsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Insights drill-down state
    const [isInsightsOpen, setIsInsightsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedField, setSelectedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [insights, setInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingInsights, setLoadingInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [insightsError, setInsightsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Auto-populate when user is authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user && !user.isGuest) {
            if (user.major && MAJORS_DATA[user.major]) {
                setMajor(user.major);
                setTrack(user.track || MAJORS_DATA[user.major][0]);
            }
        }
    }, [
        user
    ]);
    // Handle URL preset param (e.g. ?program=is-bs)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const preset = searchParams.get("program");
        if (preset === "is-bs") {
            setMajor("Information Systems");
            setTrack("Business Analytics");
        } else if (preset === "cs-bs") {
            setMajor("Computer Science");
            setTrack("Data Science");
        }
    }, [
        searchParams
    ]);
    // Function to fetch recommendations
    const fetchRecommendations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (m, t, interests)=>{
        setLoadingRecs(true);
        setRecsError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getRecommendations({
                major: m,
                track: t,
                target_interests: interests
            });
            setRecommendations(res.recommended_fields || []);
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Failed to load career recommendations.";
            setRecsError(msg);
        } finally{
            setLoadingRecs(false);
        }
    }, []);
    // Auto-fetch recommendations on mount or when student logs in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchRecommendations(major, track, targetInterests);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        major,
        track
    ]);
    // Handle form submit
    function handleSubmit(e) {
        e.preventDefault();
        fetchRecommendations(major, track, targetInterests);
    }
    // Toggle interest
    function toggleInterest(item) {
        setTargetInterests((prev)=>prev.includes(item) ? prev.filter((i)=>i !== item) : [
                ...prev,
                item
            ]);
    }
    // Handle drill-down
    async function handleDrillDown(field) {
        setSelectedField(field);
        setIsInsightsOpen(true);
        setLoadingInsights(true);
        setInsightsError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getCareerInsights(field.job_family);
            setInsights(data);
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Failed to load insights for this career.";
            setInsightsError(msg);
        } finally{
            setLoadingInsights(false);
        }
    }
    // Handle selecting target and proceeding to roadmap
    function handleSelectAndRoadmap(jobFamily) {
        setTargetJobFamily(jobFamily);
        setIsInsightsOpen(false);
        // Save a base plan for the semester planner if not already existing
        const programId = major === "Information Systems" ? "is-bs" : "cs-bs";
        const basePlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildBuiltinPlan"])({
            level: "undergrad",
            programIds: [
                programId
            ],
            minors: [],
            focusIds: [],
            customFocus: track,
            careerGoal: jobFamily,
            year: user?.classLevel || "Junior",
            experience: [],
            notes: "Generated from RetrieversPath career recommendations"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveNewPlan"])({
            level: "undergrad",
            programIds: [
                programId
            ],
            minors: [],
            focusIds: [],
            customFocus: track,
            careerGoal: jobFamily,
            year: user?.classLevel || "Junior",
            experience: [],
            notes: ""
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalizePlan"])(basePlan, "builtin"));
        router.push("/roadmap");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-4 py-10 lg:py-14 grid gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-card p-6 lg:p-8 grid gap-4 rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-max rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-3 py-1",
                                        children: "Historical Placement Engine"
                                    }, void 0, false, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-display text-3xl lg:text-4xl font-bold text-ink",
                                        children: "Explore Career Matches"
                                    }, void 0, false, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-ink-2 max-w-2xl",
                                        children: "Backed by PostgreSQL with ~140,000 historical UMBC records. See exact placement rates, median starting salaries, and verified entry roles for your degree path."
                                    }, void 0, false, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-line bg-surface-2 p-4 min-w-[260px] grid gap-2",
                                children: isAuthenticated && user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2.5 h-2.5 rounded-full bg-mint"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/start/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold uppercase tracking-wider text-ink-3",
                                                    children: "Connected Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/start/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display font-bold text-ink text-lg leading-none",
                                            children: user.campusId
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-ink-2",
                                            children: [
                                                user.classLevel,
                                                " · ",
                                                user.major,
                                                " (",
                                                user.track,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2 border-t border-line flex gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: openLoginModal,
                                                className: "text-xs text-teal hover:underline font-semibold",
                                                children: "⇄ Switch Student"
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : isGuest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2.5 h-2.5 rounded-full bg-teal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/start/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold uppercase tracking-wider text-teal",
                                                    children: "Guest Mode"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/start/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-ink-2",
                                            children: "You are exploring as a guest. Manual degree selection is enabled below."
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: openLoginModal,
                                            className: "press rounded-full bg-gold text-on-gold px-3.5 py-1.5 text-xs font-bold hover:bg-gold-soft mt-1",
                                            children: "Sign In with Campus ID"
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-ink",
                                            children: "Have a UMBC Student ID?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-ink-2",
                                            children: "Sign in to auto-populate your program and run live transcript gap diffing."
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: openLoginModal,
                                            className: "press rounded-full bg-gold text-on-gold px-4 py-2 text-xs font-bold hover:bg-gold-soft shadow-sm mt-1",
                                            children: "⚡ Sign In / Demo Student"
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    isAuthenticated && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-teal/30 bg-teal-tint/40 p-3 flex items-center justify-between text-xs text-teal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "✓ ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Auto-populated:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 17
                                    }, this),
                                    " Major and track loaded from your student directory profile."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono opacity-80",
                                children: user.email
                            }, void 0, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/start/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "questionnaire-title",
                className: "glass-card p-6 lg:p-8 grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-line pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "questionnaire-title",
                                className: "font-display text-xl font-bold text-ink",
                                children: "1. Select Your Degree & Focus"
                            }, void 0, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-ink-2",
                                children: "Customize or confirm your academic focus to see corresponding alumni outcomes."
                            }, void 0, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "grid gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "major-select",
                                                className: "text-sm font-semibold text-ink",
                                                children: "UMBC Major"
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "major-select",
                                                value: major,
                                                onChange: (e)=>{
                                                    const newMajor = e.target.value;
                                                    setMajor(newMajor);
                                                    setTrack(MAJORS_DATA[newMajor][0]);
                                                },
                                                className: "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-gold",
                                                children: Object.keys(MAJORS_DATA).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: m,
                                                        children: m
                                                    }, m, false, {
                                                        fileName: "[project]/app/start/page.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "track-select",
                                                className: "text-sm font-semibold text-ink",
                                                children: "Academic Track"
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "track-select",
                                                value: track,
                                                onChange: (e)=>setTrack(e.target.value),
                                                className: "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-gold",
                                                children: MAJORS_DATA[major]?.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t,
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/app/start/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-ink",
                                        children: [
                                            "Target Interests & Industry Directions",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-normal text-ink-3",
                                                children: "(Select any that apply)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: INTEREST_OPTIONS.map((interest)=>{
                                            const isSelected = targetInterests.includes(interest);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleInterest(interest),
                                                className: `press rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-all ${isSelected ? "bg-teal text-white border-teal shadow-sm" : "bg-surface border-line text-ink-2 hover:border-teal"}`,
                                                children: [
                                                    isSelected ? "✓ " : "+ ",
                                                    interest
                                                ]
                                            }, interest, true, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-ink-3",
                                        children: [
                                            "Query: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                children: "POST /api/recommendations"
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loadingRecs,
                                        className: "press flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-on-gold hover:bg-gold-soft shadow-md disabled:opacity-50",
                                        children: loadingRecs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 animate-spin text-on-gold",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            className: "opacity-25",
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/start/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            className: "opacity-75",
                                                            fill: "currentColor",
                                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/start/page.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/start/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Querying 140k Alumni Records..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/start/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Analyze Career Matches →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/start/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/start/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "recommendations-title",
                className: "grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "recommendations-title",
                                        className: "font-display text-2xl lg:text-3xl font-bold text-ink",
                                        children: "2. Alumni Career Placement Matches"
                                    }, void 0, false, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-ink-2",
                                        children: [
                                            "Historical career outcomes for ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: major
                                            }, void 0, false, {
                                                fileName: "[project]/app/start/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 46
                                            }, this),
                                            " (",
                                            track,
                                            ") graduates."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/start/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            recommendations && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-mono font-semibold text-ink-3 bg-surface-2 px-3 py-1.5 rounded-full",
                                children: [
                                    recommendations.length,
                                    " job families identified"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    loadingRecs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse",
                        "aria-busy": "true",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64 rounded-2xl bg-surface-2"
                            }, i, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 406,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this) : recsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-coral/30 bg-coral-tint p-6 text-center grid gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-coral text-lg",
                                children: "Unable to Load Recommendations"
                            }, void 0, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-ink-2 max-w-md mx-auto",
                                children: recsError
                            }, void 0, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>fetchRecommendations(major, track, targetInterests),
                                className: "press mx-auto rounded-full bg-surface border border-line px-5 py-2 text-xs font-bold hover:bg-surface-2",
                                children: "Retry"
                            }, void 0, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this) : recommendations && recommendations.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger",
                        children: recommendations.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CareerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                field: field,
                                isSelected: targetJobFamily === field.job_family,
                                onSelect: (f)=>handleSelectAndRoadmap(f.job_family),
                                onDrillDown: handleDrillDown
                            }, field.job_family, false, {
                                fileName: "[project]/app/start/page.tsx",
                                lineNumber: 424,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-ink-3 py-8 text-center",
                        children: "No career matches found for this selection."
                    }, void 0, false, {
                        fileName: "[project]/app/start/page.tsx",
                        lineNumber: 434,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/start/page.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CareerInsightsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isInsightsOpen,
                onClose: ()=>setIsInsightsOpen(false),
                insights: insights,
                loading: loadingInsights,
                error: insightsError,
                onSelectAndRoadmap: handleSelectAndRoadmap
            }, void 0, false, {
                fileName: "[project]/app/start/page.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/start/page.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
function Start() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-12 text-center text-ink-3",
            children: "Loading career explorer..."
        }, void 0, false, {
            fileName: "[project]/app/start/page.tsx",
            lineNumber: 453,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuestionnaireContent, {}, void 0, false, {
            fileName: "[project]/app/start/page.tsx",
            lineNumber: 454,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/start/page.tsx",
        lineNumber: 453,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_b292ead3._.js.map