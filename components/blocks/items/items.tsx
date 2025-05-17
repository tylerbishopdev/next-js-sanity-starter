import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import { PAGE_QUERYResult } from "@/sanity.types";
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Cloud, 
  Code, 
  CreditCard, 
  DollarSign, 
  Download, 
  Globe, 
  Heart, 
  HelpCircle, 
  Home, 
  Image as ImageIcon, 
  Layers, 
  Lightbulb, 
  Mail, 
  MessageCircle, 
  Mic, 
  Monitor, 
  Moon, 
  Palette, 
  PenTool, 
  Percent, 
  Phone, 
  Play, 
  Shield, 
  ShoppingCart, 
  Star, 
  Sun, 
  Zap 
} from "lucide-react";

// Simple props interface for the Items component - avoids the TypeScript errors
interface ItemsProps {
  _type: string;
  _key: string;
  padding: any;
  colorVariant: any;
  title?: string;
  description?: string;
  columns?: string;
  items?: Array<{
    _key: string;
    title: string;
    description: string;
    icon?: string;
  }>;
}

// Map of icon names to icon components
const iconMap: Record<string, React.ReactNode> = {
  "arrow-right": <ArrowRight className="h-6 w-6" />,
  "check-circle": <CheckCircle className="h-6 w-6" />,
  "clock": <Clock className="h-6 w-6" />,
  "cloud": <Cloud className="h-6 w-6" />,
  "code": <Code className="h-6 w-6" />,
  "credit-card": <CreditCard className="h-6 w-6" />,
  "dollar-sign": <DollarSign className="h-6 w-6" />,
  "download": <Download className="h-6 w-6" />,
  "globe": <Globe className="h-6 w-6" />,
  "heart": <Heart className="h-6 w-6" />,
  "help-circle": <HelpCircle className="h-6 w-6" />,
  "home": <Home className="h-6 w-6" />,
  "image": <ImageIcon className="h-6 w-6" />,
  "layers": <Layers className="h-6 w-6" />,
  "lightbulb": <Lightbulb className="h-6 w-6" />,
  "mail": <Mail className="h-6 w-6" />,
  "message-circle": <MessageCircle className="h-6 w-6" />,
  "mic": <Mic className="h-6 w-6" />,
  "monitor": <Monitor className="h-6 w-6" />,
  "moon": <Moon className="h-6 w-6" />,
  "palette": <Palette className="h-6 w-6" />,
  "pen-tool": <PenTool className="h-6 w-6" />,
  "percent": <Percent className="h-6 w-6" />,
  "phone": <Phone className="h-6 w-6" />,
  "play": <Play className="h-6 w-6" />,
  "shield": <Shield className="h-6 w-6" />,
  "shopping-cart": <ShoppingCart className="h-6 w-6" />,
  "star": <Star className="h-6 w-6" />,
  "sun": <Sun className="h-6 w-6" />,
  "zap": <Zap className="h-6 w-6" />,
};

export default function Items({
  padding,
  colorVariant,
  title,
  description,
  columns,
  items,
}: ItemsProps) {
  const color = stegaClean(colorVariant);
  const gridCols = stegaClean(columns) || "four";

  const gridColsClass = {
    "one": "grid-cols-1",
    "two": "md:grid-cols-2",
    "three": "md:grid-cols-2 lg:grid-cols-3",
    "four": "md:grid-cols-2 lg:grid-cols-4",
  }[gridCols];

  return (
    <SectionContainer color={color} padding={padding}>
      {/* Section Header */}
      {(title || description) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-3xl font-maxi font-bold tracking-tight sm:text-4xl mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Items Grid */}
      {items && items.length > 0 && (
        <div className={cn(
          "grid grid-cols-1 relative z-10 mx-auto max-w-7xl", 
          gridColsClass
        )}>
          {items.map((item, index) => (
            <Feature 
              key={item._key}
              title={item.title}
              description={item.description}
              icon={item.icon ? iconMap[item.icon] : <Zap className="h-6 w-6" />}
              index={index}
              totalItems={items.length}
              columns={gridCols === "one" ? 1 : gridCols === "two" ? 2 : gridCols === "three" ? 3 : 4}
            />
          ))}
        </div>
      )}
    </SectionContainer>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  totalItems,
  columns,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  totalItems: number;
  columns: number;
}) => {
  // Calculate if this item should have borders based on its position in the grid
  const isLastRow = Math.floor(index / columns) === Math.floor((totalItems - 1) / columns);
  const isLastInRow = (index + 1) % columns === 0 || index === totalItems - 1;
  
  const halfwayPoint = Math.ceil(totalItems / 2);
  const isInTopHalf = index < halfwayPoint;

  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        !isLastInRow && "lg:border-r dark:border-neutral-800",
        (index % columns === 0) && "lg:border-l dark:border-neutral-800",
        !isLastRow && "lg:border-b dark:border-neutral-800"
      )}
    >
      {isInTopHalf && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {!isInTopHalf && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
