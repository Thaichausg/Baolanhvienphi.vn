"use client";

import { useState, useEffect, useRef } from "react";
import {
  Building2,
  Stethoscope,
  Smile,
  Baby,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Info,
  Shield,
  Sparkles,
} from "lucide-react";

const benefitGroups = [
  {
    id: "inpatient",
    title: "Nội trú",
    icon: Building2,
    highlight: "Quyền lợi cốt lõi",
    highlightColor: "generali-red",
    isPrimary: true,
    items: [
      "Chi phí nằm viện",
      "Phẫu thuật",
      "Phòng và giường bệnh",
      "Chăm sóc đặc biệt ICU",
      "Điều trị ung thư / bệnh nặng theo điều khoản",
      "Bảo lãnh viện phí tại bệnh viện liên kết",
    ],
    cta: "Phù hợp khi muốn bảo vệ rủi ro chi phí lớn",
  },
  {
    id: "outpatient",
    title: "Ngoại trú",
    icon: Stethoscope,
    highlight: "Tăng tính sử dụng thực tế",
    highlightColor: "trust-green",
    isPrimary: false,
    items: [
      "Khám bệnh không nhập viện",
      "Xét nghiệm / chẩn đoán hình ảnh",
      "Thuốc theo toa",
      "Tái khám",
      "Điều trị trong ngày theo điều khoản",
    ],
    cta: "Phù hợp cho người thường xuyên khám kiểm tra",
  },
  {
    id: "dental",
    title: "Nha khoa",
    icon: Smile,
    highlight: "Quyền lợi bổ sung",
    highlightColor: "generali-gold",
    isPrimary: false,
    items: [
      "Khám răng",
      "Cạo vôi răng",
      "Trám răng",
      "Nhổ răng",
      "Điều trị nha khoa cơ bản theo hạn mức",
    ],
    cta: "Phù hợp cho gia đình có trẻ nhỏ hoặc chăm sóc định kỳ",
  },
  {
    id: "maternity",
    title: "Thai sản",
    icon: Baby,
    highlight: "Cần tư vấn kỹ thời gian chờ",
    highlightColor: "generali-gold",
    isPrimary: false,
    items: [
      "Khám thai",
      "Sinh thường",
      "Sinh mổ",
      "Biến chứng thai sản theo điều khoản",
      "Chăm sóc mẹ và bé theo gói tham gia",
    ],
    cta: "Phù hợp cho gia đình có kế hoạch sinh con",
  },
];

const comparisonRows = [
  {
    group: "Nội trú",
    canChoose: "Nên có",
    suitableFor: "Người muốn bảo vệ chi phí lớn khi nhập viện",
    note: "Quyền lợi phụ thuộc gói tham gia",
    isRecommended: true,
  },
  {
    group: "Ngoại trú",
    canChoose: "Tùy chọn",
    suitableFor: "Người thường xuyên khám bệnh, tái khám",
    note: "Có hạn mức riêng",
    isRecommended: false,
  },
  {
    group: "Nha khoa",
    canChoose: "Tùy chọn",
    suitableFor: "Gia đình có trẻ nhỏ, người chăm sóc răng định kỳ",
    note: "Theo danh mục và hạn mức",
    isRecommended: false,
  },
  {
    group: "Thai sản",
    canChoose: "Tùy chọn",
    suitableFor: "Gia đình dự định sinh con",
    note: "Cần chú ý thời gian chờ",
    isRecommended: false,
  },
];

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>("inpatient");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCTA = () => {
    document.getElementById("calculator")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const highlightColorMap: Record<string, string> = {
    "generali-red": "bg-generali-red/15 text-generali-red-light border-generali-red/30",
    "trust-green": "bg-trust-green/15 text-trust-green border-trust-green/30",
    "generali-gold": "bg-generali-gold/15 text-generali-gold border-generali-gold/30",
  };

  const borderColorMap: Record<string, string> = {
    "generali-red": "border-generali-red/30",
    "trust-green": "border-trust-green/20",
    "generali-gold": "border-generali-gold/20",
  };

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.11_0.01_260)] to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-generali-red/10 text-generali-red-light text-xs font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            Quyền lợi sản phẩm
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight mb-4">
            Quyền lợi bảo vệ sức khỏe{" "}
            <span className="gradient-text">toàn diện</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Không chỉ nhập viện – khách hàng có thể lựa chọn thêm quyền lợi ngoại trú,
            nha khoa và thai sản tùy theo nhu cầu gia đình.
          </p>
        </div>

        {/* ===== DESKTOP: 4 cards ===== */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-14 reveal">
          {benefitGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className={`glass-card rounded-2xl p-6 flex flex-col relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  group.isPrimary
                    ? `border-2 ${borderColorMap[group.highlightColor]} shadow-lg shadow-generali-red/5`
                    : ""
                }`}
              >
                {/* Primary badge */}
                {group.isPrimary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-generali-red text-white text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-generali-red/30">
                      <Sparkles className="w-3 h-3" />
                      Nên có
                    </span>
                  </div>
                )}

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4 mt-1">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      group.isPrimary
                        ? "bg-generali-red/20"
                        : "bg-[oklch(1_0_0/5%)]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        group.isPrimary
                          ? "text-generali-red-light"
                          : "text-text-secondary"
                      }`}
                    />
                  </div>
                  <h3 className="text-base font-bold text-text-primary">
                    {group.title}
                  </h3>
                </div>

                {/* Highlight badge */}
                <span
                  className={`inline-flex self-start items-center px-2.5 py-1 rounded-md text-[10px] font-semibold border mb-4 ${
                    highlightColorMap[group.highlightColor]
                  }`}
                >
                  {group.highlight}
                </span>

                {/* Items */}
                <ul className="space-y-2.5 mb-5 flex-1">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        group.isPrimary ? "text-generali-red-light" : "text-trust-green"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA micro-copy */}
                <p className="text-[11px] text-text-muted leading-relaxed pt-4 border-t border-[oklch(1_0_0/8%)]">
                  💡 {group.cta}
                </p>
              </div>
            );
          })}
        </div>

        {/* ===== MOBILE: Accordion ===== */}
        <div className="lg:hidden space-y-3 mb-12 reveal">
          {benefitGroups.map((group) => {
            const Icon = group.icon;
            const isOpen = openAccordion === group.id;

            return (
              <div
                key={group.id}
                className={`glass-card rounded-xl overflow-hidden transition-all ${
                  group.isPrimary && isOpen
                    ? `border ${borderColorMap[group.highlightColor]}`
                    : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : group.id)}
                  className="w-full flex items-center gap-3 p-4 cursor-pointer"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      group.isPrimary
                        ? "bg-generali-red/20"
                        : "bg-[oklch(1_0_0/5%)]"
                    }`}
                  >
                    <Icon
                      className={`w-4.5 h-4.5 ${
                        group.isPrimary
                          ? "text-generali-red-light"
                          : "text-text-secondary"
                      }`}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-text-primary">
                        {group.title}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-semibold border ${
                          highlightColorMap[group.highlightColor]
                        }`}
                      >
                        {group.highlight}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-text-muted transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 pt-0">
                    <ul className="space-y-2 mb-4">
                      {group.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              group.isPrimary
                                ? "text-generali-red-light"
                                : "text-trust-green"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-text-muted leading-relaxed pt-3 border-t border-[oklch(1_0_0/8%)]">
                      💡 {group.cta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== COMPARISON TABLE ===== */}
        <div className="reveal mb-12">
          <h3 className="text-lg font-bold text-text-primary text-center mb-6">
            Tổng quan các nhóm quyền lợi
          </h3>

          {/* Desktop table */}
          <div className="hidden sm:block glass-card rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[oklch(1_0_0/8%)]">
                  <th className="text-left py-4 px-5 text-text-muted font-medium text-xs uppercase tracking-wider">
                    Nhóm quyền lợi
                  </th>
                  <th className="text-center py-4 px-4 text-text-muted font-medium text-xs uppercase tracking-wider">
                    Có thể chọn
                  </th>
                  <th className="text-left py-4 px-5 text-text-muted font-medium text-xs uppercase tracking-wider">
                    Phù hợp với ai
                  </th>
                  <th className="text-left py-4 px-5 text-text-muted font-medium text-xs uppercase tracking-wider">
                    Lưu ý
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[oklch(1_0_0/5%)] last:border-b-0 ${
                      row.isRecommended ? "bg-generali-red/5" : ""
                    }`}
                  >
                    <td className="py-4 px-5">
                      <span className="font-semibold text-text-primary">
                        {row.group}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          row.isRecommended
                            ? "bg-generali-red/15 text-generali-red-light"
                            : "bg-[oklch(1_0_0/5%)] text-text-secondary"
                        }`}
                      >
                        {row.canChoose}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-text-secondary">
                      {row.suitableFor}
                    </td>
                    <td className="py-4 px-5">
                      <span className="flex items-start gap-1.5 text-text-muted text-xs">
                        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        {row.note}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards version of table */}
          <div className="sm:hidden space-y-3">
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-4 ${
                  row.isRecommended ? "border border-generali-red/20" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-text-primary">
                    {row.group}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      row.isRecommended
                        ? "bg-generali-red/15 text-generali-red-light"
                        : "bg-[oklch(1_0_0/5%)] text-text-secondary"
                    }`}
                  >
                    {row.canChoose}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-1.5">
                  {row.suitableFor}
                </p>
                <p className="text-[11px] text-text-muted flex items-start gap-1">
                  <Info className="w-3 h-3 shrink-0 mt-0.5" />
                  {row.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== COMPLIANCE DISCLAIMER ===== */}
        <div className="reveal mb-12">
          <p className="text-center text-[11px] text-text-muted max-w-3xl mx-auto leading-relaxed">
            ⚠️ Thông tin trên chỉ mang tính tóm tắt quyền lợi. Quyền lợi thực tế, hạn mức,
            điều kiện chi trả, thời gian chờ và loại trừ áp dụng theo điều khoản sản phẩm
            và gói bảo hiểm khách hàng tham gia.
          </p>
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <div className="reveal text-center">
          <div className="glass-card rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              Bạn muốn biết gói nào phù hợp với gia đình mình?
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Kiểm tra nhanh trong 30 giây – hoàn toàn miễn phí.
            </p>
            <button
              onClick={handleCTA}
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl font-bold text-sm bg-gradient-to-r from-generali-red to-generali-red-light text-white hover:shadow-xl hover:shadow-generali-red/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer pulse-cta"
              type="button"
              id="benefits-cta"
            >
              Kiểm tra quyền lợi phù hợp
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-text-muted mt-4">
              Không ép mua – chỉ kiểm tra nhu cầu và quyền lợi phù hợp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
