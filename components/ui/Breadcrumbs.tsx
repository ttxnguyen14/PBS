import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item, i) => ({
    "@type": "ListItem" as const,
    position: i + 1,
    name: item.label,
    ...(item.href && {
      item: `https://www.perfectbuildingsupply.com${item.href}`,
    }),
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex items-center gap-1.5 text-sm text-gray-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-charcoal transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
